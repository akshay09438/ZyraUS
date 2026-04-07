# Zyra V2 Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Zyra homepage from pure-black tech-dark to deep cinematic blue-grey with editorial typography, alternating dark/light section rhythm, and three new wow-moment components.

**Architecture:** Update the Tailwind v4 `@theme` color tokens in `globals.css` first (everything else inherits from these), then update fonts in `layout.tsx` via `next/font`, then rewrite/create components one-by-one from top-level outward, finishing with `page.tsx` composition.

**Tech Stack:** Next.js 16.2.1, Tailwind CSS v4 (`@theme` in globals.css), Framer Motion 12, TypeScript, `next/font/google`

---

## File Map

| Action | File |
|---|---|
| Modify | `src/app/globals.css` |
| Modify | `src/app/layout.tsx` |
| Modify | `src/app/page.tsx` |
| Create | `src/components/PageTransition.tsx` |
| Modify | `src/components/Navbar.tsx` |
| Modify | `src/components/home/HeroSection.tsx` |
| Create | `src/components/home/LetterMaskSection.tsx` |
| Create | `src/components/home/MarqueeStrip.tsx` |
| Modify | `src/components/home/AntiAgencySection.tsx` |
| Modify | `src/components/home/ServicesSection.tsx` |
| Modify | `src/components/home/WorkSection.tsx` |
| Modify | `src/components/home/StatsSection.tsx` |
| Modify | `src/components/home/BlogSection.tsx` |
| Modify | `src/components/home/CTASection.tsx` |

---

## Task 1: Update color palette and animations in globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the `@import` font URL and `@theme` color block**

Replace the entire top of `globals.css` (from line 1 through the closing `}` of `@theme`) with:

```css
@import "tailwindcss";

@theme {
  /* ── Backgrounds — deep cinematic blue-grey ── */
  --color-bg-primary:   #0D1117;
  --color-bg-secondary: #111827;
  --color-bg-elevated:  #1C2333;
  --color-bg-hover:     #1C2333;

  /* ── Accent: red system ── */
  --color-accent:       #E8433F;
  --color-accent-hover: #FF6561;
  --color-accent-muted: rgba(232,67,63,0.12);
  --color-accent-glow:  rgba(232,67,63,0.35);

  /* ── Text ── */
  --color-text-primary:   #F5F5F0;
  --color-text-secondary: #9BA3AF;
  --color-text-muted:     #4B5563;

  /* ── Borders ── */
  --color-border:        #1F2937;
  --color-border-accent: #F5F5F0;
  --color-border-light:  #374151;

  /* ── New: gold and teal ── */
  --color-gold:          #C9A84C;
  --color-teal:          #2DD4BF;

  /* ── Fonts ── */
  --font-display: 'EB Garamond', Georgia, serif;
  --font-body:    'DM Sans', sans-serif;

  /* ── Fluid type scale ── */
  --text-hero:    clamp(56px, 9vw, 130px);
  --text-display: clamp(38px, 5.5vw, 86px);
  --text-heading: clamp(28px, 3.5vw, 56px);
  --text-title:   clamp(20px, 2.5vw, 36px);
  --text-label:   11px;

  /* ── Animations ── */
  --animate-grain:      grain 0.5s steps(1) infinite;
  --animate-marquee:    marquee 30s linear infinite;
  --animate-shimmer:    shimmer 3s ease-in-out infinite;
  --animate-float:      float 6s ease-in-out infinite;
  --animate-orb-drift:  orb-drift 12s ease-in-out infinite alternate;

  @keyframes grain {
    0%,100% { transform: translate(0,0); }
    10%     { transform: translate(-2%,-3%); }
    20%     { transform: translate(3%,1%); }
    30%     { transform: translate(-1%,4%); }
    40%     { transform: translate(2%,-2%); }
    50%     { transform: translate(-3%,3%); }
    60%     { transform: translate(1%,-1%); }
    70%     { transform: translate(-2%,2%); }
    80%     { transform: translate(3%,-3%); }
    90%     { transform: translate(-1%,1%); }
  }

  @keyframes marquee {
    0%   { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  @keyframes shimmer {
    0%,100% { background-position: 0% 50%; }
    50%     { background-position: 100% 50%; }
  }

  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50%     { transform: translateY(-10px); }
  }

  @keyframes orb-drift {
    0%   { transform: translate(0, 0) scale(1); }
    33%  { transform: translate(60px, -40px) scale(1.1); }
    66%  { transform: translate(-40px, 50px) scale(0.95); }
    100% { transform: translate(30px, -20px) scale(1.05); }
  }

  @keyframes line-grow {
    0%   { scaleX: 0; }
    100% { scaleX: 1; }
  }
}
```

- [ ] **Step 2: Update `@layer base` backgrounds and selection**

Find the `@layer base` block and update:

```css
@layer base {
  * { box-sizing: border-box; margin: 0; padding: 0; }

  html {
    background-color: #0D1117;
    color: #F5F5F0;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #0D1117;
    min-height: 100vh;
    overflow-x: hidden;
  }

  ::selection { background: #F5F5F0; color: #0D1117; }

  ::-webkit-scrollbar { width: 1px; }
  ::-webkit-scrollbar-track { background: #0D1117; }
  ::-webkit-scrollbar-thumb { background: #1F2937; }
}
```

- [ ] **Step 3: Update `.section-label` and add ambient orb classes in `@layer components`**

Find `.section-label` and update its color. Then add the two orb classes at the end of the `@layer components` block:

```css
/* Section label — gold */
.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C9A84C;
}
```

Add these at the end of `@layer components`:

```css
/* Ambient orbs — used in HeroSection */
.ambient-orb-red {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,67,63,0.12) 0%, transparent 70%);
  filter: blur(40px);
  animation: orb-drift 12s ease-in-out infinite alternate;
  pointer-events: none;
}

.ambient-orb-teal {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%);
  filter: blur(60px);
  animation: orb-drift 16s ease-in-out infinite alternate-reverse;
  pointer-events: none;
}
```

- [ ] **Step 4: Verify dev server shows updated background**

Open http://localhost:3000 — the page background should shift from near-black to deep blue-grey (`#0D1117`). The difference is subtle but visible.

- [ ] **Step 5: Commit**

```bash
cd /c/Users/Akshay/zyra-website
git add src/app/globals.css
git commit -m "style: update color palette to V2 cinematic blue-grey system"
```

---

## Task 2: Switch body font to DM Sans via next/font

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx with font-updated version**

```typescript
import type { Metadata } from 'next'
import { EB_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/animations'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zyra — AI Content Studio | Where AI Meets Cinematic Storytelling',
  description:
    "India's premier AI Content Studio. Brand films, micro dramas, performance creatives & social content — OTT-level quality at the speed of culture.",
  metadataBase: new URL('https://www.thezyra.in'),
  openGraph: {
    title: 'Zyra — AI Content Studio',
    description:
      "India's premier AI Content Studio. OTT-level quality at the speed of culture.",
    url: 'https://www.thezyra.in',
    siteName: 'Zyra',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyra — AI Content Studio',
    description: "India's premier AI Content Studio.",
    images: ['/assets/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${dmSans.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /c/Users/Akshay/zyra-website
npx tsc --noEmit
```

Expected: no errors. If you see "Module not found" for `next/font/google`, verify `next` version is ≥13 (it's 16.2.1, so fine).

- [ ] **Step 3: Verify font loads in browser**

Open http://localhost:3000 — body text (nav links, paragraph text) should now render in DM Sans (a rounded geometric sans-serif) instead of Geist. Compare a nav link — it should look slightly rounder/warmer.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "style: switch body font to DM Sans via next/font"
```

---

## Task 3: Create PageProgressBar and PageTransition components

**Files:**
- Create: `src/components/PageTransition.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create PageTransition.tsx**

```typescript
'use client'

import { motion } from 'framer-motion'

export function PageProgressBar() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{ backgroundColor: '#E8433F' }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Add PageProgressBar to layout.tsx**

In `src/app/layout.tsx`, add the import and place `<PageProgressBar />` before `<CustomCursor />` in the body:

```typescript
import { PageProgressBar } from '@/components/PageTransition'
```

Update the `<body>` content:

```tsx
<body className="bg-bg-primary text-text-primary antialiased">
  <PageProgressBar />
  <CustomCursor />
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
```

- [ ] **Step 3: Verify in browser**

Refresh http://localhost:3000 — you should see a thin red line sweep across the top of the page from left to right on load.

- [ ] **Step 4: Commit**

```bash
git add src/components/PageTransition.tsx src/app/layout.tsx
git commit -m "feat: add PageProgressBar (red sweep line on page load)"
```

---

## Task 4: Rewrite HeroSection

**Files:**
- Modify: `src/components/home/HeroSection.tsx`

- [ ] **Step 1: Replace HeroSection.tsx entirely**

```typescript
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'
import { DUMMY_VIDEOS } from '@/lib/dummy-content'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 60])

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[680px] overflow-hidden"
      style={{ background: '#0D1117' }}
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          autoPlay muted loop playsInline preload="auto"
          poster={DUMMY_VIDEOS.poster}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        >
          <source src={DUMMY_VIDEOS.showreel} type="video/mp4" />
        </video>

        {/* Cinematic color grade */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(13,17,23,0.3) 0%, rgba(45,212,191,0.03) 100%)' }}
        />

        {/* Bottom fade — text area readable */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3"
          style={{ background: 'linear-gradient(to top, #0D1117 0%, rgba(13,17,23,0.7) 50%, transparent 100%)' }}
        />

        {/* Left fade — left-aligned text pops */}
        <div
          className="absolute inset-y-0 left-0 w-2/3"
          style={{ background: 'linear-gradient(to right, rgba(13,17,23,0.65) 0%, transparent 100%)' }}
        />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient orbs */}
        <div className="ambient-orb-red" style={{ top: '15%', left: '55%' }} />
        <div className="ambient-orb-teal" style={{ top: '55%', left: '15%' }} />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white"
            style={{
              left: `${(i * 17 + 7) % 100}%`,
              top: `${(i * 23 + 11) % 100}%`,
              opacity: 0.08 + (i % 3) * 0.07,
              animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.7) % 5}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content — left aligned, bottom anchored ── */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-5xl"
        style={{ opacity, y }}
      >
        {/* Badge */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT_EXPO }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
          <span className="section-label">India's AI Content Studio</span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display font-bold text-[#F5F5F0] leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT_EXPO }}
          >
            Where <em className="font-display italic font-normal">AI</em> Meets<br />
            Cinematic Storytelling
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          className="font-body text-[#9BA3AF] text-base md:text-lg max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE_OUT_EXPO }}
        >
          Brand films. Micro dramas. Performance creatives.<br />
          OTT-level quality at the speed of culture.
        </motion.p>

        {/* Pill CTAs */}
        <motion.div
          className="flex items-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE_OUT_EXPO }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-white text-[#0D1117] font-body text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#F5F5F0] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            <Play size={13} className="fill-current" />
            See Our Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-body text-sm font-medium px-7 py-3.5 rounded-full backdrop-blur-sm hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Start a Project
            <ArrowRight size={13} />
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Filmstrip — bottom right (desktop only) ── */}
      <motion.div
        className="absolute bottom-8 right-8 z-30 hidden md:flex gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: EASE_OUT_EXPO }}
      >
        {[DUMMY_VIDEOS.brandFilm, DUMMY_VIDEOS.microDrama, DUMMY_VIDEOS.adCreatives].map((src, i) => (
          <div
            key={i}
            className="w-16 h-10 rounded-sm overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-300 cursor-pointer hover:scale-110"
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70">
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </motion.div>

      {/* ── Scroll indicator — pulsing vertical line ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ scaleY: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto origin-top"
        />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000. Check:
- Video is clearly visible (not the faint ghost it was in V1)
- Text is left-aligned, anchored to the bottom
- Gold dot badge
- Pill-shaped CTA buttons
- 3 small filmstrip thumbnails appear bottom-right on desktop
- Pulsing line indicator at bottom-center
- Red and teal ambient glows faintly visible in background

- [ ] **Step 3: Commit**

```bash
git add src/components/home/HeroSection.tsx
git commit -m "feat: rewrite HeroSection — V2 cinematic redesign"
```

---

## Task 5: Create LetterMaskSection (ZYRA video-through-letters)

**Files:**
- Create: `src/components/home/LetterMaskSection.tsx`

- [ ] **Step 1: Create LetterMaskSection.tsx**

Uses SVG `clipPath` + `foreignObject` to show video only inside the letter shapes. The section has a light background — the letters are the only "windows" to the video.

```typescript
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DUMMY_VIDEOS } from '@/lib/dummy-content'

export function LetterMaskSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32"
      style={{ background: '#F5F4F0' }}
    >
      <motion.div className="w-full flex flex-col items-center" style={{ scale, opacity }}>

        {/* SVG clip-path letter mask — video shows ONLY inside letters */}
        <div className="w-full max-w-6xl px-4 mx-auto">
          <svg
            viewBox="0 0 1000 220"
            className="w-full"
            style={{ height: 'clamp(120px, 22vw, 260px)' }}
            aria-label="ZYRA"
          >
            <defs>
              <clipPath id="zyra-letters">
                <text
                  x="50%"
                  y="84%"
                  textAnchor="middle"
                  fontFamily="'EB Garamond', Georgia, serif"
                  fontWeight="900"
                  fontSize="210"
                  letterSpacing="-6"
                >
                  ZYRA
                </text>
              </clipPath>
            </defs>

            <g clipPath="url(#zyra-letters)">
              {/* Full-width video — only visible inside the letter clip */}
              <foreignObject x="0" y="0" width="1000" height="220">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore — xmlns required for foreignObject content */}
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                  <video
                    autoPlay muted loop playsInline
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  >
                    <source src={DUMMY_VIDEOS.brandFilm} type="video/mp4" />
                  </video>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>

        {/* Tagline */}
        <motion.p
          className="font-body text-[#9BA3AF] mt-6 text-[11px] tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          AI Content Studio — India
        </motion.p>

      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser (after adding to page.tsx in Task 12)**

The giant "ZYRA" letters should appear on a cream/light background with video playing inside the letter shapes. If the SVG text font doesn't match EB Garamond exactly (web font may not load inside SVG in all browsers), the letters still display correctly in a system serif — acceptably close.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/LetterMaskSection.tsx
git commit -m "feat: add LetterMaskSection — video-through-ZYRA-letters wow moment"
```

---

## Task 6: Create MarqueeStrip

**Files:**
- Create: `src/components/home/MarqueeStrip.tsx`

- [ ] **Step 1: Create MarqueeStrip.tsx**

```typescript
const ITEMS = [
  'AI Brand Films',
  'Micro Dramas',
  'Performance Creatives',
  'Social Content',
  'India',
  'OTT Quality',
  'AI Native',
]

export function MarqueeStrip() {
  return (
    <div
      className="py-4 border-y border-[#1F2937] overflow-hidden"
      style={{ background: '#0D1117' }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((text, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-6">
            <span className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-[#4B5563]">
              {text}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#E8433F] opacity-60" />
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/home/MarqueeStrip.tsx
git commit -m "feat: add MarqueeStrip — scrolling text divider between sections"
```

---

## Task 7: Redesign AntiAgencySection to light editorial

**Files:**
- Modify: `src/components/home/AntiAgencySection.tsx`

- [ ] **Step 1: Replace AntiAgencySection.tsx**

Key changes: light `#F5F4F0` background, inverted text colors (dark on light), stats unit → red, stat label → muted, divider → light grey, remove `grain` class.

```typescript
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TextReveal, FadeInUp, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

const DIFFERENTIATORS = [
  { metric: '2',    unit: 'Weeks',   label: 'Average delivery time' },
  { metric: '50+',  unit: 'Variants', label: 'Ad variants per campaign' },
  { metric: '70%',  unit: 'Savings', label: 'Cost vs. traditional production' },
]

export function AntiAgencySection() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden py-28 md:py-40" style={{ background: '#F5F4F0' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Large editorial statement */}
        <div className="mb-20 md:mb-28">
          <TextReveal
            text="Not an agency."
            className="font-display font-bold text-display text-[#0D1117]/20 leading-[0.95] tracking-[-0.03em]"
            stagger={0.1}
          />
          <div ref={lineRef} className="my-6 md:my-8">
            <motion.div
              className="h-px origin-left"
              style={{ background: '#E5E7EB' }}
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT_EXPO }}
            />
          </div>
          <TextReveal
            text="A studio."
            className="font-display font-bold text-display text-[#0D1117] leading-[0.95] tracking-[-0.03em]"
            delay={0.15}
            stagger={0.1}
          />
        </div>

        {/* Split layout: copy left, stats right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <FadeInUp delay={0.1}>
            <p className="font-body text-lg leading-[1.8] max-w-sm" style={{ color: '#4B5563' }}>
              Agencies manage timelines. Studios obsess over frames.
              We operate with the precision of a tech company and
              the soul of a film collective.
            </p>
            <p className="font-body text-lg leading-[1.8] max-w-sm mt-4" style={{ color: '#9BA3AF' }}>
              OTT-level content, delivered at the speed of culture.
            </p>
          </FadeInUp>

          <StaggerContainer className="flex flex-col gap-8">
            {DIFFERENTIATORS.map(({ metric, unit, label }) => (
              <StaggerItem key={label} variants={staggerItemVariants}>
                <div className="flex items-baseline gap-3 pb-8 last:border-0 border-b" style={{ borderColor: '#E5E7EB' }}>
                  <span
                    className="font-display font-bold leading-none"
                    style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: '#0D1117' }}
                  >
                    {metric}
                  </span>
                  <span className="font-display text-2xl md:text-3xl leading-none" style={{ color: '#E8433F' }}>
                    {unit}
                  </span>
                  <span className="font-body text-xs uppercase tracking-[0.15em] ml-auto hidden md:block" style={{ color: '#9BA3AF' }}>
                    {label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  )
}
```

> **Note on TextReveal:** `TextReveal` accepts `className` but uses it on the wrapper div, not the inner span. The `style` prop is passed directly to the outer div here to override text color. If colors don't apply, add `color` directly in `className` using Tailwind arbitrary values like `text-[#0D1117]`.

- [ ] **Step 2: Verify in browser**

Scroll to the AntiAgency section. It should be a clean white/cream background with dark text — a strong contrast from the dark hero above. The stats should show dark numbers, red units (Weeks / Variants / Savings), and muted grey labels.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/AntiAgencySection.tsx
git commit -m "feat: redesign AntiAgencySection to editorial light background"
```

---

## Task 8: Redesign ServicesSection to poster grid

**Files:**
- Modify: `src/components/home/ServicesSection.tsx`

- [ ] **Step 1: Replace ServicesSection.tsx**

```typescript
'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FadeInUp } from '@/components/animations'
import { SERVICES } from '@/lib/dummy-content'

const CARD_META = [
  { num: '01', tag: 'OTT-Level Production',    subtitle: '& Commercials' },
  { num: '02', tag: 'Episodic Storytelling',   subtitle: 'Production' },
  { num: '03', tag: '50+ Variants / Campaign', subtitle: 'Creatives' },
  { num: '04', tag: '20+ Pieces / Week',       subtitle: 'Content Engine' },
]

const TITLE_PARTS = ['AI Brand Films', 'Micro Drama', 'Performance', 'Social Media']

function PosterCard({
  service,
  index,
}: {
  service: typeof SERVICES[number]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { num, tag, subtitle } = CARD_META[index]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={service.href}
        className="group block relative overflow-hidden"
        style={{ aspectRatio: '2/3' }}
        onMouseEnter={() => {
          setHovered(true)
          videoRef.current?.play().catch(() => {})
        }}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
          style={{
            opacity: hovered ? 0.9 : 0.45,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <source src={service.video} type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(to top, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.2) 50%, transparent 100%)',
          }}
        />

        {/* Top label */}
        <div className="absolute top-4 left-4">
          <span className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-[#C9A84C]">
            {tag}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="font-mono text-[#4B5563] text-xs mb-1 block">{num}</span>
          <h3 className="font-display font-bold text-xl text-white leading-tight">
            {TITLE_PARTS[index]}
            <br />
            <span className="font-display font-normal italic text-[#9BA3AF]">{subtitle}</span>
          </h3>
          <motion.div
            className="flex items-center gap-1 mt-3 font-body text-[#E8433F] text-xs font-medium"
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
            transition={{ duration: 0.3 }}
          >
            Explore <ArrowUpRight size={12} />
          </motion.div>
        </div>

        {/* Hover border */}
        <div
          className="absolute inset-0 border transition-all duration-500"
          style={{ borderColor: hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0)' }}
        />
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: '#0D1117' }}>
      <FadeInUp className="flex items-end justify-between mb-12">
        <div>
          <span className="section-label block mb-3">What We Create</span>
          <h2
            className="font-display font-bold text-[#F5F5F0] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
          >
            Four Studios.<br />One Roof.
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden md:flex items-center gap-2 font-body text-sm text-[#9BA3AF] hover:text-white transition-colors duration-300"
        >
          View all work <ArrowUpRight size={14} />
        </Link>
      </FadeInUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {SERVICES.map((service, i) => (
          <PosterCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Scroll to Services. You should see 4 portrait poster cards (taller than wide) in a 4-column grid on desktop, 2-column on tablet. Each card shows a video at ~45% opacity with title overlaid at the bottom. Hover a card — video brightens and scales slightly.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ServicesSection.tsx
git commit -m "feat: redesign ServicesSection to PhantomX-style poster grid"
```

---

## Task 9: Redesign WorkSection to horizontal scroll reel

**Files:**
- Modify: `src/components/home/WorkSection.tsx`

- [ ] **Step 1: Replace WorkSection.tsx**

```typescript
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FadeInUp } from '@/components/animations'
import { PROJECTS } from '@/lib/dummy-content'

function ReelCard({ project }: { project: typeof PROJECTS[number] }) {
  return (
    <motion.div
      className="relative flex-shrink-0 overflow-hidden cursor-pointer group"
      style={{ width: 'clamp(280px, 35vw, 480px)', aspectRatio: '16/9' }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <video
        autoPlay muted loop playsInline
        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-100"
        style={{ opacity: 0.75 }}
      >
        <source src={project.video} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 60%)' }}
      />

      <div className="absolute bottom-0 left-0 p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-body text-[10px] uppercase tracking-widest text-[#C9A84C]">
            {project.category}
          </span>
          <span className="font-body text-[10px] text-[#4B5563]">—</span>
          <span className="font-body text-[10px] text-[#4B5563]">{project.client}</span>
        </div>
        <Link href={`/work/${project.id}`}>
          <h3 className="font-display font-bold text-lg text-white hover:text-white/70 transition-colors duration-300">
            {project.title}
          </h3>
        </Link>
        <span className="font-body text-sm font-medium text-[#E8433F]">{project.metric}</span>
      </div>
    </motion.div>
  )
}

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-25%'])

  return (
    <section ref={containerRef} className="py-24 overflow-hidden" style={{ background: '#0D1117' }}>
      <FadeInUp className="px-8 md:px-20 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="section-label block mb-3">Selected Work</span>
            <h2
              className="font-display font-bold text-[#F5F5F0] tracking-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
            >
              Recent Productions
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 font-body text-sm text-[#9BA3AF] hover:text-white transition-colors duration-300"
          >
            View all <ArrowUpRight size={14} />
          </Link>
        </div>
      </FadeInUp>

      {/* Horizontal scroll driven by vertical scroll */}
      <motion.div className="flex gap-4 pl-8 md:pl-20" style={{ x }}>
        {PROJECTS.map((project) => (
          <ReelCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Scroll through the Work section. The three project cards should drift horizontally as you scroll down — moving from right to left. Each card shows the project video, category in gold, metric in red.

- [ ] **Step 3: Commit**

```bash
git add src/components/home/WorkSection.tsx
git commit -m "feat: redesign WorkSection to scroll-driven horizontal reel"
```

---

## Task 10: Update Navbar — pill CTA + text scramble

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add useTextScramble hook and ScrambleLink component at top of Navbar.tsx (before Navbar function)**

Add these after the imports, before `export function Navbar()`:

```typescript
import React, { useState, useEffect } from 'react'

function useTextScramble(text: string, isHovering: boolean): string {
  const [displayText, setDisplayText] = useState(text)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text)
      return
    }
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, i) =>
            i < iteration ? char : chars[Math.floor(Math.random() * chars.length)]
          )
          .join('')
      )
      if (iteration >= text.length) clearInterval(interval)
      iteration += 0.4
    }, 30)
    return () => clearInterval(interval)
  }, [isHovering, text])

  return displayText
}

function ScrambleLink({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) {
  const [isHovering, setIsHovering] = useState(false)
  const displayText = useTextScramble(label, isHovering)

  return (
    <Link
      href={href}
      className="relative font-body text-[13px] text-white/40 hover:text-white transition-colors duration-400 group tracking-wide"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-white/60 transition-all duration-400 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  )
}
```

- [ ] **Step 2: Update desktop nav links and CTA button in the Navbar JSX**

Find the desktop links section (the `hidden md:flex` div) and replace:

```tsx
{/* Desktop links */}
<div className="hidden md:flex items-center gap-10">
  {NAV_LINKS.map((link) => (
    <ScrambleLink
      key={link.href}
      href={link.href}
      label={link.label}
      isActive={pathname === link.href}
    />
  ))}
</div>
```

Find the desktop CTA button and update to pill:

```tsx
{/* CTA — pill button */}
<div className="hidden md:block">
  <Link
    href="/contact"
    className="font-body bg-white text-black text-[11px] font-semibold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-300"
  >
    Start a Project
  </Link>
</div>
```

Also update the scrolled nav background class:

```tsx
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
  scrolled
    ? 'bg-[#0D1117]/90 backdrop-blur-xl border-b border-white/[0.06]'
    : 'bg-transparent'
}`}
```

- [ ] **Step 3: Verify existing imports are sufficient**

The file already has `import { useState, useEffect } from 'react'`. The `useTextScramble` hook and `ScrambleLink` component only use `useState` and `useEffect` — no additional imports needed.

- [ ] **Step 4: Verify TypeScript and browser**

```bash
npx tsc --noEmit
```

Open http://localhost:3000, hover over nav links (Work, Services, About, Blog) — letters should scramble randomly then resolve back to the correct text. The "Start a Project" CTA should be pill-shaped.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: navbar pill CTA + text scramble on nav link hover"
```

---

## Task 11: Update remaining section backgrounds

**Files:**
- Modify: `src/components/home/StatsSection.tsx`
- Modify: `src/components/home/BlogSection.tsx`
- Modify: `src/components/home/CTASection.tsx`

- [ ] **Step 1: Update StatsSection background**

In `src/components/home/StatsSection.tsx`, find line 8:

```tsx
<section className="relative bg-bg-primary py-24 md:py-36 overflow-hidden">
```

Change to:

```tsx
<section className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#111827' }}>
```

Also update the ambient glow gradient to use red tint instead of white:

```tsx
style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(232,67,63,0.04) 0%, transparent 70%)' }}
```

- [ ] **Step 2: Update BlogSection background**

In `src/components/home/BlogSection.tsx`, find line 38:

```tsx
<section className="bg-bg-secondary py-24 md:py-32">
```

Change to:

```tsx
<section className="py-24 md:py-32" style={{ background: '#F5F4F0' }}>
```

Also update the inner `StaggerItem` card background (line 59) — change `bg-bg-secondary` to a specific light card:

```tsx
<StaggerItem key={post.slug} variants={staggerItemVariants} className="group bg-white">
```

Update text colors that won't be readable on the light bg — in the header area:

```tsx
{/* Section header */}
<FadeInUp className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
  <div>
    <span className="block w-8 h-px bg-[#0D1117]/20 mb-5" />
    <span className="section-label block mb-4">From the Studio</span>
    <h2 className="font-display font-bold text-[#0D1117] tracking-[-0.02em] leading-[1.05]" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}>
      Ideas worth reading.
    </h2>
  </div>
  <Link
    href="/blog"
    className="inline-flex items-center gap-2 font-body text-[#4B5563] hover:text-[#0D1117] text-xs uppercase tracking-[0.18em] transition-colors duration-300 group shrink-0"
  >
    All articles
    <ArrowUpRight size={12} />
  </Link>
</FadeInUp>
```

Update the card interior (the grid bg separator line):

```tsx
<StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E7EB]">
```

- [ ] **Step 3: Update CTASection background**

In `src/components/home/CTASection.tsx`, find line 16:

```tsx
<section ref={ref} className="relative bg-bg-primary py-32 md:py-48 overflow-hidden">
```

Change to:

```tsx
<section ref={ref} className="relative py-32 md:py-48 overflow-hidden" style={{ background: '#161410' }}>
```

- [ ] **Step 4: Verify in browser**

Scroll through the full page:
- Stats: slightly different dark blue-grey background
- Blog: light cream background with white cards and dark text
- CTA: warm dark (slightly brownish-black) closing section

- [ ] **Step 5: Commit**

```bash
git add src/components/home/StatsSection.tsx src/components/home/BlogSection.tsx src/components/home/CTASection.tsx
git commit -m "style: update remaining section backgrounds per V2 rhythm"
```

---

## Task 12: Update page.tsx composition

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx**

```typescript
import { HeroSection } from '@/components/home/HeroSection'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { LetterMaskSection } from '@/components/home/LetterMaskSection'
import { AntiAgencySection } from '@/components/home/AntiAgencySection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WorkSection } from '@/components/home/WorkSection'
import { StatsSection } from '@/components/home/StatsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { BlogSection } from '@/components/home/BlogSection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <LetterMaskSection />
      <MarqueeStrip />
      <AntiAgencySection />
      <ServicesSection />
      <WorkSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  )
}
```

- [ ] **Step 2: Verify full page flow in browser**

Scroll from top to bottom of http://localhost:3000. Confirm rhythm:
1. Hero — dark, video, left text, pill CTAs
2. Marquee strip — dark scrolling text
3. ZYRA letter mask — cream/light, video through letters
4. Marquee strip — dark
5. Anti-agency — cream/light, "Not an agency. A studio."
6. Services — dark, 4 poster cards
7. Work reel — dark, cards drift horizontally as you scroll
8. Stats — mid dark
9. Testimonials — dark
10. Blog — cream/light, editorial cards
11. CTA — warm dark

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update homepage composition with V2 section order"
```

---

## Task 13: Final verification

- [ ] **Step 1: TypeScript check**

```bash
cd /c/Users/Akshay/zyra-website
npx tsc --noEmit
```

Expected: 0 errors. Fix any type errors before proceeding.

- [ ] **Step 2: Production build**

```bash
npm run build
```

Expected: Build completes successfully. If there are errors, they will show file and line. Common issues:
- `foreignObject` TypeScript error in LetterMaskSection → add `{/* @ts-ignore */}` above the `<div xmlns=...>` line
- Missing `'use client'` directive on a component that uses hooks → add it at the top

- [ ] **Step 3: Visual QA checklist**

Open http://localhost:3000 and check each item:

- [ ] Hero video visible (not faint — 55% opacity)
- [ ] Hero CTA buttons are pill-shaped (rounded-full)
- [ ] Hero badge has gold dot and gold text
- [ ] 3 filmstrip thumbnails visible bottom-right (on desktop width)
- [ ] Pulsing vertical line at bottom-center
- [ ] Marquee strip scrolls left continuously
- [ ] ZYRA letters appear on light background with video inside
- [ ] Anti-agency section is clearly LIGHT (cream/white)
- [ ] Services grid shows 4 portrait poster cards
- [ ] Work reel cards move horizontally on scroll
- [ ] Blog section is clearly LIGHT
- [ ] CTA section is dark (warm dark, slightly different from pure black)
- [ ] Nav "Start a Project" is pill-shaped
- [ ] Hover over nav links — letters scramble

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Zyra V2 redesign — cinematic blue-grey, editorial rhythm, new sections"
```
