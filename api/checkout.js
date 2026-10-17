// Cria o link de pagamento na InfinitePay (Pix ou cartão) e devolve a URL do checkout.
// Os preços ficam AQUI no servidor: o navegador só informa quais itens e quantidades.
const { randomUUID } = require('node:crypto');

const HANDLE = process.env.INFINITEPAY_HANDLE; // sua InfiniteTag, sem o $
const SITE = process.env.SITE_URL || 'https://devoradores.vercel.app';
const COR = { verde: "Verde", preto: "Preto", branco: "Branco", verdebranco: "Verde e branco", brancoverde: "Branco e verde", pretoverde: "Preto e verde", brancopreto: "Branco e preto" };

// MESMA ORDEM do array "products" em assets/app.js — [nome, preço em reais]
const PRODUTOS = [
  ["Abadá Fome de Vitória", 39.9],
  ["Body Manga Longa Nutri", 69.9],
  ["Body Assimétrico Devoradores", 64.9],
  ["Calça Baggy Nutri", 89.9],
  ["Camiseta Clássica Nutri", 44.9],
  ["Camisa de Jogo Devoradores", 59.9],
  ["Jersey Devoradores", 69.9],
  ["Corta-vento Devoradores", 109.9],
  ["Cropped Clássico Nutri", 39.9],
  ["Cropped Frente Única Nutri", 44.9],
  ["Cropped Manga Única Devoradores", 54.9],
  ["Cropped Um Ombro Devoradores", 39.9],
  ["Top Faixa Devoradores", 34.9],
  ["Jaqueta College Devoradores", 139.9],
  ["Moletom Mascote Nutri", 99.9],
  ["Moletom com Zíper Devoradores Y2K", 109.9],
  ["Camiseta Oversized Devoradores Urban", 59.9],
  ["Samba-canção Devoradores Tropical", 44.9],
  ["Short Devoradores Fresh", 34.9],
  ["Short Ciclista Nutri", 39.9],
  ["Bermuda Esportiva Devoradores", 44.9],
  ["Short-saia Nutri College", 49.9],
  ["Short-saia Devoradores Mascote", 49.9],
  ["Copo Meu Curso é Nutrição", 19.9],
  ["Meia Cano Alto Devoradores", 19.9],
  ["Tirante Nutri Mascote", 14.9],
  ["Tirante Nutri Quadriculado", 14.9]
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
