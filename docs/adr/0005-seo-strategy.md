# ADR 0005 - SEO Strategy

## Status

Accepted

## Date

2026-07-08

## Context

As an enterprise consulting site, ORXIO's primary organic-discovery
surface is search — prospects researching "enterprise AI consulting,"
specific service categories, or the company by name. Next.js's App Router
provides first-class primitives for metadata, structured data, and
crawling directives; the question is how consistently and completely they
are applied.

## Problem Statement

What is ORXIO's baseline for discoverability metadata, and what does the
codebase actually implement today versus what remains for a future
sitemap/content expansion?

## Decision

### Current Architecture (implemented today)

- **Metadata inheritance + per-page overrides.** `app/layout.tsx` defines
  a root `Metadata` object: a titled template (`"%s | ORXIO"` with a
  default title), a shared description, `metadataBase` (from
  `NEXT_PUBLIC_SITE_URL`, falling back to `https://orxio.ai`), keywords,
  author, `robots` directives (index/follow, including `googleBot`),
  OpenGraph (`type: website`, locale, site name, a shared `og-image.png`),
  and a Twitter `summary_large_image` card. Every route
  (`/`, `/about`, `/contact`, `/services`, `/privacy`, `/terms`) exports
  its own `metadata` with a page-specific `title` and `description`, and a
  `canonical` entry under `alternates`.
- **Structured data (JSON-LD).** `/contact` and `/services` each inline a
  `FAQPage` JSON-LD `<script type="application/ld+json">` block, generated
  directly from that page's `FAQS` data array — the structured data and
  the on-page FAQ content are the same source of truth, so they cannot
  drift out of sync.
- **Sitemap.** `app/sitemap.ts` generates `sitemap.xml` from a small,
  explicit `ROUTES` config (path, priority, change frequency) covering
  every currently-live route, weighted by importance (homepage `1.0`,
  `/services` `0.9`, `/contact` `0.8`, `/about` `0.6`, legal pages `0.3`).
- **Robots.** `app/robots.ts` generates `robots.txt`: allows all crawling
  of `/`, disallows `/api/`, and points at the generated sitemap.
- **Canonical URLs** are set per-page via `alternates.canonical`, resolved
  against `metadataBase` — there is no duplicate-content ambiguity between
  `www`/non-`www` or trailing-slash variants.
- **Internal linking** happens organically through the Navbar, Footer, and
  homepage/service cross-links (`ServicesSection` cards, Footer's Services
  column) — there is no dedicated internal-linking system beyond normal
  `next/link` usage.
- **Accessibility and performance as SEO inputs.** Semantic heading
  hierarchy, `next/image` optimization, and static generation (every
  current route is prerendered, per ADR-0007) are treated as part of the
  SEO surface, not a separate concern — Core Web Vitals and crawlability
  both depend on them.

### Future Vision (not yet implemented)

- **Sitemap growth.** `app/sitemap.ts`'s `ROUTES` array is a manually
  maintained, static list. As service pages (ADR-0004), an insights/blog
  section, and other routes are built, this list must be extended — and
  if the route count grows substantially, the static array should be
  reconsidered in favor of a generated list (e.g. derived from a content
  collection) rather than manually maintained.
- **Structured data beyond FAQPage.** Only `FAQPage` schema exists today.
  `Organization` (or `ProfessionalService`) schema on the homepage,
  `Service` schema per service page, and `BreadcrumbList` schema for
  nested routes are natural next additions once those pages exist.
- **Individual service page metadata/structured data**, following the
  same per-page `metadata` + JSON-LD pattern already established, once
  ADR-0004's template is built out.

## Rationale

Metadata and structured data are defined at the point of content (each
`page.tsx` owns its own `metadata` export and, where relevant, its own
JSON-LD derived from the same data the page renders), rather than in a
central SEO config file. This guarantees the metadata can never describe
content the page doesn't actually have, since it's generated from the same
source.

## Alternatives Considered

- **A centralized SEO config/registry mapping routes to metadata.**
  Rejected — adds a layer of indirection between a page and its own
  metadata for no benefit at this site's current scale, and risks the
  registry drifting out of sync with the actual page content.
- **A third-party SEO plugin/package.** Rejected — Next.js's built-in
  `Metadata` API and `MetadataRoute` types already cover every current
  need without adding a dependency.

## Consequences

### Positive

- Metadata changes are always co-located with the content they describe.
- JSON-LD is guaranteed consistent with visible page content because it's
  generated from the same data array.

### Negative

- The sitemap's route list is manual and must be remembered as part of
  "definition of done" when a new page ships — it will not update itself.
- There is currently no automated check that every route has complete,
  non-default metadata.

## Risks

A new page shipped without updating `app/sitemap.ts` will simply be
invisible to the generated sitemap (though still crawlable via internal
links) until someone remembers to add it. Mitigation: treat "add the route
to `sitemap.ts`" as a standard step when shipping a new page.

## Future Considerations

- Revisit the sitemap generation strategy once the route count grows
  beyond what a manually maintained array comfortably supports.
- Add `Organization`/`Service` structured data as those pages are built.

## Related ADRs

- ADR-0003 — Homepage Architecture.
- ADR-0004 — Enterprise Service Page Template (will require its own
  per-page metadata and structured data, following this same pattern).
- ADR-0007 — Deployment Strategy (static generation as an SEO/performance
  input).
