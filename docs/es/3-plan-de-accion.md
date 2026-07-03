# 3 · Plan de acción y pasos

Todos los pasos, en orden, para pasar del plan a que la gente trabaje.

## Orden general

1. Crear y asegurar la organización de GitHub.
2. Subir este repo (la página y los documentos).
3. Enviar el mensaje a los 48 con el enlace del intake.
4. Abrir el repo de coordinación y el tablero.
5. Activar los grupos E, A y C. Luego D y B.
6. Pedir créditos de cómputo y un plan de Overleaf a nombre de la red.

## Paso 1. Crear la organización

1. Entra a GitHub con una cuenta propia de la red, no la de tu trabajo. Mantiene la red independiente y evita enredos de propiedad.
2. Signo de más, arriba a la derecha, luego New organization. Plan gratuito.
3. Correo de contacto propio de la red.
4. No añadas a nadie todavía. Primero se asegura, después se invita.

## Paso 2. Asegurarlo antes de invitar

En Settings de la organización:

- Authentication security: activa Require two-factor authentication for everyone.
- Member privileges: baja el permiso base a Read. Nadie tiene escritura global.
- Repository creation: restríngelo a los owners.
- Repository visibility: deshabilita que los miembros hagan repos públicos sin permiso.

## Paso 3. Equipos

Cinco equipos, con el mínimo permiso que cada uno necesita:

- `owners` coordinación, admin.
- `mentores-cientificos` leads senior, escritura en su grupo.
- `mentores-tecnicos` apoyo técnico, escritura en su grupo.
- `lideres-proyecto` estudiantes que llevan un grupo, mantienen su repo.
- `miembros` la red, solo lectura salvo invitación a un grupo.

## Paso 4. Repo de coordinación y tablero

Crea el repo `respuesta-emergencia` (privado) con esta estructura:

```
respuesta-emergencia/
  README.md            este reto, principios, enlaces
  grupos/
    A-mapa/  B-riesgo/  C-agua/  D-salud/  E-backbone/
  datos/
    README.md          reglas de datos, nada sensible en publico
  situacion/
    situacion.md       cifras, actualizado cada 24 a 48 h
```

Cada carpeta de grupo arranca con el acta del proyecto y sus primeras cinco tareas como issues.

Tablero de proyectos (GitHub Project, tipo board) con estas columnas:

```
Ideas captadas -> Con enfoque -> Activo -> Apuntando a salida -> Entregado
                                                                  Latente (pausado)
```

Carga inicial: A, B y C en Con enfoque; E en Activo; D en Ideas captadas (arranca tras los tres primeros).

Comandos, en tu Mac:

```bash
mkdir respuesta-emergencia && cd respuesta-emergencia
mkdir -p grupos/A-mapa grupos/B-riesgo grupos/C-agua grupos/D-salud grupos/E-backbone datos situacion
printf '# Respuesta emergencia RedJIV\n' > README.md
printf '# Situacion\n' > situacion/situacion.md
printf '# Datos\nNada sensible en repos publicos.\n' > datos/README.md
git init && git add . && git commit -m "Arranque respuesta emergencia"
git branch -M main
git remote add origin git@github.com:venezuela-org/respuesta-emergencia.git
git push -u origin main
```

## Paso 5. Invitar a la gente

1. En la organización, People, Invite member. Por usuario de GitHub o por correo.
2. Al invitar, asígnale su equipo, para que caiga con el permiso correcto.
3. Al invitar a un grupo, dale acceso solo al repo de ese grupo.
4. Para quien no tenga GitHub, una guía de una página de cómo crear cuenta y activar 2FA.

## Mensaje para los 48

Ajusta el enlace del intake y envíalo por el canal habitual del grupo.

> Asunto: CoAfina Emergencia, pongamos la red al servicio del país
>
> Hola a todos,
>
> Después de los terremotos del 24 de junio, queremos convertir lo que construimos en el primer encuentro en algo útil para el país, ya. Reenfocamos nuestras ideas y talento en una edición de emergencia de CoAfina, con los próximos tres encuentros como puntos de control.
>
> Organizamos el esfuerzo en cinco grupos. Cada uno tiene un lead con experiencia que valida y conecta con quienes responden, y espacio para que estudiantes ejecuten y salgan como primeros autores.
>
> 1. Mapa de necesidades y accesos. 2. Riesgo de réplicas y sitio seguro. 3. Agua segura y saneamiento. 4. Salud en refugios y salud mental. 5. Backbone de datos y coordinación.
>
> Habrá premios por grupo y recursos para los equipos: cómputo, Overleaf, DOI y el aval de la red. El trabajo impulsa tu carrera al mismo tiempo que ayuda.
>
> Cómo sumarte: llena el intake aquí [ENLACE]. Nos dice tu perfil, si estás en Venezuela y en qué estado, y en qué grupo puedes aportar y cuántas horas.
>
> Dos cosas. Todo se canaliza a través de organismos ya establecidos, no improvisamos en la zona. Y si te viste afectado directamente, dilo con confianza: es para saber quién puede necesitar apoyo, no para dejar a nadie fuera.
>
> Gracias por estar. Nos vemos en el próximo encuentro.
> Arturo, Conexión RedJIV

## Seguridad, recomendación

Dado el contexto de Venezuela, esto es importante, no opcional:

- Empieza todo privado. Muestra poco.
- 2FA obligatoria. Es lo que más protege.
- No expongas quién está dentro del país ni quién hace qué. Con vigilancia y censura, eso puede poner a alguien en riesgo. Perfiles en repo privado. Seudónimos permitidos.
- Nada de datos personales, médicos o de ubicación de víctimas en repos públicos.
- Venezuela bloquea muchos sitios y a veces GitHub o las VPN fallan. Ten el plan también como PDF descargable y un canal alterno para compartirlo dentro del país.

## Checklist

- [ ] Organización creada y asegurada (2FA, permisos, equipos).
- [ ] Este repo subido (página y documentos).
- [ ] Consentimiento revisado antes de abrir el intake.
- [ ] Mensaje a los 48 enviado con el enlace.
- [ ] Repo de coordinación y tablero abiertos.
- [ ] Grupos E, A y C activados con lead y primeras tareas.
- [ ] Créditos de cómputo y Overleaf solicitados.
- [ ] Cifras de situación actualizadas cada 24 a 48 h.
