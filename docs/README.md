# ORXIO Website

The marketing website for ORXIO, an Enterprise AI Consulting and AI Products
company. Built as a premium, content-driven marketing site — not an
application — covering the homepage, About, Services, Contact, and legal
pages.

## Tech Stack

| Layer            | Choice                                             |
| ----------------- | --------------------------------------------------- |
| Framework          | [Next.js 16](https://nextjs.org) (App Router)      |
| UI library          | React 19                                            |
| Language           | TypeScript (`strict: true`)                        |
| Styling            | Tailwind CSS v4 (CSS-first `@theme` config)         |
| Component primitives | [Base UI](https://base-ui.com) (`@base-ui/react`) via a thin `shadcn`-style wrapper layer |
| Animation           | [Framer Motion](https://www.framer.com/motion/)     |
| Icons               | [lucide-react](https://lucide.dev)                  |
| Theming             | [next-themes](https://github.com/pacocoursey/next-themes) |
| Class merging        | `clsx` + `tailwind-merge` (`cn` helper)             |
| Variant styling       | `class-variance-authority` (`cva`)                  |
| Email (Contact form) | [Resend](https://resend.com) via a Next.js Server Action |

## Getting Started

```bash
npm install
npm run dev      # start the dev server (Turbopack)
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # eslint (flat config, eslint-config-next)
npx tsc --noEmit  # type-check without emitting output
```

There is no test runner configured in this project.

## Environment Variables

All are optional — each has a hardcoded fallback in code, so the site builds
and runs without a `.env.local`. Set these before production launch:

| Variable                     | Used for                                   |
| ------------------------------ | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Canonical URL, OpenGraph, sitemap, robots.txt |
| `NEXT_PUBLIC_LINKEDIN_URL`     | Footer social link                          |
| `NEXT_PUBLIC_GITHUB_URL`       | Footer social link                          |
| `NEXT_PUBLIC_CONTACT_EMAIL`    | Footer contact link, mailto links            |
| `RESEND_API_KEY` / related     | Contact form Server Action (`app/actions/contact.ts`) |

## Folder Structure

```
app/                    Next.js App Router — one folder per route
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx
  services/page.tsx
  terms/page.tsx
  actions/contact.ts     Server Action for the contact form
  layout.tsx              Root layout (fonts, metadata, ThemeProvider, Navbar/Footer)
  page.tsx                 Homepage
  robots.ts / sitemap.ts    Generated SEO routes

components/
  home/                   Homepage-only sections and their cards
  about/                  About page sections
  contact/                Contact page sections + ContactForm
  services/               Services page sections
  legal/                  Shared Privacy/Terms page shell
  navigation/             Navbar, Footer, MobileMenu, ThemeToggle
  layout/                 Container, Section, PageWrapper — cross-page primitives
  typography/             Display, Heading, Lead, Text — the type scale
  providers/               ThemeProvider
  ui/                      shadcn-style primitives: Button, Card, Badge

lib/
  motion.ts                Framer Motion variant presets (fade, slideUp, slideDown, stagger)
  utils.ts                  `cn()` class-merge helper
  email/                    Resend email templates and types used by the contact action

public/brand/              Logo, favicons, OG image, hero artwork
docs/                       This documentation set
```

Four component directories exist as empty scaffolding with no files yet:
`components/cards`, `components/animations`, `components/marketing`,
`components/sections`. They are not part of the current architecture —
treat them as reserved, not in use.

## Page Inventory (current)

- `/` — Homepage (Hero, Services, Process, Why ORXIO, Technology, Industries, Final CTA)
- `/about`
- `/services`
- `/contact`
- `/privacy`
- `/terms`

Several internal links already point at routes that don't exist yet
(`/solutions`, `/industries`, `/insights`, `/products`, individual
`/services/[slug]` pages, `/cookies`). This is intentional — they are
placeholders for future sprints, not broken links to fix.

## Related Documents

- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — component architecture, data flow, rendering model
- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — theme tokens, typography, cards, buttons, spacing
- [`GIT_WORKFLOW.md`](./GIT_WORKFLOW.md) — branching, commits, releases
- [`CODING_STANDARDS.md`](./CODING_STANDARDS.md) — TypeScript, naming, accessibility, performance
