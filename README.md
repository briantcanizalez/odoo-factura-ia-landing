# Odoo Factura IA — Landing

Sitio de marketing de **Odoo Factura IA** (Grupo Consiti S.A. de C.V.), la plataforma SaaS de facturación electrónica más rápida de El Salvador.

## Páginas

| Ruta | Archivo | Contenido |
|------|---------|-----------|
| `/` | `index.html` | Planes y precios (mensual/anual), beneficios, onboarding, testimonios, FAQ |
| `/consiti-ai` | `consiti-ai.html` | Consiti AI: IA aplicada a compras (JSON) e IVA (anexos y libros) |
| `/servicios` | `servicios.html` | Servicios adicionales + calculadora de carga de productos |
| `/faq` | `faq.html` | Preguntas frecuentes con buscador y filtros |

## Stack

HTML/CSS/JS estático (sin build). Tipografía Inter, sistema de marca Odoo Factura IA (negro · morado `#5216E7` · amarillo `#FFDD00`). Meta Pixel + eventos `Lead` en cada CTA a WhatsApp.

## Deploy

Sitio estático en Vercel. `vercel.json` activa URLs limpias (`/servicios` en vez de `/servicios.html`).

## Configuración

En cada HTML, al final del `<script>`:
- `WHATSAPP_NUMBER` — número de WhatsApp destino de los CTA.
- `PIXEL_ID` — dataset/pixel de Meta.
