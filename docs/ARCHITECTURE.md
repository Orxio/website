# Architecture

## Rendering Model

The site is built on the Next.js App Router. Pages under `app/` are React
Server Components by default; interactivity (hooks, event handlers, Framer
Motion) is opted into per-component with `"use client"`.

- **Server by default**: `app/layout.tsx` and every `app/*/page.tsx` are
  Server Components. They compose client components but hold no client-side
  state themselves.
- **Client where required**: any component using `useState`, `useEffect`,
  `framer-motion` hooks (`useMotionValue`, `useReducedMotion`, etc.), or
  `next-themes`' `useTheme` is marked `"use client"` at the top of the file
  (e.g. `Navbar.tsx`, `ThemeToggle.tsx`, `HeroIllustration.tsx`, every
  homepage section that animates on scroll).
- **Static generation**: `next build` prerenders all current routes as
  static content (confirmed by the build output: `○ (Static)` for every
  route, including `/`, `/about`, `/contact`, `/services`, `/privacy`,
  `/terms`, plus the generated `robots.txt` and `sitemap.xml`).
- **Server Actions**: the contact form does not call a client-side API
  route. `components/contact/ContactForm.tsx` submits directly to a
  `"use server"` function exported from `app/actions/contact.ts`, which
  sends email via Resend (`lib/email/`).

## Composition Pattern: Section → Card

Nearly every content area on the homepage (and several on About/Services)
follows the same two-level split:

1. **`*Section.tsx`** — owns the data array, the section heading/subtext,
   the responsive grid, and the Framer Motion `stagger`/`slideUp`
   choreography for scroll-in animation. Always a Server-rendered shell
   wrapping a `"use client"` `motion.div`/`motion.ol` for the animated
   parts.
2. **`*Card.tsx` / `*Step.tsx`** — a small, mostly presentational component
   that receives fully-resolved props (icon, title, description, tags) and
   renders one repeated unit. Cards do not fetch or own data.

Examples of this pair: `ServicesSection` / `ServiceCard`,
`TechnologySection` / `TechnologyCard`, `WhyOrxioSection` /
`TrustPillarCard`, `IndustriesSection` / `IndustryCard`, `ProcessSection` /
`ProcessStep`.

This keeps content (the data array) and presentation (the card) separable:
changing copy means editing the `const X: Type[] = [...]` array in the
`*Section.tsx` file; changing visual treatment means editing the card
component, and that change applies to every item at once.

### Dual-mode components

`ProcessStep` is the one component in this pattern with two render
branches, chosen by prop presence rather than a config flag: when
`capabilities` is passed it renders the premium capability card used on the
homepage; when omitted it falls back to the original circle-and-line
vertical timeline row. This exists because `ProcessStep` is also reused by
`components/contact/ResponseExpectationSection.tsx` for a simpler 3-step
"What Happens Next" list — the fallback branch keeps that consumer working
unchanged rather than forking the component.

## Layout Primitives

Three composable primitives in `components/layout/` are used by every page
instead of ad-hoc `<div>`s:

- **`Section`** (`components/layout/Section.tsx`) — vertical rhythm only.
  A `cva` component with a `size` variant (`sm` / `md` / `lg` / `xl`) that
  maps to `py-*` pairs. `lg` (`py-24 sm:py-32`) is the standard size used by
  every homepage section; deviations are local overrides via `className`
  (e.g. Hero's `pt-[4.8rem]` to tighten the space under a sticky Navbar).
- **`Container`** (`components/layout/Container.tsx`) — horizontal
  centering and max-width, also a `cva` `size` variant (`sm` `md` `lg` `xl`
  `full`). `lg` (`max-w-7xl`) is the default and most common; the Final CTA
  section overrides it with an arbitrary `max-w-[900px]` for a narrower,
  more intentional panel.
- **`PageWrapper`** (`components/layout/PageWrapper.tsx`) — the single
  `<main id="main-content">` landmark, rendered once in `app/layout.tsx`
  around `{children}`. It's the target of the Navbar's "Skip to content"
  link.

## Navigation Shell

`app/layout.tsx` renders `<ThemeProvider><Navbar />{children via
PageWrapper}<Footer /></ThemeProvider>` once, so every route gets the same
header/footer without re-declaring them per page.

- **`Navbar`** — sticky, tracks scroll position via a `scroll` listener to
  toggle a glassmorphism state (`backdrop-blur-lg`, translucent background,
  border, shadow) once the page scrolls past 8px. Renders the primary nav
  list, `ThemeToggle`, the CTA button, and delegates to `MobileMenu` below
  the `lg` breakpoint.
- **`MobileMenu`** — a Framer Motion `AnimatePresence` overlay + slide-down
  panel, with a hand-rolled focus trap (first-focusable-on-open,
  Tab/Shift+Tab wrap, `Escape` to close, scroll lock via
  `document.body.style.overflow`, and focus restoration to the trigger on
  close).
- **`ThemeToggle`** — light/dark switch backed by `next-themes`. Uses
  `useSyncExternalStore` (not `useEffect` + `setState`) to detect
  client-mount and avoid a hydration mismatch, rendering a disabled
  placeholder button until mounted.

## Motion System

All non-trivial animation goes through `lib/motion.ts` rather than
component-local `variants` objects:

```ts
const { fade, slideUp, slideDown, stagger } = motionPresets
useMotionPreset(name) // returns the preset, or a reduced-motion-safe fallback
```

`useMotionPreset` checks `useReducedMotion()` internally: under
`prefers-reduced-motion: reduce`, `slideUp`/`slideDown`/`fade` all collapse
to a single 0.2s opacity fade, and `stagger`'s `staggerChildren` timing is
left intact (position, not motion, still needs to resolve). Individual
components layer additional bespoke motion on top for hero-specific effects
(e.g. `HeroIllustration`'s mouse-parallax `useMotionValue`/`useSpring` and
its own `useReducedMotion()` gate), but the shared page-level scroll-in
choreography always comes from this file.

## Styling Architecture

- Tailwind v4 is configured CSS-first in `app/globals.css` — there is no
  `tailwind.config.ts`. Design tokens are CSS custom properties under
  `:root` and `.dark`, exposed to Tailwind's `@theme inline` block.
- Component variants are defined with `cva` (`class-variance-authority`)
  co-located in the component file (see `components/ui/button.tsx`,
  `card.tsx`, `badge.tsx`, and the typography primitives).
- Class merging always goes through `cn()` (`lib/utils.ts`, `clsx` +
  `tailwind-merge`), which is what lets a consumer pass a `className` prop
  that safely overrides a component's own default Tailwind classes.
- See [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) for the token values and
  card/button/spacing conventions themselves.

## Data Flow

There is no client-side data fetching and no database in this project.
Content is:

- **Static, in-component arrays** for all marketing copy (service lists,
  process steps, technology stack, industries, trust pillars, FAQ data in
  `components/*/faq-data.ts`).
- **One Server Action** (`app/actions/contact.ts`) is the only place the
  site talks to an external service, sending the contact form submission
  through Resend (`lib/email/`).

## Security Headers

`next.config.ts` attaches a fixed set of security headers
(`X-Content-Type-Options`, `X-Frame-Options: DENY`,
`Referrer-Policy: strict-origin-when-cross-origin`, a locked-down
`Permissions-Policy`) to every route via `headers()`. There is no custom
middleware.
