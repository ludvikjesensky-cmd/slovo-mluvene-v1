# Current State

Last verified: 2026-11-09

Initial project repository exists and is private. It contains only the initial README. No application, Supabase project, Hetzner bucket, server deployment, or domain has been configured yet.

Agreed direction: GitHub is code and knowledge source of truth; Hetzner server will host the app; Hetzner Object Storage is intended for the ~2 TB audio collection; Supabase is intended for authentication, catalog metadata, and playback progress. Existing iCloud archive remains the safety copy during migration.

Next: establish first responsive UI, define Supabase schema with RLS, then select/create the Supabase project and configure server-side signed audio URLs. Do not put credentials in Git.