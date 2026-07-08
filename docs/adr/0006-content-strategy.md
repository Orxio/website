# ADR 0006 - Content Strategy

## Status

Accepted

## Date

2026-07-08

## Context

Every section of copy on the site — Hero, Services, Process, Why ORXIO,
Industries, FAQ — has been written and rewritten across multiple sprints,
with explicit, repeated instructions to avoid "generic AI startup"
language and generic marketing words. A consistent editorial standard is
needed so content added in future sprints (by different authors/agents)
reads as one voice, not a patchwork.

## Problem Statement

What editorial standard governs ORXIO's written content, and what is
in scope for this site today versus a future content program?

## Decision

### Current Architecture (implemented today)

- **Audience: enterprise decision-makers**, not individual developers or
  consumers. Copy is written for someone evaluating a consulting partner
  on behalf of an organization — it speaks to business outcomes,
  governance, and scale, not feature lists.
- **Enterprise-first framing over feature-first framing.** Section copy
  consistently answers "why does this matter to the business" before "what
  does this technically do" — e.g. the Why ORXIO section is explicitly
  framed around "Where does ORXIO create business value?" rather than a
  capabilities checklist, and the Industries section is framed around
  "Where does ORXIO create business value?" per industry, not "which
  industries do we list."
- **Business outcomes over technical detail.** Service and process
  descriptions name outcomes (*"measurable business outcomes,"
  "operational and financial impact"*) alongside technical capability
  (*"AI Agents," "RAG," "LangGraph"*) — technical credibility is
  established through precise, correct terminology used sparingly, not
  through depth of technical explanation.
- **Technical credibility through specificity, not jargon density.** The
  Technology Stack section names real, current, industry-recognized
  platforms and frameworks (OpenAI, Anthropic, LangChain, MCP, Databricks,
  Kubernetes) rather than vague claims of "cutting-edge technology" — this
  signals real engineering depth to a technical evaluator without
  requiring the reader to be one.
- **Tone of voice**: precise, calm, declarative. Short sentences. No
  exclamation points, no rhetorical questions used as headlines, no
  hedging language ("we believe," "we strive to"). Sentences state what is
  true, not what is aspired to.
- **A banned-word discipline for generic marketing language.** Words like
  *Innovation*, *Quality*, *Excellence*, *Trust* are explicitly avoided as
  free-floating adjectives — they are only used, if at all, inside a
  specific, meaningful business statement, never as a section title or
  unsupported claim.
- **Content hierarchy mirrors visual hierarchy**: an eyebrow label (small,
  uppercase, tracked) states the category; an `h2` states the section's
  single core claim in one line; supporting body copy (one to two
  sentences, `max-w-prose`) expands it; card-level copy (`h3` + one
  sentence) breaks the claim into concrete parts. No section's supporting
  copy runs longer than a short paragraph — density is achieved through
  section count, not paragraph length.
- **Content lives in code**, as typed data arrays co-located with the
  section component that renders it (ADR-0003) — there is no CMS and no
  separate content-authoring workflow today.

### Future Vision (not yet implemented)

- **Blog / Insights.** The Navbar and Footer already link to `/insights`
  as a placeholder route (consistent with this project's established
  pattern of linking ahead of a page's existence) — no blog exists yet.
  When built, it should extend this same editorial standard: enterprise
  decision-maker audience, outcome-first framing, specific rather than
  generic technical claims.
- **Case studies.** Not yet started. Would be the natural home for the
  "Measurable ROI" and "Long-Term Partnership" claims currently made in
  the abstract on the homepage (Why ORXIO section) to be substantiated
  with real, specific outcomes.
- **Whitepapers.** Not yet started. Would extend the Technology Stack and
  Delivery Framework sections' claims into deeper, downloadable technical
  content for a more technical evaluator further down the buying journey.
- Both of the above would likely require a content authoring workflow
  beyond a typed TypeScript array (see ADR-0003's Future Considerations),
  since case studies and whitepapers are longer-form, less structured, and
  plausibly authored by non-engineers.

## Rationale

A single, explicit editorial standard lets content be written correctly
the first time in a single-pass sprint, without a separate editorial
review cycle — the same way ADR-0002 lets a new section be styled
correctly by following a documented recipe rather than by eye.

## Alternatives Considered

- **Feature-first, technical-audience copy** (common in developer-tool
  marketing). Rejected — ORXIO's buyer is an enterprise decision-maker
  evaluating a consulting partner, not a developer evaluating an SDK.
- **A CMS-backed content model from day one.** Rejected for the current
  site size — see ADR-0003; revisit once blog/case-study content requires
  non-engineer authorship.

## Consequences

### Positive

- Content across sections reads as one consistent voice despite being
  written across many separate sprints.
- The banned-word discipline gives a fast, mechanical check
  ("does this copy contain an unsupported claim of Innovation/Quality/
  Excellence/Trust?") that catches generic marketing language before it
  ships.

### Negative

- Every future content addition requires deliberate adherence to this
  standard — nothing in the current codebase mechanically enforces tone or
  word choice; it depends on the author (human or agent) applying it.
- Longer-form future content (case studies, whitepapers) will not fit
  comfortably into the current "typed array in a component file" content
  model and will need a new decision (see Future Considerations).

## Risks

Without a linting or review mechanism, tone drift is possible in future
sprints written without reference to this ADR. Mitigation: this document
should be the explicit reference point for any future content-writing
sprint.

## Future Considerations

- Decide on a content-authoring approach for case studies and whitepapers
  once that content is prioritized.
- Consider a lightweight, mechanical check (e.g. a banned-word grep) as
  part of the validation step for content-heavy sprints.

## Related ADRs

- ADR-0003 — Homepage Architecture (where content currently lives).
- ADR-0005 — SEO Strategy (content and metadata are written together).
