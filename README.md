# Odoo Factura IA — Landing

Sitio de marketing de **Factura IA** (Grupo Consiti S.A. de C.V.), facturación electrónica DTE para El Salvador.

**Producción:** https://odoo-factura-ia-landing.vercel.app

## Páginas

| Ruta | Archivo | Contenido |
|------|---------|-----------|
| `/` | `index.html` | Landing completa: hero, franja de campaña, cómo funciona, calculadora, contadores, respaldo, DTE 2.0, migración, tabla de planes, franja de confianza, FAQ |
| `/terminos` | `terminos.html` | **Términos y Condiciones del Servicio** — página legal única, incluye privacidad y cookies (§9) |

> Las rutas `/consiti-ai`, `/servicios` y `/faq` existieron hasta el rediseño v2 y hoy responden **301** hacia el index (ver `vercel.json`). Su contenido vive en la rama `claude/odoo-factura-ctas-visibility-085889`.
>
> Las páginas legales se **consolidaron en una sola** (`/terminos`, recortada a lo esencial y **sin SLA**). `/privacidad` y `/sla` responden **301** hacia `/terminos`. La privacidad y las cookies viven ahora en la sección §9 de esa página.

## Stack

HTML/CSS/JS **estático, sin build ni dependencias**. El index lleva CSS y JS embebidos; las páginas legales comparten `assets/legal.css` y `assets/legal.js`.

Tipografías (Google Fonts): **Archivo** (títulos), **Instrument Sans** (texto), **JetBrains Mono** (etiquetas). Las legales suman **Hanken Grotesk**.

## Estructura

```
├── index.html            # Landing
├── terminos.html         # Términos y Condiciones (incluye privacidad y cookies)
├── assets/
│   ├── favicon.svg           # Favicon de marca
│   ├── factura-ia-logo.svg   # Logo (header/footer)
│   ├── firma.png             # Trazo animado del hero
│   ├── consent.js            # Banner de cookies + carga del Pixel/GA solo con consentimiento
│   ├── legal.css             # Estilos de la página legal
│   └── legal.js              # Menú móvil + índice lateral
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
- **Pixel de Meta** — el ID `2238963863532324` va en `window.CONSENT_CFG.pixelId` del `<head>` (index y `/terminos`). **Ya no se carga al entrar:** lo carga `assets/consent.js` solo si la persona acepta las cookies (consentimiento previo).

## Consentimiento de cookies

`assets/consent.js` muestra un banner (Aceptar / Rechazar) y **carga el Pixel de Meta y GA4 únicamente si la persona acepta**. Sin aceptar, no se instala ninguna cookie de medición y `sendCAPI` no envía nada. La elección se guarda en `localStorage` y se puede cambiar desde «Preferencias de cookies» (footer del index y §9 de `/terminos`). Cierra el punto de cookies del aviso de privacidad.

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
| `META_PIXEL_ID` | `2238963863532324` |
| `META_CAPI_TOKEN` | Token de acceso de Meta (secreto) |
| `META_TEST_EVENT_CODE` | *(opcional)* código de "Probar eventos" |

Sin estas variables `api/capi.js` responde no-op y el sitio sigue funcionando con el Pixel del navegador. Tras configurarlas hay que hacer **redeploy**.

## Google Analytics 4

Instalado en el `<head>` de `index.html`, justo debajo del Pixel. **Falta pegar el Measurement ID** en la constante `GA4_ID` (formato `G-XXXXXXXXXX`).

Con `GA4_ID` vacío no se carga la librería de Google ni se dispara ningún evento: la página funciona igual. Mismo criterio defensivo que `api/capi.js`.

El Measurement ID **no es un secreto** — viaja en el HTML público y así debe ser. El único secreto del proyecto es el token de CAPI, que va en Vercel y nunca en el repo.

Eventos que se envían a GA4:

| Evento GA4 | Cuándo | Equivalente en Meta |
|---|---|---|
| `page_view` | Automático al cargar | `PageView` |
| `generate_lead` | Clic en cualquier CTA a WhatsApp, con `cta_id`, `item_name`, `value` y `currency` | `Lead` |
| `view_item_list` | La sección de precios entra en pantalla | `ViewContent` |
| `select_item` | La calculadora devuelve un plan | *(no tiene)* |

Los `dataLayer.push` originales (`clic_whatsapp`, `calculadora_plan`) se mantienen: no estorban y sirven si algún día entra un contenedor de GTM.

`generate_lead` y `select_item` conviene marcarlos como **conversión** en GA4 → Administrar → Eventos.

## Deploy

Sitio estático en **Vercel**, conectado a este repo de GitHub. **Push a `main` → deploy de producción automático.** No requiere build.

## Los cuatro datos que bloqueaban la publicación

El brief del rediseño (`contexto-rediseno-landing.md`, sección 6) marcaba cuatro datos
sin confirmar, señalados en el HTML con la clase `.rev`. Estado al 10 de agosto de 2026:

| Dato | Estado | Quién |
|---|---|---|
| ¿Existe el multi-empresa? ¿En qué planes? | **Confirmado: existe y está disponible.** Rafael Henríquez está al tanto | Briant Canizalez |
| Horario real de soporte (L–V 8:00 a.m. – 5:00 p.m.) | **Confirmado con Soporte.** Publicado en 2 lugares del index | Soporte |
| Mecánica del programa de referidos | Resuelto por eliminación: el bloque se quitó de la página | — |
| Precio por factura excedente ($0.03 + IVA) | Resuelto por eliminación: no aparece en la página | — |

Los marcadores `.rev` ya no hacen falta y la regla CSS se retiró. Si vuelve a aparecer
un dato sin confirmar, se marca de nuevo antes de publicarlo como un hecho.

## Otras decisiones tomadas

- **Los videos van sin subtítulos.** El brief del asset 02 pedía subtítulos por ser un
  video mudo. Se revisó ya montado y se resolvió dejarlo así: la grabación se entiende
  sin ellos y el pie de foto da el contexto. Decisión de Briant Canizalez, 10/08/2026.
- **Los datos de terceros van difuminados, no regrabados.** En los assets 03 y 04 se
  enmascaran los identificadores en vez de rehacer la grabación con datos demo. Queda
  sujeto a que Rafael no haga observaciones al revisarlo.

## Pendientes

> El listado completo, con responsable y prioridad, está en
> **[`docs/TAREAS-PENDIENTES.xlsx`](docs/TAREAS-PENDIENTES.xlsx)**.
> Lo de abajo es el resumen.

- **Testimonios (assets 07, 08, 09)** — la sección **se retiró de la página** el 10/08/2026, aplicando la regla de publicación del brief: con cero testimonios firmados se borra completa. En `index.html` quedó un comentario con las instrucciones para reponerla, y los estilos `.tst` siguen intactos. Hace falta, por cada uno: foto real de 400×400 con la cara visible, nombre completo, cargo, empresa, municipio y **consentimiento por escrito**. El 07 —alguien que se cambió desde otro proveedor— es el que el deck marca como bloqueante de lanzamiento.
- **Contenido legal incompleto** — 17 puntos sin resolver en privacidad, términos y SLA. Estaban escritos dentro de las páginas como recuadros visibles al público; se movieron a [`docs/PENDIENTES-LEGAL.md`](docs/PENDIENTES-LEGAL.md). **Bloquean la publicación en el dominio definitivo.**
- `canonical` y `og:url` están comentados en las 4 páginas, a la espera de confirmar el dominio definitivo.
- Falta el archivo `assets/og-facturaia.jpg` (1200×630) que referencia el `og:image` del index.
- **Asset 06** (selector multi-empresa) — pendiente de captura. La función existe, así que aplica el asset normal y no el reemplazo por foto del equipo que preveía el brief.
