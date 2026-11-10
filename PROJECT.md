# Slovo mluvené

## Purpose
Soukromý rodinný webový archiv rozhlasových her, četeb a povídek. Audio-only katalog s velkými bannery titulů, přehráváním a přístupem pouze pro schválené členy rodiny.

## Source of Truth
GitHub: ludvikjesensky-cmd/slovo-mluvene-v1 (currently public). Project knowledge is in this file and project-memory/; application source is in this repository.

## Current generation/status
First Next.js + TypeScript application foundation is in place. GitHub Pages shows a public, static preview with fictional sample data only. Production is intended for the user's Hetzner server. Supabase Free project and initial database schema are active. Authentication is not connected; sample playback has no real audio.

## Project Memory
Read project-memory/SCOPE.md and CURRENT_STATE.md first. For architecture or integration work, also read ARCHITECTURE.md, DECISIONS.md, FAILURES.md, and OPEN_QUESTIONS.md. Update the relevant canonical memory files after significant work.

## Storage map
- KNOWLEDGE: PROJECT.md, project-memory/, docs/
- SOURCE: app/, public/covers/, supabase/, package.json, .github/workflows/
- PRODUCTION: Hetzner server (not yet identified or configured)
- ARTIFACTS: GitHub Pages static preview; production Next.js build will use standalone Node output
- EXTERNAL: Supabase Free project vqbpmfiwpellcmzajsit (EU Frankfurt) for auth/catalogue/progress; planned private Hetzner Object Storage for approximately 2 TB audio
- BACKUP: iCloud archive remains a second copy during any later migration

## Critical rules
Never commit credentials, API keys, audio masters, or private family metadata. Use environment variables for credentials. The audio bucket must be private; playback links must be short-lived and issued only after authorization. Do not activate paid infrastructure or migrate audio during the build phase. Do not make the app or audio public.

## Runtime
Local development: Node.js 24.22.0, npm run dev. Default production build: npm run build then npm run start; next.config.ts uses standalone output. The Pages workflow sets BUILD_TARGET=github-pages to export only the fictional design preview.
