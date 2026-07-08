# ORXIO Service Page Blueprint

Status: **Implementation-ready planning document.** No pages, routes, or
components exist yet for individual services — this document defines the
blueprint every one of the six service pages
(`/services/enterprise-ai-strategy`, `/services/ai-agents`,
`/services/intelligent-automation`, `/services/data-platforms`,
`/services/generative-ai`, `/services/custom-ai-applications`) will
follow when built. It supersedes the section list given in
[ADR-0004](./adr/0004-service-page-template.md) with full detail per
section; ADR-0004 remains the record of *why* this was standardized, this
document is *what* to build.

Everything here is derived from, and constrained to, the current ORXIO
implementation: the existing design system
([`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)), the existing component
architecture ([`ARCHITECTURE.md`](./ARCHITECTURE.md)), and components that
already exist and already work today (`ProcessSection`, `TechnologySection`,
`IndustriesSection`, `WhyOrxioSection`, `EngagementModelSection`,
`FAQSection`/`FAQItem`, `FinalCTASection`). Where a section requires a new
component, that is called out explicitly as **New** rather than implied to
already exist.

---

## Page Composition

```
1.  Hero
2.  Business Challenges
3.  ORXIO Approach
4.  Capabilities
5.  Delivery Methodology       — reuse: ProcessSection
6.  Technology Stack           — reuse: TechnologySection (filtered)
7.  Industries Served          — reuse: IndustriesSection
8.  Business Outcomes
9.  Engagement Model           — reuse: EngagementModelSection
10. FAQ                        — reuse: FAQSection / FAQItem
11. Related Services
12. Final CTA                  — reuse: FinalCTASection
```

Five of twelve sections (Delivery Methodology, Technology Stack,
Industries Served, Engagement Model, Final CTA) are **direct reuse of
existing, already-shipped components** — this is the payoff of ADR-0003's
composable-section architecture. Seven sections are **new** (Hero variant,
Business Challenges, ORXIO Approach, Capabilities, Business Outcomes,
Related Services) but are built entirely from existing primitives
(`Section`, `Container`, `Heading`, `Text`, `Card`, the capability-pill
recipe) per [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — none require a new
visual pattern to be invented.

---

## 1. Hero

**Purpose.** Immediately identify which service this page is about and
state its core value proposition — the visitor must know within one
viewport whether they're on the right page.

**Business objective.** Confirm relevance to the visitor's search intent
(they likely arrived via a specific service-name search or an internal
link) and move them toward the primary CTA without requiring scroll.

**Target audience.** An enterprise decision-maker who already has a
specific problem in mind (e.g. "we need AI agents") and is evaluating
whether ORXIO addresses it.

**Content structure.**
- Eyebrow: the service category (e.g. "AI Agents"), reusing the standard
  eyebrow treatment.
- `h1` (via `Display`): a specific, outcome-oriented headline for *this*
  service — not the generic "AI Services Built for Enterprise Outcomes"
  headline `ServicesHero` uses for the hub page. Each of the six services
  gets its own headline.
- Lead paragraph: one to two sentences, service-specific, naming the
  concrete capability and the business outcome it produces.
- Primary CTA: "Book a Strategy Call" → `/contact`.
- Secondary CTA (new for this template, absent from the current
  `ServicesHero`): "Explore Capabilities" → anchor-scrolls to section 4 on
  the same page, giving an immediate second path for a visitor not ready
  to book a call.

**Recommended UI pattern.** New component, `ServiceHero`, structurally
identical to `ServicesHero` (`Section size="lg"`, `Container size="md"`,
centered `stagger`/`slideUp` column) but parameterized by `eyebrow`,
`headline`, `description`, and the two CTA hrefs/labels, so one component
serves all six pages rather than being copy-pasted six times.

**Accessibility.** Single `h1` per page, delivered via `Display`. CTA
buttons are real `<Link>`-rendered buttons, keyboard-reachable, with
visible `:focus-visible` styling inherited from the shared `Button`.

**SEO.** The `h1` should contain the service name in natural language
(matches likely search queries) without keyword-stuffing. This is the
single most important on-page heading for ranking on the service's target
term.

**Future CMS compatibility.** `eyebrow`/`headline`/`description`/CTA
fields map directly onto a CMS "Hero" content block schema — no
structural change needed if content moves out of a TypeScript array later
(see [Future CMS Compatibility](#future-cms-compatibility)).

---

## 2. Business Challenges

**Purpose.** Establish that ORXIO understands the visitor's specific
problem before describing the solution — mirrors how a senior consultant
opens an engagement (diagnose, then prescribe).

**Business objective.** Build immediate credibility and self-selection:
a visitor should recognize their own situation in this section and
conclude "they understand my problem."

**Target audience.** Same enterprise decision-maker, evaluating for
relevance and depth of understanding, not yet ready to be sold to.

**Content structure.** Section heading (e.g. "The Challenges We Solve"),
one supporting sentence, then 3–4 challenge statements — each a short,
specific pain point phrased as the client's own words would phrase it
(e.g. *"Pilot AI projects that never reach production"*), not a generic
industry-trend statement.

**Recommended UI pattern. New component, `BusinessChallengesSection` +
`ChallengeCard`.** Follows the standard Section→Card composition
(ADR-0003) and the exact card recipe from `DESIGN_SYSTEM.md` §Cards —
`rounded-xl border-border/60`, icon chip, `h3` title, `Text size="sm"`
body — grid `grid-cols-1 sm:grid-cols-2`. No capability pills on this
card (a challenge statement doesn't need tags).

**Accessibility.** `h2` section heading, `h3` per challenge card, icons
`aria-hidden`.

**SEO.** Challenge statements are a natural place for the long-tail
phrases a prospect would actually search (e.g. "AI pilot never reaches
production") — write them as real sentences, not headline fragments, so
they read naturally to both users and search engines.

**Future CMS compatibility.** A flat array of `{ title, description }`
challenge objects — trivially portable to a CMS collection field.

---

## 3. ORXIO Approach

**Purpose.** Explain *how* ORXIO delivers this specific service — the
methodology or philosophy behind the work, distinct from section 5
(Delivery Methodology, which is the concrete step-by-step process).

**Business objective.** Differentiate ORXIO from a generic vendor by
naming a specific point of view (e.g. "business outcomes before model
selection," echoing the "Business Before Models" trust pillar already on
the homepage) rather than a list of activities.

**Target audience.** A more skeptical evaluator, possibly comparing
ORXIO against alternative vendors, looking for a reason to prefer ORXIO
specifically.

**Content structure.** Section heading + one short paragraph stating
ORXIO's point of view for this service, followed by 3 short, named
principles (not full cards — a lighter-weight pattern than a card grid,
since this section is about a stance, not a list of features).

**Recommended UI pattern. New component, `ApproachSection`.** A single
`Container size="md"` column: `h2`, `Lead`-style paragraph, then a simple
`<ul>` of 3 principle items (bold label + one sentence each, no icon chip,
no card border) — deliberately lighter-weight than the card grids used
elsewhere on the page, so the page's visual rhythm varies and this section
doesn't read as "just another card grid."

**Accessibility.** `h2` heading; principle list uses `<ul>`/`<li>`, not a
sequence of unlabeled `<div>`s.

**SEO.** This is the section most likely to contain ORXIO's distinctive
positioning language — valuable for brand-term and comparison searches
("ORXIO vs. [competitor]").

**Future CMS compatibility.** `{ statement, principles: [{label, description}] }` —
straightforward CMS block.

---

## 4. Capabilities

**Purpose.** The concrete, specific list of what ORXIO actually delivers
within this service — the most literal "what do we do" section on the
page.

**Business objective.** Let a technical evaluator (who may be reading the
page alongside the business decision-maker) confirm ORXIO's capabilities
match their specific technical requirements.

**Target audience.** Dual audience: business decision-maker skimming for
breadth, technical evaluator reading for specific capability match.

**Content structure.** Section heading, 4–6 capability items, each with a
short title and one-sentence description — richer than the tag pills used
elsewhere, since this is the page's primary "what's included" reference.

**Recommended UI pattern.** Reuse the **exact `ServiceCard`/
`TechnologyCard` recipe** ([`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) §Cards)
via a **new** `CapabilityCard` component — icon chip, `h3`, `Text`
description, no pills needed (capabilities are already the unit of
content). Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for a 6-item
service, or `sm:grid-cols-2` for a 4-item one.

**Accessibility.** `h2` + `h3` per capability, standard icon
`aria-hidden` treatment.

**SEO.** Capability titles are prime targets for matching specific
feature-level search queries within this service's topic.

**Future CMS compatibility.** `{ icon, title, description }[]` — same
shape as every other card-driven section on the site; a CMS "repeater"
field maps directly.

---

## 5. Delivery Methodology — *reuse `ProcessSection`*

**Purpose.** Show the concrete delivery process for this service,
reinforcing the "we have a proven method, not an improvisation" claim.

**Business objective.** Reduce perceived delivery risk — a named,
structured process is more reassuring to an enterprise buyer than an
open-ended engagement.

**Target audience.** The decision-maker's procurement/risk stakeholders as
much as the decision-maker themselves — this section is often what gets
forwarded internally.

**Content structure.** Identical shape to the existing homepage Enterprise
AI Delivery Framework: 5 numbered steps, each with a title, description,
and 3 capability tags.

**Recommended UI pattern.** **Direct reuse of `ProcessSection`.** No new
component. If a service's delivery steps genuinely differ from the
standard 5-stage framework, extend `ProcessSection`'s existing `Step[]`
data shape to accept a `steps` prop (currently hardcoded internally as
`PROCESS_STEPS`) rather than forking the component — this is a small,
backwards-compatible change (default to the existing constant when no
prop is passed, exactly the pattern `ProcessStep` already uses for its
`capabilities`/`isLast` dual-mode branching, see
[`ARCHITECTURE.md`](./ARCHITECTURE.md#dual-mode-components)).

**Accessibility.** Already correct — `ProcessSection` uses a semantic
`<ol>`/`<li>` sequence.

**SEO.** No change needed; inherits `ProcessSection`'s existing structure.

**Future CMS compatibility.** Already a typed `Step[]` array; a CMS could
supply per-service step overrides through the same prop.

---

## 6. Technology Stack — *reuse `TechnologySection` (filtered)*

**Purpose.** Show the specific technologies relevant to this service,
signaling engineering depth and platform currency.

**Business objective.** Reassure a technical evaluator that ORXIO uses
real, current, named tools — not vague "proprietary technology" claims.

**Target audience.** Technical evaluator / IT stakeholder.

**Content structure.** A relevant subset of the homepage's six technology
categories (Foundation Models, AI Frameworks, Cloud, Data Platforms,
Automation, DevOps) — e.g. the "Generative AI" service page would
emphasize Foundation Models and AI Frameworks; "Data Platforms" would
emphasize Data Platforms and Cloud.

**Recommended UI pattern.** **Reuse `TechnologySection`**, extended to
accept an optional `categories` filter prop (a subset of the existing
`TECHNOLOGY_CATEGORIES` keys), defaulting to all six when omitted (so the
homepage usage is unaffected). Do not fork `TechnologyCard` — the existing
card recipe is already correct for this context.

**Accessibility.** Already correct — inherits `TechnologySection`.

**SEO.** Reinforces named-technology search terms in a service-relevant
context (e.g. "LangChain" appearing specifically on the AI Agents page,
not diluted across all six).

**Future CMS compatibility.** The `categories` filter is itself
CMS-editable per service (a multi-select field referencing the fixed
category list).

---

## 7. Industries Served — *reuse `IndustriesSection`*

**Purpose.** Show which industries this specific service applies to,
helping an industry-specific evaluator quickly confirm relevance.

**Business objective.** Support cross-navigation between the industry
angle and the service angle without requiring separate industry-specific
pages yet.

**Target audience.** An evaluator who thinks in terms of their own
industry first, service second.

**Content structure.** Identical shape to the homepage's six industries;
for a service page, likely a filtered subset (e.g. Manufacturing and
Logistics might be de-emphasized on a "Financial Services"-heavy service
like fraud/risk automation).

**Recommended UI pattern.** **Reuse `IndustriesSection`**, extended with
the same optional filter-prop approach as Technology Stack above.

**Accessibility / SEO / Future CMS compatibility.** Same as section 6 —
inherits `IndustriesSection`'s existing, already-correct implementation.

---

## 8. Business Outcomes

**Purpose.** State the measurable result a client should expect from this
service — the section that answers "so what do we actually get."

**Business objective.** Give the decision-maker language to justify the
engagement internally (to their own leadership/procurement) with concrete,
outcome-oriented claims rather than abstract capability descriptions.

**Target audience.** The decision-maker specifically, often the one who
has to build an internal business case.

**Content structure.** 3 outcome statements, each a short, specific claim
(e.g. *"Reduced manual review time"*, *"Faster time-to-decision"*) —
structurally similar to the homepage's `WhyOrxioSection` trust pillars,
but outcome-framed rather than differentiator-framed. **Do not use
unsupported superlatives or invented statistics** — see
[Enterprise Writing Guidelines](#enterprise-writing-guidelines); if a real
metric isn't available yet (no case studies exist per ADR-0006), state the
outcome qualitatively, not with a fabricated number.

**Recommended UI pattern.** **Reuse the `TrustPillarCard` visual recipe**
via a **new** `OutcomeCard` component (same card shape, icon chip, `h3`,
description — no pills) in a `grid-cols-1 sm:grid-cols-3` layout, mirroring
`WhyOrxioSection`'s structure exactly but with service-specific outcome
copy instead of the fixed six company-wide trust pillars.

**Accessibility.** `h2` + `h3` per outcome card.

**SEO.** Outcome language overlaps with what a prospect searches when
evaluating ROI ("reduce X," "improve Y") — write these as real claims a
searcher might type.

**Future CMS compatibility.** `{ icon, title, description }[]` — same
shape as Capabilities; when real case-study data exists (ADR-0006 Future
Vision), this section is the natural place to eventually cite a real,
specific metric per service instead of a qualitative claim.

---

## 9. Engagement Model — *reuse `EngagementModelSection`*

**Purpose.** Show the ways a client can start working with ORXIO on this
service — remove ambiguity about what "getting started" actually looks
like.

**Business objective.** Lower the perceived commitment barrier by
presenting a range of entry points (a fixed-scope sprint is a much lower-risk
first step than an open-ended partnership).

**Target audience.** A decision-maker specifically evaluating budget/scope
risk.

**Content structure.** Identical to the existing implementation: Strategy
Sprint, Project Delivery, Managed AI Partnership — this content is
company-wide, not service-specific, so it does not need per-service
variants.

**Recommended UI pattern.** **Direct reuse of `EngagementModelSection`**,
verbatim, no modification. It is already page-agnostic (rendered today on
`/services`) and requires no service-specific parameterization.

**Accessibility / SEO / Future CMS compatibility.** Unchanged — inherits
the existing, already-shipped implementation.

---

## 10. FAQ — *reuse `FAQSection` / `FAQItem`*

**Purpose.** Pre-empt the specific objections/questions a prospect has
about this particular service before they need to ask a salesperson.

**Business objective.** Reduce friction to booking a call by resolving
common blockers directly on the page; capture long-tail question-phrased
search traffic.

**Target audience.** A prospect close to converting but with one or two
remaining specific concerns.

**Content structure.** 4–6 service-specific Q&A pairs (distinct from the
company-wide FAQ content already on `/contact` and the hub `/services`
page) — questions phrased exactly as a prospect would ask them
("How long does an AI agent deployment take?"), answers 2–3 sentences.

**Recommended UI pattern.** **Direct reuse of `FAQSection`/`FAQItem`**
(the native `<details>`/`<summary>` accordion pattern), parameterized with
a new, per-service `faq-data.ts` file (following the exact pattern already
established by `components/contact/faq-data.ts` and
`components/services/faq-data.ts`) rather than a new component.

**Accessibility.** Already correct — native `<details>`/`<summary>` gives
keyboard operability and expand/collapse semantics for free, no ARIA
reimplementation needed.

**SEO.** Pair with `FAQPage` JSON-LD (see
[JSON-LD Strategy](#json-ld-strategy)) — direct extension of the pattern
already live on `/contact` and `/services`.

**Future CMS compatibility.** Already a flat `{ question, answer }[]`
array per page — a CMS FAQ collection maps one-to-one.

---

## 11. Related Services

**Purpose.** Cross-sell the other five services to a prospect who is
already engaged enough to be reading a full service page.

**Business objective.** Increase average engagement scope by surfacing
adjacent services a client may not have realized ORXIO also offers, and
strengthen internal linking for SEO (see
[Internal Linking Strategy](#internal-linking-strategy)).

**Target audience.** An already-interested prospect, late in the page.

**Content structure.** 2–3 related services (not all five — curated
relevance, e.g. "Data Platforms" page links to "Generative AI" and
"Intelligent Automation," not to itself or to unrelated services), each
as a compact card: icon, service name, one-sentence description, link.

**Recommended UI pattern.** **New component, `RelatedServicesSection`**,
reusing the `ServiceCard` recipe's icon-chip/title/description treatment
but in a more compact variant (no capability pills, no footer — just a
linked card, the whole card clickable) — `grid-cols-1 sm:grid-cols-3`.
Related-service selection is a static, curated mapping (each service
names its 2–3 related services explicitly in its own data file), not an
automatic "same category" algorithm, since with only six services a
curated list is both simpler and better-judged than a similarity heuristic.

**Accessibility.** `h2` section heading; each card is a single accessible
link (the whole card is the link target, with one visible focus ring, not
a card containing a separately-focusable inner link).

**SEO.** This section is the primary internal-linking mechanism between
service pages — see [Internal Linking Strategy](#internal-linking-strategy).

**Future CMS compatibility.** `relatedServiceSlugs: string[]` per service —
a simple reference-field relationship in any CMS.

---

## 12. Final CTA — *reuse `FinalCTASection`*

**Purpose.** The page's last, unambiguous conversion opportunity.

**Business objective.** Convert an evaluator who has read the full page
into a booked strategy call.

**Target audience.** A prospect who has read the whole page — the highest-
intent audience the page will see.

**Content structure.** Identical to the existing implementation
(eyebrow, heading, description, primary + secondary CTA, trust chips) —
already reused across `/`, `/services`, and `/about` with no
modification.

**Recommended UI pattern.** **Direct reuse of `FinalCTASection`,
verbatim.** No service-specific parameterization needed — its "Book a
Strategy Call" / "Explore Services" pairing works unchanged on a service
page, exactly as it already does on the hub page.

**Accessibility / SEO / Future CMS compatibility.** Unchanged — inherits
the existing implementation.

---

## Information Architecture

```
/services                                 (existing hub — unchanged)
  /services/enterprise-ai-strategy        (new)
  /services/ai-agents                     (new)
  /services/intelligent-automation        (new)
  /services/data-platforms                (new)
  /services/generative-ai                 (new)
  /services/custom-ai-applications        (new)
```

All six slugs already exist as link targets throughout the site (homepage
`ServicesSection`, Footer's Services column) — this blueprint fills in the
pages those links already point to. The hub page (`/services`) remains the
category-level entry point; individual service pages are one level deeper,
reachable both from the hub's `ServicesSection` cards and directly from
the Footer/homepage on every page site-wide.

**Routing implementation** (per ADR-0004's Future Considerations): a
single dynamic route, `app/services/[slug]/page.tsx`, driven by a
per-service content file (`content/services/<slug>.ts` or similar),
rather than six hand-written `page.tsx` files. This is the concrete
routing decision ADR-0004 deferred — recommended here because it
guarantees structural consistency by construction (impossible for one
service page to accidentally diverge in section order from another) and
because `generateStaticParams` lets Next.js statically prerender all six
at build time, preserving the current all-static rendering model
(ADR-0007).

## Internal Linking Strategy

- **Downward**: hub (`/services`) → individual service pages, via the
  existing `ServicesSection` cards (already-live "Learn more" links) —
  no change needed, they already point at the correct slugs.
- **Lateral**: service page → service page, via section 11 (Related
  Services) — the primary new internal-linking surface this blueprint
  introduces.
- **Upward**: every service page includes the reused `FinalCTASection`,
  whose secondary CTA ("Explore Services") links back to the hub.
- **Cross-domain**: Industries Served (section 7) and Technology Stack
  (section 6) should, where practical, link relevant tag/pill text to
  future `/industries/[slug]` or a technology glossary page if those are
  ever built — not required for initial launch, noted as a future
  enhancement, not a blocker.

## Metadata Template

Follow the exact `Metadata` export pattern already used on every current
page ([ADR-0005](./adr/0005-seo-strategy.md)):

```ts
export const metadata: Metadata = {
  title: "<Service Name>", // resolves to "<Service Name> | ORXIO" via the root title template
  description: "<130–160 character, service-specific, outcome-oriented description>",
  alternates: {
    canonical: "/services/<slug>",
  },
};
```

No per-service `openGraph`/`twitter` overrides are required — the root
layout's OpenGraph/Twitter defaults (shared `og-image.png`, site name,
locale) already apply site-wide via metadata inheritance and are
sufficient for launch.

## OpenGraph Template

Inherited from `app/layout.tsx` by default (see [`ARCHITECTURE.md`](./ARCHITECTURE.md)).
If per-service social preview differentiation is desired later, each
service page's `metadata.openGraph` can override `title`/`description`
independently without needing a new per-service image — the shared
`og-image.png` remains correct until/unless service-specific OG imagery is
commissioned, which is out of scope for this blueprint.

## JSON-LD Strategy

Two structured-data blocks per service page, following the existing
inline-`<script>` pattern from `/contact` and `/services`:

1. **`FAQPage`** — generated directly from that page's `faq-data.ts`,
   identical mechanism to the current implementation (structured data and
   visible content share one source array, so they cannot drift).
2. **`Service`** (new — not yet used anywhere in the codebase, called out
   as a Future addition in [ADR-0005](./adr/0005-seo-strategy.md)):
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Service",
     "serviceType": "<Service Name>",
     "provider": { "@type": "Organization", "name": "ORXIO" },
     "areaServed": "<Industries Served summary>",
     "description": "<same description as metadata>"
   }
   ```

`BreadcrumbList` JSON-LD should accompany the visual breadcrumb (see
below) — see [Breadcrumb Strategy](#breadcrumb-strategy).

## Canonical Strategy

Every service page sets its own `alternates.canonical` to its own path
(`/services/<slug>`), exactly as every current page already does — no new
canonicalization pattern needed, this blueprint simply extends the
existing per-page convention to six new routes.

## Breadcrumb Strategy

**Not currently implemented anywhere on the site** — this is a genuinely
new pattern being introduced by this blueprint, not a reuse.

- **Visual breadcrumb** (new component, `Breadcrumbs`): `Home / Services /
  <Service Name>`, rendered at the top of the page content, above the
  Hero, small and muted (`text-sm text-muted-foreground`, `Link`s with the
  standard `hover:text-foreground` treatment). Only warranted once pages
  are nested one level deep (as service pages are) — the current site's
  flat, single-level page structure has never needed one.
- **Structured data**: a matching `BreadcrumbList` JSON-LD block,
  generated from the same three-item path used to render the visual
  breadcrumb.

## Content Model

```ts
interface ServicePageContent {
  slug: string
  hero: { eyebrow: string; headline: string; description: string }
  businessChallenges: { title: string; description: string }[]
  approach: { statement: string; principles: { label: string; description: string }[] }
  capabilities: { icon: LucideIconName; title: string; description: string }[]
  deliverySteps?: Step[]                    // optional override of the default 5-stage framework
  technologyCategories?: TechnologyCategoryKey[]  // optional filter, defaults to all six
  industries?: IndustryKey[]                // optional filter, defaults to all six
  businessOutcomes: { icon: LucideIconName; title: string; description: string }[]
  faq: { question: string; answer: string }[]
  relatedServiceSlugs: [string, string] | [string, string, string]
  metadata: { title: string; description: string }
}
```

One object of this shape per service, in `content/services/<slug>.ts`,
consumed by the single dynamic route described in
[Information Architecture](#information-architecture). Icon fields store a
`LucideIconName` string key (not a component reference) so the content
objects remain plain, serializable data — a prerequisite for the CMS
migration path below.

## Heading Hierarchy

```
h1  — Hero headline (one per page)
h2  — one per major section (12 sections → 12 h2s, in document order)
h3  — one per card/item within a section (challenge, capability, outcome,
      FAQ question is NOT an h3 — FAQ questions are <summary>, not headings,
      matching the existing FAQItem implementation)
```

No heading level is skipped. This is a direct extension of the hierarchy
already enforced site-wide (see
[`CODING_STANDARDS.md`](./CODING_STANDARDS.md#accessibility-principles)).

## Image Strategy

- Every image goes through `next/image`, never a raw `<img>`
  ([`CODING_STANDARDS.md`](./CODING_STANDARDS.md#performance-principles)).
- The Hero section does not require a dedicated illustration per service
  at launch — reuse the existing ambient/typographic hero treatment
  pattern (no image) rather than commissioning six new illustrations as a
  launch blocker. If service-specific hero art is commissioned later, it
  should follow the same masked/glow treatment established by
  `HeroIllustration`.
- All other imagery on this template is icon-based (`lucide-react`), not
  photographic — consistent with the site's current all-vector, no-stock-photo
  visual language.

## Call-to-Action Strategy

Two CTA tiers, consistent with the rest of the site:

- **Primary**: "Book a Strategy Call" → `/contact`, appearing in the Hero
  and the Final CTA — the only two CTA placements on the page. Do not add
  additional mid-page CTA buttons; the Related Services and FAQ sections
  are themselves secondary conversion paths (cross-navigation, objection
  handling) and don't need a competing CTA button injected into them.
- **Secondary**: "Explore Capabilities" (Hero, anchor scroll) and "Explore
  Services" (Final CTA, back to hub) — both use the existing normalized
  secondary-button hover treatment from
  [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md#buttons).

## Enterprise Writing Guidelines

Full standard: [ADR-0006](./adr/0006-content-strategy.md). Applied
specifically to this template:

- Business Challenges are written as the *client's* framing of their
  problem, not ORXIO's framing of its solution.
- Business Outcomes state real, qualitative claims — no invented
  statistics or percentages; this site has no case-study data yet
  (ADR-0006), and a fabricated number is worse than an honest qualitative
  claim.
- Avoid *Innovation / Quality / Excellence / Trust* as unsupported
  adjectives, per the existing banned-word discipline.
- FAQ answers are 2–3 sentences — long enough to actually resolve the
  question, short enough to stay skimmable in an accordion.

## Accessibility Checklist

- [ ] One `h1`, sequential `h2`/`h3` hierarchy, no skipped levels.
- [ ] Every decorative icon has `aria-hidden="true"`.
- [ ] Every icon-only interactive element has an `aria-label`.
- [ ] All CTAs are real links/buttons, keyboard-reachable, with visible
      `:focus-visible` styling (inherited from the shared `Button`/`Link`
      styling — no custom focus suppression).
- [ ] FAQ accordion uses native `<details>`/`<summary>` (already the case
      via reused `FAQItem`) — no custom ARIA disclosure widget.
- [ ] Related Services cards are single, whole-card links, not a div
      containing a separately-tabbable inner link.
- [ ] Breadcrumb is a `<nav aria-label="Breadcrumb">` with an ordered list
      of links, current page marked `aria-current="page"`.
- [ ] All new looping/ambient animation (if any is added) is gated behind
      `useReducedMotion()`; the reused sections already satisfy this.

## Responsive Behaviour

Every section in this template is built from `Section`/`Container` and
the standard card grid breakpoints already in use site-wide
(`grid-cols-1` → `sm:grid-cols-2/3` → `lg:grid-cols-3`, per
[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md#spacing)) — no new breakpoint
behavior is introduced. Verify at mobile/tablet/desktop for each new
section exactly as every prior sprint in this project has (see
[`CODING_STANDARDS.md`](./CODING_STANDARDS.md)), with particular attention
to:

- Hero's dual-CTA row wrapping to `flex-col` below `sm`, matching the
  existing Hero/Final CTA pattern.
- The Related Services 3-card grid collapsing to a single column on
  mobile without the compact-card variant losing its icon/title/link
  legibility.
- The breadcrumb truncating or wrapping gracefully on narrow viewports
  rather than overflowing.

## Reusable Component Strategy

| Section | Component | Status |
| --- | --- | --- |
| 1. Hero | `ServiceHero` | New — parameterized version of `ServicesHero` |
| 2. Business Challenges | `BusinessChallengesSection` + `ChallengeCard` | New |
| 3. ORXIO Approach | `ApproachSection` | New |
| 4. Capabilities | `CapabilitiesSection` + `CapabilityCard` | New |
| 5. Delivery Methodology | `ProcessSection` | Reuse (extend with optional `steps` prop) |
| 6. Technology Stack | `TechnologySection` | Reuse (extend with optional `categories` filter) |
| 7. Industries Served | `IndustriesSection` | Reuse (extend with optional `industries` filter) |
| 8. Business Outcomes | `BusinessOutcomesSection` + `OutcomeCard` | New |
| 9. Engagement Model | `EngagementModelSection` | Reuse, unmodified |
| 10. FAQ | `FAQSection` / `FAQItem` | Reuse, new per-service `faq-data.ts` |
| 11. Related Services | `RelatedServicesSection` | New |
| 12. Final CTA | `FinalCTASection` | Reuse, unmodified |
| — | `Breadcrumbs` | New, page-chrome, not a numbered section |

Every **New** component in this table is a straightforward application of
the existing Section→Card pattern and card recipe documented in
[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — none require a new visual
language, only new data and, in three cases, new copy shapes
(Challenges, Approach, Outcomes).

## Future CMS Compatibility

Every content field across all twelve sections is already, by design,
plain serializable data (strings, and small objects/arrays of strings) —
icon fields reference a name, not a component. This means the
`ServicePageContent` shape defined above can be lifted directly into a
CMS (headless CMS content type, or a structured content platform) without
any component change: the dynamic route's data-fetching step would change
from `import` of a local TypeScript module to a CMS API call returning the
same shape, and every downstream component continues to receive props in
exactly the same form it does today. This mirrors the same reasoning
already applied to the rest of the site in
[ADR-0003](./adr/0003-homepage-architecture.md#future-considerations) and
[ADR-0006](./adr/0006-content-strategy.md#future-vision-not-yet-implemented).

## Implementation Order

Recommended build sequence, sequencing lower-risk/higher-leverage work
first:

1. **Routing + content model.** Stand up
   `app/services/[slug]/page.tsx` and the `ServicePageContent` type/one
   real content file, wired to the five *reused* sections only
   (Delivery Methodology, Technology Stack, Industries Served, Engagement
   Model, Final CTA) plus a minimal placeholder Hero. This proves the
   routing/data model end-to-end with the least new component work.
2. **`ServiceHero` + `Breadcrumbs`.** Small, high-visibility components;
   unblocks every subsequent section by giving the page a real top.
3. **`CapabilitiesSection` / `CapabilityCard`.** The most information-dense,
   highest-priority new section for both users and SEO.
4. **`BusinessChallengesSection` and `ApproachSection`.** These two are
   content-heavy (require real, well-written copy per service) more than
   component-heavy — sequence them once content is ready, not blocked on
   engineering.
5. **`BusinessOutcomesSection`.** Depends on Business Challenges/Approach
   being settled, since outcomes should read as the resolution to the
   stated challenges.
6. **`RelatedServicesSection`.** Build last among the new sections — it
   requires all six services' slugs and positioning to exist (even as
   drafts) to make sensible curated relationships between them.
7. **JSON-LD (`Service`, `BreadcrumbList`) + sitemap update.** Add once
   the page structure is stable, per [ADR-0005](./adr/0005-seo-strategy.md) —
   don't wire structured data to content that's still likely to change
   shape.
8. **Content for all six services**, using the now-complete component set.
9. **QA pass**: accessibility checklist above, responsive verification at
   all three breakpoints, full validation trilogy
   (`lint`/`tsc`/`build`) — before considering any service page
   production-ready.
