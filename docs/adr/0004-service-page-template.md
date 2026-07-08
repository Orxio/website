# ADR 0004 - Enterprise Service Page Template

## Status

Accepted

## Date

2026-07-08

## Context

ORXIO offers six services (Enterprise AI Strategy, AI Agents, Intelligent
Automation, Data Platforms, Generative AI, Custom AI Applications). Links
to individual service pages already exist throughout the site — in the
homepage `ServicesSection`, the Footer's Services column
(`/services/enterprise-ai-strategy`, `/services/ai-agents`, etc.) — but as
of this writing **none of those individual pages exist yet**. The only
service-related route currently implemented is the single hub page at
`/services` (`app/services/page.tsx`), which composes: `ServicesHero`,
`ServicesSection`, `WhyOrxioSection`, `ProcessSection`,
`EngagementModelSection`, `FAQSection`, `FinalCTASection`.

Building six near-identical pages by hand, independently, would either
duplicate a large amount of layout code or — worse — let each page drift
into a slightly different structure, undermining both SEO consistency and
user trust.

## Problem Statement

Before any individual service page is built, what structure should every
one of them share, and why standardize instead of designing each
individually?

## Decision

Standardize on one section sequence for every individual service page,
to be used when those pages are built:

1. **Hero** — service name, one-line value proposition.
2. **Business Challenges** — the problems this service addresses, framed
   in business terms.
3. **ORXIO Approach** — how ORXIO delivers this specific service.
4. **Capabilities** — concrete capabilities/deliverables within the
   service.
5. **Delivery Process** — reuse of the existing `ProcessSection` /
   Enterprise AI Delivery Framework (ADR-0003), giving every service page
   the same delivery narrative as the homepage.
6. **Technology Stack** — reuse of `TechnologySection`, scoped or filtered
   to the technologies relevant to that service where applicable.
7. **Industries** — reuse of `IndustriesSection`, showing where this
   service applies.
8. **Why ORXIO** — reuse of `WhyOrxioSection` (already proven reusable —
   it's rendered on both `/` and `/services` today).
9. **FAQ** — service-specific questions, following the existing
   `FAQSection` + JSON-LD `FAQPage` structured-data pattern already used
   on `/services` and `/contact`.
10. **CTA** — reuse of `FinalCTASection`, already proven reusable across
    `/`, `/services`, and `/about`.

Every step in this template composes existing, already-built section
components (per ADR-0003's homepage architecture) plus a small number of
new, service-specific sections (Hero, Business Challenges, ORXIO Approach,
Capabilities) that don't yet exist and will need to be built once.

**Current state vs. this decision:** this ADR records the *standard*, not
a completed rollout. As of this writing, zero individual service pages
have been built. The `/services/*` hrefs already present in
`ServicesSection` and the Footer are placeholder links, consistent with
this project's established pattern of linking to intentionally
not-yet-built routes ahead of the page existing.

## Rationale

- **SEO**: six pages with an identical, predictable heading/section
  structure are easier to keep consistent in title/description patterns
  and structured data, and easier for search engines to understand as a
  family of related, comparable offerings (see ADR-0005).
- **Maintainability**: a structural or accessibility fix made to a shared
  section (e.g. `ProcessSection`) benefits every service page at once,
  rather than needing to be repeated six times.
- **Consistency**: a prospect who reads two service pages back to back
  gets the same information architecture both times, reinforcing the
  "precise, enterprise-grade" positioning rather than reading as
  ad-hoc marketing pages.
- **Scalability**: adding a seventh service in the future means filling in
  the template, not designing a new page structure from scratch.
- **Conversion**: every service page ends the same way — Delivery Process,
  Why ORXIO, then a CTA — so the page's persuasive arc (what we do → why
  us → talk to us) is identical and tunable in one place.

## Alternatives Considered

- **Bespoke page design per service.** Rejected — six independently
  designed pages multiply the design/maintenance surface by six for no
  proportional benefit, and risk exactly the drift-and-inconsistency
  problem ADR-0002 was written to prevent.
- **A single dynamic `/services/[slug]` route driven by a content config
  object instead of six static pages.** Not rejected outright — this is
  a plausible implementation strategy for *building* the template decided
  here, and should be evaluated at build time; this ADR records the
  section structure, not the routing mechanism.

## Consequences

### Positive

- The rollout of six service pages, when it happens, is templated work,
  not six separate design efforts.
- Four of the ten template sections already exist and are proven reusable
  today.

### Negative

- Four new section components (Hero variant, Business Challenges,
  ORXIO Approach, Capabilities) must still be designed and built before
  any individual service page can ship — this decision does not reduce
  that work, only structures it.
- A rigid template risks feeling formulaic if a given service genuinely
  needs a different narrative — this should be treated as a strong
  default, not an absolute rule.

## Risks

If individual service pages are built ad hoc, under time pressure, without
referencing this ADR, the standardization benefit is lost. Mitigation:
any future sprint that builds a service page should reference this
document explicitly as the required structure.

## Future Considerations

- Decide the routing implementation (six static routes vs. one dynamic
  `[slug]` route backed by a data file) when the first service page is
  actually built.
- Once one service page is built, revisit this ADR to confirm the template
  held up in practice, or supersede it with adjustments.

## Related ADRs

- ADR-0002 — Enterprise Design System (the visual recipe every new section
  in this template must follow).
- ADR-0003 — Homepage Architecture (the section-composition pattern this
  template extends to service pages).
- ADR-0005 — SEO Strategy.
