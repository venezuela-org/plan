# 02 · Tracks: entregable mínimo viable y definición de terminado

Documento interno. Cada primer entregable debe poder hacerse a distancia, con baja dependencia de datos de terreno no disponibles.

## A · Backbone de datos, cómputo y coordinación (arranca ya)

- MVD: organización de GitHub asegurada, repo de coordinación, tablero abierto, reglas de datos publicadas.
- Definición de terminado: 2FA obligatoria activada, permisos base en lectura, cinco equipos creados, tablero con las columnas del flujo y las primeras tareas cargadas.
- Dependencias: ninguna externa.

## B · Mapa de necesidades y accesos (arranca ya)

- Regla de no duplicación: HOT ya corre "SOS Venezuela" (ChatMap en territorio, MapSwipe validando daños por IA, Tasking Manager con proyectos "Venezuela Earthquake 2026"). No construimos un mapa paralelo: contribuimos allí y analizamos encima.
- MVD en dos frentes: (1) horas de contribución del grupo en MapSwipe y el Tasking Manager, medidas y coordinadas; (2) un análisis reproducible de vacíos de cobertura y accesibilidad construido sobre las capas de HOT/OSM, Copernicus EMS y USGS.
- Definición de terminado: notebook o script reproducible, fuentes citadas (incluyendo HOT), salida revisada por un segundo par, contacto de entrega en OCHA identificado.
- Dependencias: capas abiertas ya en producción por HOT. Baja dependencia de terreno.

## C · Agua segura y saneamiento (arranca ya)

- MVD: guía de purificación y saneamiento de una página, lista para imprimir, basada en fuentes OMS/WASH.
- Definición de terminado: guía revisada por dos pares, con fuentes, en formato imprimible y de bajo ancho de banda.
- Dependencias: ninguna de terreno. Coordinar difusión con el clúster WASH.

## D · Mapa del ecosistema digital de emergencia (arranca ya)

- Objetivo: mapear las plataformas ciudadanas que ya existen (búsqueda, hospitales, heridos, reunificación, ayuda, apoyo psicológico, mapas, información), identificar solapes, riesgos, vacíos y necesidades de interoperabilidad. No duplicar.
- MVD a 7 días: un directorio verificado de plataformas con estado (verificada, por verificar, no disponible), alcance, contacto responsable si es público, riesgo de privacidad y uso seguro recomendado.
- MVD a 30 días: una recomendación breve de interoperabilidad y protección de datos para voluntarios y coordinación.
- Definición de terminado: cada entrada con estado y fecha de revisión; sin copiar datos personales; con advertencias por sensibilidad; revisada por dos pares.
- Reglas duras: no duplicar ni espejar nombres, cédulas, fotos, ubicaciones de hospitales ni datos de menores. Para niños, solo enlazar y advertir; la reunificación va por autoridades, UNICEF y CICR.
- Dependencias: ninguna de terreno. Trabajo remoto y de baja dependencia.

## E · Salud en refugios y salud mental (arranca tras salvaguardas)

- MVD: lista de vigilancia de enfermedades en refugios y material de primeros auxilios psicológicos.
- Definición de terminado: material revisado por clínicos, sin ningún dato de pacientes, con plan de datos sensibles aprobado.
- Condición de arranque: guardrails de privacidad y ética listos.

## F · Riesgo de réplicas y sitio seguro (arranca si geo confirma)

- MVD: explicador de réplicas en lenguaje claro y criterios de sitio seguro para campamentos.
- Definición de terminado: revisado por un lead de geociencias, coordinado con FUNVISIS, sin depender de datos de campo.
- Condición de arranque: leads de geociencias confirman disponibilidad y datos fuente.
