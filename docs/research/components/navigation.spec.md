# Navigation Specification

## Overview
- Target file: `src/components/leadgravity-sections.tsx` (`Navigation` export)
- Screenshot: `docs/design-references/leadgravity-01-hero.png`
- Interaction model: sticky + mobile click menu

## Computed Styles
- Root: `height: 72px`, `position: sticky`, `z-index: 40`, `background: rgba(255,255,255,.9)`, `transition: 0.15s cubic-bezier(0.4,0,0.2,1)`.
- Inner container: `max-width: 1152px`, `padding: 0 24px`, centered.
- Row: `height: 72px`, `padding: 16px 0`, `display: flex`, `justify-content: space-between`.
- Logo text: `20px`, weight `700`, color `#1e293b`.
- Links: `14px`, weight `500`, color `#475569`.

## Behaviors
- Mobile hamburger toggles the hidden links.
- Hover links darken; CTA uses slate gradient.

## Text
- LeadGravity, Features, Pricing, FR, Sign In, Get Started.
