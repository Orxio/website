# ADR 0010 - ORXIO Product Platform

## Status

Proposed

## Date

2026-07-08

## Context

**This document is a strategic roadmap, not a description of implemented
architecture.** ORXIO's current codebase is a marketing website — it
describes and sells consulting services and (aspirationally) products; it
does not yet contain a product, a customer-facing application, an API, or
a dashboard. Nothing in this ADR exists in the repository today.

The homepage already positions ORXIO as "AI Consulting **and AI
Products**" (see the root layout's site description: *"ORXIO is a premium
AI consulting and AI products company..."*), and the Navbar/Footer already
link to a placeholder `/products` route that does not yet exist. The
consulting-services side of the business is well underway (this site); the
products side has no defined shape yet.

## Problem Statement

If ORXIO builds productized offerings beyond its consulting services, what
categories of product are plausible, and how do they relate to each other?

## Decision (Vision)

A potential product roadmap, in roughly increasing order of platform
maturity — not a committed sequence with dates:

- **AI Copilots** — embedded, task-specific assistants, likely the most
  direct productization of the "AI Agents" service category already
  described on this site.
- **Enterprise Chatbots** — customer-facing conversational interfaces,
  likely built on the same foundation-model and RAG stack already named
  in the public Technology Stack section.
- **AI Agents (as a product, not just a service)** — packaged, deployable
  agents a client can adopt directly, rather than a bespoke consulting
  engagement.
- **Knowledge Platforms** — productized knowledge-base/retrieval systems,
  a natural counterpart to the internal knowledge base described in
  ADR-0009, offered externally.
- **Automation Suite** — packaged workflow automation, extending the
  "Automation" service category (n8n/REST APIs/webhooks, per the
  Technology Stack section) into a standalone offering.
- **Developer APIs** — programmatic access to ORXIO's products, implying a
  first real API surface for the company, with its own authentication,
  documentation, and versioning concerns.
- **Customer Portal** — a client-facing application for engagement status,
  deliverables, and communication — the external counterpart to the
  Customer Success agent vision in ADR-0009.
- **Admin Portal** — internal operations tooling for ORXIO staff managing
  client engagements and product usage.
- **Analytics Dashboard** — usage and outcome reporting, likely spanning
  both the Customer Portal (client-facing metrics) and Admin Portal
  (internal metrics).
- **Marketplace** — the most speculative, longest-horizon item: a
  platform for third-party or client-built agents/integrations, plausible
  only once the Developer API and a stable agent/product model exist.

## Rationale

Recording this roadmap now gives the `/products` placeholder link already
present in the site's navigation a stated direction, and gives a name and
rough sequencing to ideas that are otherwise only implied by the site's
own "AI Products" tagline. Sequencing roughly follows platform
dependency — a Marketplace requires a Developer API, which requires at
least one real product to expose, which is why Copilots/Chatbots/Agents
(the most direct extensions of existing consulting expertise) are listed
first.

## Alternatives Considered

The primary alternative considered was leaving the product line entirely
undefined until a specific product is greenlit. Rejected for the same
reason as ADR-0009: an explicit, even if tentative, roadmap gives future
planning a shared reference point instead of starting from zero each time
a product idea is discussed.

## Consequences

### Positive

- Gives the site's existing "AI Products" positioning and `/products`
  placeholder link a concrete, if tentative, meaning.
- Provides a rough dependency order (which products unlock which later
  products) useful for prioritization once product work is greenlit.

### Negative

- None yet — no implementation exists. As with ADR-0009, the main risk is
  this document being mistaken for a commitment rather than a direction.

## Risks

Treating this roadmap as fixed rather than provisional could bias future
product decisions toward this exact list and order even if market reality
suggests otherwise. Mitigation: revisit and explicitly supersede this ADR
once real product discovery work begins, rather than treating it as final.

## Future Considerations

- The first product actually greenlit should get its own ADR describing
  real scope, architecture, and a real target route
  (replacing the current `/products` placeholder), independent of this
  roadmap's ordering.
- This roadmap should be revisited whenever ORXIO's own market strategy
  materially changes — it reflects a snapshot of plausible direction as of
  this writing, not a fixed plan.

## Related ADRs

- ADR-0009 — Future AI Agent Architecture (the internal-facing counterpart
  to several of these external product categories).
- ADR-0005 — SEO Strategy (a future `/products` route would need its own
  metadata and sitemap entry, following the established pattern).
