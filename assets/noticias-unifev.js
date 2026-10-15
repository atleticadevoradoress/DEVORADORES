/* Consulta pública da Unifev. Não executa HTML ou scripts do portal. */
(function () {
  'use strict';
  var CACHE_KEY = 'devoradores-unifev-noticias-v2';
  var source = 'https://www.unifev.edu.br/noticiaslist';
  var status = document.getElementById('news-sync-status') || document.createElement('p');
  var retry = document.getElementById('news-sync-retry') || document.createElement('button');
  var running = false;
  var months = {jan:'01',fev:'02',mar:'03',abr:'04',mai:'05',jun:'06',jul:'07',ago:'08',set:'09',out:'10',nov:'11',dez:'12'};
  function normalize(t) { return String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); }
  function validURL(value, image) {
    if (typeof value !== 'string' || !value.trim()) return '';
    try { var u = new URL(value, 'https://www.unifev.edu.br/');
      if (u.protocol !== 'https:' || !['www.unifev.edu.br','unifev.edu.br'].includes(u.hostname)) return '';
      if (image && !/\.(?:jpe?g|png|gif|webp|avif)$/i.test(u.pathname)) return '';
      if (!image && !/^\/noticia\/\d+\//.test(u.pathname)) return '';
      if (!image) u.hostname='www.unifev.edu.br';
      return u.href;
    } catch (_) { return ''; }
  }
  function categories(title, summary) {
    var t = normalize(title + ' ' + summary), c = ['nutricao'];
    if (/solidari|comunidade|tecendo elos|arrecad|doac/.test(t)) c.push('social');
    if (/visita tecnica/.test(t)) c.push('visitas');
    if (/clinica|clinico|atendimento nutricional/.test(t)) c.push('clinica');
    return c;
  }
  function relevant(a) {
    var t=normalize(a.titulo+' '+a.resumo);
    if (!/nutricao|nutricionista/.test(t)) return false;
    if (/veterinari|reproducao animal|nutricao animal/.test(t) && !/curso[s]? (?:de |da )?nutricao/.test(t)) return false;
    return /clinica.{0,35}nutri|nutri.{0,35}clinica|curso.{0,80}nutri|graduacao.{0,80}nutri|nutri.{0,80}graduacao|nutri.{0,60}unifev|unifev.{0,60}nutri|(?:alunos|estudantes|docentes|professores).{0,100}nutri|nutri.{0,100}(?:alunos|estudantes|docentes|professores)/.test(t);
  }
  function sanitize(items) {
    if (!Array.isArray(items)) return [];
    return items.filter(function (a) { return a && typeof a.titulo === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(a.data) && a.fonte && validURL(a.fonte.url); }).map(function(a) {
      var u = validURL(a.fonte.url), title = a.titulo.slice(0,500), summary = String(a.resumo || '').slice(0,1500);
      return {id:'unifev-'+u.match(/\/noticia\/(\d+)\//)[1], titulo:title, resumo:summary, data:a.data, dataTexto:String(a.dataTexto || a.data).slice(0,100), descricao:[summary], categorias:categories(title,summary).concat(/\/noticia\/37966\//.test(u) ? ['atletica'] : []), fonte:{texto:'Ler a reportagem',url:u}, pasta:'', capa:validURL(a.capa,true), fotos:[], origem:'unifev'};
    });
  }
  var galleryCache = new Map();
  function parseGallery(text, article) {
    var doc = new DOMParser().parseFromString(text, 'text/html');
    var id = article.fonte.url.match(/\/noticia\/(\d+)\//)[1];
    var photos = [], seen = new Set();
    // As fotos do corpo da notícia usam a pasta do ID da reportagem.
    doc.querySelectorAll('img[src]').forEach(function(image) {
      var url = validURL(image.getAttribute('src'),true);
      if (!url) return;
      var path = new URL(url).pathname;
      if (path.indexOf('/SuNot/img/'+id+'/') === -1 || /\/thumb\//i.test(path) || seen.has(path)) return;
      seen.add(path);
      photos.push([url,article.titulo+' — foto '+(photos.length+1)]);
    });
    if (!photos.length && article.capa) photos.push([article.capa,article.titulo]);
    return photos;
  }
  async function loadGallery(article, signal) {
    var url = validURL(article.fonte.url);
    if (!url) throw new Error('Invalid source');
    if (galleryCache.has(url)) return galleryCache.get(url);
    var controller = new AbortController();
    function abort() { controller.abort(); }
    if (signal && signal.aborted) abort();
    if (signal) signal.addEventListener('abort',abort,{once:true});
    var timer = setTimeout(abort,25000);
    try {
      var response = await fetch(url,{credentials:'omit',signal:controller.signal});
      if (!response.ok) throw new Error('Source unavailable');
      var photos = parseGallery(await response.text(),article);
      galleryCache.set(url,photos);
      return photos;
    } catch(error) {
      if (error.name === 'AbortError' && !(signal && signal.aborted)) throw new Error('Source timed out');
      throw error;
    } finally {
      clearTimeout(timer);
      if (signal) signal.removeEventListener('abort',abort);
    }
  }
  window.DevoradoresUnifev = {loadGallery:loadGallery};
  function emit(items) { document.dispatchEvent(new CustomEvent('unifev-noticias', {detail:sanitize(items)})); }
  function parse(text) {
    var doc = new DOMParser().parseFromString(text,'text/html');
    var items = [];
    function read(row, selector) { var e = row.querySelector(selector); return e ? e.textContent.replace(/\s+/g,' ').trim() : ''; }
    doc.querySelectorAll('.noticias-vertical').forEach(function(row) {
      var link = row.querySelector('.noticia-titulo a'), img = row.querySelector('img');
      if (!link) return;
      var u = validURL(link.getAttribute('href')), raw = read(row,'.noticia-data');
      var m = normalize(raw).match(/(\d{1,2})\s+(\w{3})\s+(\d{4})/);
      if (!u || !m || !months[m[2]]) return;
      items.push({titulo:read(row,'.noticia-titulo'),resumo:read(row,'.noticia-subtitulo'),data:m[3]+'-'+months[m[2]]+'-'+m[1].padStart(2,'0'),dataTexto:raw,fonte:{url:u},capa:img ? img.getAttribute('src') : ''});
    });
    var pages = 1;
    doc.querySelectorAll('a[data-page]').forEach(function(a) { var n=Number(a.dataset.page); if (Number.isInteger(n) && n>pages) pages=n; });
    if (pages > 500) throw new Error('Unexpected pagination');
    return {items:sanitize(items),pages:pages};
  }
  async function fetchPage(page, search) {
    var controller = new AbortController();
    var timer = setTimeout(function(){controller.abort();},25000);
    try {
      var url = source+'?'+new URLSearchParams({page:String(page),search:search ? 'nutrição' : '',tag:search ? '' : 'Nutrição'});
      var response = await fetch(url,{credentials:'omit',signal:controller.signal});
      if (!response.ok) throw new Error('Source unavailable');
      var data = parse(await response.text());
      if (page === 1 && !data.items.length) throw new Error('Empty source');
      if (search) data.items=data.items.filter(relevant);
      return data;
    } finally {clearTimeout(timer);}
  }
  async function sync() {
    if (running) return;
    running=true; retry.hidden=true; status.textContent='Atualizando notícias da Unifev…';
    var all=[], failed=false;
    try {
      var queue=[];
      for (var search of [false,true]) {
        try {
          var first=await fetchPage(1,search); all=all.concat(first.items); emit(first.items);
          for(var n=2;n<=first.pages;n++) queue.push({page:n,search:search});
        } catch (_) {failed=true;}
      }
      var next=0;
      async function worker() {
        while(next<queue.length) {
          var task=queue[next++];
          try {var result=await fetchPage(task.page,task.search); all=all.concat(result.items); emit(result.items);} catch (_) {failed=true;}
        }
      }
      await Promise.all([worker(),worker(),worker()]);
      if (failed) throw new Error('Partial source');
      try {localStorage.setItem(CACHE_KEY,JSON.stringify({items:sanitize(all),updatedAt:Date.now()}));} catch (_) {}
      status.textContent='Notícias atualizadas · Fonte: Unifev';
    } catch (_) {
      status.textContent='Mostrando notícias já disponíveis. A atualização da Unifev está indisponível no momento.';
      retry.hidden=false;
    } finally {running=false;}
  }
  emit(window.DEVORADORES_UNIFEV_SNAPSHOT || []);
  try {var cached=JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');if(cached) emit(cached.items);}catch(_){}
  retry.addEventListener('click',sync);
  sync();
})();
