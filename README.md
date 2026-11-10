# Slovo mluvené

Soukromý rodinný archiv rozhlasových her, četeb a povídek. Rozhraní je audio-only; ukázkový obsah je fiktivní.

## Stack

- Next.js 16.4.5, React 19.3.1, TypeScript 5.9.3
- Node.js runtime (pin: Node 24.22.0)
- Supabase Free: family sign-in, catalogue metadata, and listening progress
- Planned production: Hetzner server; private Hetzner Object Storage for audio
- GitHub Pages: public design preview only

## Run locally

    npm install
    npm run dev

Open http://localhost:3000. Use npm run typecheck and npm run build to check the app. The package versions are pinned; generate and commit package-lock.json when npm registry access is available.

## Current prototype

The Next.js home page demonstrates large title banners, key information over the artwork, filters/search, a title detail dialog, and a persistent sample player. All titles and audio details are fictional; there is no login or real audio playback yet.

The GitHub Pages workflow builds a static export of this fictional preview. A normal Next.js build uses standalone Node output for the later Hetzner deployment. Do not put secrets, family metadata, or audio files in this public repository.

## Project memory

Read PROJECT.md, then the relevant files in project-memory/. Before architecture changes, read ARCHITECTURE.md, DECISIONS.md, FAILURES.md, and OPEN_QUESTIONS.md.
