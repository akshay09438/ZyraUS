'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CTASection } from '@/components/home/CTASection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ── Data ────────────────────────────────────────────────────────────────────
const LOGOS = Array.from({ length: 17 }, (_, i) => `/logos/${i + 1}.png`)

const TIMELINE = [
  {
    year: 'Early 2025',
    title: 'The Hypothesis',
    body: 'Zyra came to life from a conviction: that the gap between world-class production and accessible budgets was finally closing. AI was compressing ₹100K productions into ₹10K.',
    img: '/about/early-2025.webp',
  },
  {
    year: 'Late 2025',
    title: 'The Shift',
    body: 'Our first OTT series landed. Our first brand film went live in 11 days. The pipeline was real, the quality was cinematic, and the market noticed.',
    img: '/about/late-2025.webp',
  },
  {
    year: '2026',
    title: 'Going Bigger',
    body: 'Five service pillars. 60+ brands. Expanding to Southeast Asia. The studio we imagined is the studio we are building, one impossible brief at a time.',
    img: '/about/2026.webp',
  },
]

const TEAM = [
  {
    name: 'Siddhi Singh',
    role: 'Founding Lead, AI Creative & Products',
    description: 'Siddhi is the Founding Lead at Zyra, working across AI filmmaking, operations, and product. She specializes in taking unclear problem statements and turning them into practical, working solutions through apps, automations, and AI-driven systems. Give her a problem, and she will figure out how to solve it.',
    photo: '/team/siddhi-singh.webp',
    tags: ['AI Products', 'Operations', 'Automations', 'Problem Solver'],
  },
  {
    name: 'Himangini Khanna',
    role: 'Lead AI Film Maker',
    description: 'Himangini is the Lead AI Filmmaker, driving creative direction and execution across AI-powered film projects. She blends storytelling with advanced AI tools to produce compelling, high-quality visual narratives.',
    photo: '/team/himangini-khanna.webp',
    tags: ['AI Filmmaking', 'Creative Direction', 'Visual Narratives'],
  },
  {
    name: 'Sayan Mahato',
    role: 'AI Film Maker',
    description: 'Sayan is an AI content creator and video editor who blends both to craft storytelling-driven content that resonates with audiences. With 5+ years of experience in videography, video editing, and AI videos, he focuses on creating cinematic content that captures emotion, connects with viewers, and elevates brand communication.',
    photo: '/team/sayan-mahato.webp',
    tags: ['Videography', 'Video Editing', 'AI Video', 'Storytelling'],
    widePhoto: true,
  },
  {
    name: 'Ark Prajapati',
    role: 'AI Film Maker',
    description: 'Ark is a Video Editor & AI Video Creator. He crafts engaging videos by blending creative editing with smart AI tools. He contributes to developing and executing creative concepts into finished films.',
    photo: '/team/ark-prajapati.webp',
    tags: ['Video Editing', 'AI Video', 'Creative Concepts'],
    widePhoto: true,
  },
  {
    name: 'Avantika Rajpurohit',
    role: 'Key Account Manager',
    description: 'Avantika leads as a Key Account Manager at Zyra, owning client relationships end-to-end while driving seamless communication across teams. She blends creativity with strategy, deeply understanding client visions and translating them into impactful, goal-driven solutions.',
    photo: '/team/avantika-rajpurohit.webp',
    tags: ['Client Relations', 'Account Management', 'Brand Strategy'],
    photoPosition: 'top',
  },
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

// ── Page ────────────────────────────────────────────────────────────────────
export default function AboutPage() {

  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans overflow-x-hidden antialiased">

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1+2 — HERO QUOTE BANNER + FOUNDERS (one viewport)
      ══════════════════════════════════════════════════════════════ */}
      <section className="w-full min-h-screen flex flex-col">

        {/* Hero cinematic banner */}
        <div className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/about/hero-kedarnath.webp"
            alt=""
            fill
            className="object-cover object-[center_30%]"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative z-10 max-w-3xl px-6 text-center mt-14 md:mt-20"
          >
            <h1 className="text-2xl md:text-[1.75rem] font-normal leading-[1.5] tracking-tight text-white/90" style={{ fontFamily: 'Georgia, serif' }}>
              &ldquo;We saw the entire world of production changing in real time. The only question was, are you going to watch it happen, or are you going to build what comes next?&rdquo;
            </h1>
          </motion.div>
        </div>

        {/* Founders — immediately below banner */}
        <div className="flex-1 px-8 md:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center h-full">

            {/* LEFT — founding team photo */}
            <div className="w-full h-[38vh] md:h-[42vh] relative overflow-hidden">
              <Image
                src="/about/founding-team.webp"
                alt="The Founders"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.7), transparent)' }}>
                <div className="h-px bg-white/10 mb-3" />
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">The Founders</p>
              </div>
            </div>

            {/* RIGHT — editorial text */}
            <div className="flex flex-col justify-center space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, ease: EASE }}
                className="text-xl md:text-2xl font-medium leading-snug"
              >
                Zyra was built on a shared conviction, that AI is rewriting the content space, so we decided to write it ourselves.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
                className="text-base text-gray-400 font-light leading-relaxed"
              >
                A tech integrated agency founded by two minds from opposite ends of the creative industry - one from marketing, one from technology - Zyra exists at the precise intersection where storytelling meets artificial intelligence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.2, ease: EASE }}
                className="text-base text-gray-400 font-light leading-relaxed"
              >
                We don&apos;t assist productions. We lead them. With expert team capabilities spanning brand films, performance marketing, micro dramas, social content, and cinematic productions, every video we make is AI-native - from concept to final frame. Work that couldn&apos;t have existed any other way.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
                className="pt-2 space-y-1"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-gray-600 mb-2">The Founders</p>
                <p className="text-sm text-gray-400">Nihal - Co-Founder &amp; CEO</p>
                <p className="text-sm text-gray-400">Shiban - Co-Founder &amp; Chief AI Officer</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — STATS & MARQUEE
      ══════════════════════════════════════════════════════════════ */}
      <section className="w-full border-t border-b border-white/[0.06]">
        {/* Stats grid */}
        <div className="max-w-7xl mx-auto px-8 mb-0">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { value: '100+',   label: 'Brands Served' },
              { value: '1 Year', label: 'Studio Age' },
              { value: '5,000+', label: 'AI Creatives Produced' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: i * 0.1, ease: EASE }}
                style={{
                  padding: 'clamp(48px, 7vh, 88px) clamp(24px, 4vw, 56px)',
                  borderRight: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                  {s.label}
                </span>
                <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(56px, 7vw, 100px)', fontWeight: 400, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden py-10 flex"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <motion.div
            className="flex flex-nowrap gap-16 min-w-max items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <div key={i} className="flex-shrink-0 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="h-[6.75rem] w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4A — MISSION & HISTORY — editorial two-column
      ══════════════════════════════════════════════════════════════ */}
      <MissionHistorySection />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4B — GSAP HORIZONTAL SCROLL HISTORY
      ══════════════════════════════════════════════════════════════ */}
      <HistoryHorizontalScroll />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — LEADERSHIP (full-width editorial rows)
      ══════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#080808] overflow-hidden">
        {/* LEADERSHIP header */}
        <div style={{ textAlign: 'center', padding: 'clamp(60px, 8vw, 100px) clamp(32px, 6vw, 100px) clamp(48px, 6vw, 72px)' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(56px, 8vw, 110px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '16px',
            }}
          >
            Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '-0.01em',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            The magicians who make the magic possible
          </motion.p>
        </div>

        {/* Member rows */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 clamp(32px, 6vw, 100px) clamp(80px, 10vw, 120px)' }}>
          {TEAM.map((member, i) => {
            const photoLeft = i % 2 === 0
            const widePhoto = (member as { widePhoto?: boolean }).widePhoto === true
            const photoPosition = (member as { photoPosition?: string }).photoPosition ?? 'center'
            const FIXED = 'clamp(260px, 34vw, 460px)'
            // narrow mode: text gets 1fr (wide), photo gets fixed
            // wide mode:   text gets fixed, photo gets 1fr (wide)
            const gridTemplateColumns = photoLeft
              ? (widePhoto ? `${FIXED} 1fr` : `1fr ${FIXED}`)
              : (widePhoto ? `1fr ${FIXED}` : `${FIXED} 1fr`)
            const textGridCol = photoLeft ? 1 : 2
            const photoGridCol = photoLeft ? 2 : 1
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns,
                  gap: 'clamp(40px, 6vw, 88px)',
                  alignItems: 'stretch',
                  minHeight: 'clamp(520px, 60vw, 700px)',
                  paddingTop: 'clamp(60px, 8vw, 100px)',
                  paddingBottom: 'clamp(60px, 8vw, 100px)',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {/* ── Ghost first name watermark ── */}
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, x: photoLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    [photoLeft ? 'left' : 'right']: 0,
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: 'clamp(90px, 16vw, 200px)',
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(255,255,255,0.045)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    zIndex: 0,
                  }}
                >
                  {member.name.split(' ')[0]}
                </motion.span>

                {/* ── Text column ── */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                    gridColumn: textGridCol,
                    gridRow: 1,
                  }}
                >
                  {/* Index */}
                  <motion.span
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: EASE }}
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', marginBottom: '22px', display: 'block' }}
                  >
                    {String(i + 1).padStart(2, '0')} / {String(TEAM.length).padStart(2, '0')}
                  </motion.span>

                  {/* Name */}
                  <motion.h3
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 'clamp(2.6rem, 4.2vw, 5.2rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.025em',
                      lineHeight: 1.02,
                      margin: 0,
                      marginBottom: '12px',
                    }}
                  >
                    {member.name}
                  </motion.h3>

                  {/* Role */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'rgba(245,244,240,0.45)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.24em',
                      margin: 0,
                      marginBottom: '32px',
                    }}
                  >
                    {member.role}
                  </motion.p>

                  {/* Animated rule */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '40px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
                    style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.18)', marginBottom: '28px', flexShrink: 0 }}
                  />

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, delay: 0.32, ease: EASE }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 'clamp(13px, 1.05vw, 15px)',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.9,
                      margin: 0,
                      marginBottom: '36px',
                      maxWidth: '480px',
                    }}
                  >
                    {member.description}
                  </motion.p>

                  {/* Specialty tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {member.tags.map((tag, j) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + j * 0.07, ease: EASE }}
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '10px',
                          fontWeight: 500,
                          color: 'rgba(245,244,240,0.32)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.15em',
                          padding: '6px 14px',
                          border: '1px solid rgba(255,255,255,0.09)',
                          borderRadius: '9999px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* ── Photo column ── */}
                <motion.div
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                  style={{
                    position: 'relative',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    zIndex: 1,
                    gridColumn: photoGridCol,
                    gridRow: 1,
                    cursor: 'default',
                  }}
                  className="group"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 46vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ objectPosition: photoPosition }}
                  />

                  {/* Hover reveal overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.2) 45%, transparent 70%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', fontWeight: 600, color: 'rgba(245,244,240,0.5)', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '6px' }}>
                      {member.role}
                    </p>
                    <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '1.6rem', fontWeight: 500, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>
                      {member.name}
                    </p>
                  </div>

                  {/* Subtle border */}
                  <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: '18px', border: '1px solid rgba(255,255,255,0.07)' }} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <CTASection />
    </div>
  )
}

// ── Mission & History — editorial two-column layout (matches reference) ───────
function MissionHistorySection() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#080808',
        padding: 'clamp(80px, 10vw, 140px) clamp(32px, 8vw, 120px) clamp(24px, 3vw, 36px)',
      }}
    >
      {/* 01 — Mission */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 clamp(40px, 6vw, 120px)',
          paddingBottom: 'clamp(64px, 8vw, 100px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          marginBottom: 'clamp(64px, 8vw, 100px)',
          alignItems: 'start',
        }}
      >
        {/* Left — number + label + heading */}
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1,
              marginBottom: '10px',
            }}
          >
            01
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '20px',
            }}
          >
            Focus
          </span>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Our mission
          </h2>
        </div>

        {/* Right — body text aligned to top */}
        <div style={{ paddingTop: '6px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            We exist to prove that the best videos in the world don&apos;t have to cost the most or take the longest. AI-native production is not a shortcut, it&apos;s a new standard. At Zyra, we push every frame, every story, and every brief toward what&apos;s now possible, not what was previously practical.
          </p>
        </div>
      </div>

      {/* 02 — History */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 clamp(40px, 6vw, 120px)',
          alignItems: 'start',
        }}
      >
        {/* Left — number + label + heading */}
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1,
              marginBottom: '10px',
            }}
          >
            02
          </span>
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '20px',
            }}
          >
            Looking Back
          </span>
          <h2
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Our History
          </h2>
        </div>

        {/* Right — body text */}
        <div style={{ paddingTop: '6px' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Our journey began with a simple but bold hypothesis: offline, traditional production is being replaced, and the studios that understand AI first will define the next decade of visual storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}

// ── GSAP Horizontal Scroll — 3 History Cards ──────────────────────────────────
const HISTORY_CARDS = [
  {
    year: 'Early 2025',
    title: 'The Hypothesis & The Beginning',
    body: 'Zyra came to life from a conviction shared by two founders, one reading the market, one reading the technology, who arrived at the same conclusion: AI was about to make traditional video production obsolete. Rather than wait and see, they decided to build. The early months were about going deep into every tool, every model, every workflow. We took on pro bono work to build at real scale and real speed. Every project was a proof of concept.',
    img: '/about/mission-early-2025.webp',
  },
  {
    year: 'Late 2025',
    title: 'The Shift',
    body: 'The work started speaking for itself. Our early productions began getting attention, and with that came inbound interest from brands. The pipeline shifted from hustle to momentum. We crossed 100 brands. We produced over 5,000 AI creatives. Zyra stopped being a bet and started being a studio.',
    img: '/about/mission-late-2025.webp',
  },
  {
    year: '2026',
    title: 'Going Bigger',
    body: 'We\'re now entering our most ambitious phase, longer formats, OTT productions, and cinematic work at a scale that felt impossible when we started. The five pillars are live. The team is growing. And we\'re just getting started.',
    img: '/about/mission-2026.webp',
  },
]

function HistoryHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track   = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const travelX = () => -(track.scrollWidth - window.innerWidth)

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.abs(travelX())}`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(track, { x: travelX() * self.progress })
        },
      })

      return () => st.kill()
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#080808',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Scrolling track */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: 'clamp(32px, 4vw, 64px)',
          paddingLeft: 'clamp(32px, 5vw, 80px)',
          paddingRight: 'clamp(48vw, 52vw, 56vw)',
          willChange: 'transform',
          flexShrink: 0,
        }}
      >
        {HISTORY_CARDS.map((card, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: '44vw',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Image — landscape, fixed height */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '52vh',
                overflow: 'hidden',
                backgroundColor: '#111',
                marginBottom: '28px',
              }}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="44vw"
                className="object-cover"
              />
            </div>

            {/* Text block — padded right so text doesn't bleed to card edge */}
            <div style={{ paddingRight: 'clamp(24px, 3vw, 48px)' }}>

            {/* Year — most prominent */}
            <span
              style={{
                display: 'block',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}
            >
              {card.year}
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: 'clamp(18px, 1.6vw, 24px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '-0.01em',
                lineHeight: 1.25,
                marginBottom: '16px',
              }}
            >
              {card.title}
            </h3>

            {/* Body */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(13px, 0.95vw, 15px)',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {card.body}
            </p>
            </div>{/* end text padding wrapper */}
          </div>
        ))}
      </div>
    </div>
  )
}
