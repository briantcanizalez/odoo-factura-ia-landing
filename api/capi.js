// ============================================================
//  Meta Conversions API (server-side) · Odoo Factura IA
// ============================================================
//  Recibe eventos del navegador y los reenvía a Meta desde el
//  servidor, con deduplicación por `event_id` contra el Pixel.
//
//  Credenciales por VARIABLE DE ENTORNO en Vercel (NUNCA en el repo):
//    META_PIXEL_ID         2238963863532324 (pixel real de Factura IA)
//    META_CAPI_TOKEN       token de acceso de Meta (secreto)
//    META_TEST_EVENT_CODE  (opcional) código para "Probar eventos"
//
//  Si no hay credenciales configuradas, responde no-op (el sitio
//  sigue funcionando; solo no se envía el evento server-side).
// ============================================================

const GRAPH_VERSION = 'v21.0';

function readRawBody(req) {
  return new Promise((resolve) => {
    let d = '';
    req.on('data', (c) => { d += c; });
    req.on('end', () => resolve(d));
    req.on('error', () => resolve(''));
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const PIXEL_ID  = process.env.META_PIXEL_ID;
  const TOKEN     = process.env.META_CAPI_TOKEN;
  const TEST_CODE = process.env.META_TEST_EVENT_CODE;

  // Sin credenciales → no-op (no rompe el sitio antes de configurar el token)
  if (!PIXEL_ID || !TOKEN) {
    res.status(200).json({ ok: false, skipped: 'no-config' });
    return;
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse((typeof body === 'string' && body) || (await readRawBody(req)) || '{}'); }
    catch (e) { body = {}; }
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const ua = req.headers['user-agent'] || '';

  const user_data = { client_ip_address: ip, client_user_agent: ua };
  if (body.fbp) user_data.fbp = body.fbp;
  if (body.fbc) user_data.fbc = body.fbc;

  const event = {
    event_name: body.event_name || 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    event_id: body.event_id,               // <- dedup con el Pixel del navegador
    event_source_url: body.event_source_url,
    user_data,
  };
  if (body.custom_data && typeof body.custom_data === 'object') {
    event.custom_data = body.custom_data;
  }

  const payload = { data: [event] };
  if (TEST_CODE) payload.test_event_code = TEST_CODE;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(TOKEN)}`;

  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await r.json().catch(() => ({}));
    res.status(r.ok ? 200 : 502).json({ ok: r.ok, meta: data });
  } catch (e) {
    res.status(502).json({ ok: false, error: String((e && e.message) || e) });
  }
};
