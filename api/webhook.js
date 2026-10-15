// A InfinitePay chama este endereço quando um pagamento é aprovado.
// Responda rápido com 200. Os pedidos aparecem em Vendas no app InfinitePay e nos logs da Vercel.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Método não permitido' });
  const b = req.body || {};
  if (!b.order_nsu) return res.status(400).json({ success: false, message: 'Pedido não encontrado' });
  console.log('PAGAMENTO RECEBIDO', JSON.stringify({
    order_nsu: b.order_nsu, valor: b.paid_amount, metodo: b.capture_method,
    comprovante: b.receipt_url, itens: b.items
  }));
  return res.status(200).json({ success: true, message: null });
};
