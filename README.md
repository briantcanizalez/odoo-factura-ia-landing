# Odoo Factura IA — Landing

Sitio de marketing de **Factura IA** (Grupo Consiti S.A. de C.V.), facturación electrónica DTE para El Salvador.

**Producción:** https://odoo-factura-ia-landing.vercel.app

## Páginas

| Ruta | Archivo | Contenido |
|------|---------|-----------|
| `/` | `index.html` | Landing completa: hero, cómo funciona, calculadora de plan, contadores, respaldo, DTE 2.0, migración, tabla de planes, testimonios, FAQ |
| `/terminos` | `terminos.html` | Términos del servicio |
| `/privacidad` | `privacidad.html` | Aviso de privacidad |
| `/sla` | `sla.html` | Niveles de servicio |

> Las rutas `/consiti-ai`, `/servicios` y `/faq` existieron hasta el rediseño v2 y hoy responden **301** hacia el index (ver `vercel.json`). Su contenido vive en la rama `claude/odoo-factura-ctas-visibility-085889`.

## Stack

HTML/CSS/JS **estático, sin build ni dependencias**. El index lleva CSS y JS embebidos; las páginas legales comparten `assets/legal.css` y `assets/legal.js`.

Tipografías (Google Fonts): **Archivo** (títulos), **Instrument Sans** (texto), **JetBrains Mono** (etiquetas). Las legales suman **Hanken Grotesk**.

## Estructura

```
├── index.html            # Landing
├── terminos.html         # Legales
├── privacidad.html
├── sla.html
├── assets/
│   ├── favicon.svg           # Favicon de marca
│   ├── factura-ia-logo.svg   # Logo (header/footer de las 4 páginas)
│   ├── firma.png             # Trazo animado del hero
│   ├── legal.css             # Estilos de las páginas legales
│   └── legal.js              # Menú móvil + índice lateral de legales
├── api/
│   └── capi.js           # Endpoint Meta Conversions API (serverless)
├── vercel.json           # cleanUrls + redirects de rutas retiradas
└── README.md
```

## Marca

Morado `#5216E7` · tinta `#140A2E` · noche `#0A0616` · nube `#F6F4FF` · sello `#0E9F63`. Los CTA de WhatsApp usan verde `#25D366`. Todas las variables están en el `:root` del `<style>` de `index.html` y en `assets/legal.css`.

## CTAs a WhatsApp

Todo CTA lleva a WhatsApp. Cualquier elemento con **`data-wa="<id>"`** recibe el `href` por JS y dispara el evento `Lead`.

El `id` selecciona el mensaje precargado en el objeto **`MENSAJES`** (al final de `index.html`), lo que permite saber desde qué parte de la página escribió la persona: `hero`, `contadores`, `dte20`, `migracion`, `plan-starter`…`plan-enterprise`, `cierre`, `footer`, `flotante`.

## Cómo cambiar precios

Los precios están en **dos lugares** de `index.html` y deben coincidir:

1. **`PLANES`** — array del `<script>` final que alimenta la calculadora (`n`, `p`, `impl`, `d`, `wa`).
2. **`VALOR_CTA`** — mapa que le pone `value` al evento `Lead` de Meta. Si no se actualiza, la optimización de campañas trabaja con valores viejos.

Además está la tabla comparativa (sección `#tabla`, HTML plano) y el JSON-LD `Product` del `<head>` (`lowPrice` / `highPrice`).

## Configuración

- **`WA`** — número destino de los CTA (formato internacional sin `+`). Está en el `<script>` final de `index.html`; en las legales va en los `href` directos.
- **Pixel de Meta** — el ID `27890392917235121` está en el `<head>` de las 4 páginas, en **dos lugares por página**: `fbq('init', …)` y el `<img>` del `<noscript>`.

## Conversions API (CAPI · server-side)

Además del Pixel del navegador, los eventos se envían desde el servidor vía `api/capi.js` con **deduplicación por `event_id`** (el mismo ID va al Pixel y a CAPI, así Meta no cuenta doble). Mejora la señal frente a iOS, bloqueadores y cookies.

Eventos que se disparan:

| Evento | Cuándo |
|--------|--------|
| `PageView` | Carga de cualquier página (desde el `<head>`) |
| `Lead` | Clic en cualquier CTA a WhatsApp, con `content_name`, `value` y `currency` |
| `ViewContent` | Cuando la sección de precios entra en pantalla (30% visible, una sola vez) |

Se activa con variables de entorno en Vercel (Settings → Environment Variables). **Nunca en el repo:**

| Variable | Valor |
|----------|-------|
| `META_PIXEL_ID` | `27890392917235121` |
| `META_CAPI_TOKEN` | Token de acceso de Meta (secreto) |
| `META_TEST_EVENT_CODE` | *(opcional)* código de "Probar eventos" |

Sin estas variables `api/capi.js` responde no-op y el sitio sigue funcionando con el Pixel del navegador. Tras configurarlas hay que hacer **redeploy**.

## Deploy

Sitio estático en **Vercel**, conectado a este repo de GitHub. **Push a `main` → deploy de producción automático.** No requiere build.

## Pendientes

- `canonical` y `og:url` están comentados en las 4 páginas, a la espera de confirmar el dominio definitivo.
- Falta el archivo `assets/og-facturaia.jpg` (1200×630) que referencia el `og:image` del index.
