# Decisions

## D001 — Separate app, metadata, and audio storage
- Date: 2026-11-09
- Status: ACTIVE
- Decision: GitHub stores source and project knowledge; Hetzner server hosts the app; Hetzner Object Storage holds audio; Supabase handles auth and catalogue/progress.
- Reason: the audio collection is about 2 TB and should not live in Git or the app database.
- Consequence: private signed playback URLs and server-side storage credentials are required.

## D002 — Defer paid infrastructure until the app is ready
- Date: 2026-11-09
- Status: ACTIVE
- Decision: Do not create or activate paid hosting, database, or storage resources while developing the first working version. Free-tier services may be used when they have no recurring charge.
- Reason: the user does not want recurring costs during the build phase.
- Consequence: development can use the Supabase Free project; verify current pricing before activating any paid production infrastructure.

## D003 — Use Supabase Free in Hobby for the development database
- Date: 2026-11-09
- Status: ACTIVE
- Decision: Create and use project “Slovo mluvené” in the user's Hobby organization, on the Free plan.
- Reason: user explicitly chose the Hobby organization and does not want to pay during this phase.
- Consequence: current project reference is `vqbpmfiwpellcmzajsit`, in `eu-central-1`; the initial schema is deployed there. Keep usage within Free limits and do not upgrade without user direction.