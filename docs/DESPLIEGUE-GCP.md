# Despliegue en Google Cloud (GCP) — guía para Duvan

**Objetivo:** publicar la landing de **Factura IA** en GCP con el dominio definitivo.
**Estado del contenido:** listo (rediseño v2, cifras reales, legales, cookies, analítica, og:image). Falta solo el despliegue + el dominio.

> Esta guía la hereda quien despliega (Duvan). El resto del contexto del proyecto está en el [`README.md`](../README.md); la config de analítica en [`GUIA-CONFIG-BRIANT.md`](GUIA-CONFIG-BRIANT.md).

---

## 1. Qué es este proyecto (en 30 segundos)

- **Sitio estático**, sin build ni dependencias. Solo HTML/CSS/JS.
  - `index.html` — la landing completa (CSS y JS embebidos).
  - `terminos.html` — Términos y Condiciones (incluye privacidad y cookies).
  - `assets/` — imágenes, videos, `legal.css`, `legal.js`, `consent.js`, `og-facturaia.jpg`.
- **Una sola pieza dinámica y OPCIONAL:** `api/capi.js` — endpoint server-side para la **Conversions API de Meta**. El sitio **funciona perfecto sin ella**; solo se pierde la señal server-side (el Pixel del navegador sigue midiendo). Se puede dejar para una fase 2.

**No hay base de datos, ni backend, ni sesión.** Es contenido estático + un endpoint que reenvía eventos a Meta.

---

## 2. Cómo desplegarlo en GCP (elegí UNA opción)

### ✅ Opción A — Firebase Hosting (+ Cloud Functions) — **recomendada**
Es la que más se parece a la config actual y la más simple. Firebase Hosting sirve los estáticos, resuelve las *clean URLs* y los *redirects*, y reenvía `/api/capi` a una Cloud Function.

1. Instalar Firebase CLI: `npm i -g firebase-tools` · `firebase login`.
2. En la raíz del repo, crear **`firebase.json`** (ver §4).
3. `firebase deploy --only hosting` (y `--only functions` si se despliega CAPI, ver §5).
4. Conectar el dominio definitivo desde la consola de Firebase Hosting.

*(Firebase es parte de GCP; el proyecto de Firebase vive dentro de un proyecto de GCP.)*

### Opción B — Cloud Storage + Load Balancer + Cloud CDN
Bucket con los estáticos, detrás de un HTTPS Load Balancer con Cloud CDN. Las *clean URLs* y *redirects* se configuran en el **URL map** del balanceador, y `/api/*` se enruta a un **Cloud Run**/**Cloud Function** para CAPI. Más control, más piezas que armar.

### Opción C — Cloud Run (contenedor único)
Un contenedor con **nginx** sirviendo los estáticos + un pequeño Node para `/api/capi`. Bueno si ya usan Cloud Run para todo. Las reglas de rewrite/redirect van en la config de nginx.

> **Recomendación:** empezar por la **Opción A**. Si el equipo ya tiene un estándar en GCP (Cloud Run, LB), usar ese; lo importante son las reglas de la §3 y el endpoint de la §5.

---

## 3. Rutas que hay que replicar (hoy en `vercel.json`)

El sitio depende de estas reglas. En Vercel estaban en `vercel.json` (queda en el repo como referencia). En GCP hay que reproducirlas en el host elegido:

| Tipo | Regla |
|---|---|
| **Clean URL** | `/terminos` sirve `terminos.html` (sin `.html` en la URL) |
| **301** | `/privacidad` → `/terminos#s9` |
| **301** | `/sla` → `/terminos` |
| **301** | `/faq` → `/#faq` |
| **301** | `/servicios` → `/` |
| **301** | `/consiti-ai` → `/` |

Si NO se implementan las clean URLs, los enlaces internos igual funcionan porque apuntan a `/terminos` — hay que asegurarse de que el host resuelva `/terminos` → `terminos.html`.

---

## 4. `firebase.json` de ejemplo (Opción A)

```json
{
  "hosting": {
    "public": ".",
    "cleanUrls": true,
    "trailingSlash": false,
    "ignore": ["firebase.json", ".git/**", "docs/**", "api/**", "vercel.json", ".vercel/**", "README.md", "**/.*"],
    "redirects": [
      { "source": "/faq",        "destination": "/#faq",        "type": 301 },
      { "source": "/servicios",  "destination": "/",            "type": 301 },
      { "source": "/consiti-ai", "destination": "/",            "type": 301 },
      { "source": "/privacidad", "destination": "/terminos#s9", "type": 301 },
      { "source": "/sla",        "destination": "/terminos",    "type": 301 }
    ],
    "rewrites": [
      { "source": "/api/capi", "function": "capi" }
    ]
  }
}
```

> Si NO se despliega CAPI todavía, borrar el bloque `rewrites` (el sitio funciona igual).

---

## 5. El endpoint `/api/capi` (Meta Conversions API)

**Qué hace:** recibe los eventos del navegador y los reenvía a Meta desde el servidor, con **deduplicación por `event_id`** contra el Pixel. Mejora la señal frente a iOS/bloqueadores.

**Portabilidad:** `api/capi.js` es un handler Node estándar `(req, res)` — el mismo formato que usa **Google Cloud Functions** (functions-framework) y Cloud Run con Express. Prácticamente se despliega tal cual:

- **Cloud Functions (Node 20):** exportar el handler como función HTTP `capi`. Ejemplo mínimo (`index.js` de la función):
  ```js
  exports.capi = require('./capi'); // capi.js = el archivo actual api/capi.js
  ```
  Usa `fetch` global (disponible en Node 18+). No requiere dependencias.
- **Cloud Run:** envolver el handler en un pequeño Express y enrutar `POST /api/capi`.

**El frontend llama a `fetch('/api/capi')`** — el host debe enrutar esa ruta a la función/servicio (ver el `rewrite` de la §4).

**Si no se despliega:** el sitio no se rompe. `api/capi.js` responde no-op sin credenciales, y en el frontend `sendCAPI` está **gateado por consentimiento** (no dispara sin aceptar cookies).

---

## 6. Variables de entorno y secretos (en GCP)

Se configuran en el entorno de la función/servicio de CAPI (Cloud Functions/Cloud Run → *Variables y secretos*):

| Variable | Valor | Notas |
|---|---|---|
| `META_PIXEL_ID` | `2238963863532324` | Público (es el pixel de Factura IA) |
| `META_CAPI_TOKEN` | *(token de Meta)* | 🔒 **Secreto** → usar **Secret Manager** |
| `META_TEST_EVENT_CODE` | *(opcional)* | Solo para "Probar eventos" |

> ⚠️ **Seguridad del token:** el token de CAPI que se generó se compartió por un canal inseguro, así que debe tratarse como **expuesto**. Antes de desplegar: **generar un token nuevo** en Meta (Events Manager → dataset FACTURA_IA → Configuración → API de conversiones → *Generar token de acceso*) y **revocar el anterior**. Usar el nuevo solo en Secret Manager.

**GA4 y el Pixel ID ya están en el código** (no son secretos, viajan en el HTML público): no requieren variables de entorno.
- Measurement ID GA4: `G-BTME51TFEN` (en `index.html` y `terminos.html`).
- Pixel: `2238963863532324` (en `CONSENT_CFG.pixelId`).

---

## 7. Al conectar el dominio definitivo

1. **Descomentar `canonical` y `og:url`** en `index.html` y `terminos.html` (hoy están comentados con el texto "PENDIENTE: dominio por validar") y poner la URL final.
2. **GA4:** en Analytics → Administrar → Flujos de datos, actualizar la URL del flujo (hoy apunta al preview `odoo-factura-ia-landing.vercel.app`).
3. **Meta:** agregar y **verificar el dominio** en el Administrador de eventos (para Aggregated Event Measurement de iOS).
4. **og:image:** ya es relativa (`/assets/og-facturaia.jpg`), no hay que tocarla.

---

## 8. Checklist de despliegue

- [ ] Servir los estáticos (`index.html`, `terminos.html`, `assets/`).
- [ ] Clean URLs + los 5 redirects 301 (§3).
- [ ] HTTPS (certificado gestionado por el host).
- [ ] *(Opcional)* `/api/capi` como función + `META_PIXEL_ID` + `META_CAPI_TOKEN` (Secret Manager) + redeploy.
- [ ] Dominio definitivo + `canonical`/`og:url` descomentados + URL del flujo GA4 + verificación de dominio en Meta.
- [ ] **Verificar:** banner de cookies aparece; GA4 → Tiempo real cuenta visitas (tras aceptar cookies); Meta → Probar eventos muestra `Lead` por Pixel y (si hay CAPI) por servidor, deduplicado.

---

## 9. Qué está listo y qué queda (no técnico)

**Listo:** rediseño v2 completo, cifras reales, franja de confianza, UX/UI + móvil, legales consolidadas (`/terminos`), consentimiento de cookies, GA4, Pixel real en código, og:image, logo corregido.

**Queda (no es despliegue):**
- **Dominio definitivo** (esta guía cubre cómo aplicarlo).
- **Revisión de abogado** de `/terminos` — Briant decidió publicar sin ella; opcional a futuro (borradores en [`BORRADORES-LEGAL.md`](BORRADORES-LEGAL.md)).
- **Marcar `generate_lead` y `select_item` como evento clave en GA4** — se hace con la estrella una vez que llega el primer tráfico real.
- **Token de CAPI nuevo** en Secret Manager (ver §6).
