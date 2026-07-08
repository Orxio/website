# ORXIO Service Engine Architecture

**Status:** Architecture assessment. No code has been changed to produce
this document — it is based on a direct read of the current
implementation on `feature/enterprise-ai-strategy`
(`app/services/enterprise-ai-strategy/page.tsx` and every component under
`components/services/`), cross-checked against
[`SERVICE_PAGE_BLUEPRINT.md`](./SERVICE_PAGE_BLUEPRINT.md),
[`Enterprise-AI-Strategy-PRD.md`](./Enterprise-AI-Strategy-PRD.md), and
[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

The Enterprise AI Strategy page is ORXIO's **first** individual service
page — built to prove the section structure the blueprint proposed. It
did that job. What it did not do, because it didn't need to for a single
page, is prove a *scalable* way to build the remaining five. This document
is that proposal.

---

## Phase 1 — Analysis of the Current Implementation

### What's already reusable (zero changes needed)

Five of twelve page sections are direct, unmodified reuse of existing
homepage components, exactly as `SERVICE_PAGE_BLUEPRINT.md` intended:
`ProcessSection`, `TechnologySection`, `IndustriesSection`,
`EngagementModelSection`, `FinalCTASection`. All five are imported with
zero props and render identically to their homepage/hub-page usage. This
is the architecture working as designed — no action needed here, and
nothing below proposes touching these five unless a future service
genuinely needs to filter their content (see
[Deferred: shared-component filtering](#deferred-shared-component-filtering)).

`TrustPillarCard` is reused three times (`BusinessChallengesSection`,
`CapabilitiesSection`, `BusinessOutcomesSection`), each with a different
local data array. This was the right call in Sprint 9.2 — no new card
component was needed because `TrustPillarCard`'s `{icon, title,
description}` shape already fit all three needs.

### What's duplicated

This is the actual finding of this sprint. Three files —
`BusinessChallengesSection.tsx`, `CapabilitiesSection.tsx`,
`BusinessOutcomesSection.tsx` — are **structurally identical**, differing
only in heading text, description text, a data array, and a grid
column count:

```tsx
"use client"
import { motion } from "framer-motion"
import { ... icons ..., type LucideIcon } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { TrustPillarCard } from "@/components/home/TrustPillarCard"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Item { icon: LucideIcon; title: string; description: string }
const ITEMS: Item[] = [ /* ...service-specific data... */ ]

function XSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")
  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">{/* heading */}</Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">{/* description */}</Text>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={stagger} className="mt-16 grid grid-cols-1 gap-6 {/* column variant */}">
          {ITEMS.map((item) => (
            <motion.div key={item.title} variants={slideUp} className="h-full">
              <TrustPillarCard icon={item.icon} title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
```

Three files, ~90 lines each, ~270 lines total, where the only information
that actually differs is: heading, description, `Item[]` data, and one
Tailwind grid-column class. Building service #2 means writing this
boilerplate three more times.

The same duplication pattern exists, at a smaller scale, in three other
places:

- **Metadata** (`page.tsx`, 8 lines): `title` / `description` /
  `alternates.canonical` — identical shape, different values, will be
  hand-copied five more times.
- **JSON-LD** (`page.tsx`, ~20 lines): `serviceStructuredData` and
  `faqStructuredData` — identical shape (`Service` schema fields,
  `FAQPage` generated from a FAQ array), will be hand-copied five more
  times.
- **The Hero call** (`page.tsx`, 15 lines): seven named props spread
  across a JSX call — `ServiceHero` itself is already generic (good), but
  its inputs live as inline JSX literals in `page.tsx` rather than as a
  single structured object, so there's no one place that "is" a service's
  hero content.

### What should become generic

- **The Section→Container→header→grid→`TrustPillarCard` shell** —
  extract into one component (`CardGridSection`, proposed below),
  parameterized by heading, description, items, and column count. This
  directly replaces the duplicated logic in
  `BusinessChallengesSection`/`CapabilitiesSection`/`BusinessOutcomesSection`.
- **Metadata generation** — one function, `buildServiceMetadata(content)`.
- **JSON-LD generation** — one function,
  `buildServiceJsonLd(content)`, covering `Service` and `FAQPage` (and,
  when built, the not-yet-implemented `BreadcrumbList` from
  [ADR-0005](./adr/0005-seo-strategy.md)).
- **The Hero's and Capabilities section's anchor coupling.** Today,
  `ServiceHero`'s `secondaryCtaHref="#capabilities"` and
  `CapabilitiesSection`'s `<Section id="capabilities">` are two
  hand-typed string literals in two different files that must match by
  convention, with nothing enforcing it. This should become a single
  shared constant.

### What should remain service-specific

- **`ApproachSection`'s principles.** This section was deliberately built
  *not* to fit the card-grid pattern — it's a lighter-weight,
  no-card, prose-plus-list treatment, specifically so the page's rhythm
  varies (see the component's own design rationale, carried over from
  `SERVICE_PAGE_BLUEPRINT.md` §3). It should stay its own component, driven
  by content data, not be forced into `CardGridSection`.
- **`RelatedServicesSection`'s presentation choice.** Enterprise AI
  Strategy's "journey" layout (question → chevron → card, repeated) makes
  sense because Strategy is the funnel's entry point with three natural
  next steps. A different service (e.g. Data Platforms) may reasonably
  want a plain 3-card grid instead, with no journey framing. This should
  be a content-model choice (`layout: "journey" | "grid"`), not a
  structural fork.
- **All copy.** Headings, descriptions, FAQ text, principle statements —
  this is inherently per-service and is exactly what a content object
  should hold, not something to templatize away.
- **Whether `ProcessSection`/`TechnologySection`/`IndustriesSection` show
  filtered content.** Enterprise AI Strategy deliberately reuses all three
  unfiltered (a considered decision, not an oversight — see
  [`ARCHITECTURE.md`](./ARCHITECTURE.md) and the Sprint 9.2 summary). This
  should remain each service's own choice, not a forced filter.

---

## Phase 2 — Service Engine Design

### Folder structure

```
lib/services/
  types.ts                        ServicePageContent and all sub-types
  registry.ts                     SERVICES: Record<ServiceSlug, ServicePageContent>
  metadata.ts                     buildServiceMetadata(content)
  json-ld.ts                      buildServiceJsonLd(content)
  icons.ts                        ICON_MAP: Record<IconKey, LucideIcon> — resolves string keys to components
  content/
    enterprise-ai-strategy.ts     one ServicePageContent object per service
    ai-agents.ts                  (added incrementally, per Implementation Plan)
    ...

components/services/
  engine/
    ServicePageRenderer.tsx       renders all 12 sections from one ServicePageContent
    CardGridSection.tsx           generic replacement for the 3 duplicated section shells
    RelatedServicesJourney.tsx    the guided-flow layout (extracted from the current implementation)
    RelatedServicesGrid.tsx       the plain 3-card layout (new, for services that don't need a journey)
  ServiceHero.tsx                 unchanged — already generic
  ApproachSection.tsx             unchanged internally — becomes content-driven (props, not local consts)
  EngagementModelSection.tsx      unchanged — already page-agnostic
  FAQSection.tsx                  unchanged — already accepts an optional faqs prop
  FAQItem.tsx                     unchanged

app/services/
  page.tsx                        unchanged — the hub page
  [slug]/
    page.tsx                      new — single dynamic route, replaces app/services/enterprise-ai-strategy/
```

This is the concrete fulfillment of the dynamic-route recommendation
`SERVICE_PAGE_BLUEPRINT.md` deferred at the time
("*decide the routing implementation... when the first service page is
actually built*"). The first page is built; this is that decision.

### Content model (TypeScript interfaces)

```ts
type ServiceSlug =
  | "enterprise-ai-strategy"
  | "ai-agents"
  | "intelligent-automation"
  | "data-platforms"
  | "generative-ai"
  | "custom-ai-applications"

type IconKey = string // key into ICON_MAP — see Future CMS Compatibility

interface CardItem {
  icon: IconKey
  title: string
  description: string
}

interface CardGridSectionContent {
  id?: string                 // anchor target, e.g. "capabilities"
  heading: string
  description: string
  items: CardItem[]
  columns: 2 | 3 | 4
}

interface RelatedServiceLink {
  question?: string           // present only when layout === "journey"
  slug: ServiceSlug
  icon: IconKey
  title: string
  description: string
}

interface ServicePageContent {
  slug: ServiceSlug
  metadata: { title: string; description: string }
  serviceType: string
  areaServed: string

  hero: {
    eyebrow: string
    headline: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    capabilities: string[]
  }

  businessChallenges: CardGridSectionContent
  approach: {
    heading: string
    description: string
    principles: { label: string; description: string }[]
  }
  capabilities: CardGridSectionContent   // id: "capabilities", targeted by hero.secondaryCta.href

  deliverySteps?: Step[]                          // optional; defaults to ProcessSection's built-in framework
  technologyCategories?: TechnologyCategoryKey[]  // optional filter; defaults to all six
  industries?: IndustryKey[]                      // optional filter; defaults to all six

  businessOutcomes: CardGridSectionContent

  faq: { question: string; answer: string }[]

  relatedServices: {
    layout: "journey" | "grid"
    heading: string
    description: string
    items: RelatedServiceLink[]
  }
}
```

`deliverySteps` / `technologyCategories` / `industries` are optional and
default to "show everything, unmodified" — matching exactly what
Enterprise AI Strategy does today. No existing shared component needs to
change to support the content model; those three fields only become
load-bearing once a *second* service actually wants to filter them (see
[Deferred: shared-component filtering](#deferred-shared-component-filtering)).

### Shared renderer

```tsx
// components/services/engine/ServicePageRenderer.tsx
function ServicePageRenderer({ content }: { content: ServicePageContent }) {
  return (
    <>
      <ServiceHero {...content.hero} />
      <CardGridSection {...content.businessChallenges} />
      <ApproachSection {...content.approach} />
      <CardGridSection {...content.capabilities} />
      <ProcessSection steps={content.deliverySteps} />
      <TechnologySection categories={content.technologyCategories} />
      <IndustriesSection industries={content.industries} />
      <CardGridSection {...content.businessOutcomes} />
      <EngagementModelSection />
      <FAQSection faqs={content.faq} />
      <RelatedServicesSection {...content.relatedServices} />
      <FinalCTASection />
    </>
  )
}
```

`RelatedServicesSection` becomes a thin switch: render
`RelatedServicesJourney` or `RelatedServicesGrid` based on
`content.relatedServices.layout`, so the existing, working journey UI is
preserved as one of two options rather than replaced.

### Metadata generation

```ts
// lib/services/metadata.ts
function buildServiceMetadata(content: ServicePageContent): Metadata {
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: { canonical: `/services/${content.slug}` },
  }
}
```

Identical output to what `page.tsx` hand-writes today — this is a
refactor of *how* it's produced, not a change to what it produces.

### JSON-LD generation

```ts
// lib/services/json-ld.ts
function buildServiceJsonLd(content: ServicePageContent) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.serviceType,
    provider: { "@type": "Organization", name: "ORXIO" },
    areaServed: content.areaServed,
    description: content.metadata.description,
  }
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
  return { service, faq }
}
```

### FAQ generation

Not a separate generator — `content.faq` is the single source of truth,
consumed both by `<FAQSection faqs={content.faq}>` and by
`buildServiceJsonLd`. This closes a real (if currently harmless) gap:
today, `ENTERPRISE_AI_STRATEGY_FAQS` is imported independently into
`page.tsx` for both the JSON-LD block and the `<FAQSection>` prop —
correct today because it's the same imported constant used twice, but
that correctness depends on the author remembering to import the same
constant both places. The engine makes that a structural guarantee
instead of a convention.

### SEO generation

Canonical URLs and OpenGraph/Twitter metadata continue to inherit from
the root layout's title template exactly as they do today (see
[ADR-0005](./adr/0005-seo-strategy.md)) — `buildServiceMetadata` doesn't
change that inheritance model. `BreadcrumbList` JSON-LD — flagged as a
genuinely new, not-yet-built addition in both `SERVICE_PAGE_BLUEPRINT.md`
and ADR-0005 — becomes a single new field
(`content.breadcrumbLabel: string`) once a `Breadcrumbs` component exists;
not required for this engine to ship.

### Future CMS compatibility

One real gap exists between "internally reusable" and "CMS-portable" in
the current implementation: icon fields (in `BusinessChallengesSection`,
`CapabilitiesSection`, `BusinessOutcomesSection`, `RelatedServicesSection`)
store a live `LucideIcon` component reference, not a serializable value.
A CMS cannot store a React component. The content model above changes
`icon` to an `IconKey` string (e.g. `"ShieldCheck"`), resolved through a
`lib/services/icons.ts` lookup map at render time. This is the one
concrete code change required for `ServicePageContent` to become fully
serializable — everything else in the shape (strings, arrays, nested
objects) is already plain data. Once that change is made, moving content
from `lib/services/content/*.ts` to a headless CMS is a data-source swap:
the fetch step changes from a static `import` to a CMS API call returning
the same shape; `ServicePageRenderer` and every downstream component are
unaffected.

### Future API compatibility

Because content lives as plain exported objects in `lib/services/content/`,
exposing them programmatically is a thin addition, not an architecture
change: `app/api/services/[slug]/route.ts` returning
`NextResponse.json(SERVICES[slug])` requires no change to the rendering
layer — it's simply a second consumer of `registry.ts`.

### Static generation strategy

```ts
// app/services/[slug]/page.tsx
export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const content = SERVICES[params.slug]
  if (!content) notFound()
  return buildServiceMetadata(content)
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const content = SERVICES[params.slug]
  if (!content) notFound()
  const { service, faq } = buildServiceJsonLd(content)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <ServicePageRenderer content={content} />
    </>
  )
}
```

Every service page remains fully static-generated at build time —
identical rendering model to what ships today (confirmed via the existing
build output: every current route, including
`/services/enterprise-ai-strategy`, is `○ (Static)`). No new runtime cost,
no new client/server boundary.

### Dynamic routing strategy

One dynamic segment, `app/services/[slug]/page.tsx`, replaces the current
one-folder-per-service model. Unknown slugs call `notFound()` (a standard
Next.js 404), rather than the current model's failure mode (a mistyped
folder name simply produces no route at all, silently, with no build-time
signal). `generateStaticParams` is the single place that determines which
slugs actually get pages — adding a service becomes "add a key to the
registry," not "create a new route folder."

---

## Phase 3 — Risk Assessment

### Benefits

- Eliminates the three-way duplicated section shell (~270 lines today,
  would be ~1,600 lines across all six services without the engine).
- Structurally guarantees metadata, JSON-LD, and FAQ content can never
  drift from each other or from the visible page — today this holds by
  import discipline, not by construction.
- Removes the untyped `#capabilities` string-literal coupling between
  `ServiceHero` and `CapabilitiesSection`.
- Each new service page becomes "write one typed content object," not
  "write ~7 new component files" — see the effort estimate below.
- A straightforward, low-risk path to a CMS or an API surface later,
  because content is already isolated from rendering.

### Risks

- **Premature generalization.** `CardGridSection`'s shape is inferred
  from three data points on a single page. `ApproachSection` was
  deliberately built to *not* fit that shape — a sign the abstraction
  boundary is already known to be imperfect, not universal. The
  Implementation Plan below deliberately does not force `ApproachSection`
  or `RelatedServicesSection`'s two layouts into a single generic
  component for this reason.
- **Shared-component risk.** Extending `ProcessSection`, `TechnologySection`,
  and `IndustriesSection` with optional filter props touches components
  also rendered verbatim on `/` and `/services` today. Unlike every other
  change in this plan (which is additive, new-file-only), this is the one
  category of change with a real path to a homepage regression if done
  carelessly. It is intentionally sequenced last and separately (see
  Implementation Plan, step 9) and is not required to ship the engine.
- **Migration risk to a shipped page.** Enterprise AI Strategy is the
  first, and currently only, real service page. Any migration must not
  regress it — it's the page most likely to already be indexed and
  linked to.
- **Reduced file-tree discoverability.** A folder-per-service route is
  more obvious when browsing the codebase than a single dynamic route
  backed by a registry lookup. This is a real, if minor, developer-experience
  tradeoff against the engine's benefits.

### Migration strategy

1. Build the engine (types, `CardGridSection`, `ServicePageRenderer`,
   `buildServiceMetadata`, `buildServiceJsonLd`, `icons.ts`) as entirely
   new, additive files. Zero changes to any existing file. Zero risk to
   what's live.
2. Hand-port Enterprise AI Strategy's existing content into
   `lib/services/content/enterprise-ai-strategy.ts`, reviewable as a pure
   data diff against the current `page.tsx`.
3. Add `app/services/[slug]/page.tsx` with `generateStaticParams`
   returning only `["enterprise-ai-strategy"]` for now.
4. **Both routes coexist safely at this point.** Next.js resolves a
   static segment (`app/services/enterprise-ai-strategy/page.tsx`) with
   higher priority than a dynamic segment (`app/services/[slug]/page.tsx`)
   for the same URL — so the existing static page keeps serving
   `/services/enterprise-ai-strategy` untouched even after the dynamic
   route exists. This means steps 1–3 can be built and merged to
   `develop` with **no change in live behavior**, verified purely by
   comparing the new dynamic route at a temporary path (or in a preview
   build) against the live page.
5. Once visually and structurally verified identical, delete
   `app/services/enterprise-ai-strategy/page.tsx` in its own, isolated
   commit — this is the single moment the dynamic route takes over the
   real URL.
6. Build content objects for the remaining five services.

### Rollback strategy

- Steps 1–4 above are purely additive: rollback is deleting the new
  files, with zero effect on the live site.
- Step 5 (deleting the static route) is the only destructive step in the
  entire plan. Because it's its own isolated commit, rollback is a single
  `git revert`, restoring the static file and immediately returning to
  today's exact behavior.
- Extending `ProcessSection`/`TechnologySection`/`IndustriesSection`
  (Implementation Plan step 9, if and when undertaken) should each be
  its own revertible commit for the same reason — isolate the one
  category of change that touches shared, homepage-facing code.

### Performance impact

Neutral to positive. Output remains 100% static-generated via
`generateStaticParams`, matching the current all-static rendering model
(see [ADR-0007](./adr/0007-deployment-strategy.md)). No new client-side
JavaScript is introduced by the engine itself — `CardGridSection` carries
the same `"use client"` requirement (for the `whileInView` scroll
animation) that the three components it replaces already have.

### SEO impact

Neutral to positive. `buildServiceMetadata`/`buildServiceJsonLd` must
produce byte-identical output to what ships today (verified in Migration
Strategy step 4, before any cutover) — this plan changes *how* metadata
and structured data are produced, not what is produced. The
single-source-of-truth guarantee for FAQ content is a net SEO risk
reduction: it removes the possibility of the visible FAQ and the
`FAQPage` JSON-LD ever silently diverging for a future service.

### Maintainability impact

Significant positive. A copy or design-recipe fix to `CardGridSection`
propagates to every service's Business Challenges, Capabilities, and
Business Outcomes sections at once. Today, the same fix requires editing
up to three near-identical files per service — 18 files once all six
services exist.

### Developer Experience improvements

Adding service #7 (hypothetically) becomes: write one
`lib/services/content/<slug>.ts` file conforming to `ServicePageContent`,
with TypeScript enforcing every required field is present and every
`slug`/`icon` reference is valid. Today it means copying eight component
files, renaming exports, and manually verifying nothing was missed — the
actual diff for building Enterprise AI Strategy was **14 files, 2,031
insertions** for one service.

---

## Phase 4 — Implementation Plan

Each step is independently buildable, independently testable via the
project's standard `npm run lint && npx tsc --noEmit && npm run build`
trilogy, and — with the single exception of step 9 — cannot affect the
live site, because it either adds new files only or (steps 3–4) adds a
route that coexists with, and is overridden by, the existing static one.

1. **Add `lib/services/types.ts`** — interfaces only, no runtime code.
   Testable via `tsc` alone.
2. **Add `lib/services/metadata.ts` and `lib/services/json-ld.ts`** —
   pure functions, no JSX. Testable by importing them into a scratch
   script or temporarily wiring into the existing `page.tsx` to diff
   output against the hand-written blocks, without changing the route.
3. **Add `components/services/engine/CardGridSection.tsx`** — new,
   additive component. Testable by swapping it into exactly one existing
   usage (e.g. render it inside `CapabilitiesSection` in place of the
   hand-written grid) and visually diffing against production — the route
   itself is unaffected.
4. **Migrate `BusinessChallengesSection` and `BusinessOutcomesSection`**
   to also use `CardGridSection` internally, once step 3 is verified. Two
   small, independent, revertible edits.
5. **Add `lib/services/icons.ts`** (the `IconKey → LucideIcon` map) and
   **`lib/services/content/enterprise-ai-strategy.ts`**, hand-porting
   today's content into the typed shape. Pure data — reviewable as a diff
   against the current `page.tsx` and the three section components.
6. **Add `components/services/engine/ServicePageRenderer.tsx`**,
   consuming that content object. Verify in isolation (e.g. a temporary
   route or local-only page) before touching the live URL.
7. **Add `app/services/[slug]/page.tsx`** with `generateStaticParams`
   returning only `["enterprise-ai-strategy"]`. Build and visually diff
   against the live page — both routes now coexist safely (see Migration
   Strategy).
8. **Cutover commit:** delete `app/services/enterprise-ai-strategy/page.tsx`.
   Confirm the dynamic route now serves that URL identically. Isolated,
   single-purpose, trivially revertible.
9. **(Separate, later, only when a second service needs it)** extend
   `ProcessSection`, `TechnologySection`, and `IndustriesSection` with
   their optional `steps` / `categories` / `industries` props — the one
   step that touches shared, homepage-facing components, deliberately
   isolated from everything above.
10. **Add content objects for the remaining five services**, one at a
    time, each independently reviewable and immediately verifiable via
    `generateStaticParams` + build.

---

## Summary Answers

**1. Files created:** `docs/SERVICE_ENGINE_ARCHITECTURE.md` (this
document). No other files were created or modified; no commands were run.

**2. Summary:** The current Enterprise AI Strategy page correctly proved
the section structure `SERVICE_PAGE_BLUEPRINT.md` proposed, but three of
its new components (`BusinessChallengesSection`, `CapabilitiesSection`,
`BusinessOutcomesSection`) are structurally identical boilerplate, and its
metadata/JSON-LD/Hero-content are hand-written directly in `page.tsx` with
no shared structure — both patterns would be copy-pasted five more times
as-is. This document proposes a Service Engine: a typed
`ServicePageContent` model, a generic `CardGridSection` replacing the
duplicated shells, a shared `ServicePageRenderer`, and generator functions
for metadata and JSON-LD — all consumed through a single dynamic
`app/services/[slug]/page.tsx` route, per the routing decision
`SERVICE_PAGE_BLUEPRINT.md` originally deferred. `ApproachSection`'s
prose-driven layout and `RelatedServicesSection`'s two presentation modes
(journey vs. grid) are deliberately kept as their own components rather
than forced into the generic grid, because they're genuinely different
shapes, not accidental duplication.

**3. Estimated implementation effort:** Steps 1–8 (build the engine,
migrate the one existing page, cut over safely) — a focused, bounded
effort comparable to roughly one to two of this project's own sprints.
Step 9 (extending the three shared homepage components) is small but
deliberately separate. Step 10 (the remaining five services) is
content-authoring effort, not engineering effort, once the engine exists
— each subsequent service page should take a fraction of what Enterprise
AI Strategy took, since zero new component code is required in the common
case.

**4. Estimated reduction in future code duplication:** Enterprise AI
Strategy's actual implementation was 14 files and 2,031 insertions.
Under this architecture, each additional service page is one content
file — no new component files in the common case. That's roughly an
80–90% reduction in *new code* per additional service page; the
irreducible remainder is the content itself (copy, FAQ text), which no
architecture can eliminate.

**5. Recommendation:** **Yes, proceed — sequenced, not all at once.**
Build the engine and migrate the one existing page first (steps 1–8),
verifying byte-identical output before the single cutover commit. Do not
touch `ProcessSection`/`TechnologySection`/`IndustriesSection` (step 9)
until a second service's content genuinely requires filtering — there is
no benefit to taking on that risk speculatively. Only after the cutover
is stable should the remaining five services be built against the proven
engine (step 10).
