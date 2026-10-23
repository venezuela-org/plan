# Conexión RedJIV · Manual público

Manual público para estudiantes y miembros de la red. El repositorio y GitHub Pages permanecen públicos para que cualquiera pueda consultar las herramientas, los tracks y las guías de participación sin iniciar sesión.

**Empieza por [el manual web](https://venezuela-org.github.io/plan/).** También puedes abrir `index.html` localmente para consultar el manual en una sola página, con diagramas y navegación.

El sitio de presentación de Conexión RedJIV se mantiene por separado en `venezuela-org/site`. Este repositorio contiene el manual de participación, las responsabilidades por rol y resúmenes sin datos personales. No contiene una carpeta `public/` separada: tanto los archivos del repositorio como la web son públicos.

Los nombres de leads propuestos, contactos, ubicaciones individuales, respuestas del intake e inventarios por persona se gestionan por un canal restringido de coordinación, fuera de este repositorio. No basta con omitirlos del menú: tampoco deben estar en el HTML, en los Markdown ni en archivos descargables. La carpeta local `.private/` y las hojas de cálculo del roster se ignoran en Git; esto evita incorporaciones accidentales y no sustituye el control de acceso del almacenamiento privado.

Las versiones anteriores contenían datos personales. Quitarlos de la versión actual no los elimina del historial de Git ni de copias ya publicadas; la coordinación debe revisar esa exposición por separado. El sitio estudiantil permanece público.

## Contenido

- `00-resumen-ejecutivo.md` Resumen ejecutivo de una página.
- `01-plan-30-dias.md` Plan de ejecución a 30 días.
- `02-tracks-mvd-y-dod.md` Entregable mínimo viable y definición de terminado por track.
- `03-raci.md` Matriz RACI y dueños.
- `04-registro-riesgos.md` Registro de riesgos.
- `05-intake.md` Preguntas del formulario de intake.
- `06-github-setup.md` Montaje de la organización y repos.
- `07-clasificacion-datos.md` Clasificación de datos: público, interno, sensible, prohibido.
- `08-presupuesto.md` Presupuesto y recursos.
- `09-gobernanza-seguridad.md` Autoría, consentimiento, seguridad, protección de datos.
- `10-decisiones-comite.md` Decisiones pendientes para el comité.
- `11-ecosistema-directorio.md` Directorio de trabajo del ecosistema de plataformas (track D).
- `12-guion-sesion-inaugural.md` Guion público de la sesión inaugural.
- `13-preparacion-sesion-inaugural.md` Lista de preparación de la sesión.
- `roster/` Roles por track e ideas sin nombres, contactos ni ubicaciones individuales.

Idioma: estos documentos están en español, el idioma de trabajo de la coordinación. La página pública sí es bilingüe.

## Actualizar el manual

Los archivos Markdown son la fuente. Con Node.js instalado, después de editarlos:

```bash
node scripts/sync-manual.mjs
node scripts/sync-manual.mjs --check
node --test tests/manual.test.mjs
```

El primer comando actualiza las copias incrustadas en `index.html`; el segundo detecta documentos ausentes o desactualizados sin modificar archivos. Solo se incluyen los documentos aprobados en `scripts/public-documents.mjs`; un archivo nuevo requiere revisión explícita antes de añadirlo. Las pruebas comprueban también que no se reincorporen inventarios de personas al árbol publicado. Son comprobaciones estructurales y no sustituyen una revisión del contenido. El HTML sigue funcionando localmente sin servidor ni dependencias instaladas.
