# Identities — twenty liveries from the Top-50 corpus

An identity = palette + type pairing + mood, each named after real corpus evidence. **Seeds are starting values, sampled from the corpus's observed palette descriptions — confirm them against the live page (Playwright screenshot) before committing tokens.** Never treat a seed as gospel.

License rule: listed fonts are those directly observed in the corpus or official free equivalents. Foundry faces (Commercial Type, Klim, Grilli Type, type.today, Pangram Pangram) are display references — **check the license before commercial use**. Google Fonts and open variable fonts are license-safe defaults.

| # | Identity | Palette (corpus words + seed hexes) | Type | Evidence |
|---|---|---|---|---|
| 1 | Night Beam | near-black ink, red gradient beams. ink ≈ #0A0A0C · paper ≈ #101014 · accent ≈ #F03E2D | grotesk display, tight body | raycast.com |
| 2 | Purple Glow | near-black + purple glow gradients. ink ≈ #08080A · paper ≈ #0E0E12 · accent ≈ #7C5CFF | geometric sans, tight tracking | linear.app |
| 3 | Neon Glass | deep navy/near-black + neon cyan–magenta glass. ink ≈ #0B0E17 · paper ≈ #121627 · accent ≈ #35E0FF | condensed display, small-caps nav | activetheory.net |
| 4 | Film Reel | cinematic dark, full-bleed film stills. ink ≈ #111111 · paper ≈ #1A1A1A · accent ≈ #E8DCC3 | serif logotype + refined sans | mubi.com |
| 5 | Lime Motion | black + lime-green accents. ink ≈ #0C0C0C · paper ≈ #141414 · accent ≈ #C6F426 | bold display + code samples | gsap.com |
| 6 | Pink Scroll | black + hot-pink neon display. ink ≈ #0D0D0D · paper ≈ #131316 · accent ≈ #FF3E88 | massive display (italic display is this identity's signature — upright elsewhere) | lenis.dev |
| 7 | Duotone Punch | bold red/green color blocks. ink ≈ #0F0F0F · paper ≈ #F5F3EF · accent-A ≈ #E23B2E · accent-B ≈ #2E7D53 | huge condensed display | ustwo.com |
| 8 | Specimen Heat | orange-red specimen pages. ink ≈ #131313 · paper ≈ #FAF3EC · accent ≈ #E8552C | modern grotesks | klim.co.nz |
| 9 | Royal Blocks | royal blue + maroon color blocks. paper ≈ #F2EFE9 · accent-A ≈ #2545C8 · accent-B ≈ #6E1B2C | huge serif specimens | commercialtype.com |
| 10 | Alpine Pop | photography + bright color pops. paper ≈ #FAFAF8 · ink ≈ #111111 · accent ≈ #FFD43B | huge grotesk display | pangrampangram.com |
| 11 | Amber Apothecary | warm amber/brown on cream. ink ≈ #2A1F16 · paper ≈ #F4EEE3 · accent ≈ #B4671E | quiet serif display, humanist sans body | aesop.com |
| 12 | Forest Confection | deep forest green + chocolate browns. ink ≈ #10241B · paper ≈ #F0EAD8 · accent ≈ #5B3A24 | condensed display | simplychocolate.dk |
| 13 | Mint Dev | dark navy + mint accents + mono labels. ink ≈ #0D1117 · paper ≈ #161B22 · accent ≈ #4AE3B5 | neutral sans + monospace accents | brittanychiang.com |
| 14 | Paper Grid | white editorial grid, neutral type. ink ≈ #1A1A1A · paper ≈ #FBFBF9 · accent ≈ #C8C6C0 | neutral sans, editorial captions | pentagram.com · itsnicethat.com |
| 15 | Chrome Luxury | stark black/white, minimal chrome. ink ≈ #0A0A0A · paper ≈ #FFFFFF · accent ≈ #0A0A0A (none — monochrome) | small caps, utilitarian | balenciaga.com · ssense.com |
| 16 | Playful Study | pastel cards + illustrations. ink ≈ #23262B · paper ≈ #FDFCF9 · accent-A ≈ #FF7A9E · accent-B ≈ #7AA5FF | rounded geometric sans | joshwcomeau.com · notion.com · arc.net |
| 17 | Circle Punch | white field, one giant saturated shape. ink ≈ #111111 · paper ≈ #FFFFFF · accent ≈ #FFCE00 | oversized sans | rauno.me |
| 18 | Wordmark Wall | white + massive black wordmark. ink ≈ #0B0B0B · paper ≈ #FAFAFA · accent ≈ #0B0B0B (type is the accent) | oversized grotesk | instrument.com · cuberto.com |
| 19 | Full-Media Minimal | white space + full-bleed photography. ink ≈ #111111 · paper ≈ #FFFFFF · accent ≈ #0A0A0A (media is the accent) | tight display sans, thin nav | apple.com · tesla.com · nike.com |
| 20 | Soft Render | dark canvas + purple/violet 3D renders. ink ≈ #0E0B14 · paper ≈ #14101C · accent ≈ #6E4BFF | elegant serif (italic on display ok here) + refined sans | metalab.com |

## Pairing suggestions (observed ↔ free/known equivalents)

Where the corpus names an exact font, use it only if licensed; otherwise substitute the nearest free sibling. Suggested swaps:

- **Condensed display** (Duotone Punch, Forest Confection): observed style "condensed/heavy" → **Archivo** (weight 800, semi-condensed width), **Oswald**, **Anton** (single weight).
- **Grotesk display** (Night Beam, Alpine Pop, Wordmark Wall): → **Space Grotesk**, **Archivo** (variable width axis), **Instrument Sans**.
- **Geometric tight tracking** (Purple Glow): → **Inter Tight**, **Geist** (nice — observed on vercel.com already, correctly tight-tracked).
- **Quiet serif** (Amber Apothecary, Film Reel, Soft Render): → **Fraunces** (optical-size axis), **Newsreader**, **Source Serif 4**.
- **Rounded/playful** (Playful Study): observed Nunito on bruno-simon.com and friendly product sans → **Nunito Sans**, **Kufam**, **Varela Round** for the mood only.
- **Neutral editorial sans** (Paper Grid, Doc First): → **Inter**, **Public Sans**, **Geist**.
- **Mono accents** (Mint Dev, Doc First): → **JetBrains Mono**, **Geist Mono**, **IBM Plex Mono**.

## Pairing rules

1. Max 2 families on a page (display + body), or 3 if the outlier is a single-wordmark use. Any 4th is a gate fail.
2. Serif body pairs slightly longer line lengths (~85ch) and a touch more line-height than sans.
3. Free fonts: Google Fonts is a safe umbrella; foundry display faces shown above are for study — confirm licenses before commercial use.

## Adding an identity (only after a live study)

When a `study` finds DNA that doesn't fit any row above, append a row using exactly this column shape and mark it with the source:

```
| 21 | <name> | <palette words + seed hexes> | <type pairing> | <source url> |
```

Rules: name is evocative, not generic ("Night Beam", not "Dark Mode"); seeds must be sampled from the live page, not guessed; then set the stamp to `identity=<name>` and note the addition in your reply so the change is reviewable.
