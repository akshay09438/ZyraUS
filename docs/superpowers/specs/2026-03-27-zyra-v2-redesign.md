# Zyra Website — Redesign V2 Spec
**Date:** 2026-03-27
**Status:** Approved

---

## Overview

Full visual redesign of the Zyra website homepage. The design direction shifts from pure-black tech-company dark to deep cinematic blue-grey, with editorial serif typography, alternating dark/light section rhythm, and three new wow-moment sections. All SEO, metadata, and animation infrastructure is preserved.

---

## What Does NOT Change

- All metadata (`layout.tsx` SEO fields, OG tags, Twitter cards)
- `sitemap.ts`, `robots.ts`
- `CustomCursor` component
- `animations/index.tsx` — TextReveal, FadeInUp, StaggerContainer, MagneticButton, AnimatedCounter, etc.
- `Footer` layout and content
- `LeadForm` / Formspree integration
- All service pages, blog pages, work pages (only homepage sections change)
- EB Garamond stays as display font

---

## 1. Color Palette — `globals.css`

Replace entire `@theme` color block:

| Token | Old | New |
|---|---|---|
| `--color-bg-primary` | `#080808` | `#0D1117` |
| `--color-bg-secondary` | `#0E0E0E` | `#111827` |
| `--color-bg-elevated` | `#161616` | `#1C2333` |
| `--color-bg-hover` | `#1C1C1C` | `#1C2333` |
| `--color-accent` | `#FFFFFF` | `#E8433F` |
| `--color-accent-hover` | `#E8E8E8` | `#FF6561` |
| `--color-accent-glow` | `rgba(255,255,255,0.15)` | `rgba(232,67,63,0.35)` |
| `--color-text-primary` | `#FFFFFF` | `#F5F5F0` |
| `--color-text-secondary` | `#888888` | `#9BA3AF` |
| `--color-text-muted` | `#444444` | `#4B5563` |
| `--color-border` | `#1F1F1F` | `#1F2937` |
| `--color-border-light` | — | `#374151` (new) |
| `--color-gold` | — | `#C9A84C` (new) |

Add new keyframes:
- `orb-drift` — for ambient glow orbs (12–16s, translate + scale)
- `float` — already exists, keep as-is

Update `.section-label` color from `#555555` → `#C9A84C` (gold).

Update `html` and `body` background from `#080808` → `#0D1117`.

---

## 2. Typography — `layout.tsx`

Keep EB Garamond as `--font-display`. Switch body from Geist → **DM Sans**.

```typescript
import { EB_Garamond, DM_Sans } from 'next/font/google'
```

Remove the `@import` Google Fonts URL from `globals.css` (replaced by next/font).

Add `PageProgressBar` component render inside `RootLayout` (thin red sweep bar on page load).

---

## 3. HeroSection — full rewrite

File: `src/components/home/HeroSection.tsx`

**Changes from V1:**
- Background: `#080808` → `#0D1117`
- Video opacity: `0.28` → `0.55`
- Gradient overlays: add left-side fade (so left-aligned text pops), keep bottom fade
- Badge: white dot → gold dot (`#C9A84C`), label text color → gold
- CTAs: sharp rectangle → pill (`border-radius: 9999px`). Primary = white fill, secondary = outlined
- Scroll indicator: bottom-center vertical line (pulsing scaleY), not bottom-right ArrowDown
- Filmstrip: 3 thumbnail videos bottom-right (hidden on mobile)
- Floating particles: 20 white dots, CSS float animation, random positions
- Ambient orbs: 1 red + 1 teal radial gradient blob, `orb-drift` animation
- Remove CRT scanlines
- Remove corner frame brackets

---

## 4. New: `LetterMaskSection`

File: `src/components/home/LetterMaskSection.tsx`

**Implementation:** CSS `mix-blend-mode: multiply` approach.

- Background: `#F5F4F0` (light)
- "ZYRA" text: EB Garamond, `clamp(80px, 18vw, 200px)`, weight 900, color `#F5F4F0` (same as bg)
- Behind the text: a video (autoPlay, muted, loop) fills the container
- `mix-blend-mode: multiply` on the text → text color blends with bg color = transparent = video shows through
- Scroll-driven: scale `0.85→1` + opacity `0→1→1→0` via Framer Motion `useScroll`
- Tagline below: "AI Content Studio — India", DM Sans, small, spaced, muted

---

## 5. New: `MarqueeStrip`

File: `src/components/home/MarqueeStrip.tsx`

- Background: `#0D1117`, border-top + border-bottom `#1F2937`
- Scrolling text items: `['AI Brand Films', 'Micro Dramas', 'Performance Creatives', 'Social Content', 'India', 'OTT Quality', 'AI Native']`
- Separator: small red `#E8433F` dot between items
- Animation: `animate-marquee` (already defined in globals.css), doubled array for seamless loop
- Text: DM Sans, 11px, `tracking-[0.2em]`, uppercase, color `#4B5563`

---

## 6. `AntiAgencySection` — visual redesign to editorial light

File: `src/components/home/AntiAgencySection.tsx` (filename and export name unchanged)

**Changes:**
- Background: dark `#0E0E0E` → light `#F5F4F0`
- All text colors invert: headings → `#0D1117`, body → `#4B5563`, stats → `#0D1117`
- Divider line → `#E5E7EB`
- Stats unit color → `#E8433F` (red accent on light bg)
- Stat label color → `#9BA3AF`
- Remove `grain` class (grain doesn't work on light bg)
- Layout stays the same (2-column, large editorial statement left, stats right)

---

## 7. `ServicesSection` — redesign to poster grid

File: `src/components/home/ServicesSection.tsx` (filename and export name unchanged)

**Changes from V1 (2×2 bordered cards):**
- Cards become portrait poster ratio (`aspect-ratio: 2/3`)
- Video plays always (autoPlay, not hover-triggered) at reduced opacity, hover increases opacity
- No card borders — edge-to-edge within grid
- Title overlaid at bottom via absolute positioning + gradient
- Gold tag label at top-left (`#C9A84C`)
- Number label (`01`–`04`) in monospace above title
- Italic subtitle in muted color
- Arrow appears on hover (opacity transition, no x-translate needed)
- Grid: `grid-cols-4` on desktop, `grid-cols-2` on tablet, `grid-cols-1` on mobile, `gap-3`
- Section header: left-aligned, "Four Studios. One Roof." (update copy)

---

## 8. `WorkSection` — redesign to horizontal reel

File: `src/components/home/WorkSection.tsx` (filename and export name unchanged)

**Changes from V1 (bento grid):**
- Horizontal scroll driven by vertical scroll via Framer Motion `useScroll` + `useTransform`
- `x` transforms from `5%` → `-25%` as user scrolls past section
- Cards: `clamp(280px, 35vw, 480px)` wide, `aspect-ratio: 16/9`, `flex-shrink-0`
- Video autoPlay always, opacity 75% → 100% on hover
- Category + client label at bottom-left (gold + muted)
- Title: EB Garamond bold
- Metric: red `#E8433F`
- Section still uses existing `PROJECTS` data from `dummy-content.ts`
- `overflow: hidden` on section, no scrollbar

---

## 9. Navbar updates

File: `src/components/Navbar.tsx`

- CTA button: sharp rectangle → pill (`rounded-full`)
- Nav links: add text scramble on hover (useTextScramble hook, inline in file)
- Scrolled background: `#080808/90` → `#0D1117/90`

---

## 10. New: `PageTransition` + `PageProgressBar`

File: `src/components/PageTransition.tsx`

- `PageProgressBar`: fixed top, `h-[2px]`, `bg-[#E8433F]`, scaleX 0→1 on mount, z-index 9999
- `PageTransition`: wraps children, opacity+y fade in/out via Framer Motion
- Add `PageProgressBar` to `layout.tsx` (inside `<body>`, before `<Navbar>`)
- Wrap page `<main>` content with `PageTransition` in layout

---

## 11. Homepage composition — `page.tsx`

```tsx
<HeroSection />
<MarqueeStrip />
<LetterMaskSection />
<MarqueeStrip />          // second instance, same component
<AntiAgencySection />     // now EditorialSection (light bg)
<ServicesSection />       // now ServicesGrid (poster cards)
<WorkSection />           // now WorkReel (horizontal scroll)
<StatsSection />
<TestimonialsSection />
<BlogSection />
<CTASection />
```

---

## 12. Ambient orbs — `globals.css`

Add `.ambient-orb-red` and `.ambient-orb-teal` CSS classes used inside HeroSection:
- Red: 600px circle, `rgba(232,67,63,0.12)`, blur 40px, `orb-drift 12s`
- Teal: 400px circle, `rgba(45,212,191,0.08)`, blur 60px, `orb-drift 16s alternate-reverse`

---

## Section Background Rhythm

```
HeroSection        #0D1117  dark
MarqueeStrip       #0D1117  dark
LetterMaskSection  #F5F4F0  LIGHT
MarqueeStrip       #0D1117  dark
EditorialSection   #F5F4F0  LIGHT
ServicesGrid       #0D1117  dark
WorkReel           #0D1117  dark
StatsSection       #111827  mid
TestimonialsSection #0D1117 dark
BlogSection        #F5F4F0  LIGHT
CTASection         #161410  warm dark
Footer             #0A0C12  deepest
```

---

## Assets

All video sources remain the Google CDN dummy URLs from `dummy-content.ts`. No new video files required. Filmstrip thumbnails use the same showreel URL. LetterMaskSection uses `brandFilm` URL.

---

## 13. Remaining section background updates

Internal layout/content unchanged. Only the background color inline style updates:

- `StatsSection` — bg `#111827` (mid dark)
- `TestimonialsSection` — bg `#0D1117` (already matches, no change needed)
- `BlogSection` — bg `#F5F4F0` (light, editorial)
- `CTASection` — bg `#161410` (warm dark)

---

## Out of Scope

- Service/blog/work/about/contact/faq pages (unchanged)
- StatsSection, TestimonialsSection, BlogSection, CTASection internal content/layout
- Any backend/API changes
