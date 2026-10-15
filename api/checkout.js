// Cria o link de pagamento na InfinitePay (Pix ou cartão) e devolve a URL do checkout.
// Os preços ficam AQUI no servidor: o navegador só informa quais itens e quantidades.
const { randomUUID } = require('node:crypto');

const HANDLE = process.env.INFINITEPAY_HANDLE; // sua InfiniteTag, sem o $
const SITE = process.env.SITE_URL || 'https://devoradores.vercel.app';
const TAXA = 5; // igual ao TAXA do assets/app.js
const COR = { verde: 'Verde', preto: 'Preto', branco: 'Branco', offwhite: 'Off-white', pretobranco: 'Preto e branco', unico: '' };

// MESMA ORDEM do array "products" em assets/app.js — [nome, preço em reais]
const PRODUTOS = [
  ['Polo Devoradores', 80], ['Camiseta Oversize', 60], ['Camiseta Time', 50],
  ['Camiseta Esportiva 2', 50], ['Top esportivo', 45], ['Abadá', 45],
  ['Moletom', 150], ['Moletom Y2K', 165], ['Jaqueta', 180],
  ['Short esportivo', 50], ['Short feminino esportivo', 50], ['Calça', 65],
  ['Chaveiro', 6], ['Copo', 45], ['Tirante', 15]
];

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ erro: 'Método não permitido' });
  if (!HANDLE) return res.status(500).json({ erro: 'INFINITEPAY_HANDLE não configurado' });

  const { nome, itens } = req.body || {};
  if (!Array.isArray(itens) || !itens.length || itens.length > 30)
    return res.status(400).json({ erro: 'Carrinho inválido' });

  const items = [];
  for (const x of itens) {
    const p = PRODUTOS[x && x.id];
    const qty = Number(x && x.qty);
    if (!p || !Number.isInteger(qty) || qty < 1 || qty > 20)
      return res.status(400).json({ erro: 'Item inválido' });
    items.push({
      quantity: qty,
      price: Math.round(p[1] * 100), // centavos
      description: (() => {
        const cor = COR[x.cor] || '';
        const tam = String(x.size || '').slice(0, 10);
        const det = [cor, tam === 'Único' ? '' : tam].filter(Boolean).join(', ');
        return det ? `${p[0]} (${det})` : p[0];
      })()
    });
  }
  items.push({ quantity: 1, price: TAXA * 100, description: 'Taxa do pedido' });

  try {
    const r = await fetch('https://api.checkout.infinitepay.io/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        handle: HANDLE,
        order_nsu: randomUUID(),
        redirect_url: `${SITE}/loja.html`,
        webhook_url: `${SITE}/api/webhook`,
        customer: { name: String(nome || '').slice(0, 100) },
        items
      })
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok || !d.url) return res.status(502).json({ erro: 'Não foi possível criar o pagamento' });
    return res.json({ url: d.url });
  } catch (e) {
    return res.status(502).json({ erro: 'Falha ao falar com a InfinitePay' });
  }
};
