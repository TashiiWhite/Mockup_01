# Lustre Detailing — Landing Page Mockups

Marketing landing-page mockups for a **mobile vehicle detailing & exterior paint-correction
business** (placeholder brand: **Lustre Detailing**).

This repo contains **two single-page React landing mockups** exploring two distinct design
directions, so the client can choose a feel:

| Folder | Direction | Vibe |
| --- | --- | --- |
| [`site-a-editorial/`](site-a-editorial/) | Light, editorial, minimal | Aesop / Apple — cream, serif headings, lots of breathing room |
| [`site-b-immersive/`](site-b-immersive/) | Dark, cinematic | Immersive luxury — charcoal, gold accent, animated WebGL hero |

Both share the **same 9-section structure and copy**; only the visual execution differs.

## Tech stack

- **Vite + React 18 + Tailwind CSS v3** (each site is an independent project)
- **GSAP + ScrollTrigger** for scroll reveals and hover polish
- **THREE.js + VANTA** for the Site B hero only — lazy-loaded, and disabled on mobile and
  under `prefers-reduced-motion` with a static gradient fallback

## How to view the sites locally

Each site is its own project, so you run commands from **inside** its folder. You need
[Node.js](https://nodejs.org/) installed (v18+).

### Site A (Editorial)

```bash
cd site-a-editorial
npm install      # only needed the first time
npm run dev
```

### Site B (Immersive)

```bash
cd site-b-immersive
npm install      # only needed the first time
npm run dev
```

Vite prints a local URL in the terminal — usually **http://localhost:5173**. Open it in your
browser. If you run **both** at once, the second one will pick the next free port (e.g. 5174);
check the terminal output for the exact address.

Stop a dev server with `Ctrl + C` in its terminal.

### Viewing a production build

```bash
npm run build    # outputs to dist/
npm run preview  # serves the built site locally
```

## Repo layout

```
CLAUDE.md            # working guidance / project brief
README.md
site-a-editorial/    # npm install -> npm run dev | build | preview
site-b-immersive/    # npm install -> npm run dev | build | preview
```

## Deploying & client handoff (Netlify)

Each site is a standard static build, so any static host works. The simplest path —
**Netlify connected to this GitHub repo**, which auto-rebuilds on every `git push`:

1. In Netlify: **Add new site → Import from GitHub** and pick this repo.
2. Because both sites live in one repo, create **two Netlify sites**, one per folder:

   | Setting | Site A | Site B |
   | --- | --- | --- |
   | Base directory | `site-a-editorial` | `site-b-immersive` |
   | Build command | `npm run build` | `npm run build` |
   | Publish directory | `dist` | `dist` |

   A [`netlify.toml`](site-a-editorial/netlify.toml) in each folder already sets the build
   command and publish directory — you only need to set the **base directory** in the UI.
3. Each site gets a free `*.netlify.app` URL to share with the client.
4. **Custom domain:** add it under Netlify → *Domain settings*, point the domain's DNS at
   Netlify, and Netlify provisions free HTTPS automatically.

To hand the project to the client: transfer this GitHub repo to their account (or add them as a
collaborator), then they connect their own Netlify using the settings above. After that, every
push auto-deploys — nothing is uploaded by hand.

## Connecting online booking (Square Appointments)

The "Book an appointment" buttons are wired to a single setting, `bookingUrl`, in each site's
`src/data/content.js`:

- **While `bookingUrl` is empty** (current state), the buttons smooth-scroll to the on-page
  contact form — correct mockup behavior.
- **Set `bookingUrl`** to the client's Square Appointments booking-page URL and every
  "Book an appointment" button (nav, hero, and pricing tiers) opens the live Square booking flow
  in a new tab. No other code changes needed.

Payments and scheduling stay inside Square (which the client already uses), and Square syncs
confirmed appointments to the owner's Google Calendar.

## Notes

- These are **mockups/demos** to help choose a design direction — not the production site.
- All copy is real placeholder copy (no lorem ipsum). The brand name **Lustre Detailing** is a
  placeholder, easy to find-and-replace when the real name is chosen.
- Contact forms are **client-side only** (validation + success state, no backend).
- "Book an appointment" smooth-scrolls to the on-page contact form.
