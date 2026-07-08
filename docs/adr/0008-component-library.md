# ADR 0008 - Component Library

## Status

Accepted

## Date

2026-07-08

## Context

The codebase has grown to roughly sixty components across seven pages and
a shared navigation shell, all built incrementally, sprint by sprint. As
that count grows, how components are organized on disk — and which ones
are treated as shared primitives versus page-specific — determines whether
the codebase stays navigable or turns into an undifferentiated pile of
files.

## Problem Statement

How is the component tree organized today, what is a "shared primitive"
versus a "page section" in this codebase, and how should new components be
placed?

## Decision

### Current organization

```
components/
  ui/            Generic, page-agnostic primitives: Button, Card, Badge
  typography/    The type scale: Display, Heading, Lead, Text
  layout/        Cross-page structural primitives: Container, Section, PageWrapper
  navigation/    Site-wide shell: Navbar, Footer, MobileMenu, ThemeToggle
  providers/     App-wide context providers: ThemeProvider
  home/          Homepage-specific sections and their cards
  about/         About-page-specific sections and their cards
  contact/       Contact-page-specific sections, ContactForm, faq-data
  services/      Services-page-specific sections, faq-data
  legal/         Shared shell for Privacy/Terms (LegalHero, LegalSection)
```

This is a **two-tier, not atomic-design (atoms/molecules/organisms), split**:

1. **Shared primitives** (`ui/`, `typography/`, `layout/`, `navigation/`,
   `providers/`) — generic, reusable anywhere, no page-specific content or
   copy, no knowledge of which page renders them. `Button` doesn't know
   about the Hero; `Section` doesn't know about the homepage.
2. **Page-scoped components** (`home/`, `about/`, `contact/`, `services/`,
   `legal/`) — one folder per page/area, containing that page's section
   components and their paired card components. These *do* carry
   page-specific content and copy (as typed data arrays, per ADR-0003) but
   are built entirely out of tier-1 primitives plus `cva`/Tailwind.

A formal atoms/molecules/organisms taxonomy was deliberately not adopted —
see Alternatives Considered.

### Shared component patterns

- **Cards** (`ui/card.tsx`): unstyled structural primitives
  (`Card`, `CardHeader`, `CardContent`, `CardFooter`, etc.) — the actual
  visual recipe (border, radius, hover, gradient) is applied via
  `className` at each call site following ADR-0002's documented recipe,
  not baked into `Card` itself. This is why every page-scoped `*Card.tsx`
  component looks identical despite `Card` itself carrying almost no
  opinion.
- **Buttons** (`ui/button.tsx`): one `cva`-variant component wrapping Base
  UI's `<Button>`, covering every button on the site (primary/outline/
  ghost/etc. × six sizes). No page has its own button component.
- **Navigation** (`navigation/`): rendered exactly once, in
  `app/layout.tsx`, shared by every route — not duplicated per page.
- **Sections & Layout** (`layout/`): `Section`/`Container` are the only
  sanctioned way to control page vertical rhythm and horizontal width;
  no page-scoped component sets its own `py-*`/`max-w-*` independent of
  these.
- **Utilities** (`lib/`): `cn()` (class merging), `lib/motion.ts`
  (animation presets), `lib/email/` (Resend templates/types used only by
  the Contact Server Action). Utilities are plain functions/modules, not
  components, and live outside `components/` entirely.

### Reserved, currently-unused directories

`components/cards/`, `components/animations/`, `components/marketing/`,
and `components/sections/` exist on disk but are empty — no files, no
exports. They are not part of the current architecture. They should be
treated as reserved namespace for a possible future reorganization (see
Future Considerations), not as a place to add new files under the current
model without first deciding what they're for.

## Rationale

A strict atoms/molecules/organisms taxonomy was considered too fine-grained
for this codebase's actual shape: most "molecules" in that framework would
just be the page-scoped `*Card.tsx` components, and most "organisms" would
just be the `*Section.tsx` components — introducing three extra
directory tiers for a distinction the `home/`, `about/`, etc. folders
already make by page. The two-tier split (shared primitive vs. page-scoped)
matches how this codebase is actually built and where new components
naturally belong: "does this have any page-specific content or copy?" is
a fast, unambiguous test for which tier a new component belongs in.

## Alternatives Considered

- **Formal atomic design** (`atoms/`, `molecules/`, `organisms/`,
  `templates/`, `pages/`). Rejected — see Rationale; the page-scoped
  folders already provide the organizing structure atomic design would add,
  without an extra layer of indirection.
- **A single flat `components/` directory.** Rejected — at ~60 components,
  a flat directory would be difficult to navigate and would blur the
  shared-primitive vs. page-scoped distinction that currently makes "can I
  safely edit this without affecting other pages" answerable at a glance.
- **Colocating each section with its route** (e.g.
  `app/services/_components/`). Rejected — several homepage sections are
  already reused across multiple routes (ADR-0003); colocating with a
  single route would misrepresent components that are, in practice,
  shared.

## Consequences

### Positive

- New contributors (or agents given a scoped instruction) can identify
  "modify ONLY these files" boundaries quickly, because the folder
  structure already mirrors page ownership.
- Shared primitives have a small, stable surface (`ui/`, `typography/`,
  `layout/`) that rarely needs to change once a pattern is established.

### Negative

- The empty reserved directories (`cards/`, `animations/`, `marketing/`,
  `sections/`) are dead weight in their current form — they signal
  intent without documentation, which this ADR now corrects, but they add
  no value until a decision is made about them.
- There is no compile-time or lint-enforced boundary preventing a
  page-scoped component from importing another page's component directly
  (e.g. `about/` importing something from `contact/`) — the boundary is a
  convention, not a rule.

## Risks

Without an enforced boundary, cross-page coupling could creep in over
time. Mitigation: treat any import from one page-scoped folder into
another as a signal that the imported component should be promoted to a
shared location (most likely `home/` if it's homepage-and-elsewhere, as
has already happened organically with `ProcessSection`, `WhyOrxioSection`,
and `FinalCTASection`).

## Future Considerations

- Decide the purpose of the four empty reserved directories, or remove
  them if no purpose is defined within a reasonable time — an empty,
  undocumented directory is a worse signal than no directory at all.
- If the site grows a true component count that outgrows the page-scoped
  model (e.g. dozens of pages sharing dozens of sections), revisit whether
  a formal shared "sections" tier (potentially the currently-empty
  `components/sections/`) is warranted for components used by three or
  more pages, rather than leaving them in their originating page's folder.

## Related ADRs

- ADR-0002 — Enterprise Design System (the visual recipe applied at each
  shared primitive's call sites).
- ADR-0003 — Homepage Architecture.
