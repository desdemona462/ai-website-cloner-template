# Content Sections Specification

## Overview
- Target file: `src/components/leadgravity-sections.tsx`
- Screenshots: `leadgravity-02-logos-how-stats.png`, `leadgravity-03-features-top.png`, `leadgravity-04-features-bottom-security.png`
- Interaction model: static sections with hover cards

## Key Computed Styles
- Trusted strip: white, container `max-width: 1280px`, `padding: 40px 24px`, flex gap `32px`.
- How it works: `padding: 96px 24px 80px`, background `linear-gradient(#F3F6F8, #fff)`, container `max-width: 1100px`, cards grid `grid-template-columns: 350.664px 350.664px 350.664px`, gap `24px`.
- Stats: `padding: 64px 24px`, background `#0f172a`, grid max `1100px`, 4 columns, gap `24px`.
- Features: `max-width: 1280px`, `padding: 120px 32px`; H2 `63.36px`, line-height `64.6272px`, Poppins 700; row grids 3 columns with `392px` cards and `20px` gap.
- Feature large card dark gradient: `linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0A66C2 180%)`, radius `22px`, shadow `0 30px 60px -20px rgba(15,23,42,.35)`.
- Security panel: `padding: 48px`, `grid-template-columns: 543px 543px`, gap `48px`, radius `24px`, border `#e2e8f0`, gradient `#fff` to `#f8fafc`.

## Text
- Use verbatim copy from live extraction for logos, three steps, stats, all feature cards, and security bullets/activity.

## Responsive
- All 3-column grids become 1 column on mobile; features can be 2 columns at tablet.
