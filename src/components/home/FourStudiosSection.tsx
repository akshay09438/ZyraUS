'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SERVICES } from '@/lib/dummy-content'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

function StudioPanel({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: index + 1,
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(48px, 5vw, 96px)',
      }}
    >
      {/* Inset card — black reveals on all sides */}
      <div
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: isEven ? 'row' : 'row-reverse',
          overflow: 'hidden',
        }}
      >
        {/* ── Text side — white background ──────────────────── */}
        <div
          style={{
            flex: '0 0 50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(40px, 5vw, 80px)',
            backgroundColor: '#FFFFFF',
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(8,8,8,0.65)',
              marginBottom: '28px',
            }}
          >
            {service.label}
          </span>

          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(32px, 4vw, 64px)',
              fontWeight: 700,
              color: '#080808',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            {service.title}
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              fontWeight: 400,
              color: 'rgba(8,8,8,0.55)',
              lineHeight: 1.7,
              maxWidth: '340px',
              marginBottom: '40px',
            }}
          >
            {service.desc}
          </p>

          <a
            href={service.href}
            style={{
              display: 'inline-block',
              width: 'fit-content',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: '#080808',
              textDecoration: 'none',
              border: '1px solid #080808',
              padding: '12px 48px',
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#080808'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#F5F4F0'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#080808'
            }}
          >
            Explore
          </a>
        </div>

        {/* ── Video side ────────────────────────────────────── */}
        <div
          style={{
            flex: '0 0 50%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            src={service.video}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function FourStudiosSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="four-studios"
      style={{ backgroundColor: '#080808', position: 'relative' }}
    >
      {/* ── Section header ─────────────────────────────────── */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(80px, 10vh, 140px) clamp(32px, 6vw, 96px) clamp(60px, 7vh, 100px)',
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          style={{
            display: 'block',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '20px',
          }}
        >
          What We Build
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: EASE_OUT_EXPO }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(48px, 6vw, 100px)',
            fontWeight: 700,
            color: '#F5F5F0',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            textTransform: 'uppercase',
          }}
        >
          Five Pillars.<br />One Studio.
        </motion.h2>

        {/* Thin horizontal rule below heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT_EXPO }}
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            marginTop: 'clamp(40px, 5vh, 72px)',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* ── Stacking panels ────────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {SERVICES.map((service, i) => (
          <StudioPanel key={service.id} service={service} index={i} />
        ))}
        {/* Minimal spacer — just enough for Panel 4 to settle before transition */}
        <div style={{ height: '20vh', backgroundColor: '#080808' }} />
      </div>
    </section>
  )
}
