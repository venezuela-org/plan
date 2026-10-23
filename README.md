# PRIVADO · Documentos de coordinación

No publicar esta carpeta. Es solo para la coordinación de Conexión RedJIV.

**Empieza por `index.html`.** Ábrelo localmente en el navegador (en Mac: `open index.html`) para ver todo el manual en una sola página, con diagramas y navegación. Contiene nombres y detalles internos.

Este repositorio contiene el manual interno; no contiene una carpeta `public/` ni una versión pública segura. La página pública de Conexión RedJIV se mantiene por separado en el repositorio `venezuela-org/site`. Todo lo que está aquí es interno o sensible: nombres de leads, ubicaciones dentro de Venezuela, estructura de GitHub, intake, gobernanza, seguridad y datos.

El repositorio debe ser privado y el manual no debe servirse mediante Pages con acceso público. La etiqueta «PRIVADO» y `noindex` no restringen el acceso. La revisión mediante la API de GitHub del 23 de octubre de 2026 confirmó que el repositorio es público y Pages tiene acceso público, sirviendo la raíz de `main`. Estos ajustes requieren corrección en GitHub; editar este manual no los cambia. Retirar el acceso público y revisar también el historial y los archivos descargables con la coordinación antes de compartir cualquier enlace.

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
- `12-guion-sesion-inaugural.md` Guion interno de la sesión inaugural.
- `13-preparacion-sesion-inaugural.md` Lista de preparación de la sesión.
- `roster/` Detalle con nombres, leads, inventario de talento (sensible).

Idioma: estos documentos están en español, el idioma de trabajo de la coordinación. La página pública sí es bilingüe.

## Actualizar el manual

Los archivos Markdown son la fuente. Con Node.js instalado, después de editarlos:

```bash
node scripts/sync-manual.mjs
node scripts/sync-manual.mjs --check
node --test tests/manual.test.mjs
```

El primer comando actualiza las copias incrustadas en `index.html`; el segundo detecta documentos ausentes o desactualizados sin modificar archivos. El HTML sigue funcionando localmente sin servidor ni dependencias instaladas.
