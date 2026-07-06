---
name: Azimuth North
description: Veteran-led consulting and AI implementation for small and mid-size business
colors:
  ink: "#12161d"
  ink-2: "#1a2029"
  paper: "#f2efe6"
  paper-2: "#eae6d8"
  brass: "#bf9b56"
  brass-dim: "rgba(191,155,86,.55)"
  mint: "#37d3b4"
  oxblood: "#a03325"
  sepia: "#5c503c"
  line: "rgba(46,38,26,.2)"
  line-dark: "rgba(242,239,230,.16)"
  parchment-accent: "#efe6d0"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(46px, 7.4vw, 100px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(36px, 4.8vw, 62px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.34em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  section: "130px"
  card-gap: "22px"
components:
  button-primary:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "18px 34px"
  button-primary-hover:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "18px 34px"
  field-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "38px 30px 42px"
---

# Design System: Azimuth North

## 1. Overview

**Creative North Star: "The Night Chart"**

A survey chart read by lamplight: midnight-ink paper, brass instrument lines, a wax-seal red for the one mark that matters. Every surface behaves like an old cartographer's field document rather than a software product screen — plates instead of sections, bearings instead of stats, field notes instead of testimonials. The system is disciplined and quiet at rest; it earns its warmth from specificity (an exact bearing, a named plate, a hand-drawn annotation) rather than from friendliness-coded color or copy.

It explicitly rejects the generic AI/SaaS-cream template (pastel warm-neutral backgrounds, rounded cards, gradient text), the cold corporate-consulting cliché (navy-suit stock photography, content-free polish), and the loud startup/gimmick register (neon, over-animation, disruption-coded visuals).

**Key Characteristics:**
- Flat, ink-and-paper surfaces — depth comes from contour-line texture and hover lift, never from soft shadows or glassmorphism
- One accent color (oxblood) used sparingly and only for the single primary action per view
- Brass is instrument detailing, not decoration: rules, ticks, borders, hover states
- Mono type is reserved for "instrument readout" language (labels, nav, buttons); serif display carries all voice and emotion
- Motion is a single coherent idea (the live contour terrain) rather than many competing effects

## 2. Colors

The palette reads as an antique survey chart under low light: near-black ink, warm brass instrumentation, and a single wax-seal red reserved for the one thing you should do next.

### Primary
- **Oxblood** (`#a03325`): The one call-to-action color. Solid-fill primary buttons, the compass needle tip, the "you are here" mark. Used on well under 10% of any given screen — its rarity is the point.

### Secondary
- **Brass** (`#bf9b56`): Instrument detailing — italic emphasis inside headlines, hover borders, tick marks, the compass rose, mono-label accents. The "heritage" metal of the system; never a background fill.

### Tertiary
- **Signal Mint** (`#37d3b4`): Reserved exclusively for "the AI layer" — live-data cues, the AI capability card, a live scan effect. Never used for anything else, so its rarity keeps its meaning legible (this is where the software is doing something).

### Neutral
- **Ink** (`#12161d`): Primary dark surface (hero, footer, dark sections) and primary text on paper.
- **Ink-2** (`#1a2029`): Secondary dark surface tone, used sparingly for depth within dark sections.
- **Paper** (`#f2efe6`): Primary light surface — warm off-white, never pastel-cream; reads as aged survey paper, not SaaS-neutral.
- **Paper-2** (`#eae6d8`): Secondary light surface for alternating section backgrounds (capabilities, library body).
- **Sepia** (`#5c503c`): Muted secondary text — captions, eyebrow labels on paper, "faded ink" annotations.
- **Line** (`rgba(46,38,26,.2)`): Borders and dividers on paper surfaces.
- **Line-dark** (`rgba(242,239,230,.16)`): Borders and dividers on ink surfaces.
- **Parchment-accent** (`#efe6d0`): A slightly warmer, more opaque paper tone than the base `paper` color, used at varying opacities for text and fine linework directly on ink surfaces (compass-rose accent strokes, footer text, nav links) — distinct from `paper` because it needs to read as "warm ink-on-page" rather than "background," even though it's built from the same family. Recurs frequently enough site-wide that it earns its own named token rather than being treated as drift.

### Named Rules
**The One Mark Rule.** Oxblood exists to mark exactly one thing per screen — the primary action. If two elements compete in oxblood on the same view, one of them is wrong.

**The Instrument-Not-Wallpaper Rule.** Brass is never a fill color for backgrounds or large surfaces. It is always a line, a border, a tick, or type — the metal an instrument is made of, not a paint color.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Space Grotesk (with system sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono

**Character:** A humanist serif with real personality (Fraunces' soft, slightly antique curves) paired against a clean geometric sans for body copy and a strict monospace for anything that reads as "instrument data" — the contrast axis is deliberate: warm/expressive display, neutral/legible body, mechanical/precise labels.

### Hierarchy
- **Display** (weight 500, `clamp(46px, 7.4vw, 100px)`, line-height 0.98): Hero H1 only. Italic weight-400 Fraunces spans are used inline for emotional emphasis (`<em>`), always in brass.
- **Headline** (weight 500, `clamp(36px, 4.8vw, 62px)`, line-height 1.05): Section H2 titles (`.title`).
- **Title** (weight 500, 21–29px): Card headings, article H2/H3, trust-card headings.
- **Body** (weight 400, 15.5–20px, line-height 1.6–1.75): Paragraph copy. Lede/standfirst copy runs larger (19–20px) and italic in Fraunces for pull-quote-style intros. Cap body line length at 65–75ch in long-form article prose.
- **Label** (weight 400, 10–13px, letter-spacing 0.14em–0.34em, uppercase): Nav links, buttons, plate eyebrows, HUD/mono readouts. Always IBM Plex Mono.

### Named Rules
**The Emphasis-Not-Volume Rule.** Emotional weight comes from switching to italic Fraunces mid-sentence (`<em>already</em>`), never from increasing size or adding color beyond brass.

## 4. Elevation

Flat by default — there is no soft ambient shadow vocabulary in this system. Depth is conveyed by (a) the live contour-line terrain texture reading as literal topographic elevation, and (b) a single warm, wide-spread hover shadow reserved for interactive cards, which reads as the card lifting off the paper rather than a UI convention.

### Shadow Vocabulary
- **Card-lift** (`box-shadow: 0 26px 48px -22px rgba(46,38,26,.4)`): The only shadow in the system. Appears solely on `:hover` for interactive cards (capabilities, library, insights, trust). Paired with a `translateY(-8px)` lift and a brass border materializing at the same time.

### Named Rules
**The Flat-Until-Touched Rule.** Every surface is flat at rest. Shadow appears only as a direct response to hover/interaction — never as ambient decoration on a static card.

## 5. Components

### Buttons
- **Shape:** Square corners, 2px radius (`rounded.sm`) — deliberately not soft; instrument-panel precision, not app-friendly rounding.
- **Primary (`.btn-solid`):** Oxblood fill, paper text, brass-dim outline offset 4px outside the border. On hover, a brass panel slides up from `translateY(101%)` to fill the button and text flips to ink — a literal "wax seal being pressed" motion, not a fade.
- **Ghost (`.btn-ghost`):** Transparent, paper text, `rgba(239,230,208,.35)` border. On hover, border and text shift to brass.
- **Hover motion:** All buttons are "magnetic" — they translate a few px toward the cursor within their own bounding box on mousemove, snapping back on mouseleave.

### Cards (`field-card` pattern: `.cap`, `.lib-card`, `.insight`, `.trust-card`)
- **Corner Style:** Square (0px radius) throughout — no exceptions.
- **Background:** Paper on paper-toned sections; a dedicated ink variant (`.cap-ai`) marks the one AI-specific capability card, using mint instead of oxblood accents.
- **Shadow Strategy:** None at rest; card-lift shadow + brass border + `translateY(-8px)` on hover (see Elevation).
- **Border:** 1px `line` at rest, brass on hover. Several card types add a second inset border (`inset:5px`) with its own hover color transition — an "engraved double-rule" detail, not a generic focus ring.
- **Internal Padding:** 34–42px vertical, 28–34px horizontal.

### Navigation
- Fixed-position, transparent at page top; gains an ink/85%-opacity + 14px backdrop-blur background and a hairline bottom border once the page scrolls past 60px.
- Label-style mono links, uppercase, 13–14px, 0.14em tracking; brass on hover/focus-visible.
- Primary nav CTA is a bordered button (not filled) — the one nav item that gets a persistent brass-dim outline-offset frame, distinguishing it as the single actionable item in the bar.
- Mobile (<760–900px): all links collapse except the CTA button, which remains.

### Signature Components
- **Compass rose mark:** The reused brand glyph (graduated bezel, cardinal/intercardinal points, north emphasized in brass with a paper accent). Appears in the nav brand mark (rotating 47°→scroll-progress on scroll), the footer, and formerly a rotating expedition seal (retired — see Do's and Don'ts).
- **Live contour terrain (`#terrain` canvas):** Marching-squares topographic line field, brass strokes, redrawing continuously and warping toward the cursor. The system's one deliberate motion signature; every other decorative animation has been removed from the hero specifically so this one reads clearly.
- **Engraved keyword band:** A static (non-scrolling) horizontal strip on the ink background listing the five-stage process keywords (Map ◆ Fit ◆ Connect ◆ Visualize ◆ Sustain) in tracked small-caps Fraunces, framed by two hairline brass rules.

## 6. Do's and Don'ts

### Do:
- **Do** keep oxblood to one primary action per screen (The One Mark Rule).
- **Do** use square corners (0–2px radius) on every surface — buttons, cards, inputs alike.
- **Do** let the live terrain canvas be the only ambient motion on the hero; anything else competing for attention there gets cut, not dimmed.
- **Do** reserve signal mint exclusively for AI/live-data moments so its meaning stays legible.
- **Do** honor `prefers-reduced-motion` on every animation, including the preloader and reveal choreography.

### Don't:
- **Don't** introduce a generic AI/SaaS-cream template: pastel warm-neutral backgrounds, rounded (>2px) cards, or gradient text (`background-clip: text`) anywhere in this system.
- **Don't** add cold corporate-consulting stock imagery (navy suits, handshake photography) — every visual must trace back to the cartography/survey metaphor.
- **Don't** add loud startup/gimmick effects (neon glows, elastic/bounce easing, glassmorphism-as-decoration).
- **Don't** add ambient box-shadows to static, non-interactive elements — this system's only shadow is the hover-triggered card-lift.
- **Don't** stack multiple independent motion ideas in one view (a prior version had a mint scan sweep, a spinning seal, and the terrain running simultaneously; it was cut back to the terrain alone and should stay that way).
- **Don't** treat the "Plate N" section eyebrow as a free-floating decorative default — it's currently applied to every major section as a numbered label (Plate I–V), which is close to the banned "numbered-eyebrow-as-scaffolding" pattern. It earns its place here only because it's one committed, load-bearing device inside a single coherent "antique survey atlas" narrative used consistently site-wide — not a generic landing-page tic. If that narrative commitment ever wavers, this pattern should be reconsidered rather than kept by default.
