# Pricing FAQ Testimonials Specification

## Overview
- Target file: `src/components/leadgravity-sections.tsx`
- Screenshots: `leadgravity-05-pricing.png`, `leadgravity-06-faq.png`, `leadgravity-07-testimonials.png`
- Interaction model: pricing click toggle; FAQ static; testimonial hover links

## Pricing Computed Styles
- Root: white background.
- Container: `max-width: 1152px`, `padding: 48px 32px` desktop.
- Grid: `grid-template-columns: 341.328px 341.336px 341.336px`, gap `32px`, height `568px`.
- Toggle wrapper: `height: 44px`, `display: flex`, `justify-content: center`.
- Default yearly prices: Starter `$32`, Pro `$49`, Pro Max `$99`; original monthly strike prices `$39/mo`, `$59/mo`, `$129/mo`.
- Monthly prices: `$39`, `$59`, `$129`.

## FAQ Computed Styles
- Section: `max-width: 1280px`, `padding: 80px 32px`.
- H2: `48px`, Poppins 700, line-height `48px`, color `#1e293b`.
- FAQ wrapper: `max-width: 768px`.
- First question expanded by default.

## Testimonials Computed Styles
- Section: `max-width: 1280px`, `padding: 80px 32px`.
- Grid: `md:grid-cols-2 lg:grid-cols-3`, desktop columns `389.33px`, gap `24px`.
- Cards: white, rounded `16px`, `border #e2e8f0`, `padding: 24px`, shadow hover and blue-tinted border hover.

## Assets
- Avatar images from `public/images/leadgravity/`.
