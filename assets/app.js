
/*PRODUTOS-INICIO*/
/* ============ CATÁLOGO DA LOJA ============
   Para cada produto:
   - pasta:  subpasta dentro de assets/loja/ ('' = arquivo solto em assets/loja/)
   - capa:   cor que aparece no card da loja (uma das chaves de "cores")
   - cores:  só as cores que existem na pasta  { chaveDaCor: 'arquivo.png' }
   - A ordem dos produtos deve ser a mesma dos cards em loja.html (data-product="0", "1", ...). */
const SZ=['P','M','G','GG'],UNICO=['Único'];
const COR={verde:['Verde','#103f2e'],preto:['Preto','#141414'],branco:['Branco','#ffffff'],offwhite:['Off-white','#eee3c8'],pretobranco:['Preto e branco','linear-gradient(135deg,#141414 50%,#ffffff 50%)'],unico:['Único','#103f2e']};
const products=[
{nome:'Polo Devoradores',preco:80,pasta:'polo',capa:'verde',tamanhos:SZ,desc:'Polo da atlética com brasão e a assinatura “Nutrição” em letra cursiva.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Camiseta Oversize',preco:60,pasta:'oversize',capa:'verde',tamanhos:SZ,desc:'Camiseta oversize de caimento largo, com estampa de serpente e o nome “Nutrição” nas costas.',cores:{verde:'verde.png',preto:'preto.png',offwhite:'off_white.png'}},
{nome:'Camiseta Time',preco:50,pasta:'camiseta_time',capa:'verde',tamanhos:SZ,desc:'Camiseta de time com recortes gráficos, mascote no peito e espaço para nome e número nas costas.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Camiseta Esportiva 2',preco:50,pasta:'camiseta_esportiva',capa:'verde',tamanhos:SZ,desc:'Camiseta com “Nutrição A.A.A.N.U.V” na frente e o mascote musculoso nas costas.',cores:{verde:'cam_esportiva2.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Top esportivo',preco:45,pasta:'top',capa:'verde',tamanhos:SZ,desc:'Top esportivo com “Nutrição A.A.A.N.U.V” na frente e “Devoradores” nas costas.',cores:{verde:'top.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Abadá',preco:45,pasta:'abada',capa:'verde',tamanhos:SZ,desc:'Abadá com estampa em verde e amarelo, mascote, número 01 e o lema “Fome de vitória”.',cores:{verde:'verde.png',branco:'branco.png'}},
{nome:'Moletom',preco:150,pasta:'moletom',capa:'verde',tamanhos:SZ,desc:'Moletom com capuz, “Nutrição” na frente e grande estampa do mascote nas costas.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Moletom Y2K',preco:165,pasta:'moletom_y2k',capa:'verde',tamanhos:SZ,desc:'Moletom com zíper e capuz em estilo Y2K, com emblema “Devoradores” e mascote.',cores:{verde:'verde.png',preto:'preto.png',branco:'branc.png'}},
{nome:'Jaqueta',preco:180,pasta:'jaqueta',capa:'verde',tamanhos:SZ,desc:'Jaqueta estilo college com a inicial “D”, brasão e mascote nas costas.',cores:{verde:'verde.png',preto:'preto.png',pretobranco:'preto2.png',branco:'branca.png'}},
{nome:'Short esportivo',preco:50,pasta:'short',capa:'verde',tamanhos:SZ,desc:'Short esportivo com recortes laterais e “Devoradores” na barra.',cores:{verde:'verde.png',preto:'short.png',branco:'branco.png'}},
{nome:'Short feminino esportivo',preco:50,pasta:'short_feminino',capa:'verde',tamanhos:SZ,desc:'Short feminino esportivo com mascote e “Nutrição” na parte de trás.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Calça',preco:65,pasta:'calca',capa:'verde',tamanhos:SZ,desc:'Calça com punho nos tornozelos e o mascote estampado na perna.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Chaveiro',preco:6,pasta:'',capa:'unico',tamanhos:UNICO,desc:'Chaveiro do mascote Devoradores.',cores:{unico:'chaveiro.png'}},
{nome:'Copo',preco:45,pasta:'copo',capa:'verde',tamanhos:UNICO,desc:'Copo com alça, estampa do mascote e o nome “Nutrição”.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}},
{nome:'Tirante',preco:15,pasta:'tirante',capa:'verde',tamanhos:UNICO,desc:'Tirante com a estampa “Nutrição” nas cores da atlética.',cores:{verde:'verde.png',preto:'preto.png',branco:'branco.png'}}
];
/*PRODUTOS-FIM*/
const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const imgOf=(p,k)=>`assets/loja/${p.pasta?p.pasta+'/':''}${p.cores[k]}`;

const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
$('.menu-toggle').addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',open);$('#navigation').classList.toggle('open',open)});
const dialog=$('#detail-dialog');let returnFocus;function show(html,cls=''){if(!dialog.open)returnFocus=document.activeElement;dialog.className=cls;$('#detail-content').innerHTML=html;if(!dialog.open)dialog.showModal()};function close(){dialog.close();returnFocus?.focus()};$('.close').onclick=close;dialog.addEventListener('click',e=>{if(e.target===dialog)close()});dialog.addEventListener('close',()=>returnFocus?.focus());
let category='todos';const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();function filterEvents(){let total=0;$$('#events > div').forEach(c=>{const visible=(category==='todos'||c.dataset.category===category)&&normalize(c.dataset.title).includes(normalize($('#event-search').value));c.hidden=!visible;if(visible)total++});$('#empty-events').hidden=total>0}function selected(buttons,current){buttons.forEach(b=>{b.classList.toggle('selected',b===current);b.setAttribute('aria-pressed',b===current)})}
$$('[data-filter]').forEach(b=>b.onclick=()=>{category=b.dataset.filter;selected($$('[data-filter]'),b);filterEvents()});$('#event-search')?.addEventListener('input',filterEvents);
$$('[data-product-filter]').forEach(b=>b.onclick=()=>{selected($$('[data-product-filter]'),b);$$('#products > article').forEach(c=>c.hidden=b.dataset.productFilter!=='todos'&&c.dataset.category!==b.dataset.productFilter)});
/* ============ SACOLA ============ */
let cart=[];
try{const raw=JSON.parse(localStorage.getItem('devoradores-cart')||'[]');cart=(Array.isArray(raw)?raw:[]).map(x=>{const p=Number.isInteger(x?.id)&&products[x.id];return p&&{id:x.id,cor:x.cor??p.capa,size:x.size,qty:x.qty??1}}).filter(x=>x&&Object.hasOwn(products[x.id].cores,x.cor)&&products[x.id].tamanhos.includes(x.size)&&Number.isInteger(x.qty)&&x.qty>=1&&x.qty<=99)}catch{}
function count(){const n=cart.reduce((t,x)=>t+x.qty,0),c=$('#cart-count');c.textContent=n>99?'99+':n;c.hidden=n===0;$('#cart-open').setAttribute('aria-label',n?`Abrir sacola (${n} ${n===1?'item':'itens'})`:'Abrir sacola')}count();
function persist(){try{localStorage.setItem('devoradores-cart',JSON.stringify(cart))}catch{}count()}

/* Cards da loja: mostram a cor definida em "capa" de cada produto. */
$$('#products > article').forEach(card=>{const b=card.querySelector('[data-product]'),p=b&&products[Number(b.dataset.product)],im=card.querySelector('img');if(p&&im){im.src=imgOf(p,p.capa);im.alt=p.nome}});

/* ============ MODAL "VER PRODUTO" ============ */
function openProduct(id){
  const p=products[id],keys=Object.keys(p.cores),multi=keys.length>1,max=20;
  let cor=p.capa,size=p.tamanhos.length===1?p.tamanhos[0]:null;
  const colors=multi?`<fieldset class="pm-field"><legend>Cor: <b id="pm-cor-name">${COR[cor][0]}</b></legend><div class="swatches">${keys.map(k=>`<button type="button" class="swatch${k===cor?' selected':''}" data-cor="${k}" style="background:${COR[k][1]}" title="${COR[k][0]}" aria-label="${COR[k][0]}" aria-pressed="${k===cor}"></button>`).join('')}</div></fieldset>`:'';
  const sizes=`<fieldset class="pm-field"><legend>Tamanho</legend><div class="sizes">${p.tamanhos.map(s=>`<button type="button" class="size-btn${s===size?' selected':''}" data-size="${s}" aria-pressed="${s===size}">${s}</button>`).join('')}</div></fieldset>`;
  show(`<div class="pm"><div class="pm-media"><img id="pm-img" src="${imgOf(p,cor)}" alt="${p.nome}${multi?' – '+COR[cor][0]:''}"></div><div class="pm-info"><p class="eyebrow">Coleção Devoradores</p><h2>${p.nome}</h2><p class="pm-price">${money(p.preco)}</p><p>${p.desc}</p>${colors}${sizes}<div class="pm-field"><label for="pm-qty">Quantidade</label><div class="qty"><button type="button" id="qty-minus" aria-label="Diminuir quantidade">−</button><input id="pm-qty" type="number" min="1" max="${max}" value="1" inputmode="numeric"><button type="button" id="qty-plus" aria-label="Aumentar quantidade">+</button></div></div><p class="pm-error" id="pm-error" role="alert"></p><button class="button" id="add-product" type="button">Adicionar à sacola</button></div></div>`,'product-dialog');

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

  /* Adicionar à sacola */
  $('#add-product').onclick=()=>{
    if(!size){error.textContent='Selecione um tamanho para continuar.';sizeButtons[0]?.focus();return}
    const qty=clampQty(qtyInput.value),found=cart.find(x=>x.id===id&&x.cor===cor&&x.size===size);
    if(found)found.qty=Math.min(99,found.qty+qty);else cart.push({id,cor,size,qty});
    persist();close();
    $('#toast').textContent=`${p.nome} (${multi?COR[cor][0]+', ':''}${size}) × ${qty} adicionado à sacola.`;
    setTimeout(()=>$('#toast').textContent='',3500);
  };
}
$$('[data-product]').forEach(b=>b.onclick=()=>openProduct(Number(b.dataset.product)));

/* ============ VENDAS, SACOLA E PAGAMENTO ============ */
const SALES_OPEN_AT=new Date('2026-10-17T00:00:00-03:00');
const salesOpen=()=>Date.now()>=SALES_OPEN_AT.getTime();
const WHATS='5517996454466';
const TAXA=5; /* taxa fixa por pedido, mostrada no subtotal */
const cartSubtotal=()=>cart.reduce((n,x)=>n+products[x.id].preco*x.qty,0);
const cartTotal=()=>cartSubtotal()+(cart.length?TAXA:0);
const totalsHtml=()=>`<div class="cart-sum"><div><span>Subtotal (itens)</span><span>${money(cartSubtotal())}</span></div><div><span>Taxa</span><span>${money(TAXA)}</span></div><div class="cart-total"><span>Total</span><b>${money(cartTotal())}</b></div></div>`;
const itemLabel=x=>{const p=products[x.id],multi=Object.keys(p.cores).length>1;return `${x.qty}x ${p.nome} (${multi?COR[x.cor][0]+', ':''}${x.size}) — ${money(p.preco*x.qty)}`};
function orderLink(nome,forma){const t=`Olá! Gostaria de fazer um pedido na loja Devoradores.\n\nNome: ${nome}\n\nItens:\n${cart.map(x=>'- '+itemLabel(x)).join('\n')}\n\nSubtotal (itens): ${money(cartSubtotal())}\nTaxa: ${money(TAXA)}\nTotal: ${money(cartTotal())}\nPagamento: ${forma}`;return `https://wa.me/${WHATS}?text=${encodeURIComponent(t)}`}

function showCart(){
    const rows=cart.map((x,i)=>{const p=products[x.id],multi=Object.keys(p.cores).length>1;return `<div class="cart-row"><img src="${imgOf(p,x.cor)}" alt=""><div><b>${p.nome}</b><p>${multi?'Cor: '+COR[x.cor][0]+' · ':''}Tamanho: ${x.size} · Qtd: ${x.qty} · ${money(p.preco*x.qty)}</p></div><button class="text-button" data-remove="${i}" aria-label="Remover ${p.nome}">Remover</button></div>`}).join('');
  show(`<p class="eyebrow">Loja Devoradores</p><h2>Sua sacola</h2>${cart.length?rows+totalsHtml():'<p>Sua sacola está vazia. Explore a coleção na loja.</p>'}<div class="cart-actions">${cart.length?`<button class="button" id="checkout-btn" type="button">Finalizar compra ↗</button>`:''}<a class="button outline" href="loja.html">${cart.length?'Continuar comprando':'Ir para a loja'}</a></div>`,'cart-dialog');
  $$('[data-remove]').forEach(b=>b.onclick=()=>{cart.splice(Number(b.dataset.remove),1);persist();showCart()});
  $('#checkout-btn')?.addEventListener('click',showCheckout);
}
function showCheckout(){
  if(!cart.length)return showCart();
  show(`<p class="eyebrow">Finalizar compra</p><h2>Seus dados e pagamento</h2><label for="co-name">Nome completo<input id="co-name" autocomplete="name" maxlength="100" placeholder="Seu nome"></label>${totalsHtml()}<p class="pay-info">Você escolhe <b>Pix</b> ou <b>cartão de crédito</b> (em até 12x) na próxima tela, em ambiente seguro da InfinitePay.</p><p class="pm-error" id="co-error" role="alert"></p><div class="cart-actions"><button class="button" id="co-next" type="button">Pagar ↗</button><button class="text-button" id="co-back" type="button">Voltar à sacola</button></div><p class="small"><button class="text-button" id="co-whats" type="button">Prefere combinar o pagamento pelo WhatsApp?</button></p>`,'cart-dialog');
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
    btn.disabled=false;btn.textContent='Pagar ↗';
    err.textContent='Não foi possível abrir o pagamento agora. Tente de novo ou combine pelo WhatsApp.';
  }
}
function showOther(nome){
  show(`<p class="eyebrow">Outra forma de pagamento</p><h2>Combine com a atlética</h2><p>Envie o seu pedido pelo WhatsApp e a atlética combina o pagamento com você.</p>${totalsHtml()}<div class="cart-actions"><a class="button" href="${orderLink(nome,'a combinar')}" target="_blank" rel="noopener noreferrer">Enviar pedido pelo WhatsApp ↗</a><button class="text-button" id="co-back" type="button">Voltar</button></div>`,'cart-dialog');
  $('#co-back').onclick=showCheckout;
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
    show(`<div class="pay-status"><svg class="pay-check" viewBox="0 0 80 80" role="img" aria-label="Pagamento concluído"><circle class="pay-check-circle" cx="40" cy="40" r="36"/><path class="pay-check-mark" d="M23 41l12 12 23-26"/></svg><h2>Pagamento concluído!</h2><p>Recebemos o seu pedido${forma?' pago via '+forma:''}. A atlética entra em contato para combinar a retirada.</p><div class="cart-actions">${link}<button class="button" id="pay-close" type="button">Fechar</button></div></div>`,'cart-dialog pay-dialog');
    $('#pay-close').onclick=close;
  };
  const falha=msg=>{show(`<div class="pay-status"><h2>Não conseguimos confirmar</h2><p>${msg} Se você já pagou, fale com a atlética pelo WhatsApp informando o código <b>${order.replace(/[^\w-]/g,'').slice(0,40)}</b>.</p><div class="cart-actions"><a class="button" href="https://wa.me/${WHATS}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp ↗</a><button class="text-button" id="pay-close" type="button">Fechar</button></div></div>`,'cart-dialog pay-dialog');$('#pay-close').onclick=close};
  fetch('/api/verificar',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({order_nsu:order,slug,transaction_nsu:tx})})
    .then(r=>r.json().catch(()=>({}))).then(d=>d.paid?ok():falha('O pagamento ainda não consta como aprovado.')).catch(()=>falha('Não foi possível consultar o pagamento agora.'));
})();
$('#cart-open').onclick=showCart;
$('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),t=`Olá! Meu nome é ${f.get('nome')} (${f.get('email')}).\nAssunto: ${f.get('assunto')}\n\n${f.get('mensagem')}`;window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(t)}`,'_blank','noopener');$('#form-status').textContent='Abrindo o WhatsApp da atlética com a sua mensagem.'});
/* Avisos de venda: trocam sozinhos quando as vendas abrem (17/10). */
$$('[data-sales-note]').forEach(el=>{if(salesOpen()&&el.dataset.open)el.textContent=el.dataset.open});
$$('[data-sale-cta]').forEach(el=>{if(!salesOpen()){el.classList.add('is-disabled');el.setAttribute('aria-disabled','true');el.removeAttribute('href');el.removeAttribute('target');el.textContent='Vendas liberadas em 17/10'}});


const mascot=document.querySelector('#animated-mascot'),mascotToggle=document.querySelector('#mascot-toggle');if(mascot&&mascotToggle){let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;function updateMascot(){mascot.src=paused?'assets/mascote-poster.png':'assets/mascote-loop.webp';mascotToggle.textContent=paused?'Reproduzir animação':'Pausar animação';mascotToggle.setAttribute('aria-pressed',String(paused))}updateMascot();mascotToggle.addEventListener('click',()=>{paused=!paused;updateMascot()})}
;(()=>{const h=document.querySelector('header');if(!h)return;let on=false;const f=()=>{const y=window.scrollY;if(!on&&y>60)on=true;else if(on&&y<8)on=false;h.classList.toggle('is-scrolled',on)};f();window.addEventListener('scroll',f,{passive:true})})();
