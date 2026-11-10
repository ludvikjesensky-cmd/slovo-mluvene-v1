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
## D004 — Use Next.js on Node.js for the application
- Date: 2026-11-10
- Status: ACTIVE
- Decision: Build the application with Next.js and TypeScript, run it on Node.js, keep source in GitHub, and target the existing Hetzner server for production. GitHub Pages is a static preview only.
- Reason: The family archive needs an authenticated application and server-side authorization for private audio, while GitHub remains the source of truth.
- Consequence: Use Next.js standalone output for production; keep the Pages build as a static export containing fictional sample data only.

## D005 — Use large individual title banners
- Date: 2026-11-10
- Status: ACTIVE
- Decision: The home page features large visual banners for individual titles, with key metadata over the artwork and a detail view when opened.
- Reason: This is the part of the Streamit reference the user explicitly selected.
- Consequence: Artwork, title, author/performer, type, year, and duration are presented as title-level information; video is out of scope.

## D006 — Open title details from the artwork or title
- Date: 2026-11-10
- Status: ACTIVE
- Decision: The featured banner opens its detail view when its artwork or title is clicked. Remove a separate “Detail titulu” button. Catalogue cards likewise open details through their artwork and displayed title.
- Reason: Keep the title itself as the clear entry point and reduce redundant controls.
- Consequence: Keep the play action distinct; banner artwork clicks must not block title, carousel, or play controls.

## D007 — Give each title a full detail page
- Date: 2026-11-10
- Status: ACTIVE
- Decision: Title details use their own page and URL rather than a modal. The page provides the title artwork, synopsis, metadata, creators and performers, episode list, themes, and related titles.
- Reason: The archive should support detailed editorial context and a stable page that family members can open and revisit.
- Consequence: Keep the static Pages preview working by generating a page for each known title; the future server catalogue may later load records dynamically.

## D008 — Open each detail page with edge-to-edge artwork
- Date: 2026-11-10
- Status: ACTIVE
- Decision: Detail pages begin at the top edge with a full-bleed, borderless hero image spanning the viewport. The site navigation overlays the artwork; omit breadcrumb navigation.
- Reason: The title artwork should set the scene immediately and occupy as much of the opening screen as possible.
- Consequence: Keep text readable over the image with a dark gradient; start the descriptive detail content below the hero.
