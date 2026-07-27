# Odoo Factura IA — Landing

Sitio de marketing de **Odoo Factura IA** (Grupo Consiti S.A. de C.V.), la plataforma de facturación electrónica más fácil y rápida de El Salvador.

**Producción:** https://odoo-factura-ia-landing.vercel.app

## Páginas

| Ruta | Archivo | Contenido |
|------|---------|-----------|
| `/` | `index.html` | Planes y precios (mensual/anual), beneficios, DTE 2.0, onboarding, testimonios, FAQ |
| `/consiti-ai` | `consiti-ai.html` | Consiti AI: IA aplicada a compras (JSON) e IVA (anexos y libros) |
| `/servicios` | `servicios.html` | Servicios adicionales + calculadora de carga de productos |
| `/faq` | `faq.html` | Preguntas frecuentes con buscador y filtros por categoría |

## Stack

HTML/CSS/JS **estático, sin build ni dependencias**. Un solo archivo por página (CSS y JS embebidos en cada `.html`). Tipografía Inter (Google Fonts).

## Estructura

```
├── index.html            # Home / planes
├── consiti-ai.html       # Consiti AI
├── servicios.html        # Servicios
├── faq.html              # Preguntas frecuentes
├── assets/
│   ├── favicon.svg           # Favicon de marca (morado + documento + chispa)
│   ├── odoo-factura-logo.png # Logo horizontal (header/footer)
│   ├── consiti-isotipo.svg   # Isotipo Grupo Consiti
│   ├── firma.png             # Trazo animado del hero
│   ├── odoo-partner.png      # Badge Odoo Ready Partner
│   └── google-partner.png    # Badge Google Cloud Partner
├── api/
│   └── capi.js           # Endpoint Meta Conversions API (serverless, server-side)
├── vercel.json           # cleanUrls (URLs sin .html)
├── .gitignore
└── README.md
```

## Marca

Regla de color 60-30-10: **negro** 60% · **morado `#5216E7`** 30% · **amarillo `#FFDD00`** 10% (solo acentos: badges, ahorros, chips). Los **CTAs de WhatsApp usan verde `#25D366`** con texto blanco.

## CTAs a WhatsApp

Todo CTA lleva a WhatsApp. El destino y el evento se disparan por JS al final de cada página.

- Cualquier elemento con atributo **`data-wa`** abre WhatsApp al hacer clic y registra el evento `Lead` de Meta Pixel.
- Botón verde reutilizable: clase **`btn btn-wa`** (con el ícono de WhatsApp inline).
- El mensaje se arma según el contexto:
  - Botones de plan (dentro de `.plan`) → *"Hola, quiero CONTRATAR el plan X…"* (usa `data-plan-name` y el precio de la tarjeta).
  - Cualquier otro CTA (header, hero, bandas, FAB) → mensaje general de información.
- **Bandas de CTA** entre secciones: `<div class="cta-band">` (texto descriptivo afuera + botón corto `btn-wa`).
- **FAB**: botón flotante verde fijo abajo-derecha (`.fab`).

## Cómo cambiar los precios de los planes

En `index.html`, cada tarjeta de plan es un `<div class="plan" ...>` con estos atributos:

- **`data-monthly`** — precio mensual (ej. `59.99`). **Fuente de verdad**: el anual y la nota de ahorro se calculan solos.
- **`data-annual`** — **porcentaje de descuento** anual en decimal (`0.05` = 5%, `0.10` = 10%, `0.15` = 15%), *no* el precio anual.
- El número visible dentro de `<span class="amt">` debe coincidir con `data-monthly` (es el valor inicial antes de que el JS lo recalcule).

Ejemplo: para dejar Deluxe en $59.99/mes con 10% anual → `data-monthly="59.99" data-annual="0.10"` y `<span class="amt">59.99</span>`.

## Configuración

- **`WHATSAPP_NUMBER`** — número destino de los CTA (formato internacional sin `+`, ej. `50372559059`). Está en el `<script>` final de cada página.
- **Pixel de Meta** — el ID del Pixel vive en el snippet del `<head>` de cada página, en **dos lugares**: `fbq('init', '…')` y el `<img>` del `<noscript>` de respaldo. `PageView` se dispara ahí. Los eventos `Lead` (cada CTA a WhatsApp) y `ViewContent` (sección Planes) se disparan desde el `<script>` final.

> Nota: estos valores están **repetidos en las 4 páginas**. Si cambian, actualizar en los 4 archivos (y el ID del Pixel en sus 2 lugares por página).

## Conversions API (CAPI · server-side)

Además del Pixel del navegador, los eventos se envían **desde el servidor** vía `api/capi.js`, con **deduplicación por `event_id`** (el mismo ID va al Pixel y a CAPI, así Meta no cuenta doble). Esto mejora mucho la señal frente a iOS/bloqueadores/cookies.

**Flujo:** cada CTA genera un `eventID` → dispara `fbq('track','Lead', …, {eventID})` (navegador) y `POST /api/capi` (servidor) con el mismo ID + `_fbp`/`_fbc` para *match quality*.

**Se activa configurando variables de entorno en Vercel** (Settings → Environment Variables). **Nunca en el repo:**

| Variable | Valor |
|----------|-------|
| `META_PIXEL_ID` | `27890392917235121` |
| `META_CAPI_TOKEN` | Token de acceso de Meta (secreto) |
| `META_TEST_EVENT_CODE` | *(opcional)* código de "Probar eventos" |

Sin estas variables, `api/capi.js` responde no-op y el sitio sigue funcionando (solo con el Pixel del navegador). Tras configurarlas, **redeploy** y CAPI queda activo.

## Deploy

Sitio estático en **Vercel**, conectado a este repo de GitHub.

- **Push a `main` → deploy de producción automático.**
- `vercel.json` activa URLs limpias (`/servicios` en vez de `/servicios.html`).
- No requiere build ni variables de entorno.

## Migración a repo PROD

Al ser estático y sin dependencias, la migración es directa:

1. Copiar todos los archivos versionados al nuevo repo.
2. En Vercel, crear/enlazar el proyecto al nuevo repo de GitHub (framework: *Other*, sin build command, output = raíz).
3. Verificar el dominio de producción y que el **ID del Pixel de Meta** sea el correcto de la empresa (en el `<head>`: `fbq('init', …)` y el `<noscript>`).
