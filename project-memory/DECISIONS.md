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
- Decision: Do not create or activate paid hosting, database, or storage resources while developing the first working version. First build and verify the application; connect paid production infrastructure only when it is ready to run.
- Reason: the user does not want recurring costs during the build phase.
- Consequence: development must use local or no-cost tools and mock data where cloud services are unavailable. The Supabase project in the Pro organization quoted at $10/month is deferred.
