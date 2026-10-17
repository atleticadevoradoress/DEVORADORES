// Lista as fotos da pasta compartilhada do Google Drive para a página galeria.html.
// Configuração (Vercel > Settings > Environment Variables):
//   GOOGLE_API_KEY     chave de API do Google com a "Google Drive API" ativada (obrigatória)
//   GALERIA_FOLDER_ID  id da pasta do Drive (opcional; se faltar, usa a pasta abaixo)
// A pasta precisa estar compartilhada como "Qualquer pessoa com o link".
const KEY = (process.env.GOOGLE_DRIVE_API_KEY || process.env.GOOGLE_API_KEY);
const FOLDER = (process.env.GOOGLE_DRIVE_FOLDER_ID || process.env.GALERIA_FOLDER_ID) || '1WWHX-zLwaslZL_vwmiwQNnSLpMdVFaDG';

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ erro: 'Método não permitido.' });
  if (!KEY) return res.status(500).json({ erro: 'GOOGLE_DRIVE_API_KEY não está configurada.' });

  try {
    const fotos = [];
    let pageToken = '';
    do {
      const u = new URL('https://www.googleapis.com/drive/v3/files');
      u.searchParams.set('q', "'" + FOLDER + "' in parents and mimeType contains 'image/' and trashed = false");
      u.searchParams.set('fields', 'nextPageToken,files(id,imageMediaMetadata(width,height,rotation))');
      u.searchParams.set('orderBy', 'createdTime asc'); // fotos novas primeiro
      u.searchParams.set('pageSize', '1000');
      u.searchParams.set('supportsAllDrives', 'true');
      u.searchParams.set('includeItemsFromAllDrives', 'true');
      u.searchParams.set('key', KEY);
      if (pageToken) u.searchParams.set('pageToken', pageToken);

      const r = await fetch(u);
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error((d.error && d.error.message) || 'Drive respondeu ' + r.status);

      (d.files || []).forEach((f) => {
        const m = f.imageMediaMetadata || {};
        let w = m.width || 0, h = m.height || 0;
        if (m.rotation === 1 || m.rotation === 3) { const t = w; w = h; h = t; } // foto girada pelo celular
        fotos.push({ id: f.id, w: w, h: h });
      });
      pageToken = d.nextPageToken || '';
    } while (pageToken && fotos.length < 2000);

    // o Vercel guarda a resposta por 5 min: foto nova aparece em até ~5 min e o Drive não é sobrecarregado
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=60');
    return res.status(200).json({ fotos: fotos });
  } catch (e) {
    return res.status(502).json({ erro: 'Não foi possível ler a pasta do Drive.' });
  }
};
