# LeadGravity Behaviors

Target: `https://leadgravity.ai/en/`

## Global
- No Lenis, Locomotive Scroll, GSAP, or Framer runtime detected.
- Page uses native scrolling.
- Body background: `#F3F6F8`.
- Fonts detected: Poppins for headings/stats, system UI for body, Darker Grotesque for compact wordmark, Caveat for handwritten annotation, monospace for variable chips.

## Sticky Navigation
- Interaction model: sticky, mobile click-driven menu.
- Desktop state: `position: sticky`, `z-index: 40`, height `72px`, background `rgba(255,255,255,.9)`, transition `0.15s cubic-bezier(0.4,0,0.2,1)`, no scroll-state visual change detected.
- Mobile state: links are hidden initially; hamburger toggles `Features`, `Pricing`, `Sign In`, and `Get Started` below the top row.
- Hover states: links move from slate muted text to darker slate; CTA remains slate gradient with brightness/gradient hover.

## Hero
- Interaction model: static with hover CTAs and decorative CSS animation.
- Background: radial blue/purple glows plus `56px` grid lines masked behind content.
- Primary CTA includes shimmer sweep in the original via pseudo element.
- Secondary CTA is a white bordered button with play icon.

## Trusted Logos
- Interaction model: static.
- White strip, partner logos shown in muted grayscale/saturated brand assets.

## How It Works
- Interaction model: static.
- Three step cards in a desktop 3-column grid, stacked on mobile.
- Handwritten `Start here` annotation uses Caveat.

## Stats Strip
- Interaction model: static.
- Dark slate strip with radial brand-blue glows.
- Counters display `+0`, `+0`, `+0`, `<4 min`; no count-up animation was observed during sweep.

## Features
- Interaction model: static cards with hover lift/shadow only.
- Desktop: three columns per row inside `1216px`, `20px` gaps.
- Cards include complex dashboard/calendar/library/status mockups; all are CSS/HTML, no images/videos.

## Security
- Interaction model: static.
- Two-column card desktop; mobile stacks.
- Progress bars and status chips are decorative.

## Pricing
- Interaction model: click-driven billing toggle.
- Default state: yearly selected.
- Monthly state: Starter `$39`, Pro `$59`, Pro Max `$129`, no discount row.
- Yearly state: Starter `$32` with `$39/mo -20%`, Pro `$49` with `$59/mo -20%`, Pro Max `$99` with `$129/mo -20%`.
- Cards stack on mobile; desktop uses three columns.

## FAQ
- Interaction model: mostly static on observed page.
- First answer is expanded by default. Other questions are visible as collapsed rows in text, but no clickable accordion controls were exposed in the browser sweep.

## Testimonials
- Interaction model: hover on cards.
- Cards link out to LinkedIn/social URLs. Hover increases shadow and changes border toward brand blue.
- Desktop: `md:grid-cols-2 lg:grid-cols-3`.

## Final CTA
- Interaction model: static with hover CTA buttons and decorative background.
- Dark card uses particle dots plus SVG network/shooting lines.

## Footer
- Interaction model: link hover only.
- Giant bottom wordmark uses clipped gradient text: `176px` desktop, `110px` tablet, `56px` mobile.
