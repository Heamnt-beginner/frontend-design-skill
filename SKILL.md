---
name: signature
description: Design process skill that picks a page shape and a visual identity for a build from a curated Top-50 web-design library, keeps a no-repeat ledger via stamp comments, and audits the result against a mechanical gate list. Use when building a new page or site UI, when asked to audit a design for AI-slop, to redesign existing UI, or to study a reference site's design DNA. Layers on top of the frontend-design skill for craft; never restates it.
metadata:
  opencode/slash: "true"
---

# Signature — shape & identity pipeline for OpenCode

Derived from *Top 50 Websites for Design Inspiration* (50 sites opened live in a browser, verified 22 Oct 2026) plus the process core of Nutlope's Hallmark. Every shape and identity names real corpus evidence — the library is observations, not taste folklore.

## Division of labor (do not blur)

- **frontend-design owns craft**: art direction, typography judgment, colour judgment, motion philosophy, copywriting, the self-critique loop. When it is loaded, follow it — do not restate its rules here.
- **Signature owns process and library**: which page *shape* this build is, which *identity* it wears, the no-repeat ledger, and a mechanical (grep-and-compute) gate list.

## Verbs

### Build (default)
1. Split the brief into: domain, audience, and energy words ("cinematic", "dense", "personal", "grand").
2. Pick a **shape** from [`references/structures.md`](references/structures.md). Say it in one line: `Shape: <name> (runner-up: <name>)`. If the brief is vague, offer the domain trio — never silently default.
3. **Verify against the corpus**: open 1–2 evidence URLs from the shape/identity rows with the Playwright MCP (navigate + screenshot tools) or webfetch. A dead link promotes the next row. Palette anchors are seeds until you have looked at the live page.
4. Pick an **identity** from [`references/identities.md`](references/identities.md) that shares the shape's mood, then fix its token seeds against what you actually saw.
5. Write tokens first: one semantic `:root` block + the stamp (below), before any component CSS.
6. Build. One memorable element carries the page; everything else stays quiet (frontend-design's restraint rule — apply, don't re-derive).
7. Run all **Gates** and fix every fail. Then the taste pass — via frontend-design if it is loaded, otherwise against its calibration list of AI-tell traits.

### `audit <target>`
Read the code/site and run **Gates** only. Each failure is one bullet: `file:line — gate no. — one-line fix`. Mechanical findings only; when something is a taste problem, name the relevant frontend-design principle in one line instead of inventing a new rule. If stamps exist, report whether the shape repeats an earlier build.

### `redesign <target>`
Keep information architecture, copy, and brand assets. Grep the stamps: the new shape must differ from the last stamped shape. Identity may rotate; changing brand voice or palette requires asking first.

### `study <url | screenshot>`
Open the source. Extract: section order → nearest shape; palette anchors (sample actual colors); type roles and any observed fonts → nearest identity. Emit one line: `study: source=<url> shape≈<Shape> identity≈<Identity> anchors=<hexes>`. If nothing in the library fits, append a new identity row (format at the bottom of identities.md) — but never silently substitute the study result for a library pick: if the user wants the studied DNA verbatim, the stamp becomes `identity=studied:<source>` and the study values become the tokens.

## The ledger is code

- Stamp at the top of the main stylesheet (and mirror in `index.html` head for HTML-only builds):
  `/* signature: shape=<Shape> identity=<Identity> refs=<urls actually opened> */`
- Before picking, grep the project for existing stamps. No two consecutive builds share a shape; prefer not to reuse the identity either.
- No separate ledger file. The CSS is the ledger.

## Contract

- Design tokens live in one place (`:root` custom properties or the project's `tokens.css`/Tailwind `@theme`). Names are semantic roles (`--color-ink`), not values.
- Reuse the project's own token names rather than shadowing them; extend the Tailwind theme, never inline arbitrary values.
- An existing global stylesheet is **append-only**: keep every `@tailwind`/`@import "tailwindcss"` directive exactly in place, add tokens below the existing rules, and put any new `@import` at the very top. Never silently strip framework directives — it un-styles the whole app. Full rewrites only on explicit request.
- Match the framework's file conventions. Don't reinvent routing/layout patterns the project already has.
- Scope: this is a taste process. No invented copy (if the user hasn't given words, ask); no business logic; no picking a brand identity from nothing — follow one you're given.

## Gates (mechanical — every answer must be "no"; each fail = one fix before handoff)

Token discipline
1. Fail if any `#hex`, `oklch()`, `rgb()`, or `font-family` appears in a component that doesn't resolve to a named token. Lift it or replace it.
2. Fail if any padding/gap/margin is off the project's spacing scale (multiples of 4px absent a named token). Arbitrary `17px` is a tell.
3. Fail if the stamp comment is missing, or names URLs that were never actually opened.

Layout survival
4. Fail if the page horizontally scrolls at any viewport width 320–1920px. `overflow-x: clip` on **both** `html` and `body` (not `hidden` — clip preserves `sticky`/`fixed`).
5. Fail if any `1fr` grid/row track containing an image isn't `minmax(0, 1fr)`.
6. Fail if display-size text lacks `overflow-wrap: anywhere` (and `min-width: 0` on its container) — long compound words overflow phones.
7. Fail if clickable text (button, nav, tab, CTA labels) can wrap to 2 lines at 320/375/768/1280px.

Code facts
8. Fail on `transition: all` — name the properties.
9. Fail if one element carries more than one hover effect (translate + scale + shadow + color combos).
10. Fail if inputs change `border-width` between states; state changes go to color/outline/shadow. Focus rings are `outline`, not border. Disabled needs ≥2 of: opacity, `cursor: not-allowed`, `disabled`/`aria-disabled`.
11. Fail if any `<svg>`/`<canvas>`/decorative element has neither `aria-hidden="true"` nor an accessible name.

Motion & performance
12. Fail if any animation/keyframe lacks a `prefers-reduced-motion: reduce` fallback.
13. Fail on auto-rotating content without pause-on-hover-and-focus (WCAG 2.2.2).
14. Fail if the LCP hero asset is `loading="lazy"`, or a hero video lacks `poster`/`fetchpriority="high"`.

Contrast & honesty
15. Fail if any color/background pair misses WCAG 4.5:1 (body) or 3:1 (large text, icons, focus rings). Two hot spots: text inheriting a color while a parent switched surfaces; button fill within 5% lightness of its text.
16. Fail on fabricated facts — metrics, percentages, quotes, names, prices the user never supplied, filling stat slots. Placeholder slots say "confirm", never invent.
17. Fail on emoji used as feature/step/pricing icons; one icon library per page, max.
18. Fail on redrawn chrome: fake browser bars, fake phone notches, fake terminal/IDE window frames. Use a real screenshot or nothing.

Library discipline
19. Fail if a loaded font isn't a known free/licensed webfont. Foundry faces in the corpus (Commercial Type, Klim, Grilli Type, type.today, Pangram Pangram trials) are display references — check the license, ask before paying. Google Fonts and open variable fonts pass.
20. Fail if this build's shape matches the project's most recent stamp (grep first, per the ledger rule).

## References — read on demand, never all at once

- [`references/structures.md`](references/structures.md) — ten page shapes with skeletons, evidence, and the domain trio table. Read when picking shape (build/redesign/audit).
- [`references/identities.md`](references/identities.md) — twenty identities: palette seeds, font pairings, corpus evidence. Read when picking identity (build/redesign/study).

## Worked example (from the corpus's own guidance)

Brief: "Meet India Journeys — tour operator site for a river-and-heritage Kerala journey."
Domain word "travel" → trio is Scroll Story · Case Catalog · Luxury Ledger. Pick **Scroll Story** (runner-up: Case Catalog) because the subject is places shown one at a time. Open apple.com and simplychocolate.dk live to study chapter pacing, hero media, and full-bleed treatment. Identity: **Forest Confection** (deep green + cocoa, condensed display) fits river-and-heritage; sample the live reference before fixing tokens. Stamp:
`/* signature: shape=Scroll Story identity=Forest Confection refs=apple.com,simplychocolate.dk */`
