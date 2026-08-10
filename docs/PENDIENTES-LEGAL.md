# Pendientes de las páginas legales

Estos 17 puntos estaban escritos **dentro** de `privacidad.html`, `terminos.html` y
`sla.html` como recuadros visibles, más 15 insignias `POR COMPLETAR · LEGAL` al lado
de los títulos. Cualquier visitante los habría leído.

Se sacaron del HTML y quedaron acá. **Las páginas ya no los muestran, pero el
contenido sigue incompleto**: hay que resolver cada punto antes de publicar el sitio
en el dominio definitivo.

## Resumen por responsable

| Responsable | Puntos |
|---|---|
| Legal | 14 |
| Soporte (Rafa) | 3 |
| Finanzas | 1 (compartido con Legal) |
| Marketing | 1 (compartido con Legal, el de cookies) |

---

## privacidad.html — 6 puntos, todos de Legal

1. **§4 Base legal del tratamiento** — ajustar las bases de legitimación a la legislación salvadoreña de protección de datos personales vigente.
2. **§5 Cookies y tecnologías de seguimiento** — desarrollar la política de cookies (tipos, finalidad, duración) y el mecanismo de consentimiento previo, en coordinación con Marketing.
3. **§7 Transferencias internacionales** — precisar las salvaguardas aplicables a las transferencias internacionales de datos.
4. **§9 Incidentes de seguridad** — definir el procedimiento y los plazos de notificación de brechas conforme a la normativa aplicable.
5. **§14 Derechos del titular** — detallar el procedimiento para ejercer los derechos, la identificación requerida y el plazo de respuesta conforme a la ley.
6. **§15 Reclamaciones ante la autoridad** — indicar la autoridad de control competente en El Salvador y la vía de contacto.

> El punto 2 importa el doble: la página ya carga Meta Pixel, así que hoy se instalan
> cookies de seguimiento sin mecanismo de consentimiento previo ni política que las describa.

## terminos.html — 6 puntos, todos de Legal

1. **§2 Definiciones** — revisar y ampliar el catálogo de términos definidos que se usan a lo largo del documento.
2. **§6 Uso aceptable del servicio** — ampliar las conductas prohibidas y las consecuencias por incumplimiento (suspensión, terminación).
3. **§13 Propiedad intelectual y licencia de uso** — precisar el alcance y las restricciones de la licencia, la titularidad de personalizaciones y el tratamiento de la propiedad intelectual de terceros.
4. **§17 Garantías, limitación de responsabilidad e indemnización** — definir el alcance de las garantías, las exenciones («el servicio se presta "tal cual"»), los límites de responsabilidad (tope de indemnización, exclusión de daños indirectos o lucro cesante) y los supuestos de indemnización entre las partes, conforme a la ley salvadoreña.
5. **§21 Modificaciones a los términos** — definir el mecanismo y la antelación de notificación de cambios sustanciales al cliente.
6. **§23 Legislación y jurisdicción** — definir el mecanismo de resolución de controversias (tribunales competentes o arbitraje) y la sede.

> El punto 4 es el de mayor exposición: hoy el documento no pone ningún techo a la
> responsabilidad de Grupo Consiti.

## sla.html — 5 puntos

1. **§2 Niveles de prioridad y tiempo de respuesta** — *Rafa / Soporte*: los tiempos de la tabla son una propuesta basada en el estándar de la industria (AWS y Google Cloud). Ajustar según la capacidad real del equipo.
2. **§6 Escalamiento** — *Soporte*: definir la ruta y los responsables de escalamiento.
3. **§7 Disponibilidad del servicio y mantenimiento** — *Legal*: definir, si aplica, el objetivo de disponibilidad (porcentaje mensual) y la política de ventanas de mantenimiento.
4. **§12 Copias de seguridad y recuperación** — *Soporte / Legal*: definir los objetivos de recuperación (RTO/RPO) y la frecuencia de las copias, si se desean comprometer.
5. **§16 Créditos por incumplimiento** — *Legal / Finanzas*: definir si existirán créditos o compensaciones por incumplimiento, su cálculo y la forma de solicitarlos.

> El punto 1 es el más urgente de los tres: la tabla de tiempos de respuesta **ya está
> publicada** y es una promesa comercial. Si Soporte no puede sostener esos plazos, hay
> que bajarlos antes de que alguien los lea como compromiso.

---

## Otros pendientes del sitio

- **Dominio definitivo** (Duvan Rondo). Mientras no se confirme, `canonical` y `og:url` siguen comentados en las 4 páginas.
- **Assets 03 a 09** de `index.html`. Ver `ASSETS-PENDIENTES.md`.
