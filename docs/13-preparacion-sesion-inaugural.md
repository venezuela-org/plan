# Preparación de la sesión inaugural: lista de control

Uso interno de la coordinación. Marcar al verificar, no al empezar. Orden sugerido: primero lo que la demostración en vivo necesita, después lo que se muestra, por último las diapositivas.

## Ya hecho

- [x] Organización en GitHub (venezuela-org) con los repositorios `site` y `plan` publicados en Pages
- [x] Servidor de Discord de la red, con enlace de invitación vigente
- [x] Convocatoria enviada a la red (título, resumen, fecha, enlace de Meet, enlaces para crear cuentas)
- [x] Programa del curso (`programa.md`) y mapa (`mapa.svg`, `mapa.png`)
- [x] Laboratorio de Ideas: repositorio fuente privado con sitio, pruebas y guion de cifrado

## GitHub, lo que la demostración necesita

- [ ] Verificar la visibilidad y el estado de Pages de `redjiv-lab-acceso` (no aparece en la lista pública de la organización)
- [ ] Exigir verificación en dos pasos a todos los miembros (Settings de la organización, Authentication security)
- [ ] Permisos base: miembros con lectura; escritura por equipo
- [ ] Equipos: `coordinacion`, uno por línea (`track-a` a `track-f`), `laboratorio-de-ideas`
- [ ] Repositorio `.github` con el perfil público de la organización: README (qué es, cómo entrar, visión en dos párrafos), CODE_OF_CONDUCT.md, CONTRIBUTING.md, SECURITY.md
- [ ] Plantilla pública `plantilla-proyecto`: README con sección de autoría y CRediT, CITATION.cff, LICENSE (CC BY-SA 4.0 para texto y datos), LICENSE-CODE (licencia libre para código), carpetas data, docs, notebooks, meetings, acta de proyecto
- [ ] Plantilla privada `plantilla-dupla`: mismo esqueleto, visibilidad privada, regla escrita de cuándo se abre
- [ ] Plantillas de issue: tarea, propuesta de proyecto, pregunta técnica
- [ ] Etiquetas: `track-a` a `track-f`, `lab-de-ideas`, `primera-tarea`, `ayuda-bienvenida`
- [ ] Tablero de la organización con columnas Captadas, Con enfoque, Activo, Apuntando a salida, Entregado
- [ ] Tres a cinco issues de arranque por línea, pequeños y reales, etiquetados `primera-tarea`
- [ ] Discussions activadas en el repositorio `.github`
- [ ] Flujo de invitación listo para los co-dueños que se nombren en la sesión
- [ ] Cuenta de prueba (seudónimo) para la demostración: entra a la organización, toma un issue, abre un pull request

## Zenodo y ORCID

- [ ] Comunidad RedJIV en Zenodo, con el modelo de la comunidad lasf4ri: descripción, política de curación, logotipo
- [ ] Al menos dos personas más como administradoras de la comunidad
- [ ] Integración GitHub en Zenodo activada para `plantilla-proyecto` (la cuenta que demuestra debe ser administradora del repositorio)
- [ ] Ensayo completo en sandbox.zenodo.org: release en GitHub, DOI generado, registro aceptado en la comunidad
- [ ] Guía breve: crear las cuentas en cadena (ORCID, GitHub con ORCID en el perfil, Zenodo con "Sign up with GitHub" y ORCID enlazado, Discord)

## Discord, lo que se muestra

- [ ] Canales: anuncios (solo lectura), reglas, presentaciones, general, uno por línea A a F, laboratorio-de-ideas, oportunidades, resultados, ayuda-github; canal de voz para los encuentros
- [ ] Roles: coordinación, lead, miembro; verificación al entrar antes de ver los canales de trabajo
- [ ] Reglas publicadas: código de conducta, seudónimos bienvenidos, nada de datos de terceros, nada de información de víctimas sin verificar
- [ ] Mensaje fijado en cada canal de línea: qué hace, filtro del tablero, cómo tomar un issue
- [ ] Al menos dos co-anfitriones con permisos de administración
- [ ] Decidir si el enlace de invitación publicado en la página pública sigue siendo el vigente; si no, actualizarlo

## Guías breves (en el repositorio `.github`, en español)

- [ ] Crear las cuentas en cadena
- [ ] Primer pull request paso a paso, con capturas
- [ ] ORCID y CITATION.cff
- [ ] Licencias y atribución: CC BY-SA para texto y datos, licencia de código aparte, cómo atribuir material ajeno, qué no se sube
- [ ] Clasificación de datos: público, interno, sensible, prohibido
- [ ] Publicar con DOI: release, Zenodo, comunidad, cómo citar

## Página pública y plan (`site` y `plan`)

- [ ] Quitar o actualizar el chip "arranque previsto: agosto 2026" y cualquier otra referencia al arranque en agosto
- [ ] Refrescar la caja de situación y su "última revisión"
- [ ] Nota de voz: regrabar sin mes de arranque, o retirar la tarjeta de audio hasta tenerla
- [ ] Enlace de Discord correcto en los CTA
- [ ] Decidir la visibilidad del repositorio `plan` o retirar el roster con nombres
- [ ] Validación obligatoria tras cada cambio: cero rayas largas, cero fechas duras, cero nombres privados en el índice público, seis letras de línea, `node --check`

## Caso real: LAGO Mérida (laa-hecap/LAGO-merida-infra)

- [ ] Corregir el README: dice "private monorepository" y el repositorio es público
- [ ] Añadir CITATION.cff con las personas autoras y sus ORCID
- [ ] Decidir si la primera release con DOI de la demostración se hace sobre este repositorio (caso real) o sobre la plantilla
- [ ] Decidir en qué comunidad de Zenodo entra (RedJIV, lasf4ri, o ambas)
- [ ] Preparar un recorrido de tres minutos: README bilingüe, diagrama de arquitectura, GOVERNANCE, SECURITY, RIGHTS, lista de aceptación del piloto, issue forms
- [ ] Verificar que Pages (laa-hecap.github.io/LAGO-merida-infra/) carga y qué muestra sin sesión

## Laboratorio de Ideas

- [ ] Confirmar qué se muestra en la sesión: solo la existencia y la plantilla, sin fichas con nombres hasta tener consentimiento
- [ ] Regenerar el repositorio cifrado si el sitio cambió, y comprobar que la guardia pasa

## Diapositivas y ensayo

- [ ] Diapositivas en la identidad visual de la red, siguiendo los bloques del programa; el mapa como diapositiva de cierre antes de la asignación
- [ ] Capturas reales de cada pantalla que se verá: organización, tablero, issue, pull request, Zenodo, ORCID, Discord
- [ ] Ensayo cronometrado de la demostración con la cuenta de prueba (meta: menos de ocho minutos)
- [ ] Plan B si GitHub o Zenodo fallan en vivo: capturas de cada paso
- [ ] Grabación de la sesión acordada con la red; dónde se publica el video
- [ ] Mensaje de cierre listo para el canal de anuncios: resumen, enlaces, asignación, fecha del primer encuentro quincenal

## Después de la sesión

- [ ] Invitar como dueños a las personas nombradas; publicar la lista de la coordinación como rol, sin dueño único
- [ ] Publicar el resumen y la grabación
- [ ] Revisar que cada asistente tenga un issue tomado; escribir a quien no
