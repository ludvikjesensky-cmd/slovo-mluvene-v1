# Architecture

## Current components
- Web app: responsive audio catalogue draft; intended to run on the user's Hetzner server (not yet identified/configured).
- Supabase Free project `vqbpmfiwpellcmzajsit` in organization Hobby, region `eu-central-1`: database schema is active for works, episodes, family membership, and playback progress. The UI is not yet connected.
- Hetzner Object Storage: intended private audio bucket (~2 TB), not yet created.
- Server API: intended to validate authenticated sessions and issue time-limited signed URLs; credentials stay server-side.
- GitHub: source code and project knowledge.

## Data model
- `archive_works`: catalogue-level works.
- `archive_episodes`: playable audio entries linked to works.
- `family_members`: allowlist of authenticated family users.
- `playback_progress`: per-user listening position.
- RLS is enabled on all four tables; policies restrict catalogue and playback access to family members.

## Data flow
Authenticated web client will read permitted catalogue/progress from Supabase. For playback, the server authorizes the user and returns a short-lived URL to the private audio object. Never expose S3 secret keys in the browser.