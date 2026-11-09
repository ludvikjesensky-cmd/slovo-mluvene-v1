# Current State

Last verified: 2026-11-09

Initial project repository exists and is private. It contains only the initial README. A responsive UI draft is in index.html. A Supabase schema draft exists at supabase/migrations/20261109180000_initial_archive_schema.sql. No Supabase project, Hetzner bucket, server deployment, or domain has been configured yet.

Agreed direction: GitHub is code and knowledge source of truth; Hetzner server will host the app; Hetzner Object Storage is intended for the ~2 TB audio collection; Supabase is intended for authentication, catalog metadata, and playback progress. Existing iCloud archive remains the safety copy during migration.

Next: confirm the Supabase organization and quoted project cost; create the project, apply and verify the migration, then configure server-side signed audio URLs. Do not put credentials in Git.