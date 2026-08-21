# HANDOFF — Landing Factura IA

**Resumen en 2 minutos para quien recibe el proyecto.** Última actualización: 21 de agosto de 2026.

---

## Qué es

Landing de marketing de **Factura IA** (Grupo Consiti S.A. de C.V.) — facturación electrónica DTE para El Salvador. **Sitio estático** (HTML/CSS/JS, sin build ni dependencias) + **un endpoint opcional** para la Conversions API de Meta.

- `index.html` — la landing.
- `terminos.html` — Términos y Condiciones (incluye privacidad y cookies).
- `assets/` — imágenes, videos, `consent.js`, `og-facturaia.jpg`, estilos legales.
- `api/capi.js` — endpoint server-side de Meta CAPI (opcional; el sitio funciona sin él).

## Estado

| Área | Estado |
|---|---|
| Contenido y diseño (rediseño v2) | ✅ **Listo** |
| Legales (`/terminos`, consolidada, sin SLA) | ✅ Listo (sin revisión de abogado, por decisión de Briant) |
| Consentimiento de cookies (Pixel/GA gateados) | ✅ Funcionando |
| Analítica en código: GA4 `G-BTME51TFEN` · Pixel `2238963863532324` | ✅ Puesto |
| og:image + logo ("Factura IA") | ✅ Listo |
| **Despliegue** | 🔴 **Pendiente — en GCP, con Duvan** |
| Dominio definitivo | 🔴 Pendiente (Duvan Rondo) |
| Token de CAPI en Secret Manager | 🔴 Pendiente (**rotar**, ver abajo) |
| Marcar eventos clave en GA4 | 🟡 Tras el primer tráfico |

## Quién hace qué

- **Duvan (despliegue):** publicar en GCP siguiendo **[`docs/DESPLIEGUE-GCP.md`](docs/DESPLIEGUE-GCP.md)** — hosting, clean URLs/redirects, endpoint de CAPI, secretos y dominio.
- **Briant (config):** rotar el token de CAPI, marcar `generate_lead`/`select_item` como evento clave en GA4 cuando lleguen datos, definir dominio con Duvan. Detalle: [`docs/GUIA-CONFIG-BRIANT.md`](docs/GUIA-CONFIG-BRIANT.md).

## ⚠️ Crítico antes de producción

- **Rotar el token de CAPI:** el generado se compartió por un canal inseguro. Generar uno **nuevo** en Meta (Events Manager → FACTURA_IA → Configuración → API de conversiones) y **revocar el anterior**. Va en **Secret Manager de GCP**, nunca en el repo.
- Al fijar el dominio: descomentar `canonical`/`og:url` en `index.html` y `terminos.html`, actualizar la URL del flujo en GA4, y verificar el dominio en Meta.

## Valores de referencia

| Dato | Valor |
|---|---|
| Meta Pixel | `2238963863532324` (público, en código) |
| GA4 Measurement ID | `G-BTME51TFEN` (público, en código) |
| `META_CAPI_TOKEN` | Secreto → Secret Manager (rotar) |
| Preview privado (temporal) | https://odoo-factura-ia-landing.vercel.app |

## Mapa de documentación

- [`README.md`](README.md) — cómo está construido el sitio, analítica, deploy.
- [`docs/DESPLIEGUE-GCP.md`](docs/DESPLIEGUE-GCP.md) — **guía de despliegue (Duvan).**
- [`docs/GUIA-CONFIG-BRIANT.md`](docs/GUIA-CONFIG-BRIANT.md) — analítica (Pixel, GA4, CAPI, og:image).
- [`docs/BORRADORES-LEGAL.md`](docs/BORRADORES-LEGAL.md) — texto legal propuesto (para un abogado).
- [`docs/brief/`](docs/brief/) — material de origen del rediseño (v1 y v2).
- `git log` — cada commit explica qué cambió y por qué.
