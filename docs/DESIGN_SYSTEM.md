# Design System

Source of truth: `app/globals.css` (tokens), `components/ui/*.tsx`
(primitives), `components/typography/*.tsx` (type scale), and the
homepage card/section components, which are the most fully polished
reference implementation in the codebase.

## Design Philosophy

The brand direction (see `AGENTS.md`) is explicitly enterprise-premium,
referencing OpenAI, Anthropic, Stripe, Vercel, and Linear rather than
generic SaaS/startup aesthetics. In practice this means:

- **Monochrome-first palette.** Every design token in `globals.css` is an
  `oklch(L C H)` value with `C` (chroma) at `0` — the entire palette is
  grayscale by construction, including `--primary` and every `--chart-*`
  token. There is no separate "accent color"; emphasis comes from
  lightness/opacity, not hue.
- **Restraint over decoration.** Borders are soft (`border-border/50`
  or `/60`, never a hard 100%-opacity border), shadows are used sparingly
  and grow only on hover, and gradients are always low-opacity ambient
  washes (`from-primary/[0.06]`), never a visible color transition.
- **Motion is felt, not seen.** Animation durations are slow (300ms+ for
  hover, multi-second for ambient/looping motion) and every animated
  component respects `prefers-reduced-motion`.

## Theme System

Tokens are CSS custom properties defined once in `:root` (light) and
`.dark` (dark, toggled by `next-themes` via a `class` on `<html>`), then
re-exposed to Tailwind utilities through `@theme inline` in
`app/globals.css`. This means every token is available as a Tailwind
color utility (`bg-primary`, `text-muted-foreground`, `border-border`,
etc.) and automatically resolves per-theme — components never branch on
light/dark in JS.

Core tokens:

| Token | Role |
| --- | --- |
| `--background` / `--foreground` | Page background / default text |
| `--card` / `--card-foreground` | Card surface background / text |
| `--primary` / `--primary-foreground` | Primary emphasis (buttons, active states, icon tint) |
| `--secondary` / `--muted` / `--accent` | Secondary surfaces, each with a `-foreground` pair |
| `--muted-foreground` | Body copy on cards, descriptions, secondary text |
| `--border` / `--input` / `--ring` | Borders, form borders, focus rings |
| `--destructive` | Error/destructive state |
| `--chart-1` … `--chart-5` | A 5-step grayscale ramp (light → dark), available for data-viz or accent variety while staying monochrome |
| `--radius` (`0.625rem`) | Base corner radius; `--radius-sm/md/lg/xl/2xl/3xl/4xl` are all derived from it via `calc()` |

**Rule: no hardcoded colors.** Every component in this codebase sources
color exclusively from these tokens (via Tailwind utility classes or
`var(--token)` inside inline gradients/masks). This has been enforced
sprint-over-sprint — do not introduce a hex/rgb literal for anything
color-related.

Fonts: `--font-sans` / `--font-mono` are Next.js `next/font` bindings for
Geist Sans and Geist Mono (`app/layout.tsx`); `--font-heading` is aliased
to `--font-sans` (there is currently no separate display typeface).

Global base layer (`@layer base` in `globals.css`) sets `border-border`
and `outline-ring/50` on every element by default, smooth scrolling,
antialiasing, and a `:focus-visible` outline. A `prefers-reduced-motion`
media query collapses all animation/transition durations to near-zero
site-wide as a hard floor beneath the per-component Framer Motion opt-outs.

## Typography

Four primitives in `components/typography/`, all thin `cva`-based wrappers
with a polymorphic `as` prop:

| Component | Purpose | Sizes |
| --- | --- | --- |
| `Display` | Hero-scale headline (page `h1`) | `sm` / `md` (default) / `lg`, `text-4xl`→`text-8xl` across breakpoints |
| `Heading` | Section (`h2`) and card (`h3`) titles | `xs` `sm` `md` (default) `lg` `xl`, `text-lg`→`text-6xl` |
| `Lead` | Hero supporting paragraph | fixed `text-lg sm:text-xl`, `max-w-prose`, muted |
| `Text` | Body copy, everywhere else | `sm` `md` (default) `lg`, polymorphic `as="p" \| "span" \| "div"` |

Conventions observed across every homepage section:

- Section heading: `<Heading as="h2" size="lg">` — this is fixed, do not
  vary `size` per section.
- Section supporting copy: `<Text size="lg" className="max-w-prose
  text-muted-foreground">` directly under the heading.
- Card title: `<Heading as="h3" size="xs">` — keeps heading hierarchy
  correct (`h1` → `h2` → `h3`) without a visually oversized card title.
- Card body copy: `<Text size="sm" className="text-muted-foreground">`.
- Eyebrow labels (Hero, Final CTA): `<Text as="span" size="sm"
  className="font-medium tracking-widest text-primary uppercase">` — this
  exact class combination is the one and only eyebrow style in the codebase.
- `max-w-prose` is the standard measure for any paragraph of body copy;
  don't let description text run full-width.

## Buttons

`components/ui/button.tsx` wraps Base UI's `<Button>` with `cva` variants.
Never edit this file for one-off styling — override via the `className`
prop, which merges through `cn()`/`tailwind-merge`.

Variants: `default` (primary, filled), `outline`, `secondary`, `ghost`,
`destructive`, `link`. Sizes: `xs` `sm` `default` `lg` `icon` `icon-xs`
`icon-sm` `icon-lg`.

Established hover convention (applied via `className` on individual
`<Button>` usages, e.g. `Hero.tsx`, `FinalCTASection.tsx`):

- **Primary CTA**: `shadow-md transition-all duration-300 ease-out
  hover:-translate-y-0.5 hover:shadow-lg` — a 2px lift plus shadow growth.
- **Secondary/outline CTA**: `border-foreground/15 transition-all
  duration-300 ease-out hover:-translate-y-px hover:border-foreground/30
  hover:bg-foreground/5 hover:text-foreground` — a 1px lift, a brightened
  border, and a faint fill.

Both primary and secondary hover treatments must stay in sync between
every button pair on the homepage (Hero and Final CTA currently share
identical classes for this reason — this was a deliberate normalization
pass, not a coincidence).

`Navbar`'s icon buttons (`ThemeToggle`, `MobileMenu` trigger) use
`variant="ghost" size="icon"` and are shaped `rounded-full` for a circular
icon-button treatment distinct from the rectangular CTA buttons.

## Cards

`components/ui/card.tsx` provides the primitives — `Card`, `CardHeader`,
`CardTitle`, `CardDescription`, `CardContent`, `CardFooter` — all plain
`<div>`s (`CardDescription` is a `<p>`) with `data-slot` attributes and a
`className` passthrough via `cn()`. `Card`'s own base classes:
`flex flex-col gap-6 rounded-xl border border-border bg-card py-6
text-card-foreground shadow-sm`.

Every content card on the homepage (`ServiceCard`, `TechnologyCard`,
`TrustPillarCard`, `IndustryCard`) — and `ProcessStep`'s capability-card
branch, which is hand-built rather than `Card`-based but intentionally
matches it exactly — follows one normalized recipe:

```tsx
<Card className="group relative h-full gap-5 overflow-hidden border-border/60
  bg-gradient-to-b from-card to-card/70 py-7 shadow-sm
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5">

  {/* ambient hover glow — always present, always this exact opacity */}
  <div className="pointer-events-none absolute inset-0
    bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent
    opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

  <CardHeader className="relative gap-0 px-7">
    {/* icon chip */}
    <div className="flex size-12 items-center justify-center rounded-xl
      border border-border/40 bg-gradient-to-br from-primary/10 to-primary/5
      text-primary shadow-sm transition-colors duration-300 ease-out
      group-hover:border-foreground/20">
      <Icon aria-hidden="true" className="size-6" />
    </div>
    <Heading as="h3" size="xs" className="mt-5">{title}</Heading>
  </CardHeader>

  <CardContent className="relative flex flex-col px-7">
    <Text size="sm" className="text-muted-foreground">{description}</Text>
    {/* optional: capability pills, see below */}
  </CardContent>
</Card>
```

Rules this recipe encodes (apply them to any new card):

- **Radius**: `rounded-xl` (`Card`'s default) — never `rounded-2xl` or
  larger for a content card.
- **Border**: `border-border/60` on the card, `border-border/40` on the
  icon chip — always a soft, partial-opacity border, never full `border-border`.
- **Hover elevation**: exactly `hover:-translate-y-1` +
  `hover:shadow-xl hover:shadow-foreground/5` + `hover:border-foreground/20`.
  Do not use `hover:scale-*` on cards — an earlier pass added
  `hover:scale-[1.02]` to one card family and it was removed in a later
  polish sprint specifically to keep hover elevation consistent across all
  card types.
- **Ambient glow layer**: every card gets the `from-primary/[0.06]`
  absolute overlay div, positioned as the first child inside the card and
  made to sit behind the content by giving `CardHeader`/`CardContent` (or,
  for non-`Card` components, a wrapping `<div>`) an explicit `relative`
  class — required for correct stacking, since a `position: absolute`
  sibling still paints above static in-flow content regardless of DOM
  order unless that content is also given a `position`.
- **Icon chip**: always `size-12 rounded-xl`, gradient fill
  `from-primary/10 to-primary/5`, `text-primary`, icon glyph `size-6`.
- **Padding**: `py-7` on the card, `px-7` on each `CardHeader`/`CardContent`/
  `CardFooter`.
- **Height**: cards are placed in a grid with `className="h-full"` on
  their `motion.div` wrapper and `h-full` on the `Card` itself, so a row
  of cards stays equal-height regardless of copy length.

### Capability / tag pills

Every card family that shows short tags below the description (Services,
Process, Technology, Industries) uses one exact pill style:

```tsx
<span className="inline-flex items-center rounded-full border border-border/50
  px-2.5 py-1 text-[0.7rem] text-muted-foreground
  transition-colors duration-300 ease-out
  group-hover:border-foreground/25 group-hover:text-foreground/80">
  {label}
</span>
```

The Final CTA section's trust chips (`Strategy` / `Architecture` /
`Delivery`) use the same padding/size/colors, but with a leading icon and
per-chip `hover:` (rather than `group-hover:`) since they aren't inside a
card.

### Card footer / inline link pattern

Where a card links out (`ServiceCard`'s "Learn more"), the pattern is a
`CardFooter` with `border-t border-border/50`, containing an inline link
with a trailing `ArrowRight` icon that slides on hover:

```tsx
<Link className="inline-flex items-center gap-1.5 text-sm font-medium
  text-foreground transition-colors duration-300 ease-out hover:text-primary">
  Learn more
  <ArrowRight className="size-4 transition-transform duration-300 ease-out
    group-hover:translate-x-1" aria-hidden="true" />
</Link>
```

## Spacing

- **Section rhythm**: `<Section size="lg">` (`py-24 sm:py-32`) is the
  standard for every homepage section. Do not introduce `size="xl"` for an
  individual section without a deliberate, site-wide reason — a prior
  inconsistency (one section on `xl` while its siblings were on `lg`) was
  treated as a bug and normalized back to `lg`.
- **Header-to-grid gap**: the heading+subtext block uses
  `className="flex flex-col items-start gap-4"`; the grid below it starts
  at `className="mt-16 grid ..."`. Both values are fixed across sections —
  don't introduce a one-off `gap-5` or `mt-20`.
- **Grid gap**: `gap-6` is the default grid gap for 2- and 3-column card
  grids. `ProcessSection`'s 5-column connected-card layout is the one
  deliberate exception (`gap-y-10 lg:gap-x-6 lg:gap-y-0`), because its
  connector line's position is calculated against that specific gap value
  — do not change `ProcessSection`'s gap without also recalculating the
  `before:` connector offsets in the same file.
- **Container width**: `Container` defaults to `size="lg"`
  (`max-w-7xl`), used by every homepage section. `FinalCTASection` is the
  intentional exception, narrowed to `max-w-[900px]` because it's a single
  centered panel, not a multi-column grid.
- **Hero top offset**: `Hero.tsx` overrides `Section`'s default top padding
  (`pt-[4.8rem] sm:pt-[6.4rem]`) to sit closer to the sticky Navbar than a
  standard section would — this is specific to Hero being the first thing
  under the nav bar, not a general pattern.

## Motion Timing

- **Hover transitions**: `duration-300 ease-out` everywhere — buttons,
  cards, icon chips, pills, links. This was normalized across a dedicated
  polish sprint; a `duration-200` outlier on one button was found and
  corrected specifically to match this standard.
- **Scroll-in animation**: driven by `useMotionPreset("stagger")` +
  `useMotionPreset("slideUp")` from `lib/motion.ts` (see
  [`ARCHITECTURE.md`](./ARCHITECTURE.md#motion-system)), triggered via
  Framer Motion's `whileInView` with `viewport={{ once: true, margin:
  "-80px" }}` so animations fire once, slightly before the section enters
  the viewport.
- **Ambient/looping motion** (Hero illustration float, background glows):
  intentionally slow (multi-second durations), always gated behind
  `useReducedMotion()` with a static fallback.
