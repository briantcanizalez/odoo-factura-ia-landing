# Documentación del proyecto

Todo lo que no es código de la landing vive acá.

## Qué hay

| Archivo | Qué es |
|---|---|
| [`TAREAS-PENDIENTES.xlsx`](TAREAS-PENDIENTES.xlsx) | **El tablero de trabajo.** Todo lo que falta, con responsable, prioridad y estado. Es el archivo que hay que mantener al día |
| [`PENDIENTES-LEGAL.md`](PENDIENTES-LEGAL.md) | Los 17 puntos de contenido legal sin resolver, agrupados por responsable |
| [`brief/`](brief/) | El material de origen del rediseño. No se edita: es la referencia de por qué la página es como es |

## El Excel, hoja por hoja

**Resumen** — conteos por estado, por área y de tareas bloqueantes. Se actualizan solos al cambiar la columna Estado de la hoja Tareas. También cuenta los días que faltan para el 1 de diciembre.

**Tareas** — el listado completo. La columna Estado se elige de una lista: `Pendiente`, `En pausa`, `Bloqueado por terceros`, `Hecho`. Tiene filtros activados.

**Assets** — los 9 assets del brief de diseño y en qué quedó cada uno.

**Legal** — los 17 puntos, con la página y la sección exacta donde va cada uno.

**Avances** — lo entregado hasta la fecha, commit por commit. Es la base para el informe a Rafael.

## La carpeta brief

| Archivo | Qué es |
|---|---|
| `deck-rediseno-landing.html` | Deck de 15 slides: el storytelling del rediseño y la especificación de los 9 assets. Se abre en el navegador y se navega con las flechas |
| `contexto-rediseno-landing.md` | El documento largo: auditoría UX, riesgos de claim corregidos, estructura, decisiones de precio y notas técnicas |
| `factura-ia-landing-v2_1.html` | La versión de referencia del HTML. Conserva los cuatro marcadores `.rev` de datos por confirmar, que en el repo ya se resolvieron |

## Fuera de esta carpeta

- [`../README.md`](../README.md) — cómo está construido el sitio, configuración, analítica y deploy
- El historial de `git log` — cada commit explica qué se cambió y por qué
