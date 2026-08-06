<div align="center">

# Cours Particuliers — Private Tutoring Website

**A trilingual (FR / EN / NL), responsive single-page website for a private tutor — secondary school, higher education and entrance-exam preparation — built with Next.js and statically deployed to GitHub Pages.**

Website: **[mathisdelsart.github.io/private-tutoring](https://mathisdelsart.github.io/private-tutoring)**

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8.svg)](https://tailwindcss.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-2ea44f.svg)](https://pages.github.com/)

</div>

---

![Private Tutoring Website](public/app-image.png)

---

## Features

- **Trilingual (FR / EN / NL)** — instant client-side language switch, French by default, preference kept in `localStorage`.
- **Sober, responsive design** — clean white / slate / emerald theme, mobile-first, accessible.
- **Subjects by audience** — an animated segmented control switches between secondary school, higher education and entrance-exam preparation.
- **Smart contact form** — multi-step form, level-aware subject picker, pre-fills a ready-to-send WhatsApp or email message.
- **Testimonials carousel** — autoplaying, pauses on hover, swipeable on touch screens.
- **FAQ accordion** — smooth open/close, also exposed to search engines as `FAQPage` structured data.
- **Motion that stays sober** — scroll reveal, reading-progress bar, active nav link and animated hero counters, all in plain CSS + `IntersectionObserver` (no animation library).
- **SEO-ready** — metadata, Open Graph tags and JSON-LD structured data.
- **Static export** — fast, secure and free to host on GitHub Pages.

Every animation honours `prefers-reduced-motion`, and the scroll reveal falls back to fully visible content when JavaScript is unavailable.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Hosting | GitHub Pages (static export) |
| CI/CD | GitHub Actions |

## Getting Started

```bash
# Clone and install
git clone https://github.com/mathisdelsart/private-tutoring.git
cd private-tutoring
npm install

# Run the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
# Production build (static export to ./out)
npm run build
```

## Project Structure

```
app/
  layout.tsx          Root layout, fonts, SEO and Open Graph metadata
  page.tsx            Home page (assembles all sections) and the JSON-LD schemas
  globals.css         Global styles, theme tokens and animations
  icon.svg            Favicon
components/
  Navigation.tsx      Fixed navbar, active section link, language switch
  Hero.tsx            Headline, audience chips, counters, degree strip, CTA
  Services.tsx        Subjects, grouped by audience behind a segmented control
  Method.tsx          The four "why me" cards
  Temoignage.tsx      Testimonials carousel
  About.tsx           Credentials band and the questions/answers panel
  Faq.tsx             FAQ accordion
  Contact.tsx         Contact section wrapper
  ContactForm.tsx     Multi-step request form
  ContactChannels.tsx WhatsApp / email / SMS channel cards
  Footer.tsx          Footer, with links back into the subjects tabs
  Segmented.tsx       Animated segmented control (shared)
  SectionHeader.tsx   The eyebrow + title + subtitle every section shares
  Counter.tsx         Number that counts up when it scrolls into view
  SmoothScroll.tsx    Anchor scrolling and scroll-reveal observer
  AnimatedBackground.tsx  The two fixed background layers
  Providers.tsx       Wraps the tree in the language provider
  WhatsAppIcon.tsx    Inline WhatsApp glyph (not in Lucide)
lib/
  i18n.tsx            Language context (FR / EN / NL, persisted)
  assetPath.ts        GitHub Pages basePath helper
  audience.ts         Browser event letting the footer open a subjects tab
  highlight.tsx       Renders **double-asterisk** spans as green emphasis
  ordinals.tsx        Raises French ordinal suffixes ("1ère", "6ème")
  layoutEffect.ts     useLayoutEffect on the client, useEffect on the server
  maps.ts             Google Maps URL for the tutoring location
locales/
  translations.ts     All UI copy, in the three languages
data/
  prof.json           Tutor identity, contact details and SEO metadata
  testimonials.json   Testimonials (author + avatar)
public/
  app-image.png       Hero screenshot: README banner and Open Graph image
  face_image.jpg      Portrait shown in the hero card
.github/workflows/
  nextjs.yml          Automated GitHub Pages deployment
```

## Configuration

Content is data-driven, so no component edits are needed for everyday updates:

- `data/prof.json` — name, city, subjects, contact details, and the SEO / Open Graph metadata.
- `data/testimonials.json` — testimonials (author name and avatar initial).
- `locales/translations.ts` — every piece of on-screen text, in the three languages. `fr` is the source of truth: `en` and `nl` are typed as `typeof fr`, so a key added on one side has to be added everywhere before the build passes.

## Updating the preview image

`public/app-image.png` is a screenshot of the hero, used twice — as the README banner above, and as the Open Graph image social networks show when the site is shared. It has to be regenerated whenever the hero changes:

1. `npm run build`, then serve the export: `npx http-server out -p 4173`.
2. Screenshot the page at a **1440 × 840** viewport with a device scale factor of **1.4** (2016 × 1176 output). Give the page a few seconds first, so the fade-in animations and the two hero counters have settled.
3. Save it over `public/app-image.png`.
4. Update `width` / `height` in `app/layout.tsx` if the output size changed, and bump the `?v=` suffix on `ogImage` in `data/prof.json` — social networks cache preview images aggressively and keep serving the old one otherwise.

## Deployment

The site is deployed automatically to **GitHub Pages** via GitHub Actions: every push to `main` triggers a static build and publish (`.github/workflows/nextjs.yml`). In the repository, set **Settings → Pages → Source** to **GitHub Actions**.

---

<div align="center">

**Mathis Delsart** &nbsp;·&nbsp; [github.com/mathisdelsart](https://github.com/mathisdelsart)

</div>
