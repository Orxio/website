# Git Workflow

This document describes the branching, commit, and release process actually
in use on this repository, derived from its git history — not an aspirational
process.

## Branch Strategy

Three tiers of branch are in use:

| Branch | Role |
| --- | --- |
| `main` | Stable branch. Historically the initial integration branch for early sprints; `develop` has since become the active integration branch and `main` is behind it pending a future sync/release. |
| `develop` | The active integration branch. Every feature branch is created from `develop` and merged back into it. This is the branch to check out for current work. |
| `feature/<name>` | One branch per sprint/unit of work, created from `develop`. Named after the feature, in kebab-case, e.g. `feature/navbar-polish`, `feature/technology-section`, `feature/homepage-polish`. |

`sprint-01-foundation` exists as a legacy branch from the earliest phase of
the project and is not part of the active workflow.

### Standard cycle

For each unit of work:

```bash
git checkout develop
git checkout -b feature/<name>

# ...implement, validate (lint, tsc, build)...

git add <specific files>          # never a blanket `git add .` — see below
git commit -m "type(scope): description"

git checkout develop
git merge feature/<name>          # fast-forward; develop never diverges from feature branches
git push origin develop
```

Every merge into `develop` observed in this repo's history has been a clean
fast-forward (`Updating <sha>..<sha> / Fast-forward`) — feature branches are
short-lived and `develop` is never committed to directly while a feature
branch is in flight, so there is no merge-commit or conflict-resolution
history to speak of. Keep it that way: branch from the tip of `develop`,
land your feature branch's changes, merge before starting the next one.

### Staging discipline

Commits in this repo stage specific files by name, not `git add .` /
`git add -A`. This matters because the working tree frequently contains
untracked assets (brand/image files dropped in directly by design, not by
an agent) that are unrelated to the current commit and aren't yet wired
into any component. Before staging, check `git status` and add only the
files that are actually part of the change you're committing.

## Commit Message Convention

Conventional-commits style, consistently applied:

```
<type>(<scope>): <short, imperative description>
```

Observed types: `feat`, `chore`. Scopes are the area touched — `home`,
`navbar`, `navigation`, `contact`, `services`, `about`, `legal`, `seo`,
`brand`, `homepage`. Examples straight from history:

```
feat(home): add enterprise AI technology stack
feat(navbar): premium navigation polish
feat(seo): add sitemap.ts and robots.ts
chore(homepage): production-readiness audit fixes
```

Keep the subject line short and in the imperative mood ("add", not "added"
or "adds"). A commit does one coherent thing — the granularity in this
repo is roughly "one section/component redesign" or "one integration," not
a whole day's work bundled together.

## Release Tagging

Annotated tags mark milestones on `develop`:

```bash
git checkout develop
git tag -a v0.8.0 -m "Homepage complete"
git push origin v0.8.0
```

Tags observed so far: `v0.8.0` and `v1-homepage-complete`, both marking the
point where the homepage sprint sequence (Hero through Final CTA and
Footer) was complete. Use an annotated tag (`-a`, with a `-m` message), not
a lightweight tag, and always push it explicitly — `git push origin
<branch>` does not push tags on its own.

## What NOT to do

- Don't force-push, don't `git reset --hard` on a shared branch, don't
  skip hooks (`--no-verify`) — none of this has ever been necessary in this
  repo's history and there's no reason it should be.
- Don't merge a feature branch into `develop` if `develop` has moved since
  the feature branch was cut — rebase or re-branch first. The clean
  fast-forward history is a signal that branches are short-lived; don't let
  one go stale.
- Don't commit generated/build output (`.next/`) or `node_modules` —
  standard `.gitignore` exclusions apply.
