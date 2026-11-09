# Slovo mluvené

## Purpose
Soukromý rodinný webový archiv rozhlasových her, četeb a povídek. Audio-only; vizuální směr vychází z OTT rozhraní Streamit, převedeného na katalog a přehrávání zvukových nahrávek.

## Source of Truth
GitHub: `ludvikjesensky-cmd/slovo-mluvene-v1`. The repository is currently public; app source and project knowledge are versioned here.

## Current status
Initial responsive Streamit-inspired homepage concept and Supabase Free project are configured. Database schema is live. GitHub Pages deployment workflow is present, but Pages has not yet been enabled/configured. No Hetzner audio bucket, server deployment, or domain is configured.

## Project Memory
Read `project-memory/SCOPE.md`, `CURRENT_STATE.md`, then `ARCHITECTURE.md`, `DECISIONS.md`, `FAILURES.md`, and `OPEN_QUESTIONS.md` before architecture changes.

## Storage map
- KNOWLEDGE: `PROJECT.md`, `project-memory/`, `docs/`
- SOURCE: `src/`, `supabase/`, `.github/workflows/pages.yml`
- PRODUCTION: TBD (Hetzner server)
- ARTIFACTS: GitHub Pages workflow currently publishes only the static `index.html` to the public site; GitHub Pages is not yet configured.
- EXTERNAL: approximately 2 TB audio planned for private Hetzner Object Storage; Supabase Free project `vqbpmfiwpellcmzajsit` in organization Hobby (region `eu-central-1`) handles auth/catalogue/progress; Hetzner storage and app hosting are not configured.
- BACKUP: existing iCloud archive until migration and independent backup are verified.

## Critical rules
Never commit secrets, audio masters, or credentials. Use environment variables for Supabase public URL/key and server-only Hetzner S3 credentials. Audio bucket must remain private. Do not deploy or migrate audio until access controls and backup are verified.

## Reading
For UI work, read SCOPE and CURRENT_STATE. For integrations, also read ARCHITECTURE, DECISIONS, and OPEN_QUESTIONS. Supabase schema source lives in `supabase/migrations/`.