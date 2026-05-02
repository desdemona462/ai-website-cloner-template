# CTA Footer Specification

## Overview
- Target file: `src/components/leadgravity-sections.tsx`
- Screenshot: `docs/design-references/leadgravity-08-cta-footer.png`
- Interaction model: static + button/link hover

## CTA Computed Styles
- Section: `padding: 96px 24px`.
- Card: `max-width: 1100px`, `padding: 80px 48px`, background `#0a0f1c`, `border-radius: 28px`, `box-shadow: 0 30px 60px -20px rgba(15,23,42,.45)`, `position: relative`, `overflow: hidden`.
- Decorative layers: 80 particle dots plus SVG line overlay in original; approximate with CSS dots and SVG paths.
- Text: `READY WHEN YOU ARE`, `Your Next Lead is One Comment Away.`, `Set up your first automation in under 4 minutes. 7 days free.`

## Footer Computed Styles
- Root: white, border-top `#e2e8f0`, `margin-top: 80px`.
- Container: `max-width: 1280px`, `padding: 64px 32px 32px`.
- Grid: desktop 4 columns, gap `64px`.
- Giant wordmark: `font-size: 176px`, Poppins 600, line-height `176px`, gradient text from `#e2e8f0` to white, clipped inside `height: 140px`.

## Text
- Footer columns: Navigation, Contact, Legal with verbatim links.
