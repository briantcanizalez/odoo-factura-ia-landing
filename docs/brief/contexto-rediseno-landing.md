# Rediseño de la landing de Factura IA — Contexto completo

**Proyecto:** Landing de facturación electrónica DTE
**Empresa:** Grupo Consiti S.A. de C.V.
**Fecha:** 28 de julio de 2026
**Estado:** v2 construida · pendiente de 9 assets y 4 confirmaciones internas

**Archivos:**

| Archivo | Qué es |
|---|---|
| `factura-ia-landing-v2.html` | Versión vigente. Un solo archivo, sin dependencias de build |
| `factura-ia-landing.html` | v1, conservada como referencia |
| `deck-rediseno-landing.html` | Deck de 15 slides con el storytelling y el brief de assets |
| `contexto-rediseno-landing.md` | Este documento |

**Punto de partida:** `https://odoo-factura-ia-landing.vercel.app/`

---

## 1. Por qué se rehízo

### El contexto de mercado

La facturación electrónica lleva dos años siendo obligatoria en El Salvador. En ese periodo aparecieron muchos sistemas construidos por una sola persona, que funcionaron el primer año y después dejaron de actualizarse. Dos hechos abrieron una ventana comercial con fecha de vencimiento:

1. **Normativa de Cumplimiento DTE 2.0**, publicada por el Ministerio de Hacienda el **25 de mayo de 2026**, en sustitución de la 1.2. Las empresas que usan el Sistema de Transmisión DTE deben adaptar sus soluciones **antes del 1 de diciembre de 2026**. Un sistema que no se adapte empieza a recibir rechazos y el negocio no puede facturar.
2. **Cambio de Plataforma**: desde mayo de 2026 el portal de Hacienda habilita a los emisores de DTE a migrar de proveedor. Por primera vez cambiarse es un trámite normal.

Resultado: los clientes de esos sistemas se están quedando sin quién los actualice, y ahora pueden irse. Ese es el argumento central de la nueva página.

### El cambio de posicionamiento

| | |
|---|---|
| **Antes** | "Factura más rápido con Inteligencia Artificial" |
| **Ahora** | "Facturá electrónico sin volverte experto en nada" + una empresa con 12 años detrás |

El titular anterior vendía una función que además no calzaba con el producto: la IA en producción carga facturas de compra, no acelera la emisión. El diferenciador real hoy es la permanencia y el soporte, no una capacidad técnica.

---

## 2. Problemas encontrados en la versión original

### Riesgos de claim (corregidos)

| Hallazgo original | Corrección aplicada |
|---|---|
| "+3,500 empresas facturan con nosotros" | **+500** facturando con nosotros / **+3,500** atendidas por Grupo Consiti en 12 años. Son dos cifras distintas y no se pueden mezclar |
| "Autorizados por el Ministerio de Hacienda" | "**Emisor autorizado ante Hacienda**". Hacienda autoriza al contribuyente como emisor, no al proveedor; Consiti gestiona ese trámite |
| "99.9% de disponibilidad en Google Cloud" | Retirado. Ese es el SLA de Google, no el de Consiti. Quedó "infraestructura en Google Cloud" |
| "Respuestas inmediatas" | "Respondemos el mismo día en horario de oficina". Medible |
| Testimonios con iniciales sin empresa ("María R.") | Retirados y reemplazados por marcadores de asset con regla de publicación |
| Contadores en vivo con números fijos | Conectados a endpoint real con fallback a guiones. Nunca números inventados |
| Feed con razón social de clientes reales | Anonimizado a giro + municipio |
| "Odoo Factura IA" como nombre de producto | Renombrado a "Factura IA de Grupo Consiti" + disclaimer de marcas en el pie |

### Riesgo de datos de clientes

El panel original mostraba entradas del tipo `Farmacia El Carmen · Crédito Fiscal · DTE-01-2077 · San Salvador`. Publicar razón social junto con tipo de documento y correlativo:

- entrega la cartera de clientes a la competencia, nombre por nombre;
- expone información fiscal de terceros sin su consentimiento.

Si esos datos no eran reales, el problema es mayor: son negocios nombrados que pueden no ser clientes.

**Regla vigente:** el feed muestra únicamente **giro + municipio + tipo de documento**. Nunca razón social ni correlativo completo de un cliente real sin consentimiento por escrito.

### Riesgo de marca

La política de marca de Odoo restringe el uso de "Odoo" en nombres de producto y dominios, incluso para partners. El producto se renombró y el pie incluye el disclaimer correspondiente.

---

## 3. Auditoría UX y estructura

### Público objetivo

| | Dueño de PyME | Contador / despacho |
|---|---|---|
| Perfil | Ferretería, farmacia, restaurante. 40–60 años. Poco técnico | Lleva de 5 a 40 empresas. Técnico en lo fiscal |
| Decide por | Precio, facilidad, que alguien contesta | Anexos, libros, Excel, **multi-empresa** |
| Miedo dominante | "No voy a poder usarlo" | "Me va a desordenar el cierre" |
| Cómo llega | WhatsApp o Facebook, en celular | Referencia de otro contador |
| Valor | Un cliente | **Trae ~30 clientes** |

El contador es el canal de distribución más rentable y en la versión original no había una sola línea dirigida a él.

### Hallazgos principales

1. **Nunca se veía el producto.** Cero capturas, cero video, en 15 secciones. Para este comprador el miedo dominante no es la confiabilidad sino "¿yo voy a poder usarlo?", y ese miedo no se disuelve con argumentos de solidez: se disuelve viendo una pantalla simple.
2. **El orden estaba invertido.** La pregunta "¿me van a dejar botado?" se contestaba cuatro veces; "¿qué es y cómo se ve?", ninguna. El precio estaba en la sección 10 de 15.
3. **Jerga sin traducir.** "DTE" aparecía ~20 veces sin explicarse. El bloque de la Normativa 2.0 (UUID v4, ERET, JSON firmado, sujeto excluido) producía el efecto contrario al buscado: le demostraba al dueño que el tema le queda grande.
4. **Registros mezclados**: voseo, tuteo e imperativos peninsulares en la misma página.
5. **Columna negativa riesgosa.** Cinco filas de negativo leen como ataque y generan defensa: el "programador" aludido puede ser el sobrino o el contador del cliente. Además es material capturable, y Consiti es proveedor del Estado.
6. **Móvil roto.** El menú no existía (`display:none` sin hamburguesa). La comparación de dos columnas se apilaba y dejaba de ser comparación. La franja de una línea era scroll horizontal que muchos usuarios nunca descubren.
7. **Fricción de conversión.** Cinco planes con listas en cadena ("todo lo de X, más"). "DTE/mes" no es una unidad que el cliente maneje. El formulario competía con el WhatsApp y perdía. Nada de autoservicio: todo lead consumía tiempo de una persona.
8. **Sin horario publicado.** Si alguien escribe un domingo y nadie contesta, la promesa de soporte se rompe en el primer contacto, que es el peor lugar posible dado que el soporte es *el* argumento de la página.
9. **Legibilidad.** Texto secundario muy claro para un público que promedia 40–60 años leyendo en celular a plena luz.

---

## 4. Estructura de la v2

| # | Sección | Ancla | Pregunta que cierra |
|---|---|---|---|
| 1 | Hero + captura del sistema | `#top` | ¿Qué es y cómo se ve? |
| 2 | Cómo funciona: 3 pasos + video | `#como-funciona` | ¿Es difícil? |
| 3 | Calculadora de precio | `#precio` | ¿Cuánto me cuesta? |
| 4 | El sistema por dentro | — | ¿Me sirve a mí? |
| 5 | Para contadores | `#contadores` | Público #2 |
| 6 | Una empresa detrás | `#respaldo` | ¿Me van a dejar botado? |
| 7 | Normativa DTE 2.0 | `#normativa` | ¿Y el 1 de diciembre? |
| 8 | Cambiar de proveedor | `#cambiar` | ¿Cómo me salgo del otro? |
| 9 | Cómo arranca | — | ¿Quién me enseña? |
| 10 | Tabla completa de planes | `#tabla` | Detalle para contadores |
| 11 | Testimonios | — | ¿Alguien como yo? |
| 12 | FAQ | `#faq` | Objeciones finales |
| 13 | Cierre | — | Conversión |

### Cambios estructurales

**Calculadora en lugar de cinco tarjetas.** La pregunta es "¿cuántas facturas emitís en un día normal?" — la unidad que el cliente sí maneja. Devuelve plan, precio, implementación y un botón de WhatsApp con el mensaje ya redactado. Los cinco planes siguen existiendo en la tabla comparativa. Esto también eliminó el formulario redundante: la calculadora es el calificador.

**Checklist en lugar de columna negativa.** Cinco preguntas "para hacerle a cualquier proveedor, incluidos nosotros", con la respuesta de Consiti al lado. Convierte igual, no obliga al cliente a admitir un error y no es capturable como ataque. Cierra con: *"pedí las respuestas por escrito"*.

**Jerga en acordeón.** El detalle técnico de la 2.0 vive en un `<details>` titulado "para tu contador o tu programador". Arriba queda español simple.

**Sección de contadores.** Multi-empresa, anexos en Excel, todos los documentos, soporte que no les cae a ellos, y programa de referidos.

**Móvil.** Hamburguesa funcional con drawer, franja que envuelve, tabla con scroll y primera columna fija, feed que colapsa a una tarjeta.

**Feed fuera del hero.** Bajó a la sección de empresa, compacto y anonimizado.

**Otros.** "¿Qué es un DTE?" explicado una vez en lenguaje llano. Voseo consistente. Grises oscurecidos. Horario de atención junto a cada CTA principal.

---

## 5. Assets pendientes

| # | Asset | Especificación | Prioridad |
|---|---|---|---|
| 01 | Captura de emisión de factura (hero) | 1200×900 PNG/WebP @2x · pocos campos + botón "Emitir" · datos ficticios · ideal laptop + celular | **Máxima — bloquea publicación** |
| 02 | Video emitiendo una factura | 30–45 s · 1920×1080 · MP4 + WebM · autoplay silencioso en bucle · subtítulos · poster obligatorio · ≤3 MB | **Máxima — bloquea publicación** |
| 03 | Antes/después carga de compras | 1200×900 o GIF del drag & drop · proveedores inventados | Alta |
| 04 | Anexos de IVA y libros | 1200×900 · que se lean las columnas · cifras de ejemplo | Alta |
| 05 | Mockup vista móvil | 900×900 PNG transparente · confirmar que la vista existe | Media |
| 06 | Selector multi-empresa | 1200×900 · nombres inventados · si la función no existe, NO hacer mockup falso | Alta |
| 07 | Testimonio de alguien que migró | Foto 400×400 · nombre, cargo, empresa, municipio · consentimiento escrito | **Máxima** |
| 08 | Testimonio de contador | Foto 400×400 · despacho y nº de empresas · consentimiento escrito | Alta |
| 09 | Testimonio de dueño PyME | Foto 400×400 · negocio y municipio · consentimiento escrito | Media |
| — | `og:image` | 1200×630 JPG | Media |

Cada bloque naranja del HTML contiene su especificación completa. Los marcadores usan la clase `.asset` y se borran al reemplazarlos por el asset real.

### Regla de publicación de testimonios

- Tres firmados → se publican tres.
- Dos → se publican dos y se ajusta la grilla. Dos reales pesan más que seis anónimos.
- Cero → **se borra la sección completa** hasta tenerlos.
- Iniciales sin empresa no son una opción.
- Opcional y más fuerte: video vertical de 20 s grabado con celular, 1080×1920.

---

## 6. Datos por confirmar antes de publicar

Marcados en el HTML con la clase `.rev` (subrayado punteado naranja, nota en el `title`).

| # | Dato | Por qué bloquea | Dueño |
|---|---|---|---|
| 1 | ¿Existe el multi-empresa? ¿En qué planes? | Toda la sección de contadores se apoya en eso. Si no existe hay que reescribirla y cambia el asset 06 | Luis Portillo |
| 2 | Mecánica del programa de referidos | Sin beneficio concreto no convierte; mejor quitar el bloque | Comercial |
| 3 | Horario real de soporte (hoy figura L–V 8:00–17:00) | Aparece tres veces; sostiene el argumento central | Soporte |
| 4 | Precio por factura excedente (hoy $0.03 + IVA) | Resuelve el salto $59.99 → $150 sin sexto plan | Finanzas |

---

## 7. Decisiones de producto y precio incorporadas

- **Precio de excedente** `$0.03 + IVA` por factura adicional, sin suspensión del servicio. A ~3,000 facturas Enterprise ya sale más barato, así que el upgrade se justifica solo y no hace falta un sexto plan.
- **Badge "Recomendado" en Advanced** en lugar de "Más vendido" en Professional: ancla hacia arriba sin afirmar algo falso.
- **Plan anual**: −15% + implementación gratis.
- **Bug corregido**: en el Starter original, exportación, sujeto excluido, retención y Excel aparecían como incluidos y a la vez Professional los vendía como novedad. Se asumió que eran exclusiones. **Confirmar.**
- **Migración sin costo** como gancho de captación, apoyada en el Cambio de Plataforma de Hacienda.

---

## 8. Notas técnicas

### Feed "Facturación en vivo"

Bandera `MODO_DEMO` en el script:

- `true` (actual): rota ejemplos anónimos y muestra la etiqueta "Vista de ejemplo". Publicable sin riesgo.
- `false`: consume `GET /api/dte/recientes`, quita la etiqueta y pinta datos reales.

Contrato esperado del endpoint:

```json
{
  "total_hoy": 312,
  "latencia_ms": 1800,
  "items": [
    { "giro": "Farmacia", "municipio": "San Salvador",
      "tipo": "Crédito Fiscal", "correlativo": "DTE-01-2077" }
  ]
}
```

El backend debe entregar los datos **ya anonimizados**. Si el endpoint no responde, los valores quedan en guiones: nunca se inventan números.

### Atribución

Cada CTA lleva `data-wa` con un mensaje de WhatsApp distinto y empuja `dataLayer` con `cta_id`. La calculadora empuja `calculadora_plan` con el plan elegido. Falta reemplazar los `dataLayer.push` por `gtag()` y `fbq()` cuando estén los IDs de GA4 y Meta Pixel.

### SEO

Title con keyword y precio, meta description, canonical, Open Graph, y JSON-LD de `Product` con `AggregateOffer` y de `FAQPage`. **Falta lo más importante: dominio propio.** Estar en `vercel.app` significa cero equity de SEO y resta credibilidad en un producto fiscal.

### Accesibilidad

`lang="es-SV"`, HTML semántico, `aria-label` en controles, `aria-expanded` en la hamburguesa, focus visible en todos los interactivos, `prefers-reduced-motion` respetado, contraste subido para lectura en exteriores.

---

## 9. Pendientes fuera de diseño

1. Dominio propio y redirecciones.
2. GA4 + Meta Pixel con los IDs reales.
3. Endpoint `/api/dte/recientes` y cambio de `MODO_DEMO` a `false`.
4. Páginas legales: `/terminos`, `/privacidad`, `/sla` (hoy son enlaces en el pie sin destino).
5. Guion de tres preguntas para pedir testimonios por WhatsApp a los clientes que migraron.
6. Confirmar el correo `facturacion@consiti.com`.

---

## 10. Orden de producción

| # | Entregable | Sin esto… |
|---|---|---|
| 1 | Asset 01 — captura del hero | La página no se publica |
| 2 | Asset 02 — video de 40 s | El argumento "es fácil" queda sin prueba |
| 3 | Asset 07 — testimonio de alguien que migró | El posicionamiento queda sin respaldo |
| 4 | Confirmar multi-empresa | La sección de contadores puede prometer algo inexistente |
| 5 | Assets 03, 04 y 06 | Se puede publicar sin ellos y agregarlos después |
| 6 | Dominio + analítica | Cero SEO y cero atribución |

Con los assets 01, 02 y 07 la página se puede publicar. El plazo del 1 de diciembre no es una fecha de marketing: es la fecha en que los sistemas que no se actualicen dejan de funcionar.
