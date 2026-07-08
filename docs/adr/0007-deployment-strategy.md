# ADR 0007 - Deployment Strategy

## Status

Accepted

## Date

2026-07-08

## Context

The repository is hosted on GitHub (`Orxio/website`) and follows the
branch model defined in ADR-0001 (`main` stable, `develop` integration,
`feature/*` short-lived). The application itself is a standard Next.js 16
App Router project with no platform-specific configuration committed to
the repository — no `vercel.json`, no `.vercel/` directory, and no CI
workflow files (`.github/workflows/`) exist as of this writing.

## Problem Statement

What is actually configured for deployment today, what is the recommended
target and process, and what remains an open decision rather than a
committed fact?

## Decision

### Current Architecture (implemented today)

- **Source control**: GitHub, remote `origin` → `Orxio/website`.
- **Branch model**: as defined in ADR-0001 — `develop` is where completed
  work lands; `main` is the stable branch, updated from `develop` at
  deliberate release points (currently behind `develop`, pending that
  sync).
- **Release tagging**: annotated git tags on `develop` mark milestones
  (`v0.8.0`, `v1-homepage-complete`), per ADR-0001.
- **Build**: standard Next.js production build (`next build`, Turbopack),
  producing a fully static build for every current route — no server
  runtime is required for the pages that exist today (see ADR-0005 and the
  build output: every route is prerendered as static content).
- **Environment variables**: all configuration is `process.env`-based with
  hardcoded fallbacks in code, so the site builds and runs without any
  environment variables set. Variables in current use:
  `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_LINKEDIN_URL`,
  `NEXT_PUBLIC_GITHUB_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`,
  `CONTACT_INBOX_EMAIL`, `RESEND_FROM_EMAIL`, and `RESEND_API_KEY` (the
  last three power the Contact form's Server Action email delivery via
  Resend and are not currently defaulted in code — they must be set for
  the contact form to actually send mail in a given environment). These
  live in an untracked `.env.local` locally; there is no committed
  `.env.example` yet.
- **No CI pipeline is configured.** Validation (`npm run lint`,
  `npx tsc --noEmit`, `npm run build`) is run manually/per-sprint before
  merging, not automatically on push or pull request.

### Future Vision / Recommendation (not yet configured)

- **Deployment target: Vercel.** No deployment platform is currently wired
  up, but Vercel is the natural choice: the site is a standard Next.js
  App Router application with no custom server requirements, Vercel is
  built by the same team as Next.js and gets first-class support for its
  App Router/Server Actions/`next/image` features, and the site's own
  Technology Stack section already names Vercel as part of ORXIO's DevOps
  stack. Recommended model: `main` deploys to production, `develop`
  (or every branch/PR) deploys to preview environments — this is Vercel's
  standard Git-integration behavior and requires no custom pipeline code,
  only connecting the repository in the Vercel dashboard and configuring
  the environment variables listed above per environment.
- **CI validation on push/PR.** Add a GitHub Actions workflow (or rely on
  Vercel's own build-time checks) that runs `npm run lint`,
  `npx tsc --noEmit`, and `npm run build` automatically, rather than
  depending on manual execution before every merge.
- **Rollback strategy.** Not yet formalized. With a Vercel deployment,
  the practical rollback mechanism is Vercel's built-in "promote a
  previous deployment" action (near-instant, no rebuild required) for the
  running deployment, combined with the git-level ability to reset `main`
  to a previous annotated tag (ADR-0001) if a source-level revert is
  needed. Neither has been exercised in this project yet because no
  rollback has been required.

## Rationale

Recording the deployment target as a recommendation rather than an
implemented fact keeps this document honest about what exists versus what
is planned — inventing a configured pipeline that doesn't exist would
make this ADR actively misleading to a future contributor trying to find
the actual deploy configuration.

## Alternatives Considered

- **Self-managed infrastructure (Docker + a cloud provider's container
  service).** Not chosen as the recommendation — this project has no
  requirement (custom server, background jobs, non-Next.js runtime) that
  would justify managing infrastructure Vercel already provides
  out of the box for a standard Next.js app.
- **Netlify / other Next.js-compatible platforms.** Viable alternatives,
  not rejected on technical grounds, but Vercel's first-party Next.js
  support (same vendor) is the lower-risk default recommendation absent a
  specific reason to choose otherwise.

## Consequences

### Positive

- The application has no platform lock-in baked into its code — it is a
  standard Next.js build deployable to any Next.js-compatible host.
- Once a Git-integrated platform is connected, the existing branch model
  (ADR-0001) maps directly onto production/preview deployments with no
  additional process.

### Negative

- Until a deployment pipeline is actually connected, "shipping" a change
  means a manual build/deploy step outside this repository's tracked
  process.
- The required Resend environment variables are not defaulted anywhere in
  code — a fresh environment without them configured will build
  successfully but silently fail to send contact-form email until they're
  set.

## Risks

Without CI, a broken build could be merged to `develop`/`main` without
being caught automatically. Mitigation: continue running the full
validation trilogy (`lint` / `tsc` / `build`) as a mandatory manual step
until CI is added.

## Future Considerations

- Connect the repository to Vercel (or chosen alternative) and configure
  environment variables per environment.
- Add a CI workflow running the validation trilogy on every push/PR.
- Commit a `.env.example` documenting required variables without values.
- Formalize and document the rollback procedure once the deployment
  platform is chosen.

## Related ADRs

- ADR-0001 — Git Workflow (the branch model this deployment strategy maps
  onto).
