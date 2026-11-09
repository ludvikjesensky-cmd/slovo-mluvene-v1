# Slovo mluvené

## Purpose
Soukromý rodinný webový archiv rozhlasových her, četeb a povídek. Audio-only; rozhraní vychází z OTT katalogu Streamit, ale používá vlastní identitu „Příběhy, které zní“.

## Source of Truth
GitHub: `ludvikjesensky-cmd/slovo-mluvene-v1` (private). App source and project knowledge are versioned here.

## Current status
Initial scaffold. No production deployment or Supabase project is configured.

## Project Memory
Read `project-memory/SCOPE.md`, `CURRENT_STATE.md`, then `ARCHITECTURE.md`, `DECISIONS.md`, `FAILURES.md`, and `OPEN_QUESTIONS.md` before architecture changes.

## Storage map
- KNOWLEDGE: `PROJECT.md`, `project-memory/`, `docs/`
- SOURCE: `src/`, `supabase/`
- PRODUCTION: TBD (Hetzner server)
- ARTIFACTS: TBD
- EXTERNAL: about 2 TB audio planned for private Hetzner Object Storage; Supabase planned for auth/catalog/progress; neither configured for this project.
- BACKUP: existing iCloud archive until migration and independent backup are verified.

## Critical rules
Never commit secrets, audio masters, or credentials. Use environment variables for Supabase public URL/key and server-only Hetzner S3 credentials. Audio bucket must remain private. Do not deploy or migrate audio until access controls and backup are verified.

## Reading
For UI work, read SCOPE and CURRENT_STATE. For integrations, also read ARCHITECTURE, DECISIONS, and OPEN_QUESTIONS. Supabase schema source will live in `supabase/migrations/`.