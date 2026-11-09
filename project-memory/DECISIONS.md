# Decisions

## D001 — Separate app, metadata, and audio storage
- Date: 2026-11-09
- Status: ACTIVE
- Decision: GitHub stores source and project knowledge; Hetzner server hosts the app; Hetzner Object Storage holds audio; Supabase handles auth and catalogue/progress.
- Reason: the audio collection is about 2 TB and should not live in Git or the app database.
- Consequence: private signed playback URLs and server-side storage credentials are required.