# Factura IA · Landing v2
## Briefing de implementación

**Fecha:** 21 de agosto de 2026 · **Versión:** 2.1
**Para:** quien implemente los cambios en la landing
**Documentos relacionados:**
- `factura-ia-estrategia-comunicacion.html` — el deck de estrategia. **Léalo primero.**
- `factura-ia-landing-copy-v2.html` — el copy final, listo para pegar.

---

## Cómo usar este documento

Esto no es una lista de tareas para ejecutar a ciegas. Es el razonamiento detrás de cada cambio.

**Léalo completo antes de tocar código.** Varios cambios están conectados: si aplica uno sin el otro, la página queda peor que como está hoy. Las dependencias están marcadas.

Después de entenderlo, **aplique lo que a su criterio tenga sentido.** Usted conoce restricciones del código, del CMS y del calendario que este documento no considera. Si algo no se puede hacer, o se puede hacer mejor de otra forma, esa decisión es suya — solo asegúrese de entender qué argumento se pierde si lo omite.

Tres niveles:

| Nivel | Significado |
|---|---|
| 🔵 **Estructural** | Cambia el mensaje de la página. Si no se aplica, el resto pierde coherencia. |
| 🟡 **Recomendado** | Mejora concreta con fundamento. Aplique si está de acuerdo. |
| 🟢 **No tocar** | Ya funciona. Resista la tentación de "mejorarlo". |

> **Nota de alcance:** este documento no cubre integración, links, dominio ni infraestructura. La revisión se hizo sobre contenido y mensaje. Todo lo relativo a entorno se resuelve por separado.

---

# Parte 1 · El diagnóstico

Tres cosas explican por qué se toca lo que se toca. El deck de estrategia las desarrolla; acá va el resumen operativo.

### 1.1 La página le habla al segmento equivocado

El mensaje de entrada actual —*"Facturá electrónico sin volverte experto en nada"*— le habla a quien todavía no factura. Pero la facturación electrónica lleva dos años siendo obligatoria en El Salvador: ese segmento ya casi no existe y es el más frío que hay.

Los cuatro perfiles que llegan hoy, y **tres de ellos ya facturan**:

1. El que factura con un proveedor y no sabe si lo va a sostener ← *el más grande*
2. El que quedó con un sistema hecho por una sola persona que dejó de actualizarse
3. El contador que evalúa para su cartera completa
4. El que apenas va a empezar ← *el más chico*

### 1.2 Quien decide no es a quien se está persuadiendo

El pequeño empresario **no elige** sistema de facturación. Le pregunta a su contador.

Un despacho con 30 clientes decide 30 contratos. Hoy la sección de contadores tiene cinco bullets y un CTA genérico idéntico al de todos. No responde lo único que el despacho se pregunta: *¿qué gano yo?*

Es el hueco más caro de la página.

### 1.3 Tres secciones hacen el mismo trabajo

El peso no está en párrafos largos sueltos. Está en que el cuerpo, las "Cinco preguntas" y el FAQ dicen lo mismo tres veces.

| Mensaje | Veces que aparece |
|---|---|
| Normativa 2.0 incluida, sin costo, sin trámite | **8** |
| Soporte el mismo día / sin costo | **6** |
| Capacitación en vivo + 2 cursos grabados | **5** |
| Menos de 24 horas | **4** |
| Anexos y libros PDF/Excel | **3** |
| Excedentes con los 4 precios | **2** (verbatim) |
| Cambio de plataforma desde mayo 2026 | **2** (verbatim) |

El FAQ es el duplicado más caro: 7 de sus 9 preguntas repiten algo ya resuelto arriba, y le quita fuerza a las "Cinco preguntas" al recontarlas en tono plano 400 píxeles más abajo.

**Regla para desatascar:** cada promesa se dice **una vez, en el lugar donde más pesa**. Las demás secciones la asumen. Con eso la página baja ~35% de texto sin perder un solo argumento.

---

# Parte 2 · La estrategia en una página

Todo lo que sigue cuelga de esto. Está desarrollado en el deck.

### El problema de categoría

*Fácil de usar · seguro · con soporte · cumple con Hacienda.* Ningún competidor en El Salvador dice lo contrario. Son atributos de **paridad**: obligatorios de tener, inútiles para diferenciar.

> **La regla:** si el competidor puede decir la misma frase sin mentir, la frase no diferencia.

Los cuatro se quedan en la página —hay que tenerlos— pero ninguno puede ser el mensaje de entrada tal como está escrito.

### El territorio propio

La diferencia no es **cumplir**. Es **seguir cumpliendo**.

El mercado ya vivió la primera ola: decenas de sistemas nacieron con la obligatoriedad, cumplieron el primer año y se quedaron. La normativa de Hacienda no es un examen que se aprueba una vez — cambia, y alguien tiene que estar encima cada vez.

Cumplir es una foto. Seguir cumpliendo es una película, y solo la puede sostener quien tenga empresa y equipo detrás.

### Mensaje raíz

> ## Las reglas de Hacienda cambian. Su facturación no se debería enterar.

Dice "seguro" y "con soporte" sin usar ninguna de las dos palabras — que es exactamente lo que las vuelve creíbles.

### Los tres pilares

| Pilar | Qué decimos | Qué **no** decimos |
|---|---|---|
| **01 · Empresa detrás** | Hay una organización con años de operación, áreas separadas y gente con nombre. | El número de empleados. |
| **02 · Siempre al día** | Cada cambio normativo lo aplicamos nosotros, antes de la fecha, sin trámite del cliente. | "Autorizados por Hacienda". |
| **03 · Soporte que contesta** | Si algo falla un día de cierre hay un equipo del otro lado, no un formulario. | "Soporte 24/7". |

### El modelo de capas

Lo permanente arriba; las campañas en franjas que se retiran.

| Capa | Qué contiene | Caduca |
|---|---|---|
| **Permanente** | Mensaje raíz y tres pilares. Hero, "Quién está detrás", Cinco preguntas. | Nunca |
| **Campaña** | Franja del 1 de diciembre bajo el hero. | Diciembre 2026 |
| **Táctica** | Precio, planes, promociones. | Libre |

**El punto:** el 1 de diciembre es la urgencia más fuerte del año, pero no puede ser la tesis. Si la marca se construye sobre una fecha, hay que rehacerla cuando la fecha pase. Baja a evidencia del pilar 02.

---

# Parte 3 · Cambios estructurales 🔵

### 3.1 El hero cambia de ángulo

> **Depende de:** nada. Pero si lo aplica, **debe** aplicar también 3.2 y 3.3, o la página repite el mismo argumento dos veces.

**Antes:**
> Facturá electrónico sin volverte experto en nada

**Después:**

> **Eyebrow:** Empresa salvadoreña · 12 años · +500 empresas facturando
>
> **H1:** Las reglas de Hacienda cambian. Su facturación no se debería enterar.
>
> **Subhead:** Cada vez que el Ministerio de Hacienda actualiza la normativa, alguien tiene que ajustar el sistema, probarlo y dejarlo funcionando antes de la fecha. Ese alguien somos nosotros: una empresa salvadoreña con 12 años operando, equipo de soporte que contesta el mismo día, y su información respaldada en Google Cloud.
>
> **CTA primario:** Ver planes desde $14.99
> **CTA secundario:** Escríbanos por WhatsApp
>
> **Línea de apoyo:** Actualizaciones normativas incluidas en todos los planes · Soporte sin costo · Listo en menos de 24 horas

**Por qué así:** la primera frase nombra el miedo real del contribuyente sin amenazarlo, y la segunda lo resuelve. *"Su facturación no se debería enterar"* hace el trabajo de "seguro" y "con soporte" sin usar ninguna de las dos palabras.

> **Alternativas.** El deck tiene dos más (slide 12): la Opción B abre por el respaldo empresarial —*"Detrás de su facturación hay una empresa salvadoreña, no una aplicación"*— y la C por soporte. Si Rafa cambia de opinión, **solo se reemplaza el bloque del hero**: el resto del documento sirve igual, porque la estrategia es la misma.

### 3.2 La franja de campaña

**Nueva.** Banda delgada inmediatamente debajo del hero:

> **Ahora mismo:** Hacienda fijó el 1 de diciembre de 2026 para la Normativa DTE 2.0. Ya la estamos aplicando en todas las cuentas, sin costo y sin trámite de su parte. → **Ver el detalle**

**Por qué separada y no dentro del hero:** así se retira en diciembre sin tocar nada más. Marque el bloque como componente independiente para que quitarlo sea un solo cambio.

El contador de días puede ir acá si se quiere reforzar urgencia. Si va, tiene que calcularse en cliente contra el 1 de diciembre de 2026 y no escribirse fijo: un número desactualizado desmiente el argumento completo.

### 3.3 La sección Normativa se reduce a la ficha técnica

> **Depende de:** 3.1 y 3.2. Si no cambian el hero y la franja, **no** aplique esto.

Con el argumento normativo ya hecho arriba dos veces, los párrafos de apertura de esta sección sobran.

**Qué hacer:** eliminar los dos párrafos superiores. Dejar solo el encabezado *"El detalle técnico, para su contador o su programador"*, la lista de 8 bullets tal cual, y el CTA.

**Por qué:** esa lista es prueba de dominio real. Sin los párrafos redundantes encima, se lee como lo que es — la sección donde Consiti demuestra que sabe de qué está hablando.

### 3.4 Corregir la fila de badges

**Antes:** `Emisor autorizado ante Hacienda · Partner oficial de Odoo · Partner de Google Cloud · Listo en menos de 24 horas · Normativa DTE 2.0 incluida`

**Después:** `En producción con el Sistema de Transmisión DTE · Google Cloud · Soporte el mismo día · Listo en 24 horas`

Tres correcciones en una:

**El badge está mal.** "Emisor autorizado ante Hacienda" contradice el propio FAQ, que aclara —correctamente— que la autorización la otorga Hacienda **al contribuyente**, no al proveedor. Un contador detecta la inconsistencia en dos segundos, y es el lector que menos conviene perder.

**Odoo sale del hero.** El producto ya no se llama Odoo Factura IA. Meter otra marca en el primer scroll diluye el nombre propio. Se queda en el footer, donde ya está el disclaimer legal.

**No repetir el eyebrow.** El eyebrow del hero ya carga "12 años" y "+500 empresas". Los badges cubren lo que falta.

### 3.5 Eliminar del hero la línea de horario

`Te atendemos lunes a viernes, 8:00 a.m. a 5:00 p.m.` aparece en el hero y otra vez idéntica en el CTA final.

**Qué hacer:** sacarla del hero, dejarla solo abajo.

**Por qué:** en el primer scroll se está vendiendo respaldo y permanencia. El horario resta energía y adelanta una limitación antes de tiempo.

---

# Parte 4 · Contadores 🔵

Los cinco bullets actuales están bien escritos pero ninguno responde *¿qué gano yo?*

**Agregar como primer bullet:**

> **Cuenta de despacho, sin costo.** No paga por tener acceso a las empresas de sus clientes. Cada empresa paga su plan; su cuenta de administración va incluida.

**Reemplazar el bullet de anexos** (hoy duplica casi textualmente el de la sección "El sistema") por lo que sí es nuevo para el contador:

> **Los anexos de todos sus clientes en una sola descarga.** No entra empresa por empresa: filtra el período una vez y baja el cierre completo de su cartera, en PDF y Excel.

**Cambiar el CTA genérico** por uno propio:

> Quiero una cuenta de despacho

> ⚠️ **Decisión de Rafa, no del implementador:** si se define un esquema de comisión por referido, ese bullet es el que más contratos trae de toda la página. Es modelo comercial, no copy.

---

# Parte 5 · Precio y calculadora 🟡

### 5.1 Abrir con un plan preseleccionado

Hoy arranca vacía y exige interacción para mostrar precio.

**Qué hacer:** preseleccionar *"3 a 5 / ~100 al mes"* → Professional.

**Por qué:** el visitante ve una cifra concreta sin trabajo. Cada interacción exigida antes del precio es gente que se va.

### 5.2 Mostrar el costo real del primer mes

La implementación ($40–$100) está enterrada en la tabla, muy abajo.

**Qué hacer:** ponerlo en el resultado de la calculadora.

> Su plan recomendado: **Professional**
> $24.99 + IVA al mes · hasta 100 facturas
>
> *Primer mes: $24.99 + $50 de implementación (un solo pago) = $74.99 + IVA. Desde el segundo mes, $24.99 + IVA.*

**Por qué:** el comprador salvadoreño castiga duro el costo que aparece después. Decirlo primero convierte una objeción en prueba de honestidad — que es el eje narrativo de toda la página.

### 5.3 Advertir la limitación de Starter

**Qué hacer:** cuando la calculadora cae en Starter, mostrar:

> Con Starter no se generan anexos de IVA ni libros. Si su contador se los pide, el plan es Professional.

**Por qué:** el gancho es $14.99, pero ese plan no incluye lo que el contador necesita para el cierre. Alguien va a llegar por el precio y se va a sentir engañado en el primer mes. Advertirlo pierde algunos Starter, gana Professionals, y no quema la relación con el contador — que es quien recomienda al resto de su cartera.

### 5.4 Mensajes de WhatsApp con el plan adentro

Que los botones lleven a WhatsApp es integración. Lo que importa acá es **qué texto llega precargado**: el prospecto no debería tener que volver a explicar lo que ya eligió en la página. Ahí es donde se enfría.

| Origen | Mensaje precargado |
|---|---|
| Starter | Buen día. Emito unas 30 facturas al mes y quiero contratar el plan Starter de $14.99 + IVA. |
| Professional | Buen día. Emito unas 100 facturas al mes y quiero contratar el plan Professional de $24.99 + IVA. |
| Advanced | Buen día. Emito unas 500 facturas al mes y quiero contratar el plan Advanced de $34.99 + IVA. |
| Deluxe | Buen día. Emito unas 1,000 facturas al mes y quiero contratar el plan Deluxe de $59.99 + IVA. |
| Enterprise | Buen día. Emito más de 1,000 facturas al mes y quiero conocer el plan Enterprise. |
| Hero | Buen día. Vengo de la página de Factura IA y quiero información sobre los planes. |
| Franja normativa | Buen día. Quiero quedar cubierto para la Normativa DTE 2.0 antes del 1 de diciembre. |
| Cambiar proveedor | Buen día. Actualmente facturo con \_\_\_\_\_\_ y quiero saber qué implica cambiarme a Factura IA. |
| Contadores | Buen día. Soy contador y llevo la contabilidad de \_\_\_\_\_\_ empresas. Quiero ver la cuenta de despacho. |

> **Sobre el tratamiento aquí:** este texto lo envía el cliente, no Consiti. Va en neutro para no romper la coherencia. El guion bajo en los dos últimos es intencional: invita a completar el dato y arranca la conversación con información útil.

---

# Parte 6 · Cifras y pruebas 🟡

### 6.1 Quitar la tarjeta de "22 personas"

**Por qué:** quien la lee no piensa *"tienen equipo"*, piensa *"son 22"*. Y al lado de "+3,500 empresas atendidas" invita a una cuenta mental incómoda.

Lo que ese dato **sí** aportaba —que soporte, desarrollo e implementación son áreas distintas, y una sola persona no puede tener tres áreas— se conserva como cualidad en la respuesta #4 de las Cinco preguntas (6.4).

**Banda de cifras nueva:**

| Cifra | Etiqueta | Qué prueba |
|---|---|---|
| 12 | años de operación continua en El Salvador | Permanencia |
| +500 | empresas facturan con nosotros todos los días | Escala |
| **[X]** | DTE transmitidos a Hacienda | Volumen real |
| **[X]%** | aceptados por Hacienda en el primer intento | Confiabilidad |

Las dos primeras dicen quién es Consiti; las dos últimas, que la máquina funciona. Sin techo y sin invitar a comparar tamaño.

### 6.2 Sacar "+3,500 empresas atendidas" de la banda

**Por qué:** al lado de "+500 activas" se lee como fuga de clientes. Nadie sabe que las 3,500 son de consultoría del grupo y las 500 son de Factura IA. Un contador hace la resta y concluye que se fueron 3,000.

**Qué hacer:** moverlo a pie de la sección "Quién está detrás", no como tarjeta:

> Grupo Consiti ha atendido +3,500 empresas en 12 años en consultoría, software y nube.

### 6.3 Ajustar el párrafo de "No somos una app"

Como ya no hay headcount, cerrar apoyándose en permanencia:

> La facturación electrónica ya tiene dos años en El Salvador y en ese tiempo aparecieron muchos sistemas hechos por una sola persona: funcionaron el primer año y después dejaron de actualizarse. Nosotros llevamos 12 años operando sin interrupciones, y la Normativa 2.0 no es la primera vez que nos toca actualizar todo el parque de clientes a la vez.

La última frase hace el trabajo que hacía el "22": demuestra que ya lo hicieron antes. Y es la que más directamente sostiene el mensaje raíz.

### 6.4 Reescribir la respuesta #4 de las Cinco preguntas

**Antes:** *Nosotros: hay 22 personas y 12 años de operación. El sistema no depende de que alguien conteste.*

**Después:**
> *Nosotros:* el sistema lo mantiene un equipo de desarrollo, no su autor. Soporte, desarrollo e implementación son áreas distintas, con 12 años de operación continua detrás. Si alguien se va, su facturación no se entera.

**Por qué es más fuerte:** el problema del competidor no es tener poca gente, es **depender de una sola persona**. Atacar eso directo es mejor que oponer un headcount, y elimina la comparación de tamaño.

### 6.5 Micro-banda en "Cambiar de proveedor"

**Agregar, en línea y sin tarjetas:**

> **[X] migraciones** completadas desde otro proveedor · **[X] horas** de puesta en marcha promedio · **0 días** sin facturar

**Por qué:** la sección promete que cambiarse es rutina pero no lo prueba. Tres cifras bastan para que deje de parecer una aventura.

---

# Parte 7 · Limpieza de repeticiones 🟡

### 7.1 Anexos: un solo lugar

El bloque de "El sistema" y el bullet de contadores decían lo mismo casi palabra por palabra.

**En "El sistema"**, reescrito para el dueño:

> **El cierre deja de ser su problema**
> Anexos de IVA y libros de compras y ventas salen del sistema en PDF y Excel. Su contador entra, los descarga y trabaja. Se acabaron los correos de "mándeme el detalle del mes".

**En contadores**, lo que sí es nuevo para él: ver Parte 4.

### 7.2 FAQ: de 9 preguntas a 6

**Eliminar completas:**

| Pregunta | Dónde ya está resuelta |
|---|---|
| ¿Ya están listos para la Normativa DTE 2.0? | Hero + franja + sección normativa |
| Estoy con otro proveedor, ¿puedo cambiarme? | Sección cambiar (verbatim) |
| ¿En cuánto tiempo queda funcionando? | Badge + paso 02 |
| ¿La capacitación y el soporte tienen costo? | Cinco preguntas #5 |
| ¿Y si emito más facturas de las que incluye mi plan? | Nota bajo la tabla (verbatim) |

**Agregar dos** que hoy obligan a preguntar por WhatsApp:

> **¿Cómo y cuándo se paga?**
> Mensual, por transferencia o depósito. Le facturamos con crédito fiscal. La implementación se paga una sola vez, al inicio.

> **¿Qué necesito tener a mano para arrancar?**
> NIT y NRC de la empresa, su logo, y la lista de productos o servicios que factura. Nada más: el resto del papeleo ante Hacienda lo hacemos nosotros.

Las cuatro restantes se conservan, acortadas. Copy final en el HTML.

### 7.3 Condensar la nota bajo la tabla

Hoy son tres párrafos largos después de una tabla que ya cansó, con los cuatro precios de excedente repetidos verbatim en el FAQ.

**Reducir a:**

> **Si se pasa de las facturas incluidas** no lo suspendemos: cada factura extra se cobra según su plan (fila "Factura adicional"), desde $0.25 en Starter hasta $0.05 en Deluxe. Si el exceso se vuelve constante, le avisamos y lo movemos al plan más barato para usted.
>
> Todos los precios son + IVA y le generan crédito fiscal. Implementación, un solo pago. Sin permanencia forzada.

Los valores de la tabla no cambian.

### 7.4 Revisar el placeholder de Asset 06

En la sección de contadores hay un bloque con especificaciones internas de un asset pendiente ("Asset 06 · prioridad alta · 1200 × 900 px · nombres de empresa inventados"). En staging no molesta, pero **confirme que no viaje a producción**: está en la sección del segmento de mayor valor.

---

# Parte 8 · Conversión a usted 🟡

Toda la página pasa de voseo a usted, por el peso del segmento contable y de empresa mediana.

> ⚠️ **La advertencia importante:** el usted mal ejecutado se vuelve acartonado, y ahí se pierde justo la calidez que hace funcionar *"si sabe usar WhatsApp, sabe usar esto"*.
>
> **La regla:** frases cortas, cero pronombre "usted" explícito, y **nada** de *"le invitamos a"*, *"no dude en"* o *"estimado cliente"*. El usted salvadoreño es respetuoso y directo, no corporativo. Es el mismo tono con otro pronombre, no un registro nuevo.

### Clave de conversión

| Voseo | Usted | Voseo | Usted |
|---|---|---|---|
| Facturá | Facture | querés | quiere |
| Emitís | Emite | escribinos | escríbanos |
| Elegís | Elige | decinos | díganos |
| le das | le da | contanos | cuéntenos |
| mandás | manda | pedí | pida |
| tenés | tiene | usá | use |
| hacés | hace | deslizá | deslice |
| podés | puede | tu / tus | su / sus |
| sabés | sabe | vos | usted |

**Los imperativos llevan tilde:** Escríbanos · Díganos · Cuéntenos · Hágalas · Léalo · Descárguelo · Empiece · Deslice · Pida.

**Qué NO se convierte:**
- Los mensajes precargados de WhatsApp (los escribe el cliente, van en neutro)
- Los 8 bullets técnicos de la Normativa (son términos normativos)
- El footer legal y el disclaimer de marcas (no tienen voseo)

---

# Parte 9 · No tocar 🟢

Resista la tentación.

**Las "Cinco preguntas para hacerle a cualquier proveedor".** Es la mejor pieza de la página. Le entrega al comprador una herramienta que sirve incluso si no contrata, y encuadra la comparación en el terreno donde los competidores pierden. El cierre —*"pida las respuestas por escrito"*— es persuasión de primer nivel sin sonar a venta. Solo cambia la respuesta #4.

**El video de 29 segundos sin cortes.** La prueba más honesta que tiene la página. Demuestra simplicidad en vez de afirmarla, que es justamente lo que ningún competidor puede copiar con un adjetivo.

**El glosario de "qué es un DTE".** Resuelve la barrera de vocabulario sin condescender.

**Los 8 bullets técnicos de la Normativa.** Es donde Consiti demuestra dominio real.

**El tono directo.** El cambio a usted no debe volverlo formal.

---

# Parte 10 · Orden sugerido

**Primero — el mensaje**
1. Hero nuevo (3.1)
2. Franja de campaña como componente independiente (3.2)
3. Reducción de la sección Normativa (3.3)
4. Badges corregidos (3.4) y quitar el horario del hero (3.5)

*Hasta acá la página ya cambió de posicionamiento. Lo demás refuerza.*

**Segundo — lo que más convierte**
5. Contadores: cuenta de despacho y CTA propio (Parte 4)
6. Preseleccionar Professional (5.1) y desglose del primer mes (5.2)
7. Aviso de Starter (5.3)
8. Mensajes de WhatsApp con el plan adentro (5.4)

**Tercero — credibilidad**
9. Banda de cifras y remoción del "22" (6.1–6.4)
10. Micro-banda de migraciones (6.5)

**Cuarto — limpieza**
11. Anexos en un solo lugar (7.1)
12. FAQ reducido (7.2) y nota de tabla condensada (7.3)
13. Revisar Asset 06 (7.4)
14. Conversión completa a usted (Parte 8)

---

# Parte 11 · Pendientes que no son suyos

Los resuelve Rafa. Los bloques quedan marcados con `[X]`.

- [ ] **DTE transmitidos a Hacienda** — acumulado o mensual, el que resulte mayor
- [ ] **% de DTE aceptados en primer intento** — si anda en 99.x%, es la mejor cifra de toda la página: un contador entiende de inmediato qué significa un rechazo en día de cierre
- [ ] **Migraciones completadas desde otro proveedor**
- [ ] **Horas promedio de puesta en marcha** — si el promedio real es menor a 24, publicar el número real
- [ ] **Tiempo promedio de primera respuesta** — sustituye a "el mismo día", que es la frase más repetida y la más vaga de toda la página
- [ ] **Decisión sobre comisión por referido para contadores**
- [ ] **Asset 06** — pantalla del selector de empresas

> **Criterio para publicar cualquier cifra:** la página le dice al mercado *"pida las respuestas por escrito"*. Cada número publicado tiene que poder sostenerse si un cliente lo pide documentado. Publique solo lo defendible y redondee hacia abajo.

---

*Grupo Consiti S.A. de C.V. · Documento interno de implementación*
