# Florals & Frames — Hindu Wedding Template

A premium Hindu wedding invitation website. It shares the technical foundation of the Florals & Frames Catholic template (Next.js, GSAP reveals, music provider, volume automation) but has its own design system, ornament library and section architecture.

## Demo couple
- Aarav Sharma & Meera Rathore
- 14 February 2027 · Jaipur, Rajasthan

## Experience
1. **Opening invitation**: emerald jaali doors with a split mandala and marigold toran; the doors part when the guest enters (with or without music)
2. **Hero**: शुभ विवाह invitation card with names, date cartouche and a slow mandala
3. **Couple intro**: jharokha-arch portraits (monogram or photo), parents' names and a short story
4. **Celebrations**: Haldi, Sangeet and Wedding cards with hand-drawn emblems, venue and dress code
5. **Mandap & Saptapadi**: illustrated mandap with sacred fire, plus the seven promises
6. **Venue**: venue card with directions and Google Calendar link, event itinerary and Jaipur chhatri skyline
7. **Countdown** to the muhurat
8. **Closing**: blessing, family sign-off and the Florals & Frames CTA

## Design system
- Palette: deep emerald, antique gold, saffron/marigold, cream (tokens in `app/hindu.css`)
- Type: Playfair Display (display), Marcellus (labels), Jost (body), Tiro Devanagari Hindi (Devanagari)
- Ornaments are inline SVG in `components/hindu/Ornaments.tsx`, so no image downloads are needed

## Performance
- Ambient motion (garland sway, flame flicker, mandala spin) is CSS transform/opacity only
- It is disabled for `prefers-reduced-motion` and on low-power devices (≤4 CPU cores, <4 GB memory or Data Saver), which get `html.h-lite`
- No backdrop-filter, video, WebGL or fixed blend-mode overlays on the Hindu page

## Main files
- `lib/hindu-site.ts`: all content (couple, families, events, venue, Saptapadi, music, studio details, calendar and WhatsApp links)
- `components/hindu/*`: section components and ornament library
- `app/hindu.css`: complete standalone stylesheet (no Tailwind)
- `app/layout.tsx`: fonts and metadata; `app/opengraph-image.tsx` / `icon.tsx`: share card and icons

## Media
- `public/hindu/groom.webp`, `public/hindu/bride.webp`: couple portraits, cropped to fit the arch and set in `hinduFamilies.*.photo`. Keep replacements about 560px wide as WebP (about 100 KB each). Leave `photo` empty to show the monogram instead.
- `public/images/*-hindu.png`: full-resolution originals of those portraits (not loaded by the site).
- `public/audio/music.mp3`: background music.

## Run
```bash
npm install
npm run dev
```

Background music is `/audio/music.mp3`; make sure you hold the rights to the track before publishing.
