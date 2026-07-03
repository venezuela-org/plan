# 3 · Action plan and steps

All the steps, in order, to move from plan to people working.

## Overall order

1. Create and secure the GitHub organization.
2. Upload this repo (the page and the documents).
3. Send the message to the 48 with the intake link.
4. Open the coordination repo and the board.
5. Activate groups E, A and C. Then D and B.
6. Request compute credits and an Overleaf plan in the network's name.

## Step 1. Create the organization

1. Sign in to GitHub with an account owned by the network, not your employer's. This keeps the network independent and avoids IP entanglement.
2. Plus sign, top right, then New organization. Free plan.
3. A network-owned contact email.
4. Do not add anyone yet. Secure first, invite after.

## Step 2. Secure it before inviting

In the organization Settings:

- Authentication security: enable Require two-factor authentication for everyone.
- Member privileges: lower the base permission to Read. No one has global write.
- Repository creation: restrict it to owners.
- Repository visibility: disable members creating public repos without permission.

## Step 3. Teams

Five teams, each with the least permission it needs:

- `owners` coordination, admin.
- `mentores-cientificos` senior leads, write on their group.
- `mentores-tecnicos` technical support, write on their group.
- `lideres-proyecto` students leading a group, maintain their repo.
- `miembros` the network, read only unless invited to a group.

## Step 4. Coordination repo and board

Create the repo `respuesta-emergencia` (private) with this structure:

```
respuesta-emergencia/
  README.md            this effort, principles, links
  grupos/
    A-mapa/  B-riesgo/  C-agua/  D-salud/  E-backbone/
  datos/
    README.md          data rules, nothing sensitive in public
  situacion/
    situacion.md        figures, updated every 24 to 48 h
```

Each group folder starts with the project charter and its first five tasks as issues.

Project board (GitHub Project, board type) with these columns:

```
Ideas captured -> Scoped -> Active -> Targeting a output -> Delivered
                                                            Dormant (paused)
```

Initial load: A, B and C in Scoped; E in Active; D in Ideas captured (starts after the first three).

Commands, on your Mac:

```bash
mkdir respuesta-emergencia && cd respuesta-emergencia
mkdir -p grupos/A-mapa grupos/B-riesgo grupos/C-agua grupos/D-salud grupos/E-backbone datos situacion
printf '# Emergency response RedJIV\n' > README.md
printf '# Situation\n' > situacion/situacion.md
printf '# Data\nNothing sensitive in public repos.\n' > datos/README.md
git init && git add . && git commit -m "Emergency response start"
git branch -M main
git remote add origin git@github.com:venezuela-org/respuesta-emergencia.git
git push -u origin main
```

## Step 5. Invite people

1. In the organization, People, Invite member. By GitHub username or email.
2. When inviting, assign their team, so they land with the right permission.
3. When inviting to a group, give access only to that group's repo.
4. For those without GitHub, a one-page guide on creating an account and enabling 2FA.

## Message for the 48

Adjust the intake link and send it through the group's usual channel.

> Subject: CoAfina Emergency, let's put the network at the country's service
>
> Hello everyone,
>
> After the June 24 earthquakes, we want to turn what we built at the first meeting into something useful for the country, now. We refocus our ideas and talent into a CoAfina emergency edition, with the next three meetings as checkpoints.
>
> We organize the effort into five groups. Each has an experienced lead who validates and connects with responders, and room for students to execute and come out as first authors.
>
> 1. Needs and access map. 2. Aftershock and safe-siting risk. 3. Safe water and sanitation. 4. Shelter health and mental health. 5. Data and coordination backbone.
>
> There will be prizes per group and resources for the teams: compute, Overleaf, DOI and the network's endorsement. The work advances your career while it helps.
>
> How to join: fill the intake here [LINK]. It tells us your profile, whether you are in Venezuela and in which state, and which group you can contribute to and how many hours.
>
> Two things. Everything is channeled through already-established bodies, we do not improvise in the zone. And if you were directly affected, say so with confidence: it is to know who may need support, not to leave anyone out.
>
> Thank you for being here. See you at the next meeting.
> Conexión RedJIV

## Security, recommendation

Given Venezuela's context, this is important, not optional:

- Start everything private. Show little.
- Mandatory 2FA. It is the single most protective measure.
- Do not expose who is inside the country or who does what. With surveillance and censorship, that can put someone at risk. Profiles in a private repo. Pseudonyms allowed.
- No personal, medical or victim-location data in public repos.
- Venezuela blocks many sites and GitHub or VPNs sometimes fail. Keep the plan as a downloadable PDF and an alternate channel to share it inside the country.

## Checklist

- [ ] Organization created and secured (2FA, permissions, teams).
- [ ] This repo uploaded (page and documents).
- [ ] Consent reviewed before opening the intake.
- [ ] Message to the 48 sent with the link.
- [ ] Coordination repo and board opened.
- [ ] Groups E, A and C activated with lead and first tasks.
- [ ] Compute credits and Overleaf requested.
- [ ] Situation figures updated every 24 to 48 h.
