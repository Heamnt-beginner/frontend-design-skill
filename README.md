# signature — an OpenCode skill

Turn a one-line build request into an **evidence-tagged page shape + visual identity**, then enforce it mechanically. `signature` decides *what kind of page this is* and *what it should look like*; the [`frontend-design`](https://github.com/anthropics/skills) skill still owns the general craft rules — they layer, they never repeat.

Built from a Top-50 web-design corpus (50 curated sites with palette / typography / effects observations). Every shape and identity row carries its source evidence.

## What it does

1. **Shape pick** (< 6 min) — three page shapes derived from your domain, pick one, say why.
2. **Evidence** — open the 1–2 reference sites that anchor the shape, live, before building. No from-memory designing.
3. **Identity pick** — one of 20 built identities (palette + type pairing + evidence).
4. **Build** — tokens up top, identity-consistent structure, real content boundaries.
5. **20 mechanical gates** — grep-and-compute checks (overflow, grid tracks, CTA lines, reduced-motion, fabricated-fact ban, …). Taste stays with `frontend-design`; the gates stay mechanical.
6. **Taste pass** — screenshot the result, critique, fix.

The skill bans fabricated content by design: no invented metrics, reviews, prices or names — placeholder slots literally say *confirm*.

## Files

| Path | Purpose |
|---|---|
| `SKILL.md` | Core pipeline, verbs, maps, the 20 gates |
| `references/structures.md` | 10 page shapes + domain trios |
| `references/identities.md` | 20 identities (palette + type + evidence) |
| `examples/demo.html` | Full worked demo: "Meet India Journeys" Kerala travel page (Scroll Story × Forest Confection) — real photos with on-image CC attributions |
| `scripts/check-skill.js` | Validates SKILL.md + references (gate numbering, refs, identity shape counts) |

## Install (OpenCode)

Copy or clone this folder into your OpenCode skills directory:

```powershell
git clone https://github.com/Heamnt-beginner/signature-skill "$env:USERPROFILE\.config\opencode\skills\signature"
```

The repo root *is* the skill root, so the clone lands ready. In OpenCode it appears as the `signature` skill (slash: `/signature`). Requires the `frontend-design` skill next to it for the craft layer; `context7` MCP optional.

## Validate

```bash
node scripts/check-skill.js
```

## Status

Experimental — authored for personal use, published as-is. Gate list is small on purpose: it checks what a regex can check honestly.

## License

[MIT](LICENSE) — see the file for details.
