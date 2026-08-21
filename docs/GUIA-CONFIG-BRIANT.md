# Guía de configuración — puesta en marcha de la analítica y compartir

**Para:** Briant · **Fecha:** 21 de agosto de 2026

Son 4 tareas. Ninguna es de diseño ni de código de fondo: son datos/credenciales que se pegan en su lugar. Orden sugerido: **1 → 2 → 3 → 4**.

> ⚠️ **Importante sobre el consentimiento de cookies.** El Pixel de Meta y GA4 **solo se disparan si el visitante ACEPTA las cookies**. Al probar cualquier cosa, primero hacé clic en **Aceptar** en el banner, o no vas a ver eventos. (Es lo que nos hace cumplir la ley; es correcto.)

---

## 1) Pixel ID de Meta — ✅ Resuelto

Resultó que **no existía un pixel real**: el `27890392917235121` era un placeholder, así que desde julio los eventos no llegaban a ningún lado. Se **creó el pixel** en el portafolio *Grupo Consiti Portfolio*:

> **Pixel de Factura IA: `2238963863532324`**

Ya quedó puesto en el código (`index.html` y `terminos.html`), y **ya se conectó a la cuenta publicitaria** (Grupo Consiti ADS) ✅. El `META_PIXEL_ID` para CAPI se configura en el despliegue de GCP (ver tarea 3).

---

## 2) GA4 — ✅ Resuelto (falta 1 sub-paso)

Se creó la propiedad GA4 **"Factura IA"** (cuenta *Grupo Consiti*, zona horaria El Salvador, moneda USD) con el flujo web **Landing Factura IA**. El Measurement ID quedó puesto en el código (index y `/terminos`):

> **Measurement ID: `G-BTME51TFEN`**

**Falta un solo paso (lo hacés vos en GA4):** marcar los eventos como **evento clave / conversión**:
- En GA4 → **Administrar** → **Eventos clave** → **Crear evento clave** y escribí exactamente:
  - `generate_lead` (clic en cualquier CTA de WhatsApp)
  - `select_item` (cuando la calculadora devuelve un plan)
- *(Si preferís, esperá a que aparezcan solos en la lista de Eventos tras las primeras visitas y ahí los marcás. Decime y también te lo puedo dejar creado.)*

**Cómo verificar:** abrí el sitio, **aceptá las cookies**, y en GA4 → **Informes** → **Tiempo real** deberías verte como usuario activo (puede tardar hasta ~48 h en consolidar los informes normales, pero el tiempo real es inmediato).

---

## 3) Token de CAPI — se configura en el despliegue (GCP, con Duvan)

**Por qué:** además del Pixel del navegador, los eventos se envían **desde el servidor** (Conversions API), con deduplicación por `event_id`. Ya está todo programado (`api/capi.js`); solo faltan las credenciales, que van en el **entorno de despliegue**.

> ⚠️ **Cambio de plan:** el despliegue es en **GCP**, no en Vercel. El token y el `META_PIXEL_ID` van en las variables de la función/servicio de CAPI (token en **Secret Manager**). El paso a paso está en **[`DESPLIEGUE-GCP.md`](DESPLIEGUE-GCP.md)** (§5 y §6).

> 🔒🚨 **Rotar el token:** el token que se generó se compartió por chat, así que está **expuesto**. Antes de usarlo, **generá uno nuevo** (Meta Events Manager → dataset FACTURA_IA → Configuración → API de conversiones → **Generar token de acceso**) y **revocá el anterior**. El token nunca va en el repo ni por chat — solo en Secret Manager de GCP.

**Valores (para quien despliegue):**

| Variable | Valor |
|---|---|
| `META_PIXEL_ID` | `2238963863532324` |
| `META_CAPI_TOKEN` | *(token NUEVO, en Secret Manager)* |
| `META_TEST_EVENT_CODE` | *(opcional)* el código de "Probar eventos" |

**Cómo verificar (tras desplegar):** Meta Events Manager → **Probar eventos**, abrir el sitio, **aceptar cookies**, clic en un CTA de WhatsApp → el evento `Lead` llega **por navegador (Pixel) y por servidor (CAPI)**, marcado como **deduplicado**.

> Si no se configura el token, no pasa nada malo: `api/capi.js` responde "no-op" y el sitio sigue con el Pixel del navegador.

---

## 4) La imagen para compartir (og:image) — ✅ Resuelto

Se creó **`assets/og-facturaia.jpg`** (1200 × 630, ~67 KB): imagen de marca con el mensaje raíz *"Las reglas de Hacienda cambian…"* sobre el fondo morado, más la línea de confianza. Es exactamente el archivo que referencia el `<meta og:image>`, así que ya funciona.

**Cómo verificar (una vez publicado):** pegá el enlace en el **Sharing Debugger de Meta** (https://developers.facebook.com/tools/debug/) → *Scrape Again* para que actualice la vista previa.

---

## Checklist rápido

- [x] **1.** Pixel creado (`2238963863532324`), en el código y **conectado a la cuenta publicitaria** — el `META_PIXEL_ID` se pone en el entorno de GCP (tarea 3)
- [x] **2.** GA4 creado y `G-BTME51TFEN` pegado en el código — falta marcar `generate_lead` y `select_item` como evento clave en GA4
- [ ] **3.** Token de CAPI **nuevo** (el anterior quedó expuesto) + `META_PIXEL_ID`/`META_CAPI_TOKEN` en el entorno de GCP (Secret Manager) + probado con Test Events — ver [`DESPLIEGUE-GCP.md`](DESPLIEGUE-GCP.md)
- [x] **4.** `assets/og-facturaia.jpg` (1200×630) creado — verificar la vista previa en el Sharing Debugger tras publicar

> Estado: **1, 2 y 4 hechas** (pixel creado + conectado a la cuenta publicitaria, GA4 con ID en código, og:image listo). Queda: **marcar los 2 eventos clave** en GA4 cuando lleguen datos, y la **tarea 3 (token de CAPI)** que se hace en el despliegue de GCP con un token nuevo. Todo el despliegue está en [`DESPLIEGUE-GCP.md`](DESPLIEGUE-GCP.md).
