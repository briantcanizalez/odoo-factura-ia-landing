# Guía de configuración — puesta en marcha de la analítica y compartir

**Para:** Briant · **Fecha:** 21 de agosto de 2026

Son 4 tareas. Ninguna es de diseño ni de código de fondo: son datos/credenciales que se pegan en su lugar. Orden sugerido: **1 → 2 → 3 → 4**.

> ⚠️ **Importante sobre el consentimiento de cookies.** El Pixel de Meta y GA4 **solo se disparan si el visitante ACEPTA las cookies**. Al probar cualquier cosa, primero hacé clic en **Aceptar** en el banner, o no vas a ver eventos. (Es lo que nos hace cumplir la ley; es correcto.)

---

## 1) Pixel ID de Meta — ✅ Resuelto

Resultó que **no existía un pixel real**: el `27890392917235121` era un placeholder, así que desde julio los eventos no llegaban a ningún lado. Se **creó el pixel** en el portafolio *Grupo Consiti Portfolio*:

> **Pixel de Factura IA: `2238963863532324`**

Ya quedó puesto en el código (`index.html` y `terminos.html`). **Faltan dos cosas, que hacés vos en Meta/Vercel:**
1. **Conectar el pixel a la cuenta publicitaria** para que los anuncios lo usen: config del dataset → **Socios / Cuentas publicitarias**, o asignarlo desde la cuenta publicitaria.
2. **Poner el mismo ID en Vercel** como `META_PIXEL_ID` (ver tarea 3).

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

## 3) Generar el token de CAPI y configurarlo en Vercel

**Por qué:** además del Pixel del navegador, los eventos se envían **desde el servidor** (Conversions API), con deduplicación por `event_id`. Mejora la señal frente a iOS, bloqueadores y cookies. Ya está todo programado (`api/capi.js`); solo faltan las credenciales.

> 🔒 **El token es una credencial secreta.** Se pega **directo en Vercel**, nunca en el repo ni por chat.

**Paso A — generar el token en Meta:**
1. **Meta Events Manager** → seleccioná el dataset de Factura IA.
2. **Configuración** (Settings) → sección **Conversions API** → **Generar token de acceso**.
3. Copiá el token (es largo).

**Paso B — configurar Vercel:**
1. Entrá a **Vercel** → tu proyecto → **Settings** → **Environment Variables**.
2. Agregá estas variables (Environment: **Production**, y si querés también Preview):

   | Variable | Valor |
   |---|---|
   | `META_PIXEL_ID` | `2238963863532324` |
   | `META_CAPI_TOKEN` | *(el token secreto que copiaste)* |
   | `META_TEST_EVENT_CODE` | *(opcional)* el código de "Probar eventos" |

3. **Guardá** y hacé **Redeploy** (Deployments → el último deploy → **Redeploy**). Las variables solo aplican tras un redeploy.

**Cómo verificar:**
- En Meta Events Manager → **Probar eventos** (Test Events), ingresá el `META_TEST_EVENT_CODE`, abrí el sitio, **aceptá cookies**, hacé clic en un CTA de WhatsApp.
- Deberías ver el evento `Lead` llegando **por navegador (Pixel) y por servidor (CAPI)**, marcado como **deduplicado** (no cuenta doble).

> Si nunca configurás el token, no pasa nada malo: `api/capi.js` responde "no-op" y el sitio sigue con el Pixel del navegador.

---

## 4) La imagen para compartir (og:image)

**Por qué:** hoy, al compartir el enlace por WhatsApp, Facebook o LinkedIn, **no se ve imagen de vista previa**. El `index.html` ya la referencia, pero **el archivo no existe todavía**:
```html
<meta property="og:image" content="/assets/og-facturaia.jpg">
```

**Qué se necesita:**
- Un archivo **exactamente** llamado **`og-facturaia.jpg`**, en la carpeta **`assets/`**.
- Tamaño **1200 × 630 px** (proporción 1.91:1).
- Peso ideal **< 1 MB**.
- Contenido sugerido: logo de Factura IA + una frase corta (ej. *"Facturación electrónica DTE, con una empresa detrás"*) sobre el fondo morado de marca. El texto, alejado de los bordes (por si se recorta).

**Dos caminos:**
- **Te la genero yo ahora** — armo una imagen 1200×630 con la marca y la dejo en `assets/`. *(Recomendado, es rápido.)*
- **La hace diseño** — solo tiene que guardarla como `assets/og-facturaia.jpg` con ese nombre exacto.

**Cómo verificar:** después de publicar, pegá el enlace en el **Sharing Debugger de Meta** (https://developers.facebook.com/tools/debug/) → *Scrape Again* para que actualice la vista previa.

---

## Checklist rápido

- [x] **1.** Pixel creado (`2238963863532324`) y puesto en el código — falta conectarlo a la cuenta publicitaria y ponerlo en Vercel
- [x] **2.** GA4 creado y `G-BTME51TFEN` pegado en el código — falta marcar `generate_lead` y `select_item` como evento clave en GA4
- [ ] **3.** `META_PIXEL_ID` + `META_CAPI_TOKEN` en Vercel + **redeploy** + probado con Test Events
- [ ] **4.** `assets/og-facturaia.jpg` (1200×630) existe y la vista previa se ve en el Sharing Debugger

> Las tareas **1, 2 y 4 (parte de código)** las puedo aplicar yo si me pasás los valores; la **3 (token)** y las creaciones de cuenta/propiedad las hacés vos, porque involucran credenciales.
