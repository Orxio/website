# ADR 0009 - Future AI Agent Architecture

## Status

Proposed

## Date

2026-07-08

## Context

**This document is a vision statement, not a description of implemented
architecture.** As of this writing, the ORXIO codebase is a static
marketing website with no AI agents, no agent runtime, no knowledge base,
and no vector database — nothing described in this ADR exists in the
repository today. It is recorded now so that if/when internal agent
tooling is built, it has a stated direction to build toward rather than
being decided ad hoc at that time.

ORXIO's own service offering is AI agents and automation for enterprise
clients. There is an obvious, natural extension: using the same category
of technology internally to run parts of ORXIO's own operations —
"practicing what we sell."

## Problem Statement

If ORXIO builds internal AI agents to support its own operations, what
shape should that system take, and which functions would it plausibly
cover first?

## Decision (Vision)

A long-term direction — not a committed roadmap with dates — for a set of
internal, function-scoped AI agents:

- **Sales agent** — qualifies inbound leads from the Contact form,
  drafts first-touch responses, surfaces relevant case studies/services
  based on the prospect's stated need.
- **Content agent** — assists in drafting homepage/service copy,
  blog/insights content (once that surface exists — see ADR-0006), and
  keeping content aligned with the tone-of-voice standard already
  documented.
- **Development agent** — assists in implementing sprint-scoped changes to
  this codebase itself, following the conventions in
  [`CODING_STANDARDS.md`](../CODING_STANDARDS.md) and this ADR set — in
  effect, a codified version of the workflow already used to build this
  site sprint-by-sprint.
- **Marketing agent** — assists with SEO monitoring, structured data
  upkeep (ADR-0005), and campaign-level content variations.
- **Customer Success agent** — assists post-engagement, tracking delivery
  milestones against the Enterprise AI Delivery Framework (ADR-0003) and
  surfacing status to clients.

Supporting infrastructure this vision would require:

- **A knowledge base** — a structured store of ORXIO's own service
  definitions, past engagement outcomes, and content standards, used as
  grounding context for every agent above.
- **A vector database** — for semantic retrieval over that knowledge base
  and over client-specific context, enabling retrieval-augmented responses
  rather than agents operating on prompt-only context.
- **MCP (Model Context Protocol) integrations** — standardized tool access
  for these agents into ORXIO's actual systems (CRM, email, this
  repository, project tracking), following the same MCP pattern already
  named as part of ORXIO's own external service offering (see the
  Technology Stack section's "AI Frameworks" category, which already lists
  MCP as a technology ORXIO uses for clients).
- **Automation workflows** — the connective layer scheduling/triggering
  these agents (e.g. a new Contact form submission triggering the Sales
  agent), analogous to the "Automation" category already in ORXIO's public
  Technology Stack (n8n, REST APIs, webhooks).

## Rationale

Recording this now, clearly marked as vision rather than fact, prevents
two failure modes: building ad hoc internal tooling with no coherent
architecture when the need becomes urgent, and — equally important —
prevents this document or any other from later misrepresenting these
agents as already existing.

## Alternatives Considered

Not applicable in the same sense as an implementation ADR — this is a
direction-setting document. The primary alternative considered was **not
writing this down at all** and deciding agent-by-agent when each need
arose; rejected because a stated, even if tentative, direction produces
more coherent tooling than a series of unrelated one-off internal scripts.

## Consequences

### Positive

- Gives future internal-tooling work a stated direction and vocabulary
  (which agent owns which function) to build toward.
- Reinforces ORXIO's external positioning by demonstrating internal use of
  the same technology category it sells.

### Negative

- None yet — no implementation exists, so there are no realized costs.
  The primary "negative" of a vision document is the risk of it going
  stale or being mistaken for a commitment; both are mitigated by the
  explicit `Proposed` status and the framing in this document.

## Risks

The main risk is scope creep disguised as vision — treating this document
as license to start building agent infrastructure without a specific,
justified business need driving each one. Mitigation: nothing in this ADR
should be built speculatively; each agent should be justified and scoped
individually, at the time it's actually prioritized, with its own ADR.

## Future Considerations

- Each agent listed here should get its own ADR at the point it moves from
  vision to planned work, with a real problem statement, not just the
  one-line description given here.
- The knowledge base and vector database are prerequisites shared by every
  agent — if any agent moves forward, that shared infrastructure decision
  should be made once, explicitly, rather than per-agent.

## Related ADRs

- ADR-0010 — ORXIO Product Platform (the external-facing counterpart to
  this internal-facing vision).
- ADR-0006 — Content Strategy (the Content agent would operate under this
  standard).
