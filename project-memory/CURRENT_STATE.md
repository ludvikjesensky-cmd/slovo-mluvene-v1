# Current State

Last verified: 2026-11-10

## Phase
Initial Next.js foundation and title-banner design preview.

## Repository
ludvikjesensky-cmd/slovo-mluvene-v1 is public. It contains the Next.js app in app/, TypeScript configuration, pinned direct package versions in package.json, original fictional SVG cover illustrations in public/covers/, Supabase migrations, and project memory. The earlier index.html remains as a legacy draft.

## Application
The home page has a large featured title banner; clicking artwork or title navigates to a full detail page at a per-title route. Catalogue artwork/title links use the same routes. Detail pages show a large title image, expanded synopsis, metadata, creators and performers, episode listings, themes, and related titles. The separate “Detail titulu” action is absent. The home page also includes rotating featured titles, category filters, search, and a sample player dock. Sample titles, author/performer labels, and episode metadata are fictional. There is no real audio, login, or Supabase client connection yet.

## Build and preview
The Next.js default build target is standalone output for a future Node.js server. The GitHub Pages workflow builds the static preview from Next.js with the project base path, trailing-slash directories for per-title routes, and shared catalogue data included in its path filters. Workflow run #13 for commit 22c1894 succeeded; the deployed title detail page was verified at https://ludvikjesensky-cmd.github.io/slovo-mluvene-v1/tituly/nocni-spoj/. Clicking the title on the home page also navigates to that page. Per-title document metadata is present. Workflow run #4 for commit f82edea succeeded on 2026-11-10, and the deployed preview was opened and verified at https://ludvikjesensky-cmd.github.io/slovo-mluvene-v1/. Pages publishes only the generated static artifact; no secrets or private family data are part of it.

Direct dependency versions are pinned in package.json. A package lockfile has not yet been generated because npm registry access is unavailable in this workspace. Generate and commit package-lock.json when registry access is available, before production deployment.

## Supabase
The Supabase Free project “Slovo mluvené” is active in the Hobby organization, region eu-central-1, project ref vqbpmfiwpellcmzajsit. Tables archive_works, archive_episodes, playback_progress, and family_members exist with RLS. No paid resources are active.

## Hosting and audio
The Hetzner server, private Object Storage bucket, and domain are not configured. The approximately 2 TB archive remains in iCloud; iCloud is to remain a second copy during any later migration.

## Next steps
1. Confirm the GitHub Pages workflow builds and publishes the Next.js design preview.
2. Generate and commit the npm lockfile when dependency registry access is available.
3. Connect family sign-in and catalogue reads to Supabase, preserving RLS.
4. Confirm the Hetzner server and deployment method before production setup.
5. Inspect existing audio formats/metadata before planning any migration. Do not start audio transfer or paid storage while the prototype is being built.
