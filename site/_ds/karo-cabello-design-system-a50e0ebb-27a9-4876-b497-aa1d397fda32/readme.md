
# Karo Cabello — Design System

Karo Cabello ("Expertos en Alisados") is a hair-straightening salon founded by **Karina Osorno Piedrita** in 2018. This design system is built from the brand's own **Manual de Identidad Corporativa** PDF (`uploads/0. Manual de Identidad Karo Cabello.pdf`) — the only source provided. There is no Figma file, codebase, or slide deck attached; every token, color, and asset below was read directly from that manual (a flattened/image-based PDF — see Caveats).

Contact & handles found in the manual: Urb. Los Corales Manz. A Lote 19 · alisadoskarocabello@gmail.com · IG/TikTok @alisadoskarocabello(_) · 305 469 60 48.

## Sources
- `uploads/0. Manual de Identidad Karo Cabello.pdf` — original 13-page brand manual: cover, logo lockups on 6+ backgrounds, stationery (business cards), signage mockup, color/typography intent.
- `uploads/manual-v2.pdf` ("Manual de Identidad Karo Cabello (2)") — expanded 17-page revision adding: a green logo colorway, a personal business card for the founder (with IG/TikTok QR codes), a mobile landing-page copy/layout reference, and a closing brand statement/quote page. Pages were vector-flattened images with no selectable text/font data — see Caveats.

## Products / surfaces
Single product: the **Karo Cabello salon** itself. No app or multi-product portfolio exists in the source, so the one UI kit built here is a **salon marketing website** (`ui_kits/website/`) — the natural surface for a small beauty business (home, services, booking, contact) — since no other digital product was defined in the manual.

## Caveats — please read
- The manual's pages render as **flattened images with outlined/vector text** (extraction confirmed 0 real text characters across all 13 pages). Cover copy, section headers, and body copy were read visually from page renders, not copy-pasted — transcriptions should be double-checked against the original document.
- **No font files were provided.** Typography below is a Google Fonts substitution matched by eye to the manual's letterforms: **Playfair Display** (display serif, high-contrast, matches the "Karo Cabello" wordmark) and **Poppins** (geometric sans, matches the business-card body copy). Please supply the real brand fonts if you have them, and I will swap these out.
- Colors were sampled directly from pixels in the logo/collateral renders (not from a stated hex palette, since none was legible in the manual). They should be close but confirm against print specs (e.g. Pantone/CMYK) if this brand has them.
- No icon system, illustration style, or photography was present in the manual beyond the logo itself — see ICONOGRAPHY below.

## Content fundamentals
- **Tone**: refined, quiet luxury — small caps, generous letter-spacing, thin rules. Copy is minimal: the manual leans on the wordmark and one tagline rather than paragraphs of copy.
- **Tagline**: "Expertos en Alisados" (Experts in [hair] straightening) — always set in tracked-out small caps under the logotype.
- **Brand statement / sign-off**: "Hacemos que cada cabello encuentre su mejor versión." — an italic serif closing line used at the end of decks/documents, paired with a small hand-drawn smile/underline accent. See `guidelines/brand-statement.html`.
- **Landing-page copy pattern** (from the manual's own landing-page reference, `assets/landing-page-reference.png`): a single-column mobile structure — logo mark → bold serif headline making an emotional promise ("El alisado que cuida tu cabello, no lo sacrifica") → a proof-point subline ("+9 años de experiencia · +2.200 cabellos transformados") → one solid rectangular CTA button in tracked caps ("Agenda tu cita") → a 3-column value-prop row in small caps + one-line explainer (e.g. "Diagnóstico honesto — Evaluamos tu cabello antes de prometer resultados.") → a dark footer band with the white lockup + contact/social. CTAs are square-cornered solid-color rectangles, never pills.
- **Voice**: formal Spanish (usted-adjacent, no slang), no emoji anywhere in the manual.
- **Naming**: brand name is always "Karo Cabello", never abbreviated; founder credited by full name and role ("Karina Osorno Piedrita — Fundadora").

## Visual foundations
- **Color**: a warm, muted palette — ivory/cream page background (`--cream-200 #f1eae2`), a rose-copper/rose-gold accent (`--rose-copper-500 #c37d66`) used for the logo gradient and all accent marks, soft blush (`--blush-200 #e6d0c5`) and taupe (`--taupe-300 #c9bdad`) as secondary neutrals, and an espresso near-black (`--espresso-900 #251d1b`) for high-contrast lockups and primary text. A muted antique gold appears once, in the cover page's small-caps kicker.
- **Type**: serif display face (Playfair Display) set in true small caps or full caps with wide tracking for the logotype and headings; a plain geometric sans (Poppins) for body copy, contact details, and UI text. Headings favor caps + tracking over size alone.
- **Logo**: a monogram "K" (with a flowing five-strand "hair" motif trailing off the leg of the K) inside a thin circular ring, always paired with the "Karo Cabello / Expertos en Alisados" wordmark below it. The mark renders as a metallic rose-gold gradient on light backgrounds, and flat white on dark/terracotta backgrounds — never as flat black.
- **Backgrounds**: solid flat colors only (cream, blush, taupe, terracotta, espresso) — no photography, no gradients besides the logo's own metallic fill, no patterns or textures observed.
- **Cards / surfaces**: business card art uses a soft diagonal light-sheen gradient (paper-foil effect) with a thin hairline border and generous rounded corners (~24px) — the only rounded-corner treatment seen. Signage mockups use square-cornered framed panels.
- **Borders & dividers**: thin (~1px) hairline rules in the accent or muted brown, used under headings and to separate contact-detail blocks — never heavy or colored blocks.
- **Corners**: sharp/square by default (signage panels, cards in this system); the one exception is the personal business card, which is generously rounded (~24px).
- **Animation / hover / press**: not defined in the manual (static print collateral only). This system uses restrained conventions in that spirit: hover = shift to `--accent-hover`, press = shift to `--accent-active` plus a 1px translate, transitions kept to 150–200ms ease-out. No bounce, no heavy motion.
- **Transparency/blur**: none observed; avoid glassmorphism.
- **Imagery color vibe**: none in source (no photography present) — if photography is added later, keep it warm-neutral to match the palette; do not introduce cool/blue tones.

## Iconography
No icon font or SVG icon set appears in the manual — the only graphic marks are the wordmark/monogram and QR codes on both business cards (Instagram + TikTok, one QR per platform, rose-copper on cream, with the platform's own glyph inset at the QR's center). No emoji anywhere. No other icon system is defined; if UI needs simple glyphs (e.g. a booking form), a plain-line icon set in the accent color is the safest default, added only when actually needed.

## Fonts note
See Caveats — Playfair Display + Poppins are substitutions pending real brand font files.

## Logo files (official, provided directly)
Six official lockup exports now in `assets/` (superseding the earlier pixel-sampled crops for actual production use):
- `logo-ororosa-transparente.png` — rose-gold gradient mark + wordmark, transparent background (primary version).
- `logo-negro-transparente.png` — flat black mark + wordmark, transparent background.
- `logo-champan-tinta-ororosa.png` — rose-gold ink on champagne/cream background.
- `logo-blanco-tinta-ororosa.png` — rose-gold ink on pure white background.
- `logo-ororosa-tinta-blanca.png` — white ink on terracotta/rose-gold background.
- `logo-oscuro-tinta-blanca.png` — white ink on black background.
- `logo-verde-tinta-verde.png` — an alternate green colorway of the mark (v2 manual), for use where the brand needs a secondary/seasonal accent — not part of the core rose-copper identity.
See `guidelines/brand-logo-variations.html` for a side-by-side.

## Stationery
- `assets/letterhead-header.png` — the official document letterhead header (logo lockup left, "Karo Cabello" + address + phone/email right, on cream).
- `assets/letterhead-footer.png` — the matching footer band: italic display-serif tagline "Transformamos tu cabello, cuidando tu esencia." over the tracked-caps line "KAROCABELLO | CENTRO ESPECIALIZADO EN ALISADOS Y SALUD CAPILAR".
- Use both as the top/bottom bands of any printed document (invoices, treatment plans, etc.) — see `guidelines/brand-letterhead.html`. Note the new tagline variant ("Transformamos tu cabello, cuidando tu esencia.") alongside the manual's original "Expertos en Alisados".

## Index
- `styles.css` — root stylesheet (imports all tokens below)
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/` — logo lockups (cream / terracotta / espresso backgrounds) + isolated monogram
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Logo)
- `components/core/` — Button, Input, Select, Badge, Card
- `ui_kits/website/` — Karo Cabello salon marketing site (home, services, booking, contact)
- `SKILL.md` — portable skill file for use in Claude Code
