# LeadGravity Page Topology

Target: `https://leadgravity.ai/en/`

## Sections
1. Sticky nav, `72px` tall, overlays page flow with `position: sticky; top: 0; z-index: 40`.
2. Hero, `top: 72`, `height: 1245px`, centered copy and dashboard/comment/DM mockups.
3. Trusted-by logo strip, `height: 175px`, white background.
4. How it works, `id="how-it-works"`, `height: 640px`, gradient from page background to white.
5. Stats strip, `height: 200px`, dark slate background.
6. Features, `id="features"`, `height: 1565px`, 3-row card grid.
7. Security/compliance, `height: 662px`, centered two-column panel.
8. Pricing, white section, `height: 944px`, billing toggle and 3 cards.
9. FAQ, max-width layout, expanded first answer plus collapsed questions.
10. Testimonials, 6 card grid.
11. Final CTA, dark rounded card inside light page.
12. Footer, white with link columns and oversized clipped wordmark.

## Layout Model
- The page uses regular document flow with native scroll.
- Max widths: nav and pricing `1152px`; most wide sections `1280px`; hero copy `1040px`; dashboard mockup `960px`; how/stats/CTA card `1100px`; FAQ content `768px`.
- Mobile-first implementation should stack all grids and preserve generous vertical spacing.
- No external background images or videos are needed; visuals are CSS gradients, inline SVG icons, and downloaded logo/avatar images.

## Asset Folders
- Images: `public/images/leadgravity/`
- Partner logos: `public/images/leadgravity/partners/`
- SEO image: `public/seo/leadgravity/opengraph-image.png`

## Reference Screenshots
- Desktop full page: `docs/design-references/leadgravity-desktop-full.png`
- Mobile full page: `docs/design-references/leadgravity-mobile-full.png`
- Section references: `docs/design-references/leadgravity-01-hero.png` through `leadgravity-08-cta-footer.png`.
