# ADR 0002 - Enterprise Design System

## Status

Accepted

## Date

2026-07-08

## Context

ORXIO's site is built by composing many independent sections and cards
(Hero, Services, Process, Technology, Why ORXIO, Industries, Final CTA, and
their per-page equivalents on About/Services/Contact). Each was originally
built in its own sprint. Without a shared, enforced set of primitives and
conventions, each section would drift toward its own micro-aesthetic —
different border opacities, different hover timings, different card
paddings — which is exactly the "generic AI startup" look the brand
direction explicitly rejects in favor of an OpenAI/Anthropic/Stripe/
Vercel/Linear-grade enterprise feel.

## Problem Statement

How does the codebase guarantee that every section, card, button, and chip
looks and behaves like part of the same product, regardless of which
sprint built it or in what order?

## Decision

Build a small, strictly-reused design system rather than styling each
section independently:

- **Theme tokens** — a single set of CSS custom properties in
  `app/globals.css` (`--background`, `--foreground`, `--primary`,
  `--border`, `--muted-foreground`, etc.), each defined once for light and
  once for dark, exposed to Tailwind via `@theme inline`. Every token is
  `oklch` with zero chroma — the palette is monochrome by construction, not
  by convention.
- **Typography primitives** — `Display`, `Heading`, `Lead`, `Text` in
  `components/typography/`, each a `cva`-based wrapper with a fixed,
  small set of sizes. Section headings, card titles, and body copy always
  go through one of these four, never a raw styled `<h2>`/`<p>`.
- **Spacing rhythm** — `Section` (`py-*` variants) and `Container`
  (`max-w-*` variants) as the only way pages control vertical rhythm and
  horizontal width. `size="lg"` is the fixed standard for both, on every
  homepage section, with documented, deliberate exceptions.
- **Cards** — one normalized recipe (radius, border opacity, padding,
  hover elevation, ambient hover-glow layer, icon-chip treatment) applied
  identically across every card family (Service, Technology, Trust
  Pillar, Industry, Process). See [`DESIGN_SYSTEM.md`](../DESIGN_SYSTEM.md)
  for the exact class list.
- **Chips/pills** — one exact style (`rounded-full border-border/50
  px-2.5 py-1 text-[0.7rem]`) reused for every capability tag across every
  card family and the Final CTA's trust chips.
- **Buttons** — a single `cva`-based `Button` primitive
  (`components/ui/button.tsx`) with a fixed variant/size set; per-instance
  hover polish (lift, shadow, border-brighten) follows one normalized
  primary-button and one normalized secondary-button recipe wherever a CTA
  pair appears.
- **Icons** — `lucide-react` exclusively, monochrome (`text-primary` /
  `text-muted-foreground`, never a hardcoded color), always `aria-hidden`
  when decorative.
- **Responsive-first**: every section and card is authored mobile-first
  with Tailwind's `sm:`/`md:`/`lg:` breakpoints, verified at all three
  tiers before being considered complete.
- **Accessibility is part of the system, not an afterthought**: semantic
  heading hierarchy (`h1`→`h2`→`h3`), `aria-hidden` on decorative icons,
  `aria-label` on icon-only controls, and `prefers-reduced-motion` handling
  are baked into the primitives themselves (e.g. `useMotionPreset`
  auto-degrades under reduced motion) rather than re-implemented per
  section.

## Rationale

Consistency is prioritized over page-specific styling because the brand's
core credibility claim is enterprise-grade precision — a site where every
card behaves slightly differently reads as unpolished no matter how good
any individual section looks in isolation. Centralizing the recipe in a
small number of primitives and a documented convention (see
[`DESIGN_SYSTEM.md`](../DESIGN_SYSTEM.md)) means:

- A new section built in a future sprint can match the existing system by
  following the documented recipe, without needing to visually compare
  against every other section by eye.
- Deviations are detectable and fixable as a class of bug, not a matter of
  taste — this project has already run a dedicated "homepage polish" pass
  specifically to find and correct places where one card/section had
  drifted from the shared recipe (see git history:
  `feat(home): final homepage polish`).

## Alternatives Considered

- **A component library / design tool (Figma tokens, Storybook-driven
  system) as the source of truth.** Rejected for this project's current
  size: the token/CSS + `cva` + documented-convention approach already
  gives one source of truth (the code itself) without the overhead of
  syncing a separate design tool.
- **Per-section styling with no shared recipe, relying on visual review
  to catch drift.** Rejected — this is what led to the inconsistencies the
  polish pass had to correct; it doesn't scale past a handful of sections.
- **A color accent per section (each card family gets its own hue) for
  visual variety.** Rejected — conflicts directly with the monochrome,
  restrained brand direction; variety comes from layout and content, not
  color.

## Consequences

### Positive

- New sections are fast to build correctly — copy the recipe, change the
  data.
- The site reads as one product, not a collection of independently
  designed pages.
- Accessibility and reduced-motion handling are automatically inherited
  by anything built on the shared primitives.

### Negative

- The system constrains one-off creative expression per section; a
  section that "wants" to look different has to justify why before
  deviating.
- Shared primitives (`Button`, `Card`) are treated as off-limits for
  direct editing in most sprints — customization happens via `className`
  overrides, which requires understanding how `cn()`/`tailwind-merge`
  resolves conflicting utility classes.

## Risks

Without active enforcement, drift can still creep back in (as it did once
already). Mitigation: treat "matches the established card/button/chip
recipe" as an explicit review criterion for any new homepage or page
section, and re-run a consistency pass periodically as the site grows.

## Future Considerations

- If the component count grows significantly, consider formalizing the
  card/chip/button recipes as actual shared components rather than
  copy-pasted class strings, to make drift structurally impossible rather
  than just documented against.

## Related ADRs

- ADR-0003 — Homepage Architecture (consumes this design system).
- ADR-0004 — Enterprise Service Page Template (consumes this design system).
- ADR-0008 — Component Library (the longer-term organizational plan for
  these primitives).
