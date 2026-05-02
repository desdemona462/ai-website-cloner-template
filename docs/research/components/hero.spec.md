# Hero Specification

## Overview
- Target file: `src/components/leadgravity-sections.tsx` (`HeroSection` export)
- Screenshot: `docs/design-references/leadgravity-01-hero.png`
- Interaction model: static + CTA hover

## Computed Styles
- Root: `padding: 72px 24px 120px`, `height: 1245px`, `position: relative`, `overflow: hidden`.
- Glow background: radial gradients at `25% 30%`, `75% 20%`, `50% 70%` using `rgba(10,102,194,.2)`, `rgba(59,91,219,.16)`, `rgba(167,139,250,.1)`.
- Grid background: `linear-gradient(rgba(15,23,42,.05) 1px, transparent 1px)` and 90deg equivalent, size `56px 56px`.
- Content: `max-width: 1280px`; copy block `max-width: 1040px`, `margin-bottom: 60px`; mockup `max-width: 960px`.
- Heading: Poppins, desktop approx `80px`, tight line height, gradient on second line from `#0A66C2` to `#3B5BDB` to `#1e293b`.

## Text
- `+44,536 leads captured in 2 months`
- `Your Lead Magnets On Autopilot.`
- `Drop a keyword. Watch every LinkedIn comment turn into a DM, a reply, and a qualified lead while you sleep.`
- Dashboard, automations, lead magnet, post, DM, lead capture copy exactly as extracted.

## Responsive
- Desktop: centered copy above dashboard mockup.
- Mobile: smaller heading, mockup simplified/stacked, CTA buttons stack.
