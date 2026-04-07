'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, margin: '-60px' })

  // 180vh section → 80vh of actual scroll travel (180 - 100 viewport)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Animate height directly (0→80px) — scaleY + overflow:hidden doesn't clip reliably
  const lineHeight = useTransform(scrollYProgress, [0.25, 0.85], [0, 80])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#F5F4F0',
        height: '180vh',
        position: 'relative',
      }}
    >
      {/* Sticky viewport — text stays centred while user scrolls through section */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',       // centred
          justifyContent: 'center',
          padding: '0 clamp(32px, 6vw, 96px)',
        }}
      >
        {/* Large centred editorial manifesto */}
        <div ref={textRef} style={{ textAlign: 'center', maxWidth: '920px' }}>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, ease: EASE_OUT_EXPO }}
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(44px, 5.5vw, 82px)',
              color: '#080808',
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: '-0.025em',
            }}
          >
            An AI content studio
            <br />
            built for the GenAI era,
            <br />
            <em style={{ color: 'rgba(8,8,8,0.38)', fontStyle: 'italic' }}>
              reimagining how brands create film,
            </em>
            <br />
            <em style={{ color: 'rgba(8,8,8,0.38)', fontStyle: 'italic' }}>
              drama, and new forms of storytelling.
            </em>
          </motion.p>
        </div>

        {/* Scroll-driven vertical line — height goes 0→80px as user scrolls */}
        <div style={{ marginTop: 'clamp(48px, 7vh, 80px)' }}>
          <motion.div
            style={{
              width: '1px',
              height: lineHeight,   // direct height MotionValue
              backgroundColor: '#080808',
              originY: 0,
            }}
          />
        </div>
      </div>
    </section>
  )
}
