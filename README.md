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

## Notes

- These are **mockups/demos** to help choose a design direction — not the production site.
- All copy is real placeholder copy (no lorem ipsum). The brand name **Lustre Detailing** is a
  placeholder, easy to find-and-replace when the real name is chosen.
- Contact forms are **client-side only** (validation + success state, no backend).
- "Book an appointment" smooth-scrolls to the on-page contact form.
