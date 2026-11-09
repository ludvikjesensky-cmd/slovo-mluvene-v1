# Current State

Last verified: 2026-11-09

The private GitHub repository contains the project entrypoint, initial project memory, a responsive UI draft in `index.html`, and a Supabase schema draft at `supabase/migrations/20261109180000_initial_archive_schema.sql`. No Supabase project, Hetzner bucket, server deployment, or domain has been configured.

Agreed direction: GitHub is code and knowledge source of truth; Hetzner server will host the app; Hetzner Object Storage is intended for the ~2 TB audio collection; Supabase is intended for authentication, catalogue metadata, and playback progress. Existing iCloud archive remains the safety copy during migration.

Cost constraint: no paid infrastructure during the build phase. The Supabase organization Ludvik is on Pro and creation of another project there was quoted at $10/month; no project was created. First build and verify the app using local/no-cost development and mock content. Connect production Supabase and Hetzner services only when the app is ready to run.

Next: improve the responsive app UI and implement a no-cost development path; then revisit production project provisioning and confirm current pricing before activating services. Do not put credentials in Git.
