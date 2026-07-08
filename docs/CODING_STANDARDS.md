# Coding Standards

Conventions observed and enforced throughout this codebase. `AGENTS.md` at
the project root is the authoritative short-form version of these
principles — this document expands on it with the specifics actually in
use.

## TypeScript Conventions

- **Strict mode is non-negotiable.** `tsconfig.json` has `"strict": true`.
  Code must type-check with `npx tsc --noEmit` before it's considered done.
- **No `any`.** Type props, data arrays, and function signatures fully.
  Shared shapes are defined as a local `interface` next to the component
  that uses them (e.g. `interface ServiceCardProps`, `interface Step`) —
  there is no central `types/` directory; types live next to their usage.
- **Props interfaces are named `<Component>Props`** and either extend a
  DOM element's props (`React.ComponentProps<"div">`) or a `cva`
  `VariantProps<typeof xVariants>`, or both, e.g.:
  ```ts
  interface ButtonProps
    extends ButtonPrimitive.Props,
      VariantProps<typeof buttonVariants> {}
  ```
- **Tuple types for fixed-length data.** Where a data shape must always
  have exactly three items (capability tags, industry tags), the type is a
  tuple — `capabilities: [string, string, string]` — not `string[]`. This
  is deliberate: it lets `.map()` render without a length check and makes
  a missing/extra tag a compile error, not a runtime layout bug.
- **`type` imports are explicit.** Icon and other type-only imports use
  `import { type LucideIcon } from "lucide-react"` or a dedicated
  `import type { ... }` statement, keeping type-only symbols out of the
  runtime bundle.
- **No non-null assertions as a crutch.** They appear only where the
  invariant is guaranteed by construction (e.g. `findNode` in
  `HeroIllustration.tsx`, where the id is always one of a fixed local
  array) — not as a way to silence a real type error.
- **Server Actions are typed end-to-end.** `app/actions/contact.ts` is a
  `"use server"` module; it exports only async functions (a `"use server"`
  file cannot export non-async runtime values — this has been an actual
  build-breaking mistake in this project's history, so it's called out
  here explicitly).

## Naming Conventions

| Kind | Convention | Example |
| --- | --- | --- |
| Component files | `PascalCase.tsx` | `ServiceCard.tsx`, `HeroIllustration.tsx` |
| Non-component modules | `kebab-case.ts` | `faq-data.ts`, `escape-html.ts` |
| React components | `PascalCase`, named function declaration + explicit `export { X }` at the bottom (not `export default`) | `function ServiceCard() { ... }` / `export { ServiceCard }` |
| Hooks | `useXxx` | `useMotionPreset`, `useMounted` |
| Constants | `UPPER_SNAKE_CASE` | `SERVICES`, `NAV_ITEMS`, `CAPABILITY_CHIPS` |
| Types/interfaces | `PascalCase` | `ServiceCardProps`, `TechnologyCategory` |
| CSS custom properties | `--kebab-case` | `--muted-foreground`, `--radius-lg` |

Every component in this codebase is exported as a **named export**, never
`export default`. This is consistent across all ~60 components — match it.

## Component Architecture Rules

- **Server by default, `"use client"` only when required** — see
  [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the reasoning. Adding
  `"use client"` to a component that doesn't need interactivity or a
  React/browser-only hook is a regression, not a safe default.
- **One component, one file.** Small subcomponents used only by their
  parent (e.g. `FooterColumn` inside `Footer.tsx`) may live in the same
  file, but anything reused across files gets its own.
- **No inline styles.** Styling is Tailwind utility classes merged through
  `cn()`, or (rarely, for values Tailwind can't express, like an SVG
  radial-gradient mask) a `style` prop referencing a CSS custom property —
  never a hardcoded color or magic pixel value in a `style` object.
- **No prop-drilled theme logic.** Components never branch on
  light/dark in JS; the token system handles it via CSS. The only
  exception is `next-themes`' `useTheme()`/`resolvedTheme`, used solely to
  pick which icon (`Sun`/`Moon`) `ThemeToggle` renders.
- **Reuse over duplication.** When a near-identical need arises in a
  second place (e.g. `ProcessStep` needed both a premium card and a plain
  timeline row), prefer branching one component on props over
  copy-pasting a second component — see the dual-mode pattern in
  [`ARCHITECTURE.md`](./ARCHITECTURE.md#dual-mode-components).

## Accessibility Principles

- **Semantic HTML first.** Section headings are real `<h2>`/`<h3>`
  elements via the `Heading` component, never a styled `<span>` standing
  in for a heading (this was corrected in the Footer specifically —
  column titles moved from `<Text as="span">` to `<Heading as="h3">`).
  Ordered sequences (the delivery framework, FAQ items) use `<ol>`/`<ul>`
  with `<li>` children.
- **Heading hierarchy is `h1` → `h2` → `h3`, never skipped.** One `h1`
  per page (the page's `Display` component). Each major section is an
  `h2`. Each card/step title within a section is an `h3`.
- **Every purely decorative element is `aria-hidden="true"`** — icons
  (`<Icon aria-hidden="true" />`), decorative separators (the bullet
  between trust items in Hero), and fully decorative illustrations
  (`HeroIllustration`'s outer wrapper).
- **Every icon-only interactive element has an `aria-label`** — social
  links in the Footer, `ThemeToggle`, the `MobileMenu` trigger. Never ship
  an icon button with no accessible name.
- **Focus is never lost or trapped unintentionally.** `MobileMenu`
  implements a real focus trap (Tab/Shift+Tab wrap inside the open panel,
  `Escape` to close, focus returned to the trigger element on close) — if
  you add another overlay/dialog, follow that same pattern rather than
  relying on a UI library default.
- **`:focus-visible` styling is global** (`app/globals.css`) — don't
  suppress it (`outline: none`) on a custom interactive element without
  supplying an equivalent visible focus indicator.
- **Respect `prefers-reduced-motion` everywhere.** Any component adding
  a *new* looping/ambient animation (not just the shared
  `useMotionPreset` scroll-in effects) must gate it behind
  `useReducedMotion()` and render a static equivalent — this is checked
  on every animated component added to this project (`HeroIllustration`,
  card hover glows via CSS transitions are exempt since CSS transitions
  are already covered by the global reduced-motion media query).
- **Images always have meaningful or empty `alt`.** Logos get a real
  `alt="ORXIO"`; purely decorative images (`HeroIllustration`'s artwork)
  get `alt=""` and rely on the wrapper's `aria-hidden="true"`.

## Performance Principles

- **Images always go through `next/image`**, never a raw `<img>` — this
  gets automatic format negotiation, responsive `sizes`, and lazy loading
  by default. Only the above-the-fold logo in `Navbar` sets `priority`;
  everything else stays lazy.
- **No new dependencies without a strong reason.** The dependency list in
  `package.json` is deliberately small (see [`README.md`](./README.md)).
  Before reaching for a package, check whether Tailwind, Framer Motion, or
  a small hand-rolled solution already covers it — e.g. `LinkedInIcon`/
  `GitHubIcon` in `Footer.tsx` are inline SVGs rather than a new icon
  package, because `lucide-react` dropped brand icons and pulling in a
  second icon library for two logos wasn't justified.
- **Static generation over client fetching.** Every current route is
  statically prerendered at build time; there is no client-side data
  fetching to guard against waterfalls or loading spinners. Keep new pages
  statically renderable unless there's a concrete reason they can't be.
- **Animate cheap properties.** Framer Motion and CSS transitions in this
  codebase animate `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`
  — never `width`/`height`/`top`/`left` — so animations stay off the main
  layout/paint path. The Hero illustration's "traveling pulse" effect
  specifically uses an animated `strokeDashoffset` on a dashed line rather
  than moving a separate element along a path, chosen for the same reason.
- **No unnecessary re-renders.** Prefer deriving state from render (or
  from URL/props) over `useEffect` + `setState`. `ThemeToggle`'s
  hydration-safe mount detection uses `useSyncExternalStore`, not
  `useEffect`+`setState`, specifically to satisfy this and avoid an
  extra render pass — follow that pattern for any future
  hydration-guard need.
- **Validate before shipping.** `npm run lint`, `npx tsc --noEmit`, and
  `npm run build` are run after every change, without exception, before
  work is considered complete.
