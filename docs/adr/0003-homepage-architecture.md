# ADR 0003 - Homepage Architecture

## Status

Accepted

## Date

2026-07-08

## Context

The homepage (`app/page.tsx`) is the site's highest-traffic, highest-scrutiny
page and needed to be built incrementally, section by section, across many
separate sprints, each focused on one part of the page (Hero, then
Services, then Process, and so on). It also needed each section to be
independently testable, reusable on other pages, and safely modifiable
without risking regressions elsewhere on the page.

## Problem Statement

How should the homepage be structured so that each visual section can be
designed, built, and revised independently, while still composing into one
coherent page?

## Decision

The homepage is a flat composition of independent, self-contained section
components, each in its own file under `components/home/`, imported and
rendered in sequence by `app/page.tsx`:

```tsx
<Hero />
<ServicesSection />
<ProcessSection />
<WhyOrxioSection />
<TechnologySection />
<IndustriesSection />
<FinalCTASection />
```

`app/page.tsx` itself contains no layout logic, no styling, and no data —
it is purely a sequence of section components. Each section:

- Owns its own content (a local, typed data array — `SERVICES`,
  `PROCESS_STEPS`, `TECHNOLOGY_CATEGORIES`, `TRUST_PILLARS`, `INDUSTRIES`).
- Owns its own entrance animation (`useMotionPreset("stagger")` +
  `whileInView`).
- Renders through the shared `Section`/`Container` layout primitives and
  the shared card recipe (ADR-0002), so visual consistency doesn't depend
  on the section remembering to match its siblings by eye.
- Has no dependency on any other homepage section — `ServicesSection`
  does not know `ProcessSection` exists, and reordering, removing, or
  reusing any one section elsewhere (several already are — see below)
  requires no changes to the others.

`Footer` (site-wide, in `components/navigation/`) and `Navbar` are
explicitly outside this list — they are rendered once in `app/layout.tsx`,
not per-page, because they are shell chrome shared by every route, not
homepage content.

Several homepage sections are already reused on other pages precisely
because of this independence: `ProcessSection`, `WhyOrxioSection`, and
`FinalCTASection` also render on `/services`; `FinalCTASection` also
renders on `/about`.

## Rationale

- **Independent sections match how the site is actually built** — one
  sprint, one section. A component-per-section architecture means each
  sprint's scope maps directly onto one file (or a section+card file
  pair), with an explicit, enforceable boundary ("modify ONLY these
  files") that keeps a sprint from accidentally touching unrelated parts
  of the page.
- **Composability enables reuse without duplication.** Because a section
  has no homepage-specific coupling, it can be dropped into
  `/services` or `/about` as-is — this has already happened for three of
  the seven sections, which is direct evidence the pattern works rather
  than a theoretical benefit.
- **Isolation limits blast radius.** A change to `TechnologySection` cannot
  break `Hero`'s layout, because there is no shared state, shared markup,
  or shared styling scope between them beyond the common primitives from
  ADR-0002.

## Alternatives Considered

- **One large `Homepage` component with internal sections.** Rejected —
  would force every homepage change to touch one large file regardless of
  which section it concerns, and would make section reuse on other pages
  require extraction later anyway.
- **CMS-driven / config-driven homepage (sections defined by a JSON/CMS
  schema rendered generically).** Rejected as premature — there is no CMS
  in this project, content changes are infrequent enough that editing a
  typed TypeScript array is not a bottleneck, and a generic renderer would
  add abstraction without a corresponding content-velocity need.
- **Section-level Server Component data fetching (each section fetches its
  own content from an API/database).** Rejected — there is no backend
  content store; all homepage content is static copy checked into the
  repository (see ADR-0006).

## Consequences

### Positive

- Sprints have a clean, enforceable file boundary.
- Three of seven sections are already reused across other pages with zero
  modification.
- A section can be redesigned in isolation (as happened repeatedly — Hero
  illustration went through several full rewrites) without risk to the
  rest of the page.

### Negative

- Cross-section consistency (spacing rhythm, hover timing) is not
  structurally enforced by this architecture alone — it depends on every
  section following ADR-0002's documented recipe, and has required at
  least one dedicated audit-and-fix pass to correct drift.
- There is no shared "homepage state" — if a future requirement needs
  cross-section coordination (e.g. a section reacting to another section's
  scroll position), the current architecture has no built-in mechanism for
  it and one would need to be designed.

## Risks

As more sections are added, the flat list in `app/page.tsx` remains simple,
but the *number* of independently-authored card/section pairs grows,
increasing the surface area where visual drift can occur. Mitigation: rely
on ADR-0002's documented recipe and periodic consistency passes.

## Future Considerations

- If homepage content needs to be edited by non-engineers, revisit the
  "content lives in a typed array in the component file" decision in favor
  of a CMS or structured content layer — see ADR-0006 for the current
  content strategy and its explicit non-goals.

## Related ADRs

- ADR-0002 — Enterprise Design System (the shared recipe every section
  depends on).
- ADR-0004 — Enterprise Service Page Template (the same
  section-composition philosophy applied to service pages).
- ADR-0006 — Content Strategy.
