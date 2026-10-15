/* ============================================================
   TOPO (cabeçalho) — usado em todas as páginas.
   Para usar:   <script src="components/site-header.js"></script>   (no <head>)
                <site-header></site-header>                         (onde o topo deve aparecer)
   Para mudar um link ou adicionar uma página, edite só a lista LINKS abaixo.
   A página atual é destacada automaticamente.
   ============================================================ */
(function () {
  var LINKS = [
    ['index.html',    'Início'],
    ['atletica.html', 'A Atlética'],
    ['nutri.html',    'Universo Nutri'],
    ['noticias.html', 'Notícias'],
    ['eventos.html',  'Eventos'],
    ['loja.html',     'Loja'],
    ['contato.html',  'Contato']
  ];

  function paginaAtual() {
    var nome = location.pathname.split('/').pop();
    return nome === '' ? 'index.html' : nome;
  }

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      var atual = paginaAtual();
      var links = LINKS.map(function (l) {
        return '<a href="' + l[0] + '"' + (l[0] === atual ? ' aria-current="page"' : '') + '>' + l[1] + '</a>';
      }).join('');
      var tpl = document.createElement('template');
      tpl.innerHTML =
        '<header><div class="header-inner">' +
          '<a class="brand" href="index.html"><img src="assets/logo.png" alt="Emblema A.A.A.N.U.V Devoradores" width="60" height="60">A.A.A.N.U.V DEVORADORES</a>' +
          '<button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="navigation">☰</button>' +
          '<nav id="navigation" aria-label="Menu principal">' + links + '</nav>' +
        '</div></header>';
      /* substitui a tag <site-header> pelo <header> real, mantendo o HTML idêntico ao de antes
         (necessário para o cabeçalho fixo "sticky" e para os seletores do CSS continuarem valendo) */
      this.replaceWith(tpl.content);
    }
  }
  if (!customElements.get('site-header')) customElements.define('site-header', SiteHeader);
})();
