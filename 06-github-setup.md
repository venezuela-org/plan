# 06 · Montaje de la organización y repos

Documento interno. Estructura de GitHub, no publicar.

## Crear la organización

1. Cuenta propia de la red, no la del trabajo de nadie.
2. New organization, plan gratuito, correo de contacto propio de la red.
3. No añadir a nadie todavía. Primero se asegura, después se invita.

## Asegurar antes de invitar

- Authentication security: Require two-factor authentication for everyone.
- Member privileges: permiso base en Read. Nadie con escritura global.
- Repository creation: restringido a owners.
- Repository visibility: sin repos públicos de miembros sin permiso.

## Equipos

- `owners` coordinación, admin.
- `mentores-cientificos` escritura en su track.
- `mentores-tecnicos` escritura en su track.
- `lideres-proyecto` estudiantes que llevan un track.
- `miembros` solo lectura salvo invitación a un track.

## Repo de coordinación (privado)

```
respuesta-emergencia/
  README.md
  tracks/
    A-mapa/  B-riesgo/  C-agua/  D-salud/  E-backbone/
  datos/
    README.md   reglas de datos, nada sensible en publico
  situacion/
    situacion.md   cifras con fecha y fuente, cada 24 a 48 h
```

Tablero (GitHub Project, board):

```
Captadas -> Con enfoque -> Activo -> Apuntando a salida -> Entregado
                                                            Latente (pausado)
```

Carga inicial: A y C en Con enfoque, E en Activo, D y B en Captadas.

Comandos (Mac):

```bash
mkdir respuesta-emergencia && cd respuesta-emergencia
mkdir -p tracks/A-mapa tracks/B-riesgo tracks/C-agua tracks/D-salud tracks/E-backbone datos situacion
printf '# Respuesta emergencia\n' > README.md
git init && git add . && git commit -m "Arranque"
git branch -M main
git remote add origin git@github.com:venezuela-org/respuesta-emergencia.git
git push -u origin main
```

## Invitar

People, Invite member, asignar equipo al invitar. Acceso al repo del track solo a quien participa. Para quien no tenga GitHub, guía de una página con cuenta y 2FA.
