
/*PRODUTOS-INICIO*/
/* ============ CATÁLOGO DA LOJA ============
   Para cada produto:
   - pasta:  subpasta dentro de assets/loja/
   - capa:   cor que aparece no card da loja (uma das chaves de "cores")
   - cores:  só as cores que existem na pasta  { chaveDaCor: 'arquivo.png' }
   - tipo (cima | baixo | acessorio), clima (calor | frio | vazio) e uso (esportivo, casual): alimentam os filtros da loja
   - material / sufixo: texto extra exibido no modal (sufixo, ex.: "o par", aparece depois do preço)
   - Cores combinadas: nome do arquivo = cor das mangas + cor do corpo (ex.: verde_branco = verdebranco)
   - A ordem dos produtos deve ser a mesma dos cards em loja.html (data-product="0", "1", ...). */
const SZ=['P','M','G','GG'],UNICO=['Único'];
const COR={verde:["Verde","#103f2e"],preto:["Preto","#141414"],branco:["Branco","#ffffff"],verdebranco:["Verde e branco","linear-gradient(135deg,#103f2e 50%,#ffffff 50%)"],brancoverde:["Branco e verde","linear-gradient(135deg,#ffffff 50%,#103f2e 50%)"],pretoverde:["Preto e verde","linear-gradient(135deg,#141414 50%,#103f2e 50%)"],brancopreto:["Branco e preto","linear-gradient(135deg,#ffffff 50%,#141414 50%)"]};
const products=[
{nome:"Abadá Fome de Vitória",preco:39.9,pasta:"abada",tipo:"cima",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Crocodilo em destaque, grafismos e muita personalidade para representar a Devoradores nos jogos e festas universitárias.",material:"Helanca Light",cores:{verde:"verde.png",branco:"branco.png"}},
{nome:"Body Manga Longa Nutri",preco:69.9,pasta:"body_manga_longa",tipo:"cima",clima:"frio",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Manga longa, decote amplo nas costas e identidade da Nutrição em um visual marcante.",material:"Poliamida com elastano",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Body Assimétrico Devoradores",preco:64.9,pasta:"body_mula_manca",tipo:"cima",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Modelo de um ombro só, com recortes laterais e estampa de crocodilo que valoriza o desenho da peça.",material:"Poliamida com elastano",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Calça Baggy Nutri",preco:89.9,pasta:"calca",tipo:"baixo",clima:"frio",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Modelagem ampla, barras ajustadas e estampas da Nutrição para compor seu visual universitário.",material:"50% algodão e 50% poliéster",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Camiseta Clássica Nutri",preco:44.9,pasta:"camiseta",tipo:"cima",clima:"calor",uso:["esportivo", "casual"],capa:"verde",tamanhos:SZ,desc:"Nutrição no peito e nosso crocodilo nas costas: uma combinação para acompanhar sua rotina na faculdade.",material:"Micro Dry",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Camisa de Jogo Devoradores",preco:59.9,pasta:"camiseta_time",tipo:"cima",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Grafismos em movimento, mascote em destaque e numeração nas costas para vestir o espírito do time.",material:"Micro Dry",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Jersey Devoradores",preco:69.9,pasta:"cam_fut_americano",tipo:"cima",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Inspirada no futebol americano, com mangas contrastantes e numeração em destaque na frente e nas costas.",material:"Micro Dry",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Corta-vento Devoradores",preco:109.9,pasta:"corta_vento",tipo:"cima",clima:"frio",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Capuz, fechamento frontal e recortes contrastantes em uma peça com a identidade da nossa atlética.",material:"Poliamida",cores:{verde:"verde.png",verdebranco:"verde_branco.png",brancoverde:"branco_verde.png",pretoverde:"preto_verde.png"}},
{nome:"Cropped Clássico Nutri",preco:39.9,pasta:"cropped",tipo:"cima",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Camiseta de comprimento curto com Nutrição na frente e o mascote em destaque nas costas.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Cropped Frente Única Nutri",preco:44.9,pasta:"cropped_amarracao",tipo:"cima",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Decote em V, amarração no pescoço e costas abertas para compor um visual cheio de personalidade.",material:"Algodão",cores:{verde:"verde.png",branco:"branco.png"}},
{nome:"Cropped Manga Única Devoradores",preco:54.9,pasta:"cropped_manga_longa_mula_manca",tipo:"cima",clima:"frio",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Uma manga longa e um ombro à mostra em um desenho assimétrico com a presença do nosso mascote.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Cropped Um Ombro Devoradores",preco:39.9,pasta:"cropped_mula_manca",tipo:"cima",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Recorte de um ombro só, acabamento contrastante e mascote no peito para representar a atlética do seu jeito.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Top Faixa Devoradores",preco:34.9,pasta:"cropped_tube",tipo:"cima",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Modelo sem alças com acabamento contrastante e crocodilo em destaque na parte da frente.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Jaqueta College Devoradores",preco:139.9,pasta:"jaqueta",tipo:"cima",clima:"frio",uso:["casual"],capa:"verdebranco",tamanhos:SZ,desc:"Estilo universitário com mangas contrastantes, letra no peito e uma grande estampa do mascote nas costas.",material:"Moletom flanelado",cores:{verdebranco:"verde_branco.png",brancoverde:"branco_verde.png",pretoverde:"preto_verde.png",brancopreto:"branco_preto.png"}},
{nome:"Moletom Mascote Nutri",preco:99.9,pasta:"moletom",tipo:"cima",clima:"frio",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Modelo com capuz, bolso frontal e uma grande estampa do crocodilo nas costas.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Moletom com Zíper Devoradores Y2K",preco:109.9,pasta:"moletom_y2k",tipo:"cima",clima:"frio",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Fechamento frontal, capuz e estampas de inspiração retrô para levar a Devoradores ao seu visual urbano.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Camiseta Oversized Devoradores Urban",preco:59.9,pasta:"oversize",tipo:"cima",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Modelagem ampla com arte em estilo grafite e mascote nas costas para quem gosta de estampas marcantes.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Samba-canção Devoradores Tropical",preco:44.9,pasta:"samba_cancao",tipo:"baixo",clima:"calor",uso:["casual"],capa:"verde",tamanhos:SZ,desc:"Folhagens discretas, nome na lateral e crocodilo em uma estampa que continua entre a frente e o verso.",material:"Algodão",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Short Devoradores Fresh",preco:34.9,pasta:"short_doll_feminino",tipo:"baixo",clima:"calor",uso:["esportivo", "casual"],capa:"verde",tamanhos:SZ,desc:"Modelo curto com laterais arredondadas, cós franzido e estampas que celebram a Nutrição.",material:"Micro Dry",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Short Ciclista Nutri",preco:39.9,pasta:"short_feminino",tipo:"baixo",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Modelagem ajustada, cós alto e detalhes da atlética na frente e nas costas.",material:"Poliamida com elastano",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Bermuda Esportiva Devoradores",preco:44.9,pasta:"short_masculino",tipo:"baixo",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Visual esportivo com cordão no cós, grafismos laterais e o mascote próximo à barra.",material:"Poliéster com tecnologia dry fit",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Short-saia Nutri College",preco:49.9,pasta:"short_saia",tipo:"baixo",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Frente transpassada com faixas contrastantes, sigla A.A.A.N.U.V e Nutrição na parte de trás.",material:"Poliamida com elastano",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Short-saia Devoradores Mascote",preco:49.9,pasta:"short_saia2",tipo:"baixo",clima:"calor",uso:["esportivo"],capa:"verde",tamanhos:SZ,desc:"Frente transpassada com crocodilo em destaque e faixas contrastantes que acompanham o desenho da peça.",material:"Poliamida com elastano",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Copo Meu Curso é Nutrição",preco:19.9,pasta:"copo",tipo:"acessorio",clima:"",uso:[],capa:"preto",tamanhos:UNICO,desc:"Nosso crocodilo de um lado e uma frase cheia de atitude do outro para acompanhar os encontros da atlética.",material:"Alumínio",cores:{preto:"preto.png",branco:"branco.png"}},
{nome:"Meia Cano Alto Devoradores",preco:19.9,pasta:"meia",tipo:"acessorio",clima:"",uso:["esportivo", "casual"],capa:"verde",tamanhos:UNICO,desc:"Cano alto com crocodilo na lateral e duas listras para completar seu visual com a identidade da atlética.",material:"Algodão penteado",sufixo:"o par",cores:{verde:"verde.png",preto:"preto.png",branco:"branco.png"}},
{nome:"Tirante Nutri Mascote",preco:14.9,pasta:"tirante",tipo:"acessorio",clima:"",uso:[],capa:"verde",tamanhos:UNICO,desc:"Estampa de crocodilos e Nutrição, com arte de fita métrica no verso e mosquetão na ponta.",material:"Poliéster acetinado",cores:{verde:"verde.png",branco:"branco.png"}},
{nome:"Tirante Nutri Quadriculado",preco:14.9,pasta:"tirante2",tipo:"acessorio",clima:"",uso:[],capa:"verde",tamanhos:UNICO,desc:"Estampa quadriculada com crocodilos e Nutrição, combinada com arte de fita métrica no verso.",material:"Poliéster acetinado",cores:{verde:"verde.png",branco:"branco.png"}}
];
/*PRODUTOS-FIM*/
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const imgOf=(p,k)=>`assets/loja/${p.pasta?p.pasta+'/':''}${p.cores[k]}`;

const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
$('.menu-toggle').addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',open);$('#navigation').classList.toggle('open',open)});
const dialog=$('#detail-dialog');let returnFocus;function show(html,cls=''){if(!dialog.open)returnFocus=document.activeElement;dialog.className=cls;$('#detail-content').innerHTML=html;if(!dialog.open)dialog.showModal()};function close(){dialog.close();returnFocus?.focus()};$('.close').onclick=close;dialog.addEventListener('click',e=>{if(e.target===dialog)close()});dialog.addEventListener('close',()=>returnFocus?.focus());
let category='todos';const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();function filterEvents(){let total=0;$$('#events > div').forEach(c=>{const visible=(category==='todos'||c.dataset.category===category)&&normalize(c.dataset.title).includes(normalize($('#event-search').value));c.hidden=!visible;if(visible)total++});$('#empty-events').hidden=total>0}function selected(buttons,current){buttons.forEach(b=>{b.classList.toggle('selected',b===current);b.setAttribute('aria-pressed',b===current)})}
$$('[data-filter]').forEach(b=>b.onclick=()=>{category=b.dataset.filter;selected($$('[data-filter]'),b);filterEvents()});$('#event-search')?.addEventListener('input',filterEvents);
/* ============ FILTROS DA LOJA ============
   3 grupos: Peça (tipo), Clima e Estilo (uso). Escolhe-se 1 opção por grupo e os grupos se combinam (E).
   Cada opção mostra quantos produtos sobram e fica desativada quando a combinação não tem nenhum. */
(()=>{
  const cards=$$('#products > article');if(!cards.length)return;
  const G=['tipo','clima','uso'],st={tipo:'todos',clima:'todos',uso:'todos'};
  const has=(c,g,v)=>v==='todos'||(c.dataset[g]||'').split(' ').includes(v);
  const ok=(c,s)=>G.every(g=>has(c,g,s[g]));
  const chips=$$('[data-fg]'),count=$('#shop-count'),clear=$('#clear-filters'),empty=$('#empty-products');
  function apply(){
    let n=0;cards.forEach(c=>{const v=ok(c,st);c.hidden=!v;if(v)n++});
    chips.forEach(b=>{
      const g=b.dataset.fg,v=b.dataset.fv,m=cards.filter(c=>ok(c,{...st,[g]:v})).length,sel=st[g]===v;
      b.classList.toggle('selected',sel);b.setAttribute('aria-pressed',sel);
      const num=b.querySelector('.chip-n');if(num)num.textContent=m;
      b.disabled=m===0&&!sel;b.title=b.disabled?'Nenhum produto com esta combinação':'';
    });
    const filtrado=G.some(g=>st[g]!=='todos');
    count.textContent=filtrado?`${n} ${n===1?'produto encontrado':'produtos encontrados'}`:`${n} produtos`;
    clear.hidden=!filtrado;empty.hidden=n>0;
  }
  chips.forEach(b=>b.onclick=()=>{st[b.dataset.fg]=b.dataset.fv;apply()});
  clear.onclick=()=>{G.forEach(g=>st[g]='todos');apply()};
  apply();
})();
/* ============ CARRINHO ============ */
/* true: o carrinho começa VAZIO toda vez que uma página é carregada/recarregada. Troque para false para o carrinho ficar salvo entre páginas. */
const LIMPAR_AO_CARREGAR=true;
let cart=[];
if(LIMPAR_AO_CARREGAR){try{localStorage.removeItem('devoradores-cart')}catch{}}
else try{const raw=JSON.parse(localStorage.getItem('devoradores-cart')||'[]');cart=(Array.isArray(raw)?raw:[]).map(x=>{const p=Number.isInteger(x?.id)&&products[x.id];return p&&{id:x.id,cor:x.cor??p.capa,size:x.size,qty:x.qty??1}}).filter(x=>x&&Object.hasOwn(products[x.id].cores,x.cor)&&products[x.id].tamanhos.includes(x.size)&&Number.isInteger(x.qty)&&x.qty>=1&&x.qty<=99)}catch{}
function count(){const n=cart.reduce((t,x)=>t+x.qty,0),c=$('#cart-count');c.textContent=n>99?'99+':n;c.hidden=n===0;$('#cart-open').dataset.tip=n?`Seu carrinho · ${n} ${n===1?'item':'itens'}`:'Seu carrinho';$('#cart-open').setAttribute('aria-label',n?`Abrir carrinho (${n} ${n===1?'item':'itens'})`:'Abrir carrinho')}count();
function persist(){try{localStorage.setItem('devoradores-cart',JSON.stringify(cart))}catch{}count()}

/* Cards da loja: mostram a cor definida em "capa" de cada produto. */
$$('#products > article').forEach(card=>{const b=card.querySelector('[data-product]'),p=b&&products[Number(b.dataset.product)],im=card.querySelector('img');if(p&&im){im.src=imgOf(p,p.capa);im.alt=p.nome}});

/* ============ MODAL "VER PRODUTO" ============ */
function openProduct(id){
  const p=products[id],keys=Object.keys(p.cores),multi=keys.length>1,max=20;
  let cor=p.capa,size=p.tamanhos.length===1?p.tamanhos[0]:null;
  const colors=multi?`<fieldset class="pm-field"><legend>Cor: <b id="pm-cor-name">${COR[cor][0]}</b></legend><div class="swatches">${keys.map(k=>`<button type="button" class="swatch${k===cor?' selected':''}" data-cor="${k}" style="background:${COR[k][1]}" title="${COR[k][0]}" aria-label="${COR[k][0]}" aria-pressed="${k===cor}"></button>`).join('')}</div></fieldset>`:'';
  const sizes=`<fieldset class="pm-field"><legend>Tamanho</legend><div class="sizes">${p.tamanhos.map(s=>`<button type="button" class="size-btn${s===size?' selected':''}" data-size="${s}" aria-pressed="${s===size}">${s}</button>`).join('')}</div></fieldset>`;
  show(`<div class="pm"><div class="pm-media"><img id="pm-img" src="${imgOf(p,cor)}" alt="${p.nome}${multi?' – '+COR[cor][0]:''}"></div><div class="pm-info"><p class="eyebrow">Coleção Devoradores</p><h2>${p.nome}</h2><p class="pm-price">${money(p.preco)}${p.sufixo?' <small>'+p.sufixo+'</small>':''}</p><p>${p.desc}</p>${p.material?`<p class="pm-material"><b>Material:</b> ${p.material}</p>`:''}${colors}${sizes}<div class="pm-field"><label for="pm-qty">Quantidade</label><div class="qty"><button type="button" id="qty-minus" aria-label="Diminuir quantidade">−</button><input id="pm-qty" type="number" min="1" max="${max}" value="1" inputmode="numeric"><button type="button" id="qty-plus" aria-label="Aumentar quantidade">+</button></div></div><p class="pm-error" id="pm-error" role="alert"></p><button class="button" id="add-product" type="button">Adicionar ao carrinho</button></div></div>`,'product-dialog');

  const img=$('#pm-img'),qtyInput=$('#pm-qty'),error=$('#pm-error');
  const clampQty=v=>Math.min(max,Math.max(1,Number.parseInt(v,10)||1));

  /* Cores: trocam a imagem do produto */
  const swatches=$$('.swatch');
  swatches.forEach(b=>{
    const k=b.dataset.cor,preload=()=>{new Image().src=imgOf(p,k)};
    b.onmouseenter=b.onfocus=preload;
    b.onclick=()=>{
      cor=k;selected(swatches,b);$('#pm-cor-name').textContent=COR[k][0];
      img.classList.add('loading');
      const next=new Image(),apply=()=>{if(cor!==k)return;img.src=next.src;img.alt=`${p.nome} – ${COR[k][0]}`;img.classList.remove('loading')};
      next.onload=next.onerror=apply;next.src=imgOf(p,k);
    };
  });

  /* Tamanhos */
  const sizeButtons=$$('.size-btn');
  sizeButtons.forEach(b=>b.onclick=()=>{size=b.dataset.size;selected(sizeButtons,b);error.textContent=''});

  /* Quantidade */
  $('#qty-minus').onclick=()=>{qtyInput.value=Math.max(1,clampQty(qtyInput.value)-1)};
  $('#qty-plus').onclick=()=>{qtyInput.value=clampQty(Number(qtyInput.value)+1)};
  qtyInput.onchange=()=>{qtyInput.value=clampQty(qtyInput.value)};

  /* Adicionar ao carrinho */
  $('#add-product').onclick=()=>{
    if(!size){error.textContent='Selecione um tamanho para continuar.';sizeButtons[0]?.focus();return}
    const qty=clampQty(qtyInput.value),found=cart.find(x=>x.id===id&&x.cor===cor&&x.size===size);
    if(found)found.qty=Math.min(99,found.qty+qty);else cart.push({id,cor,size,qty});
    persist();close();
    $('#toast').textContent=`${p.nome} (${multi?COR[cor][0]+', ':''}${size}) × ${qty} adicionado ao carrinho.`;
    setTimeout(()=>$('#toast').textContent='',3500);
  };
}
$$('[data-product]').forEach(b=>b.onclick=()=>openProduct(Number(b.dataset.product)));

/* ============ VENDAS, CARRINHO E PAGAMENTO ============ */
const SALES_OPEN_AT=new Date('2026-10-17T00:00:00-03:00');
const salesOpen=()=>Date.now()>=SALES_OPEN_AT.getTime();
const WHATS='5517996454466';
const EMAIL='atletica.demolidoress@gmail.com'; /* e-mail da atlética: contato e chave Pix manual */
const cartSubtotal=()=>cart.reduce((n,x)=>n+products[x.id].preco*x.qty,0);
const cartTotal=()=>cartSubtotal();
const totalsHtml=()=>`<div class="cart-sum"><div class="cart-total"><span>Total</span><b>${money(cartTotal())}</b></div></div>`;
const itemLabel=x=>{const p=products[x.id],multi=Object.keys(p.cores).length>1;return `${x.qty}x ${p.nome} (${multi?COR[x.cor][0]+', ':''}${x.size}) — ${money(p.preco*x.qty)}`};
function orderLink(nome,forma){const t=`Olá! Gostaria de fazer um pedido na loja Devoradores.\n\nNome: ${nome}\n\nItens:\n${cart.map(x=>'- '+itemLabel(x)).join('\n')}\n\nTotal: ${money(cartTotal())}\nPagamento: ${forma}`;return `https://wa.me/${WHATS}?text=${encodeURIComponent(t)}`}

const ICO={
  shield:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  badge:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"/><path fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="m9 12 2 2 4-4"/></svg>',
  trash:'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/></svg>',
  cart:'<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>'
};
/* Selo de confiança: o pagamento é feito na página oficial da InfinitePay (cartão e Pix não passam pelo site). */
const trustHtml=(full)=>`<div class="trust-box"><span class="trust-icon">${ICO.shield}</span><div><p class="trust-title">Pagamento seguro com a InfinitePay <span class="verified-pill">${ICO.badge}Checkout oficial</span></p><p class="trust-text">Você paga na página oficial da InfinitePay. Os dados do seu cartão não passam por este site.</p>${full?'<ul class="trust-points"><li>Pix</li><li>Cartão em até 12x</li><li>Confirmação automática</li></ul>':''}</div></div>`;
function showCart(){
  const n=cart.reduce((t,x)=>t+x.qty,0);
  if(!cart.length){
    show(`<p class="eyebrow">Loja Devoradores</p><div class="cart-empty"><span class="cart-empty-icon">${ICO.cart}</span><h2>Seu carrinho está vazio</h2><p>Explore a coleção e adicione seus itens favoritos.</p></div><div class="cart-cta"><a class="button" href="loja.html">Ir para a loja</a></div>`,'cart-dialog');
    return;
  }
  const rows=cart.map((x,i)=>{const p=products[x.id],multi=Object.keys(p.cores).length>1;
    return `<li class="cart-item"><img class="cart-thumb" src="${imgOf(p,x.cor)}" alt=""><div class="cart-info"><b class="cart-name">${p.nome}</b><div class="cart-meta">${multi?`<span class="chip">${COR[x.cor][0]}</span>`:''}${x.size!=='Único'?`<span class="chip">Tam. ${x.size}</span>`:''}<span class="chip">Qtd. ${x.qty}</span></div></div><div class="cart-side"><b class="cart-price">${money(p.preco*x.qty)}</b>${x.qty>1?`<span class="cart-unit">${money(p.preco)} cada</span>`:''}<button class="cart-remove" type="button" data-remove="${i}" aria-label="Remover ${p.nome}">Remover</button></div></li>`}).join('');
  show(`<p class="eyebrow">Loja Devoradores</p><div class="cart-title"><h2>Seu carrinho</h2><span class="count-pill">${n} ${n===1?'item':'itens'}</span></div><ul class="cart-list">${rows}</ul>${totalsHtml()}${trustHtml(false)}<div class="cart-cta"><button class="button" id="checkout-btn" type="button">Finalizar compra ↗</button><div class="cart-secondary"><a class="button outline" href="loja.html">Continuar comprando</a><button class="clear-btn" id="clear-cart" type="button">${ICO.trash}<span>Limpar carrinho</span></button></div></div>`,'cart-dialog');
  $$('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.remove),1);persist();showCart()});
  $('#checkout-btn').addEventListener('click',showCheckout);
  const clr=$('#clear-cart');let t;
  clr.onclick=()=>{
    if(!clr.classList.contains('confirm')){clr.classList.add('confirm');clr.querySelector('span').textContent='Confirmar: limpar tudo?';t=setTimeout(()=>{clr.classList.remove('confirm');clr.querySelector('span').textContent='Limpar carrinho'},4000);return}
    clearTimeout(t);cart=[];persist();showCart();
  };
}
function showCheckout(){
  if(!cart.length)return showCart();
  show(`<p class="eyebrow">Finalizar compra</p><div class="cart-title"><h2>Seus dados e pagamento</h2></div><label for="co-name">Nome completo<input id="co-name" autocomplete="name" maxlength="100" placeholder="Seu nome"></label>${totalsHtml()}${trustHtml(true)}<p class="pm-error" id="co-error" role="alert"></p><div class="cart-cta"><button class="button" id="co-next" type="button">Pagar com Pix ou cartão ↗</button><div class="cart-secondary"><button class="text-button" id="co-back" type="button">← Voltar ao carrinho</button><button class="text-button" id="co-whats" type="button">Combinar pelo WhatsApp</button></div></div>`,'cart-dialog');
  $('#co-back').onclick=showCart;
  const pedirNome=()=>{const nome=$('#co-name').value.trim();if(nome.length<3){$('#co-error').textContent='Informe seu nome para continuar.';$('#co-name').focus();return null}return nome};
  $('#co-next').onclick=()=>{const nome=pedirNome();if(nome)payOnline(nome)};
  $('#co-whats').onclick=()=>{const nome=pedirNome();if(nome)showOther(nome)};
}
/* Cria o link de pagamento no servidor (api/checkout.js) e leva o cliente ao checkout da InfinitePay (Pix ou cartão). */
async function payOnline(nome){
  const btn=$('#co-next'),err=$('#co-error');btn.disabled=true;btn.textContent='Abrindo pagamento…';err.textContent='';
  try{
    const r=await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({nome,itens:cart.map(x=>({id:x.id,cor:x.cor,size:x.size,qty:x.qty}))})});
    const d=await r.json().catch(()=>({}));
    if(!r.ok||!d.url)throw new Error(d.erro||'Falha');
    location.href=d.url;
  }catch(e){
    btn.disabled=false;btn.textContent='Pagar com Pix ou cartão ↗';
    err.textContent='Não foi possível abrir o pagamento agora. Tente de novo ou combine pelo WhatsApp.';
  }
}
function showOther(nome){
  show(`<p class="eyebrow">Outra forma de pagamento</p><h2>Pix direto ou combinar com a atlética</h2><p>Faça o Pix para a chave abaixo e envie o pedido com o comprovante pelo WhatsApp. Se preferir outra forma de pagar, é só combinar na conversa.</p>${totalsHtml()}<div class="pix-box"><p class="pix-label">Chave Pix (e-mail)</p><div class="pix-key"><code id="pix-key">${EMAIL}</code><button class="button outline" id="pix-copy" type="button">Copiar chave</button></div></div><div class="cart-actions"><a class="button" href="${orderLink(nome,'Pix para a chave '+EMAIL+' (ou a combinar)')}" target="_blank" rel="noopener noreferrer">Enviar pedido pelo WhatsApp ↗</a><button class="text-button" id="co-back" type="button">Voltar</button></div>`,'cart-dialog');
  $('#co-back').onclick=showCheckout;
  const cp=$('#pix-copy');cp.onclick=async()=>{let ok=false;try{await navigator.clipboard.writeText(EMAIL);ok=true}catch{try{const r=document.createRange();r.selectNodeContents($('#pix-key'));const sel=getSelection();sel.removeAllRanges();sel.addRange(r);ok=document.execCommand('copy');sel.removeAllRanges()}catch{}}cp.textContent=ok?'Chave copiada ✔':'Selecione e copie a chave';setTimeout(()=>{cp.textContent='Copiar chave'},2500)};
}
/* Volta do checkout: a InfinitePay devolve o cliente com ?order_nsu=...&slug=...&transaction_nsu=...
   O servidor confirma o pagamento (api/verificar.js) e o modal mostra o check animado. */
(()=>{
  const q=new URLSearchParams(location.search),order=q.get('order_nsu'),slug=q.get('slug'),tx=q.get('transaction_nsu');
  if(!order||!slug||!tx)return;
  const receipt=q.get('receipt_url')||'',metodo=q.get('capture_method');
  history.replaceState(null,'',location.pathname); /* limpa a URL para um refresh não repetir */
  show('<div class="pay-status"><div class="pay-spinner" aria-hidden="true"></div><h2>Confirmando seu pagamento…</h2><p>Só um instante.</p></div>','cart-dialog pay-dialog');
  const ok=()=>{
    cart=[];persist();
    const forma=metodo==='pix'?'Pix':metodo==='credit_card'?'cartão de crédito':'';
    const link=/^https:\/\//.test(receipt)?`<a class="button outline" href="${receipt.replace(/"/g,'&quot;')}" target="_blank" rel="noopener noreferrer">Ver comprovante ↗</a>`:'';
    show(`<div class="pay-status"><svg class="pay-check" viewBox="0 0 80 80" role="img" aria-label="Pagamento concluído"><circle class="pay-check-circle" cx="40" cy="40" r="36"/><path class="pay-check-mark" d="M23 41l12 12 23-26"/></svg><h2>Pagamento concluído!</h2><p>Recebemos o seu pedido${forma?' pago via '+forma:''}. A atlética entra em contato para combinar a retirada.</p><p class="pay-verified"><span class="verified-pill">${ICO.badge}Confirmado pela InfinitePay</span></p><div class="cart-actions">${link}<button class="button" id="pay-close" type="button">Fechar</button></div></div>`,'cart-dialog pay-dialog');
    $('#pay-close').onclick=close;
  };
  const falha=msg=>{show(`<div class="pay-status"><h2>Não conseguimos confirmar</h2><p>${msg} Se você já pagou, fale com a atlética pelo WhatsApp informando o código <b>${order.replace(/[^\w-]/g,'').slice(0,40)}</b>.</p><div class="cart-actions"><a class="button" href="https://wa.me/${WHATS}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp ↗</a><button class="text-button" id="pay-close" type="button">Fechar</button></div></div>`,'cart-dialog pay-dialog');$('#pay-close').onclick=close};
  fetch('/api/verificar',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({order_nsu:order,slug,transaction_nsu:tx})})
    .then(r=>r.json().catch(()=>({}))).then(d=>d.paid?ok():falha('O pagamento ainda não consta como aprovado.')).catch(()=>falha('Não foi possível consultar o pagamento agora.'));
})();
$('#cart-open').onclick=showCart;
$('#mail-send')?.addEventListener('click', () => {
  const form = $('#contact-form');

  if (!form.reportValidity()) return;

  const f = new FormData(form);

  const mensagem =
    `Olá! Meu nome é ${f.get('nome')}.\n` +
    `E-mail para retorno: ${f.get('email')}\n\n` +
    `${f.get('mensagem')}`;

  const parametros = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: EMAIL,
    su: '[Site] ' + f.get('assunto'),
    body: mensagem
  });

  window.open(
    `https://mail.google.com/mail/?${parametros.toString()}`,
    '_blank',
    'noopener,noreferrer'
  );

  $('#form-status').textContent =
    'Finalize o envio da mensagem no Gmail.';
});
$('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),t=`Olá! Meu nome é ${f.get('nome')} (${f.get('email')}).\nAssunto: ${f.get('assunto')}\n\n${f.get('mensagem')}`;window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(t)}`,'_blank','noopener');$('#form-status').textContent='Abrindo o WhatsApp da atlética com a sua mensagem.'});
/* Avisos de venda: trocam sozinhos quando as vendas abrem (17/10). */
$$('[data-sales-note]').forEach(el=>{if(salesOpen()&&el.dataset.open)el.textContent=el.dataset.open});
$$('[data-sale-cta]').forEach(el=>{if(!salesOpen()){el.classList.add('is-disabled');el.setAttribute('aria-disabled','true');el.removeAttribute('href');el.removeAttribute('target');el.textContent='Vendas liberadas em 17/10'}});


const mascot=document.querySelector('#animated-mascot'),mascotToggle=document.querySelector('#mascot-toggle');if(mascot&&mascotToggle){let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;function updateMascot(){mascot.src=paused?'assets/mascote-poster.png':'assets/mascote-loop.webp';mascotToggle.textContent=paused?'Reproduzir animação':'Pausar animação';mascotToggle.setAttribute('aria-pressed',String(paused))}updateMascot();mascotToggle.addEventListener('click',()=>{paused=!paused;updateMascot()})}
;(()=>{const h=document.querySelector('header');if(!h)return;let on=false;const f=()=>{const y=window.scrollY;if(!on&&y>60)on=true;else if(on&&y<8)on=false;h.classList.toggle('is-scrolled',on)};f();window.addEventListener('scroll',f,{passive:true})})();
