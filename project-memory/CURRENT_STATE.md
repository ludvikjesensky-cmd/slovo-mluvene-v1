# Current State

Last verified: 2026-11-09

The private GitHub repository contains the project entrypoint, initial project memory, a responsive Streamit-inspired audio archive homepage in `index.html`, two Supabase migrations, and a GitHub Actions workflow at `.github/workflows/pages.yml`. The workflow builds a public artifact containing only `index.html`, not the rest of the private repository. The page uses a dark charcoal/black OTT layout with red accents, a cinematic audio-focused hero, a sample catalogue, and a continue-listening row. Search and type filters work in the browser. All catalogue content is fictional; sign-in and playback are visual previews only.

GitHub Pages is not yet live. The first workflow runs failed: initially the job lacked source-read permission, which was corrected; the current blocker is that GitHub Pages is not enabled/configured for this private repository. Enable Pages with GitHub Actions in repository Settings when an authenticated admin session is available. A private repository can use Pages only on an eligible GitHub plan; the published site itself is public. Do not make the source repository public. Once Pages is enabled, the workflow should publish only the homepage artifact.

The Supabase Free project “Slovo mluvené” is active and healthy in the Hobby organization (region `eu-central-1`, project ref `vqbpmfiwpellcmzajsit`, API URL `https://vqbpmfiwpellcmzajsit.supabase.co`). The database has `archive_works`, `archive_episodes`, `playback_progress`, and `family_members`; RLS is enabled on all four. Family membership is required by policies for catalogue and playback access. Schema changes are recorded under `supabase/migrations/`.

The project currently costs $0/month in the Free organization. The UI is not yet connected to Supabase. No Hetzner bucket, server deployment, or domain has been configured.

Agreed direction: GitHub is code and knowledge source of truth; Hetzner server will host the app; Hetzner Object Storage is intended for the approximately 2 TB audio collection; Supabase handles authentication, catalogue metadata, and playback progress. Existing iCloud archive remains the safety copy during migration.

Cost constraint: do not activate paid infrastructure during the build. The Supabase Free project is the no-cost development database; verify current pricing before creating or activating paid services.

Next: enable and verify the public GitHub Pages preview, then connect the UI to Supabase using environment configuration and implement family sign-in/catalogue reads. Keep audio migration and deployment deferred until access controls and backup are verified. Do not put credentials in Git.