// Confirma com a InfinitePay se o pagamento realmente foi aprovado (o modal só mostra o check se paid === true).
const HANDLE = process.env.INFINITEPAY_HANDLE;

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ paid: false });
  const { order_nsu, transaction_nsu, slug } = req.body || {};
  if (!HANDLE || !order_nsu || !transaction_nsu || !slug) return res.status(400).json({ paid: false });
  try {
    const r = await fetch('https://api.checkout.infinitepay.io/payment_check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        handle: HANDLE,
        order_nsu: String(order_nsu),
        transaction_nsu: String(transaction_nsu),
        slug: String(slug)
      })
    });
    const d = await r.json().catch(() => ({}));
    return res.json({ paid: r.ok && d.success === true && d.paid === true });
  } catch (e) {
    return res.status(502).json({ paid: false });
  }
};
