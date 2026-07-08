# Enterprise AI Strategy — Service Definition

**Status:** Source of truth for website content, sales conversations,
discovery workshops, client proposals, and future implementation.
**Service:** Enterprise AI Strategy (first of ORXIO's six named services;
existing site reference: `ServicesSection.tsx`, icon `Compass`, tagline
*"AI strategy, use case discovery, roadmap creation, and transformation
planning,"* capability tags `AI Roadmaps` / `Governance` / `Workshops`).
**Target route (not yet built):** `/services/enterprise-ai-strategy`, per
[`SERVICE_PAGE_BLUEPRINT.md`](./SERVICE_PAGE_BLUEPRINT.md).

This document defines the *service itself* — what ORXIO sells, to whom,
and why. `SERVICE_PAGE_BLUEPRINT.md` defines the *page structure* that
will present it. Section 28 below maps every section of this document
onto that page structure directly.

---

## 1. Executive Summary

Enterprise AI Strategy is ORXIO's advisory offering for organizations that
need to decide *where* and *how* to apply AI before committing engineering
budget to build anything. It produces a governed, prioritized, and
technically grounded roadmap — not a vendor recommendation, not a proof of
concept, and not a pitch for a specific model or platform. It is the entry
point to every other ORXIO service: strategy work identifies which
downstream capability (AI Agents, Intelligent Automation, Data Platforms,
Generative AI, Custom AI Applications) an organization actually needs
next, and in what order.

## 2. Service Vision

Most enterprises do not fail at AI because the technology doesn't work —
they fail because they invest in the wrong use case, skip governance until
it's a blocker, or let a proof of concept stall indefinitely because no
one owns the path to production. Enterprise AI Strategy exists to prevent
that failure mode: a structured, business-outcome-first process that
produces a roadmap an organization can actually execute, defend to its
board, and hand to an engineering team without re-litigating the
fundamentals.

## 3. Problem Statement

Enterprise leaders evaluating AI today face a specific, recurring set of
problems:

- **Too many possible use cases, no defensible way to prioritize them.**
  Every function in the business has an AI idea; few organizations have a
  consistent method for ranking them by value and feasibility.
- **Governance is treated as a later problem.** Security, data privacy,
  and model-risk questions are deferred until a pilot is already
  underway, at which point they become blockers rather than design inputs.
- **Vendor selection precedes strategy.** Organizations pick a model
  provider or platform before they've defined the problem it needs to
  solve, locking in technical constraints prematurely.
- **Pilots don't have a path to production.** A successful proof of
  concept frequently has no defined owner, budget, or architecture for
  scaling past the pilot stage.
- **No shared internal language.** Business and technical stakeholders
  disagree on what "AI-ready" even means, stalling decision-making.

## 4. Ideal Customer Profile (ICP)

- Mid-market to large enterprise (typically 500+ employees, or smaller
  organizations with a technically complex or regulated operating
  environment).
- Has budget authority and organizational appetite for a multi-quarter AI
  initiative, but has not yet committed to a specific technical direction.
- Has at least one prior AI pilot or exploratory project — successful or
  not — that surfaced the need for a more structured approach.
- Operates in an environment with real governance requirements (data
  privacy, regulatory exposure, or internal risk/compliance review) that
  make an ungoverned "just start building" approach untenable.
- Industries this applies to today, per ORXIO's existing published
  Industries Served content: Manufacturing, Financial Services,
  Healthcare, Retail & Commerce, Logistics & Supply Chain, and Enterprise
  Operations functions generally (HR, Finance, Legal, IT, Procurement)
  within any industry.

## 5. Buyer Personas

**CIO** — Owns the overall technology portfolio and its risk exposure.
Primary concern: does this initiative fit the existing technology
governance model, and can it be defended to the board. Wants a roadmap
that is realistic against current infrastructure, not aspirational.

**CTO** — Owns technical direction and platform decisions. Primary
concern: is the strategy technically sound and vendor-neutral enough to
avoid premature lock-in. Wants confidence that recommendations are
grounded in real architectural constraints, not a generic maturity model.

**Head of AI** (where the role exists) — Owns the AI program specifically.
Primary concern: needs an externally validated, structured plan to bring
to leadership, and a partner who can help operationalize governance, not
just produce a slide deck. Often the internal champion for this
engagement.

**VP Engineering** — Will ultimately own delivery of whatever the strategy
recommends. Primary concern: is the roadmap actually buildable with
realistic resourcing, and does it avoid architectural dead ends. Wants
early involvement so the eventual handoff to engineering isn't a surprise.

**COO** — Owns operational outcomes and cross-functional execution.
Primary concern: business impact and organizational readiness — will this
actually change how the business operates, and can the organization absorb
that change. Cares more about outcome measurement than technical
approach.

**Innovation Leader** (Chief Innovation Officer, Head of Digital
Transformation, or equivalent) — Owns the broader transformation mandate
AI strategy sits inside. Primary concern: does this integrate with other
transformation initiatives already underway, and does it produce
something durable rather than a one-off report.

## 6. Business Problems Solved

- Inability to prioritize competing AI investment options with a
  consistent, defensible method.
- Governance and risk requirements arriving too late to shape the
  technical approach.
- Vendor or platform decisions made without a validated business case.
- Pilots with no architecture or ownership model for reaching production.
- Misalignment between business and technical stakeholders on scope,
  feasibility, and definition of success.

## 7. Business Outcomes

- A prioritized, resourced roadmap the organization can execute without
  further external strategy work.
- Governance and risk requirements defined *before* implementation begins,
  not discovered during it.
- A vendor-neutral technical direction, reducing the risk of early
  platform lock-in.
- Aligned business and technical stakeholders working from one shared plan
  and one shared definition of success.
- A clear, specific handoff point into implementation (AI Agents,
  Automation, Data Platforms, Generative AI, or Custom Applications),
  removing the ambiguity that stalls most post-pilot initiatives.

## 8. Service Scope

Enterprise AI Strategy covers the **Discover** and **Design** phases of
ORXIO's Enterprise AI Delivery Framework (the same five-stage framework
published on the homepage and reused by every ORXIO service, per
`ProcessSection`): Business Discovery, AI Readiness, Opportunity
Assessment, AI Strategy, Solution Architecture, and Data Foundation
planning. It does not cover the **Build**, **Deploy**, or **Optimize**
phases — those are delivered by ORXIO's implementation services once a
strategy engagement defines what should be built.

## 9. What's Included

- Structured discovery: stakeholder interviews, current-state technology
  and data assessment, business-objective mapping.
- AI readiness assessment across data, infrastructure, governance, and
  organizational capability.
- Use case identification and prioritization, using a consistent,
  documented scoring method (value, feasibility, risk).
- A governance framework covering data privacy, model risk, and
  compliance considerations relevant to the client's industry.
- A vendor-neutral technology direction (categories of technology
  recommended, not a mandated specific vendor).
- A phased roadmap with sequencing, indicative resourcing, and defined
  success metrics per phase.
- A final executive presentation and a written strategy document.

## 10. What's Not Included

- Implementation, engineering, or deployment of any recommended solution
  (delivered separately under AI Agents, Intelligent Automation, Data
  Platforms, Generative AI, or Custom AI Applications).
- Selection or procurement of a specific commercial vendor contract on the
  client's behalf.
- Ongoing governance administration after the roadmap is delivered (available
  separately under the Advisory engagement model, below).
- Change management or organizational training programs beyond what is
  required to present and hand off the roadmap itself.
- Data migration, infrastructure build-out, or any hands-on technical
  work — strategy engagements are advisory, not delivery.

## 11. Engagement Models

- **Workshop** — A fixed-length, fixed-scope session (typically one to
  two days) focused on a single question: aligning stakeholders on AI
  opportunity areas, or resolving a specific strategic decision. Lowest
  commitment entry point; often the first ORXIO engagement for a new
  client. Corresponds to a scoped instance of the site-wide "Strategy
  Sprint" engagement model.
- **Assessment** — A structured evaluation of AI readiness across data,
  infrastructure, governance, and organizational capability, producing a
  scored, documented baseline. Typically two to four weeks. Also maps to
  "Strategy Sprint," scoped toward assessment rather than workshop
  facilitation.
- **Advisory** — Ongoing, retained strategic guidance as an organization
  executes its roadmap — periodic reviews, governance updates, and
  decision support as new opportunities or constraints emerge. Maps to the
  site-wide "Managed AI Partnership" engagement model.
- **End-to-End Strategy** — The full Discover-and-Design engagement:
  complete discovery, assessment, use case prioritization, governance
  framework, and roadmap, culminating in a full executive presentation.
  Maps to the site-wide "Project Delivery" engagement model, scoped to the
  strategy phases only (per Service Scope, above).

## 12. Delivery Methodology

Follows the **Discover** and **Design** stages of ORXIO's published
Enterprise AI Delivery Framework:

1. **Business Discovery** — stakeholder interviews, current-state
   assessment, objective mapping.
2. **AI Readiness** — scored evaluation across data, infrastructure,
   governance, and organizational capability.
3. **Opportunity Assessment** — use case identification and prioritization
   against a documented value/feasibility/risk method.
4. **AI Strategy** — the prioritized roadmap: sequencing, resourcing,
   success metrics, and governance framework.
5. **Solution Architecture & Data Foundation** — a vendor-neutral technical
   direction and data readiness plan sufficient to hand off to an
   implementation team without further strategic ambiguity.

Each stage produces a defined artifact (see Deliverables) and is reviewed
with the client's core stakeholder group before proceeding to the next.

## 13. Deliverables

- AI Readiness Assessment report (scored, with supporting evidence).
- Prioritized Use Case Portfolio (ranked, with value/feasibility/risk
  scoring documented per use case).
- Governance Framework document (data privacy, model risk, compliance
  considerations specific to the client).
- Vendor-neutral Technology Direction document.
- Phased Roadmap (sequencing, indicative resourcing, success metrics per
  phase).
- Executive presentation deck and a full written strategy document.

## 14. Success Metrics

Success for a strategy engagement is measured by whether the roadmap is
*executed*, not merely delivered:

- Roadmap adopted and resourced by the client within an agreed period
  following delivery.
- Governance framework formally accepted by the client's risk/compliance
  function (where applicable).
- At least one prioritized use case advances into an implementation
  engagement (with ORXIO or otherwise) within the roadmap's defined
  timeline.
- Stakeholder alignment confirmed at handoff — no unresolved disagreement
  between business and technical stakeholders on scope or priority.

ORXIO does not report speculative ROI percentages or fabricated
before/after metrics in the absence of real client data — success is
defined by adoption and execution, and quantified per engagement once real
outcomes exist (see [Section 27, Future Expansion](#27-future-expansion-opportunities)).

## 15. Typical Timeline

- **Workshop**: 1–2 days, plus a short written summary within one week.
- **Assessment**: 2–4 weeks.
- **End-to-End Strategy**: 6–10 weeks, depending on organizational size
  and stakeholder availability.
- **Advisory**: ongoing, structured as a recurring cadence (typically
  monthly or quarterly) agreed with the client.

## 16. Risks & Assumptions

**Risks:**
- Stakeholder availability is the most common schedule risk — discovery
  quality depends on access to the right people, not just calendar time.
- A roadmap without an internal executive sponsor is at high risk of
  non-execution regardless of its quality.
- Governance requirements can shift mid-engagement (new regulation,
  internal policy change) — scope includes a defined change process for
  this.

**Assumptions:**
- The client has, or is willing to designate, a single accountable
  internal sponsor for the duration of the engagement.
- The client can provide reasonable access to relevant technical and
  business stakeholders within the agreed timeline.
- Strategy recommendations assume the client's existing data and
  infrastructure constraints as given inputs, not as something this
  engagement will remediate (remediation is a separate, implementation-phase
  concern).

## 17. Client Responsibilities

- Designate a single accountable internal sponsor.
- Provide timely access to relevant stakeholders (business and technical).
- Share existing technology, data, and governance documentation needed for
  an accurate assessment.
- Make roadmap-adoption and resourcing decisions within a reasonable
  period following delivery, so the strategy doesn't go stale before
  execution begins.

## 18. ORXIO Responsibilities

- Conduct structured, evidence-based discovery and assessment.
- Apply a consistent, documented prioritization method — not ad hoc
  judgment.
- Produce a governance framework appropriate to the client's actual
  regulatory and risk context, not a generic template.
- Deliver a roadmap that is vendor-neutral and technically realistic
  against the client's actual infrastructure.
- Present findings clearly to both business and technical stakeholders,
  in language each audience can act on.

## 19. Frequently Asked Questions

**How is this different from a generic AI maturity assessment?**
A maturity assessment tells you where you stand. This engagement produces
a specific, prioritized, resourced roadmap for what to do next — the
assessment is an input, not the deliverable.

**Do we need to know which AI vendor or platform we want before starting?**
No — and if you already have a strong vendor preference, this engagement
is where it gets pressure-tested against your actual use cases, not
assumed correct by default.

**Can this engagement start before we have a dedicated AI team?**
Yes. Many clients engage ORXIO precisely because they don't yet have
internal AI leadership — the Head of AI persona above is often hired
*during or after* this engagement, not before it.

**What happens after the roadmap is delivered?**
The client can execute independently, engage ORXIO for implementation
under one of the other five services, or retain ORXIO under the Advisory
engagement model for ongoing strategic support.

**How do you handle industries with heavy regulatory requirements?**
Governance framework development is scoped to the client's actual
regulatory context (see Service Scope and Deliverables) — this is not a
one-size-fits-all template.

## 20. Objection Handling

**"We can do this internally with our own team."**
Many organizations can — and should, where internal capability exists.
ORXIO's value is in structured methodology, cross-industry pattern
recognition, and vendor-neutral objectivity that's difficult to replicate
with a team evaluating its own organization from the inside. This is
often a partial engagement (an Assessment or Workshop) rather than a full
strategy build, specifically to complement existing internal capability.

**"We already ran a pilot — we don't need strategy, we need to build."**
A pilot validates a technical approach; it rarely validates that the
approach was the highest-value option available, or that it was designed
with governance in mind from the start. Skipping straight to Build
without validating those two things is precisely the failure mode this
service exists to prevent (see Problem Statement).

**"This will take too long — we need to move fast."**
The Workshop and Assessment engagement models exist specifically for
this — a fast, scoped starting point that doesn't require a full
End-to-End Strategy commitment before showing value.

**"AI strategy will be outdated by the time we finish."**
The roadmap is intentionally structured around business objectives and
governance — the durable parts — with technology recommendations kept
vendor-neutral and category-level specifically so the roadmap doesn't
expire when a specific model or platform changes.

## 21. Competitive Positioning

Enterprise AI Strategy is positioned between two common alternatives, both
of which it is deliberately not:

- **Generic strategy consultancies** (traditional management consulting)
  produce credible business analysis but typically lack the technical
  depth to validate architectural and data feasibility — their roadmaps
  frequently underestimate real implementation risk.
- **Vendor-aligned AI consultancies** (delivery partners tied to a
  specific model provider or platform) produce technically grounded
  recommendations that are structurally biased toward their own platform,
  regardless of client fit.

ORXIO's position: technical depth without vendor affiliation. The
recommendation is shaped by the client's actual constraints and the
business case, not by which platform ORXIO has an incentive to sell.

## 22. Why ORXIO

Directly grounded in ORXIO's existing, published company-wide positioning
(`WhyOrxioSection`):

- **Business Before Models** — every engagement starts from measurable
  business outcomes, not a preferred technology.
- **Vendor Neutral** — technology direction is selected based on the
  client's needs, not a partner incentive.
- **Security by Design** — governance is a first-class deliverable of this
  engagement, not an afterthought.
- **Measurable ROI** — success is defined and tracked, not assumed.
- **Enterprise First** — every recommendation is scoped for production
  reality, not proof-of-concept convenience.
- **Long-Term Partnership** — the Advisory engagement model exists
  specifically so the relationship doesn't end at roadmap delivery.

## 23. Cross-Sell Opportunities

Enterprise AI Strategy is the top-of-funnel service; its natural,
intended handoff points are ORXIO's five implementation services,
depending on what the roadmap prioritizes:

- **AI Agents** — where the roadmap prioritizes copilots, multi-agent
  systems, or task automation.
- **Intelligent Automation** — where the roadmap prioritizes workflow
  automation and operational efficiency.
- **Data Platforms** — where the roadmap surfaces a data foundation gap as
  a prerequisite to any AI initiative.
- **Generative AI** — where the roadmap prioritizes copilots, semantic
  search, or knowledge-assistant use cases.
- **Custom AI Applications** — where the roadmap identifies a need for a
  purpose-built application rather than an off-the-shelf or agent-based
  solution.

This cross-sell relationship should be reflected directly in the
Related Services section of the future service page (see Section 24).

## 24. Internal Linking Recommendations

Per `SERVICE_PAGE_BLUEPRINT.md`'s Internal Linking Strategy:

- **Related Services** (page section 11): link to all five implementation
  services listed in Section 23 above — this service is the one exception
  to the blueprint's "2–3 curated related services" guidance, since
  Enterprise AI Strategy is genuinely upstream of all five, not just a
  curated subset. Recommend surfacing 3 at a time (rotating or
  most-relevant-first) to stay within the blueprint's visual pattern.
- **Upward**: standard `FinalCTASection` "Explore Services" link back to
  the `/services` hub, per the blueprint.
- **From the hub**: no change needed — the existing `ServicesSection`
  card on `/services` and `/` already links to this page's target slug.
- **From Contact**: the Contact page's `EngagementOptionsSection` /
  `faq-data.ts` should reference this service by name where a prospect's
  inquiry indicates early-stage, pre-technical-direction need — a content
  update to existing Contact-page copy, not a new component.

## 25. SEO Strategy

Primary target terms: *"enterprise AI strategy," "AI roadmap consulting,"
"AI readiness assessment," "AI governance framework."* Secondary/long-tail:
the specific buyer-persona and objection-handling language in Sections 5
and 20 above (e.g. *"AI strategy consulting for CIOs," "AI pilot to
production"*) — these map directly onto natural search phrasing and should
be reflected in Business Challenges and FAQ copy on the eventual page, per
`SERVICE_PAGE_BLUEPRINT.md` Section 2 and Section 10 guidance.

Structured data: `Service` + `FAQPage` JSON-LD, per the blueprint's
JSON-LD Strategy — this document's Section 19 FAQ content maps directly
into that structured data with no rewriting needed.

## 26. Metadata Draft

Following the exact `Metadata` pattern specified in
`SERVICE_PAGE_BLUEPRINT.md`:

```ts
export const metadata: Metadata = {
  title: "Enterprise AI Strategy",
  description:
    "Enterprise AI strategy consulting: AI readiness assessment, use case prioritization, governance frameworks, and vendor-neutral roadmaps for production-ready AI.",
  alternates: {
    canonical: "/services/enterprise-ai-strategy",
  },
};
```

## 27. Future Expansion Opportunities

- **Real case-study metrics.** Once client engagements produce reportable
  outcomes, Section 14 (Success Metrics) and the page's future Business
  Outcomes section should be updated with real, specific, attributable
  results — replacing qualitative claims with quantified ones, per
  ADR-0006's content strategy (no fabricated numbers in the interim).
- **Industry-specific strategy variants.** A regulated-industry variant
  (e.g. Financial Services or Healthcare-specific governance emphasis)
  could be developed as a distinct landing page or a content variant of
  this same page, once demand signals justify it.
- **Self-serve AI Readiness Assessment.** A lightweight, productized
  version of Section 12's Stage 2 (AI Readiness) could become a top-of-funnel
  lead-generation tool (a scored questionnaire) distinct from the
  full advisory engagement — a plausible link to ORXIO's own future
  Product Platform vision (see `docs/adr/0010-product-platform.md`).
- **Workshop productization.** The Workshop engagement model is the
  lowest-friction entry point and the most repeatable — a strong
  candidate for a fixed-price, self-service booking flow ahead of the
  other three engagement models.

## 28. Website Content Mapping

Maps every section of this document onto `SERVICE_PAGE_BLUEPRINT.md`'s
twelve page sections:

| PRD Section | → | Blueprint Page Section |
| --- | --- | --- |
| 1. Executive Summary, 2. Service Vision | → | 1. Hero |
| 3. Problem Statement, 6. Business Problems Solved | → | 2. Business Challenges |
| 21. Competitive Positioning, part of 22. Why ORXIO | → | 3. ORXIO Approach |
| 9. What's Included, 8. Service Scope | → | 4. Capabilities |
| 12. Delivery Methodology, 13. Deliverables | → | 5. Delivery Methodology (reused `ProcessSection`) |
| — (Strategy is technology-agnostic by design; see Section 9) | → | 6. Technology Stack — recommend a filtered or de-emphasized instance, since this service's differentiator is vendor-neutrality, not a specific stack |
| 4. Ideal Customer Profile | → | 7. Industries Served |
| 7. Business Outcomes, 14. Success Metrics | → | 8. Business Outcomes |
| 11. Engagement Models | → | 9. Engagement Model (service-specific variant of `EngagementModelSection`) |
| 19. Frequently Asked Questions, 20. Objection Handling | → | 10. FAQ |
| 23. Cross-Sell Opportunities | → | 11. Related Services |
| 22. Why ORXIO (CTA framing) | → | 12. Final CTA |
| 15. Typical Timeline, 16. Risks & Assumptions, 17. Client Responsibilities, 18. ORXIO Responsibilities | → | Supporting content for sales conversations, proposals, and discovery workshops — not directly rendered on the public page; available as source material for the Contact-stage conversation and formal proposal documents |
| 25. SEO Strategy, 26. Metadata Draft | → | Direct input to the page's `metadata` export and JSON-LD, per `SERVICE_PAGE_BLUEPRINT.md`'s SEO/Metadata/JSON-LD sections |
| 24. Internal Linking Recommendations | → | Direct input to the page's Related Services section and site-wide cross-links |
| 27. Future Expansion Opportunities | → | Not mapped to the initial page build; retained as forward-looking input for future sprints |
