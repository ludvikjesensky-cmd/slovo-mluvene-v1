# Architecture

## Current components
- Web app: Next.js 16.4.5, React 19.3.1, TypeScript 5.9.3; Node.js 24.22.0 for development and production. Main UI is in app/.
- Public preview: GitHub Actions builds the static-export configuration (BUILD_TARGET=github-pages) and publishes the fictional design preview to GitHub Pages. It contains no authentication, family data, or real audio.
- Production target: user's Hetzner server, not yet identified/configured. Normal Next.js build uses standalone Node output.
- Supabase Free project vqbpmfiwpellcmzajsit, Hobby organization, region eu-central-1: active schema for works, episodes, family membership, and playback progress. The UI is not yet connected.
- Hetzner Object Storage: planned private bucket for approximately 2 TB audio; not yet created.
- GitHub: source code and project knowledge.

## Data model
- archive_works: catalogue-level works.
- archive_episodes: playable audio entries linked to works.
- family_members: allowlist of authenticated family users.
- playback_progress: per-user listening position.
- RLS is enabled on all four tables; policies restrict catalogue and playback access to approved family members.

## Intended data flow
After Supabase integration, authenticated family members will read permitted catalogue and progress data. For playback, the server will validate the user's session and membership, then create a short-lived URL for the private audio object. S3 credentials stay on the server and never enter browser code.

## Prototype behavior
The Next.js page currently uses fictional in-code records and original SVG sample cover art. Search and category filters work; banner/card clicks open a title detail dialog. The bottom player is an interface preview only; real audio is not connected.

## Build targets
- Local/production: default Next.js standalone build for a Node server.
- GitHub Pages: static export controlled by BUILD_TARGET=github-pages, with basePath set to /slovo-mluvene-v1. Only the generated static preview is deployed.
- index.html is the earlier HTML draft and is no longer the Pages artifact source.
