# Current State

Last verified: 2026-11-10

## Phase
Initial Next.js foundation and title-banner design preview.

## Repository
ludvikjesensky-cmd/slovo-mluvene-v1 is public. It contains the Next.js app in app/, TypeScript configuration, pinned direct package versions in package.json, original fictional SVG cover illustrations in public/covers/, Supabase migrations, and project memory. The earlier index.html remains as a legacy draft.

## Application
The home page demonstrates a large featured title banner with overlay metadata, three rotating featured titles, title cards, category filters, search, title detail dialog with sample episodes, and a fixed preview player. Sample titles, author/performer labels, and episode metadata are fictional. There is no real audio, login, or Supabase client connection yet.

## Build and preview
The Next.js default build target is standalone output for a future Node.js server. The GitHub Pages workflow is being switched to build the static preview from Next.js with a project base path. The Pages site should publish only the generated static artifact; no secrets or private family data are part of it. The first workflow run after this change still needs to be checked.

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
