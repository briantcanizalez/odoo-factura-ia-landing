# Guía de configuración — puesta en marcha de la analítica y compartir

**Para:** Briant · **Fecha:** 21 de agosto de 2026

Son 4 tareas. Ninguna es de diseño ni de código de fondo: son datos/credenciales que se pegan en su lugar. Orden sugerido: **1 → 2 → 3 → 4**.

> ⚠️ **Importante sobre el consentimiento de cookies.** El Pixel de Meta y GA4 **solo se disparan si el visitante ACEPTA las cookies**. Al probar cualquier cosa, primero hacé clic en **Aceptar** en el banner, o no vas a ver eventos. (Es lo que nos hace cumplir la ley; es correcto.)

---

## 1) Confirmar el Pixel ID de Meta

**Por qué:** hoy el sitio usa el Pixel `27890392917235121`. Hay que confirmar que **ese es el pixel real y activo** de Factura IA (si no, los eventos van al vacío o a otro pixel).

**Pasos:**
1. Entrá a **Meta Events Manager** → https://business.facebook.com/events_manager
2. En la columna izquierda, seleccioná el **origen de datos / conjunto de datos** (dataset) de Factura IA.
3. Debajo del nombre aparece el **ID** (un número de ~16 dígitos). **Comparalo con `27890392917235121`.**

**Si coincide:** no hay que tocar nada. ✅

**Si es distinto:** hay que reemplazar el número viejo por el correcto en **3 lugares**:
- `index.html` → línea con `window.CONSENT_CFG = { pixelId: "…" }`
- `terminos.html` → misma línea `CONSENT_CFG.pixelId`
- Vercel → variable de entorno `META_PIXEL_ID` (ver tarea 3)

> Pedímelo y yo hago el cambio en el código; el de Vercel lo hacés vos.

---

## 2) Crear la propiedad GA4 y pegar el Measurement ID

**Por qué:** el código de Google Analytics 4 ya está instalado y probado, pero **falta el ID** para que funcione. Sin él, GA no carga (el sitio funciona igual).

**Pasos:**
1. Entrá a **Google Analytics** → https://analytics.google.com
2. **Administrar** (engranaje, abajo a la izquierda) → **Crear propiedad** (si no existe una para Factura IA).
3. Dentro de la propiedad: **Flujos de datos** → **Web** → creá el flujo con la URL del sitio.
4. Copiá el **Measurement ID**, que tiene el formato **`G-XXXXXXXXXX`**.
5. Pegalo en `index.html`, en esta línea del `<head>`:
   ```js
   var GA4_ID = "";   // <- pegar aquí el G-XXXXXXXXXX
   ```
   Queda `var GA4_ID = "G-XXXXXXXXXX";`
6. **Marcar los eventos como conversión:** en GA4 → **Administrar** → **Eventos** (o *Eventos clave*), marcá como conversión:
   - `generate_lead` (clic en cualquier CTA de WhatsApp)
   - `select_item` (cuando la calculadora devuelve un plan)

> El Measurement ID **no es secreto**: viaja en el HTML público y así debe ser.
> Nota: el ID solo se pega en `index.html` (la landing). Si algún día querés medir también `/terminos`, se pone su `CONSENT_CFG.ga4Id` — avisame.

**Cómo verificar:** abrí el sitio, **aceptá las cookies**, y en GA4 → **Informes** → **Tiempo real** deberías verte como usuario activo.

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
   | `META_PIXEL_ID` | `27890392917235121` (o el confirmado en la tarea 1) |
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

- [ ] **1.** Pixel ID confirmado en Meta Events Manager (¿coincide con `27890392917235121`?)
- [ ] **2.** Measurement ID `G-XXXXXXXXXX` pegado en `index.html` + `generate_lead` y `select_item` marcados como conversión en GA4
- [ ] **3.** `META_PIXEL_ID` + `META_CAPI_TOKEN` en Vercel + **redeploy** + probado con Test Events
- [ ] **4.** `assets/og-facturaia.jpg` (1200×630) existe y la vista previa se ve en el Sharing Debugger

> Las tareas **1, 2 y 4 (parte de código)** las puedo aplicar yo si me pasás los valores; la **3 (token)** y las creaciones de cuenta/propiedad las hacés vos, porque involucran credenciales.
