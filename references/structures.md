# Structures — ten page shapes from the Top-50 corpus

Source: *Top 50 Websites for Design Inspiration* (50 sites opened live in a browser, verified 22 Oct 2026). Shapes are named for what the evidence sites actually do. **One build = one shape.** Pick before writing code.

## How to pick

1. Read the brief for domain + energy words.
2. State the pick in one line: `Shape: <name> (runner-up: <name>)`.
3. Grep the project for `/* signature: shape=` stamps — the new shape must differ from the most recent one.
4. Vague brief? Offer the **domain trio ** (at the bottom). Three shapes from categorically different groups; never silently default. "Modern / clean / professional" is not a domain — re-ask "what is this thing?".

## The ten shapes

### 01 · Scroll Story
**Skeleton:** full-bleed hero media → scroll-driven chapters, one idea per viewport (sticky beats / pinned sections) → itineraries, features, or collections as story acts → single closing CTA → quiet footer.
**Cadence:** media carries the story; copy annotates it. Cinematic pacing, generous whitespace between acts.
**Evidence:** apple.com · tesla.com · nike.com · simplychocolate.dk · prometheusfuels.ai (mechanics: gsap.com, lenis.dev)
**Pick when:** the subject has places, moments, or products worth experiencing one at a time — travel, consumer hardware, food, lifestyle.
**Caution:** each chapter needs real media or real copy. Repeating the same chapter skeleton with different words is the AI-page tell.

### 02 · Case Catalog
**Skeleton:** restrained header → dense editorial grid/cards of work, articles, or films with witty captions → selectable detail pages → colophon footer.
**Cadence:** rhythm over drama; captions do the talking; everything is one click from everything.
**Evidence:** pentagram.com · itsnicethat.com · mubi.com · wolffolins.com
**Pick when:** the work itself is currency — agencies, publications, curation, archives.

### 03 · Type Manifest
**Skeleton:** oversized display typography IS the hero → motion reels or a single signature interaction → numbered or narrative case entries → contact close.
**Cadence:** type as image; movement is deliberate and scarce; a custom cursor may be the only voice line.
**Evidence:** cuberto.com · instrument.com · dennissnellenberg.com · lenis.dev (I use lenis.dev sparingly — it doubles as identity evidence)
**Pick when:** a studio or personal brand sells thinking, and craft Typography can prove it.

### 04 · Canvas World
**Skeleton:** WebGL/3D canvas is the site: navigation-as-play → scenes replace sections → depth-of-field hero scenes → minimal HUD copy.
**Cadence:** the scene is the landing; every interactive element is functional, not decorative “decor”.
**Evidence:** activetheory.net · bruno-simon.com · basement.studio · landonorris.com · zajno.com
**Pick when:** the brief explicitly asks for an immersive/game-like experience, and the budget can back it.
**Caution (from the corpus itself):** these are custom-built studios; treat as motion references, not templates to copy. For static sites, this shape is over-reach — prefer Scroll Story.

### 05 · Doc First
**Skeleton:** docs-style reading column beside marketing tasteful code panels → real snippets/tests → changelog/version strips → footer with legal and versioning.
**Cadence:** monospace accents, precise small caps, quiet colors, close-to-reference for developer trust.
**Evidence:** supabase.com · tailwindcss.com · cursor.com · typewolf.com (pairing guides)
**Pick when:** a developer tool, CLI, library, or component set wants to prove itself in code.

### 06 · Screenproof
**Skeleton:** dark or light product canvas → precise UI screenshots/video demos as the hero → tight feature stacks with sticky visuals → social-proof strip → pricing/CTA.
**Cadence:** one strong visual motif (a beam, a glow, a mesh); product UI is the headline.
**Evidence:** linear.app · raycast.com · vercel.com · clerk.com · figma.com · arc.net · dropbox.com (light-mode branch)
**Pick when:** software with a strong interface wants marketing that shows the product working.

### 07 · Luxury Ledger
**Skeleton:** small-caps utilitarian nav → strict product/lookbook grid → tall image pages with almost no chrome → astonishing type discipline → dense colophon footer.
**Cadence:** near-zero decoration; whitespace and cropping are the luxury. Restraint is the point, not laziness.
**Evidence:** balenciaga.com · ssense.com · aesop.com
**Pick when:** fashion, beauty, premium retail where the product and its photography carry the brand.

### 08 · Studio Diptych
**Skeleton:** split-screen pairs throughout — type on one side, rendered proof on the other, alternating direction down the page → case strip → contact.
**Cadence:** type-versus-render contrast; alternating direction gives natural rhythm.
**Evidence:** metalab.com · ustwo.com (color-blocked variant)
**Pick when:** an agency needs to show abstract craft next to concrete outcomes.

### 09 · Personal Piece
**Skeleton:** one focused scroll → name/role → hand-built demos, micro-interactions, or essays as proof → tidy link/essay list → sign-off.
**Cadence:** intimate and honest; demos over claims; never more than what proves the claim.
**Evidence:** rauno.me · emilkowalski.ski · joshwcomeau.com · brittanychiang.com
**Pick when:** an individual's site where personality and demonstrated craft are the pitch (wish-list trap: does not suit teams or multi-product firms).

### 10 · Specimen Index
**Skeleton:** giant specimen/hero object → inventory of items (fonts, art, product lines) → per-item detail page (a specimen page with a live tester) → cart or license CTA.
**Cadence:** the inventory display IS the design; oversized numerals are common and genuine.
**Evidence:** commercialtype.com · grillitype.com · klim.co.nz · pangrampangram.com · type.today · futurefonts.com · webflow.com (template gallery variant)
**Pick when:** the product is a small-scale inventory of things an expert buys or licenses.

## Domain trio table (offer; never silently default)

If a brief is vague, offer three shapes from categorically different groups. Never silently pick.

| Domain words in the brief | Trio to offer |
| --- | --- |
| travel, tour, destination, itinerary (e.g. Meet India Journeys) | Scroll Story · Case Catalog · Luxury Ledger |
| agency, studio, case studies, multi-client work | Case Catalog · Studio Diptych · Type Manifest |
| personal, about, resume, one-pager | Personal Piece · Type Manifest · Scroll Story |
| docs, CLI, SDK, API, library, open source | Doc First · Specimen Index · Screenproof |
| SaaS, product marketing, B2B | Screenproof · Scroll Story · Doc First |
| consumer app, launch, hardware | Scroll Story · Screenproof · Personal Piece |
| fashion, apparel, beauty, lookbook | Luxury Ledger · Case Catalog · Scroll Story |
| editorial, magazine, film, publication | Case Catalog · Scroll Story · Type Manifest |
| foundry, type, typography, fonts | Specimen Index · Type Manifest · Doc First |
| immersive, interactive, WebGL, game | Canvas World · Type Manifest · Scroll Story |
| genuinely no signal | Scroll Story · Case Catalog · Type Manifest |

## Tourism note (the corpus's own advice)

For travel destinations: Apple and Tesla show scroll-driven story sections per itinerary; Pentagram and It's Nice That give editorial grids for travel stories; Simply Chocolate and MUBI give cinematic full-bleed hero treatment. The 3D entries (Lando Norris, Bruno Simon, Basement, Active Theory) are custom-built motion references — study their motion thinking, don't copy their build stack.
