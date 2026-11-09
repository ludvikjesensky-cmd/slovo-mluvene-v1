# Architecture

## Intended components
- Web app: responsive audio catalogue, hosted on the user's Hetzner server (not yet identified/configured).
- Supabase: authentication, catalogue metadata, per-user playback progress (project not yet created for this app).
- Hetzner Object Storage: private audio bucket (~2 TB), not yet created.
- Server API: validate authenticated session and issue time-limited signed URLs; credentials stay server-side.
- GitHub: source code and project knowledge.

## Data flow
Authenticated web client reads permitted catalogue/progress from Supabase. For playback, server authorizes the user and returns a short-lived URL to the private audio object. Never expose S3 secret keys in the browser.