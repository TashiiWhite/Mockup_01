# CLAUDE.md

Guidance for working in this repository.

## Project overview

Marketing landing-page mockups for a **mobile vehicle detailing & exterior paint-correction
business** (placeholder brand: **Lustre Detailing**). The repo currently contains **two
single-page React landing mockups** exploring two distinct design directions:

- `site-a-editorial/` — light, editorial, minimal (Aesop / Apple feel).
- `site-b-immersive/` — dark, cinematic, WebGL hero (immersive luxury).

These are mockups/demos to help the client choose a direction. They are not the production site.

## Business context (source: Pre-Build Client Questionnaire)

- **Offering:** on-site (mobile) vehicle detailing and exterior paint-correction services.
  Services only — no physical/digital products.
- **Ideal customer:** professionals aged 30–55 who own newer / high-end vehicles, value their
  time, and prefer a service that comes to them.
- **Primary CTA:** book a detailing package directly, or send a quick message with questions.
- **Positioning:** mid-premium — above budget detailers, below high-end concierge. Brand should
  feel **polished, sharp, and trustworthy without being overly corporate**.
- **Packages:** a handful of core packages, each with options (vehicle size tiers + add-ons).
- **Payments:** Square + e-transfer today; wants to stay flexible. Promos/discount codes later.
- **Pages the real site will need:** Home, Services, Contact, FAQ, (About — undecided).

## Brand

- **Name:** Lustre Detailing (placeholder — easy to find-and-replace when the real name lands).
- **Feel:** clean, modern, editorial; lots of breathing room; serif display headings.
- **Palette:** muted neutrals (cream/ivory or charcoal) with a **gold / champagne** accent.
- **Tone of copy:** confident, concrete, benefit-led. No lorem ipsum — write real copy.

## Current scope (this round)

- 2 **English-only** single-page landing mockups (Editorial + Immersive).
- Same 9-section structure and shared copy; different visual execution.
- Forms are **client-side only** (validation + success state, no backend).
- "Book an appointment" CTA **smooth-scrolls to the on-page contact form**.

## Tech standards

- **Stack:** Vite + React 18 + Tailwind CSS v3 (one independent project per site).
- **Animation:** GSAP + ScrollTrigger for scroll reveals and hover polish.
- **WebGL:** THREE.js + VANTA for the **Site B hero only**. Must be:
  - lazy-loaded,
  - **disabled on mobile and under `prefers-reduced-motion`**, with a static gradient fallback.
- **Performance:** keep Site A WebGL-free and lightweight; fast LCP; size/lazy-load imagery.
- **Accessibility:** semantic HTML, keyboard-operable accordion + form, visible focus, ARIA on
  interactive widgets, respect `prefers-reduced-motion`.
- **Responsive:** mobile-first; verify at 375px and 1440px; no horizontal overflow.

## Repo layout & commands

```
CLAUDE.md
README.md
site-a-editorial/   # npm install → npm run dev | npm run build | npm run preview
site-b-immersive/   # npm install → npm run dev | npm run build | npm run preview
```

Run commands from inside each site folder. Default Vite dev port is 5173.

## Definition of done (the "4-judge" bar)

Every screen must clear all four:

1. **Conversion** — CTA above the fold *and* repeated near the bottom; transparent pricing with
   one highlighted best-value tier; low-friction contact.
2. **Performance** — WebGL only where planned (Site B), lazy + mobile/reduced-motion off; fast,
   no jank, optimized images.
3. **Brand & trust** — before/after framing, specific real-sounding testimonials (name + title +
   photo), editorial whitespace, warm-but-sharp copy.
4. **Usability** — effortless on a phone; large tap targets; accessible accordion + form;
   reduced-motion fallbacks; clear navigation.

## Out of scope / future phases

Full EN/FR (Canadian) bilingual support · real online booking calendar + appointment management
· customer accounts / loyalty · live chat widget · Square payment integration · promo/discount
codes · custom domain + hosting.
