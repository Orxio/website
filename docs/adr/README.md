# Architecture Decision Records (ADR)

## What ADRs Are

An Architecture Decision Record is a short document that captures one
significant architectural or engineering decision: the context that
prompted it, the decision itself, why it was made over the alternatives,
and its known consequences. An ADR is a record of *why*, written at the
time the decision was made — not a design spec, not a how-to guide, and
not kept in sync with the code afterward. When a decision changes, a new
ADR is written to supersede the old one; the old one is left intact as
history.

## Why ORXIO Uses ADRs

This project moves in short, focused sprints, often executed by different
people or agents working from a single instruction at a time, with no
persistent memory of earlier reasoning beyond what's written down. Without
a decision record, the reasoning behind a structural choice — why the
site is split into `main`/`develop`/`feature` branches, why every card
component shares one exact visual recipe, why the homepage is composed of
independent sections — is only recoverable by reverse-engineering the
code or the git log. ADRs make that reasoning explicit and durable, so a
future contributor (human or agent) can tell the difference between "this
is arbitrary, feel free to change it" and "this was a deliberate trade-off,
here's why."

## Naming Convention

```
docs/adr/NNNN-kebab-case-title.md
```

- `NNNN` — a zero-padded, four-digit sequence number (`0001`, `0002`, ...).
- The title portion is the decision's subject in kebab-case, matching the
  ADR's `# ADR NNNN - Title` heading.

## Numbering Convention

Numbers are assigned sequentially, in the order the ADR is created, and
are **never reused or renumbered** — even if a later ADR supersedes an
earlier one, the earlier number stays assigned to the superseded document.
This keeps every reference to `ADR-000X` stable forever, in commit
messages, code comments, and other ADRs' `Related ADRs` sections.

## When to Create a New ADR

Write an ADR when a decision is:

- **Architecturally significant** — it shapes how future work is done,
  not just what one component looks like (e.g. "we use `cva` for variant
  styling" is ADR-worthy; "this button is `size-9`" is not).
- **Hard or costly to reverse** — branching strategy, the component
  library's foundational patterns, the deployment pipeline.
- **Likely to be questioned later** — if a reasonable future contributor
  might ask "why was it built this way instead of X," the answer belongs
  in an ADR, not in institutional memory.

Day-to-day implementation choices that follow an already-recorded decision
(e.g. adding a new card that follows the pattern in ADR-0002) do not need
a new ADR — they're just applying one.

## Lifecycle

Every ADR has exactly one status at a time, recorded in its `## Status`
section:

| Status | Meaning |
| --- | --- |
| **Proposed** | Under discussion. Not yet acted on. May be revised or dropped without ceremony. |
| **Accepted** | The decision is in effect and reflected in the codebase (or is an explicit, labeled statement of future intent — see each ADR's own Current vs. Future framing). |
| **Superseded** | A later ADR has replaced this decision. The document adds `Superseded by ADR-XXXX` and is kept for historical context; it is no longer the source of truth. |
| **Deprecated** | The decision is no longer followed and has not been formally replaced by a new decision — the practice was simply retired. |

An ADR moves from `Proposed` to `Accepted` once the decision is confirmed;
it is never edited afterward except to update its status or add a
`Superseded by` / `Related ADRs` reference. If the decision itself
changes, write a new, numbered ADR rather than rewriting an old one.

## Index

| ADR | Title | Status |
| --- | --- | --- |
| [0001](./0001-git-workflow.md) | Git Workflow | Accepted |
| [0002](./0002-design-system.md) | Enterprise Design System | Accepted |
| [0003](./0003-homepage-architecture.md) | Homepage Architecture | Accepted |
| [0004](./0004-service-page-template.md) | Enterprise Service Page Template | Accepted |
| [0005](./0005-seo-strategy.md) | SEO Strategy | Accepted |
| [0006](./0006-content-strategy.md) | Content Strategy | Accepted |
| [0007](./0007-deployment-strategy.md) | Deployment Strategy | Accepted |
| [0008](./0008-component-library.md) | Component Library | Accepted |
| [0009](./0009-ai-agent-architecture.md) | Future AI Agent Architecture | Proposed |
| [0010](./0010-product-platform.md) | ORXIO Product Platform | Proposed |
