# Borradores legales para revisión

**Fecha:** 21 de agosto de 2026
**Para:** Legal (con apoyo de Rafa/Soporte y Finanzas donde se indica)
**Complementa:** [`PENDIENTES-LEGAL.md`](PENDIENTES-LEGAL.md) — allí está la lista; acá está el **texto propuesto** para cada punto.

> **Cómo leer esto.** Cada punto trae un **borrador de texto** listo para revisar. **No es asesoría legal** ni texto definitivo: lo redactó el equipo de la landing con base en estándar de industria y en la ley salvadadoreña vigente, para que Legal solo tenga que **revisar, ajustar y aprobar** en vez de partir de cero. Nada de esto debe publicarse en el dominio definitivo sin el visto bueno de Legal.
>
> 🟡 = **decisión de negocio** (la resuelve Briant / Rafa / Finanzas) · 🔴 = **necesita abogado** para firmarse.

## Marco legal de referencia (El Salvador)

- **Ley de Protección de Datos Personales**, Decreto Legislativo **N.° 144**, publicada el 15/11/2024, **vigente desde el 24/11/2024**.
- **Autoridad de control:** **Agencia de Ciberseguridad del Estado (ACE)**.
- **Derechos del titular:** acceso, rectificación, cancelación (supresión), portabilidad, oposición y derecho al olvido.
- **Notificación de brechas:** a la ACE y a los titulares afectados **dentro de 72 horas** desde que se conoce el incidente.
- **Sanciones:** de USD 408.80 a USD 16,352.00 según gravedad.

*(Estos datos son de fuentes públicas y deben confirmarse con Legal; ver Fuentes al final.)*

> **Estado del §5 (cookies):** ✅ **Resuelto en la página.** Se implementó consentimiento previo (el Pixel/GA ya no cargan sin aceptar) y la política de cookies quedó redactada en `privacidad.html`. Solo falta que Legal la revise.

---

# Aviso de Privacidad

## §4 · Base legal del tratamiento 🔴
**Hoy dice:** frase genérica (contrato, obligación legal, consentimiento).
**Propuesta:**
> El tratamiento de datos personales se realiza conforme a la Ley de Protección de Datos Personales de El Salvador (D.L. N.° 144, vigente desde el 24 de noviembre de 2024). Las bases de legitimación aplicables, según el caso, son: (a) la **ejecución del contrato** de prestación de servicios; (b) el **cumplimiento de obligaciones legales y fiscales**, en particular ante el Ministerio de Hacienda; y (c) el **consentimiento del titular** cuando resulte aplicable —por ejemplo, para las cookies de analítica del sitio (ver §5).

## §7 · Transferencias internacionales 🔴
**Hoy dice:** menciona que puede alojarse fuera del país.
**Propuesta:**
> Parte de la información se procesa en servidores de **Google Cloud** ubicados fuera de El Salvador. Estas transferencias se realizan con proveedores que aplican medidas de seguridad reconocidas internacionalmente (cifrado en tránsito y en reposo, certificaciones de seguridad) y se rigen por sus acuerdos de tratamiento de datos. Grupo Consiti transfiere únicamente la información necesaria para prestar el servicio.

## §9 · Incidentes de seguridad 🔴 *(plazo tomado de la ley)*
**Hoy dice:** informará "cuando así lo exija la ley".
**Propuesta:**
> Ante un incidente de seguridad que afecte datos personales, Grupo Consiti adoptará las medidas correctivas correspondientes y **notificará a la Agencia de Ciberseguridad del Estado (ACE) y a los titulares afectados dentro de un plazo máximo de 72 horas** desde que tenga conocimiento del incidente, conforme a la Ley de Protección de Datos Personales.

## §14 · Derechos del titular 🟡🔴
**Hoy dice:** lista derechos + correo, sin procedimiento ni plazo.
**Propuesta:**
> El titular puede ejercer sus derechos de **acceso, rectificación, cancelación (supresión), portabilidad y oposición**, así como el **derecho al olvido**, escribiendo a facturacion@consiti.com. Para atender la solicitud se verificará la identidad del titular (documento de identidad o datos que lo identifiquen como cliente/usuario). Grupo Consiti responderá dentro de **[X días hábiles]** desde la recepción de la solicitud completa.
>
> 🟡 **Definir:** el plazo de respuesta (sugerencia: 10 días hábiles, salvo que la ley fije otro).

## §15 · Reclamaciones ante la autoridad 🔴 *(autoridad tomada de la ley)*
**Hoy dice:** "autoridad competente" sin nombrar.
**Propuesta:**
> El titular tiene derecho a presentar una reclamación ante la **Agencia de Ciberseguridad del Estado (ACE)**, autoridad competente en materia de protección de datos personales en El Salvador conforme al D.L. N.° 144.
>
> 🔴 **Confirmar** con Legal la vía y los datos de contacto de la ACE.

---

# Términos del Servicio

## §2 · Definiciones 🟢
**Propuesta — agregar al catálogo actual:**
> - **Usuario:** persona autorizada por el Cliente para acceder al Servicio.
> - **Implementación:** configuración inicial y alta como emisor ante el Ministerio de Hacienda.
> - **Anexos y libros:** reportes fiscales (anexos de IVA, libros de compras y ventas) que genera la Plataforma.
> - **Normativa DTE:** las disposiciones del Ministerio de Hacienda sobre Documentos Tributarios Electrónicos, incluida la Normativa de Cumplimiento DTE 2.0.
> - **Datos del Cliente:** información y DTE que el Cliente carga o genera en la Plataforma.
> - **Plan / Suscripción:** modalidad contratada y su cuota mensual.

## §6 · Uso aceptable del servicio 🟢🟡
**Propuesta — ampliar la lista de prohibiciones y agregar consecuencias:**
> Además de lo ya indicado, el Cliente no debe: realizar ingeniería inversa, descompilar o copiar el software; sobrecargar, interferir o extraer datos de forma automatizada (scraping); usar datos de terceros sin la autorización o base legal correspondiente; ni eludir los límites del Plan contratado.
>
> **Consecuencias:** el incumplimiento podrá dar lugar a la **suspensión temporal** o a la **terminación** del servicio sin derecho a reembolso, sin perjuicio de las acciones legales que correspondan.
>
> 🟡 **Confirmar** las consecuencias exactas (suspensión inmediata vs. previo aviso).

## §13 · Propiedad intelectual y licencia 🔴
**Propuesta:**
> Grupo Consiti otorga al Cliente una licencia **limitada, no exclusiva, intransferible y revocable** para usar el Servicio durante la vigencia del contrato, exclusivamente para su operación interna. El software, su código, diseño y marcas son propiedad de Grupo Consiti o de sus licenciantes (incluida la plataforma **Odoo**, sujeta a sus propias licencias). Las **configuraciones y personalizaciones** desarrolladas para el Cliente pertenecen a Grupo Consiti, salvo pacto en contrario en el contrato. El Cliente no adquiere derecho de propiedad sobre el software y no podrá revenderlo, sublicenciarlo ni cederlo sin autorización escrita. Los **Datos del Cliente** son y siguen siendo del Cliente.

## §17 · Garantías, limitación de responsabilidad e indemnización 🔴🟡 — *el de mayor exposición*
**Hoy:** no hay ningún techo de responsabilidad.
**Propuesta (estructura estándar; el tope es decisión de negocio + abogado):**
> El Servicio se presta **"tal cual" y "según disponibilidad"**. Dentro de lo permitido por la ley, Grupo Consiti no otorga garantías implícitas de comerciabilidad o idoneidad para un fin particular, ni garantiza que el Servicio sea ininterrumpido o libre de errores.
>
> **Límite de responsabilidad:** en la máxima medida permitida por la ley salvadoreña, la responsabilidad total de Grupo Consiti frente al Cliente por cualquier reclamo relacionado con el Servicio se limita al **monto efectivamente pagado por el Cliente en los [3] meses anteriores** al hecho que originó el reclamo. Grupo Consiti **no será responsable por daños indirectos, incidentales, especiales, lucro cesante ni pérdida de datos**.
>
> **Exclusión:** nada en estos términos limita responsabilidades que la ley no permita excluir (por ejemplo, dolo o culpa grave).
>
> 🟡 **Decidir el tope:** propuesta 3 meses de lo pagado (alternativas: 6 o 12 meses). 🔴 **Abogado** debe validar el texto y su validez conforme a la ley salvadoreña.

## §21 · Modificaciones a los términos 🟡
**Propuesta:**
> Grupo Consiti podrá modificar estos términos. Los **cambios sustanciales** se notificarán con al menos **[30] días** de antelación por los medios de contacto registrados y/o mediante aviso en el sitio; los cambios no sustanciales rigen desde su publicación. El uso continuado tras la entrada en vigor implica aceptación.
>
> 🟡 **Definir:** días de antelación (sugerencia: 30).

## §23 · Legislación y jurisdicción 🟡🔴
**Propuesta — elegir una vía:**
> **Opción A (tribunales):** Estos términos se rigen por las leyes de El Salvador y cualquier controversia se someterá a los **tribunales competentes de San Salvador**, renunciando las partes a cualquier otro fuero.
>
> **Opción B (arbitraje):** …cualquier controversia se resolverá mediante **arbitraje** ante el Centro de Arbitraje de la Cámara de Comercio e Industria de El Salvador, conforme a su reglamento.
>
> 🟡 **Decidir A o B** (sugerencia: A — tribunales de San Salvador, más simple y barato para PyMEs). 🔴 **Abogado** confirma redacción.

---

# Niveles de Servicio (SLA)

## §2 · Tiempos de respuesta 🟡 — *Rafa, urgente (ya está publicado)*
**Hoy publicado:** Crítico 1 h · Alto 4 h · Medio 1 día · Bajo 2 días (hábiles).
**Acción:** 🟡 **Rafa/Soporte debe confirmar que el equipo sostiene esos tiempos.** Si no, bajarlos antes de publicar en el dominio definitivo (es una promesa comercial). Si se sostienen, no se cambia nada.

## §6 · Escalamiento 🟡
**Propuesta:**
> **Nivel 1** — Soporte (WhatsApp/correo): recibe y resuelve la mayoría de incidencias. **Nivel 2** — Especialista técnico: casos que requieren análisis o ajustes en la plataforma. **Nivel 3** — Líder de Soporte/Desarrollo: incidentes críticos o que superan los tiempos objetivo. Un incidente **Crítico** no resuelto en su tiempo objetivo se escala automáticamente al Nivel 2 y se informa al Cliente.
>
> 🟡 **Confirmar** con Soporte los responsables y los disparadores.

## §7 · Disponibilidad y mantenimiento 🟡
**Propuesta — elegir una vía:**
> **Opción A (compromiso):** Grupo Consiti procura una disponibilidad mensual del **[99.5%]**, excluyendo ventanas de mantenimiento programado (avisadas con anticipación) e interrupciones atribuibles a terceros (Hacienda, proveedores de nube) o al Cliente.
>
> **Opción B (sin cifra):** mantener el texto actual de "mejor esfuerzo" sin comprometer un porcentaje.
>
> 🟡 **Decidir** si se compromete un % (sugerencia: no comprometer cifra hasta tener medición propia; usar Opción B por ahora).

## §12 · Copias de seguridad y recuperación (RTO/RPO) 🟡
**Propuesta:**
> La información se respalda de forma automática. Objetivo de punto de recuperación (**RPO**) de **[24 horas]** y objetivo de tiempo de recuperación (**RTO**) de **[X horas]** ante un incidente mayor.
>
> 🟡 **Soporte define** los valores reales que puede sostener (o dejar el texto general actual si no se quieren comprometer cifras).

## §16 · Créditos por incumplimiento 🟡 — *Finanzas/Legal*
**Propuesta — elegir una vía:**
> **Opción A (sin créditos):** El SLA describe compromisos de servicio; no se otorgan créditos ni compensaciones monetarias por incumplimiento, en línea con la política de no reembolsos (Términos §9).
>
> **Opción B (con créditos):** definir un esquema (p. ej., X% de la cuota mensual por cada tramo de incumplimiento), su cálculo y cómo se solicita.
>
> 🟡 **Decidir** (sugerencia: Opción A por ahora, coherente con §9 de Términos).

---

# Resumen de decisiones que destraban todo

| # | Decisión | Quién | Sugerencia |
|---|---|---|---|
| 1 | ¿Soporte sostiene los tiempos del SLA (1h/4h/1d/2d)? | Rafa | Confirmar o bajar |
| 2 | Plazo de respuesta a derechos del titular | Legal | 10 días hábiles |
| 3 | Tope de responsabilidad (§17) | Briant + Abogado | 3 meses de lo pagado |
| 4 | Antelación de aviso de cambios (§21) | Briant | 30 días |
| 5 | Tribunales o arbitraje (§23) | Briant + Abogado | Tribunales de San Salvador |
| 6 | ¿Comprometer % de disponibilidad? | Briant/Rafa | No por ahora |
| 7 | RTO/RPO reales | Soporte | Definir capacidad real |
| 8 | ¿Créditos por incumplimiento? | Finanzas | No por ahora |
| 9 | Consecuencias de uso indebido (§6) | Legal | Suspensión / terminación |

Con esas 9 respuestas, se cierra el texto de casi todo; solo los puntos 🔴 (base legal, transferencias, brechas, IP, responsabilidad, jurisdicción, autoridad) necesitan además el visto bueno formal de un abogado.

---

## Fuentes (para verificación de Legal)

- Ley de Protección de Datos Personales — Asamblea Legislativa: https://www.asamblea.gob.sv/node/13376
- Análisis Central Law: https://central-law.com/el-salvador-nueva-ley-de-proteccion-de-datos-personales-claves-para-su-cumplimiento-y-aplicacion/
- Guía LatinAlliance (2026): https://latinalliance.co/2026/03/27/proteccion-datos-personales-el-salvador-lpdp-guia/
- Análisis ALTA Legal: https://altalegal.com/comunicacion/la-nueva-ley-salvadorena-de-proteccion-de-datos-personales/
