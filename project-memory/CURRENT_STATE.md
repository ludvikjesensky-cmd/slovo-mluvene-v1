# Current State

Last verified: 2026-11-09

The private GitHub repository contains the project entrypoint, initial project memory, a responsive homepage concept in `index.html`, and two Supabase migrations. The homepage uses the “Příběhy, které zní” identity, a dark forest-green audio-first visual direction, responsive layout, a fictional sample catalogue, working client-side search and type filters, and a visual player/sign-in preview. It does not yet play real audio or authenticate users; this is clearly labeled in the page.

The Supabase Free project “Slovo mluvené” is active and healthy in the Hobby organization (region `eu-central-1`, project ref `vqbpmfiwpellcmzajsit`, API URL `https://vqbpmfiwpellcmzajsit.supabase.co`). The database has `archive_works`, `archive_episodes`, `playback_progress`, and `family_members`; RLS is enabled on all four. Family membership is required by policies for catalogue and playback access. Schema changes are recorded under `supabase/migrations/`.

The project currently costs $0/month in the Free organization. The UI is not yet connected to Supabase. No Hetzner bucket, server deployment, or domain has been configured.

Agreed direction: GitHub is code and knowledge source of truth; Hetzner server will host the app; Hetzner Object Storage is intended for the approximately 2 TB audio collection; Supabase handles authentication, catalogue metadata, and playback progress. Existing iCloud archive remains the safety copy during migration.

Cost constraint: do not activate paid infrastructure during the build. The Supabase Free project is the no-cost development database; verify current pricing before creating or activating paid services.

Next: review the homepage concept, connect the UI to Supabase using environment configuration, then implement family sign-in and catalogue reads. Keep audio migration and deployment deferred until access controls and backup are verified. Do not put credentials in Git.