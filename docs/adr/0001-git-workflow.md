# ADR 0001 - Git Workflow

## Status

Accepted

## Date

2026-07-08

## Context

ORXIO's website is developed in short, discrete sprints — typically one
section, page, or subsystem per unit of work — often executed
sequentially with no shared session state between units. Work needs to be
reviewable and revertible in isolation, and the repository needs a stable
branch that always reflects a known-good state, independent of whatever
is currently in progress.

## Problem Statement

How should work be branched, committed, merged, and tagged so that
in-progress changes never put the stable branch at risk, and so the
history stays legible sprint-over-sprint?

## Decision

A three-tier branch model is used:

- **`main`** — the stable branch. Represents a state suitable for
  production release.
- **`develop`** — the active integration branch. Every feature branch is
  cut from `develop` and merged back into it. This is the branch day-to-day
  work targets.
- **`feature/<name>`** — one short-lived branch per unit of work, branched
  from `develop`, named in kebab-case after the feature (`feature/navbar-polish`,
  `feature/technology-section`). Deleted or left dormant once merged.

Each feature branch is committed to with small, scoped, conventional-commit
messages (`type(scope): description`) — see
[`GIT_WORKFLOW.md`](../GIT_WORKFLOW.md) for the full convention — and is
merged into `develop` as a clean fast-forward before the next feature
branch starts. Milestones on `develop` are marked with annotated release
tags (`git tag -a vX.Y.Z -m "..."`).

## Rationale

- **Isolation.** A feature branch that goes wrong (bad build, wrong
  direction) can be discarded without touching `develop`.
- **Fast-forward-only merges keep history linear and legible.** Because
  each feature branch is cut fresh from `develop`'s current tip and merged
  before the next one starts, there are no merge commits and no conflict
  resolution to reconstruct later — `git log --oneline` reads as a
  straight, chronological list of shipped units of work.
- **`develop` as the integration branch, not `main`, protects the stable
  branch.** Sprint-over-sprint work lands on `develop`; `main` is only
  updated at deliberate release points. This means `main` can always be
  treated as deployable without needing to check the state of in-flight
  work.
- **Annotated tags give named, referenceable milestones** (`v0.8.0`,
  `v1-homepage-complete`) independent of branch state, which is what a
  future rollback or changelog needs to point at.

## Alternatives Considered

- **Trunk-based development (commit directly to `main`).** Rejected: with
  sprint-sized units of work landing frequently, `main` would be
  intermittently in a half-finished state, and there would be no clean
  point to roll back to between sprints.
- **Long-lived `main`/`develop` with long-lived feature branches (GitFlow
  proper, including `release/*` and `hotfix/*` branches).** Rejected as
  more process than this project's size currently warrants — no hotfix
  branch has ever been needed, and adding the ceremony now would slow down
  single-person/single-agent sprints without a corresponding benefit.
- **One branch per page/section, kept alive across multiple sprints.**
  Rejected: branches would drift from `develop` and merges would stop
  being fast-forwards, reintroducing the conflict-resolution overhead this
  model is designed to avoid.

## Consequences

### Positive

- `develop` always reflects the sum of completed, merged work.
- History is a clean, linear, greppable log of one commit (or a small
  number of commits) per feature.
- Any commit or tag is a safe, named point to return to.

### Negative

- Feature branches must be kept short-lived and merged promptly — letting
  one go stale while others land on `develop` reintroduces merge
  complexity this model is meant to avoid.
- `main` requires an explicit, deliberate step to update from `develop`;
  it does not happen automatically. As of this writing, `main` is behind
  `develop` pending that release step.

## Risks

If a feature branch is left open too long while `develop` continues to
move, the eventual merge stops being a fast-forward and requires manual
conflict resolution. Mitigation: branch, implement, validate, and merge
within a single sprint — don't let feature branches accumulate.

## Future Considerations

- Define the explicit process/trigger for syncing `main` from `develop`
  (currently ad hoc).
- If the team grows beyond single-threaded sprint execution, revisit
  whether pull-request review should be introduced between `feature/*` and
  `develop`.

## Related ADRs

- ADR-0007 — Deployment Strategy (depends on this branch model for what
  gets deployed from where).
