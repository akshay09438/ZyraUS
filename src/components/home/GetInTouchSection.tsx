'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function GetInTouchSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#F5F4F0',   // white
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(48px, 6vh, 80px) clamp(32px, 6vw, 96px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          style={{
            display: 'block',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(8,8,8,0.3)',
            marginBottom: '40px',
          }}
        >
          Ready to Create
        </motion.span>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT_EXPO }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(52px, 8vw, 130px)',
            fontWeight: 700,
            color: '#080808',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            marginBottom: '16px',
          }}
        >
          Get in
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.18, ease: EASE_OUT_EXPO }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(52px, 8vw, 130px)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'rgba(8,8,8,0.25)',
            letterSpacing: '-0.03em',
            lineHeight: 0.92,
            marginBottom: '60px',
          }}
        >
          Touch.
        </motion.h2>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.32, ease: EASE_OUT_EXPO }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(14px, 1.1vw, 17px)',
            fontWeight: 300,
            color: 'rgba(8,8,8,0.45)',
            lineHeight: 1.7,
            maxWidth: '440px',
            margin: '0 auto 56px',
          }}
        >
          Brief us on your project and we&apos;ll come back with ideas within 24 hours.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.44, ease: EASE_OUT_EXPO }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <a
            href="https://calendly.com/marketersatzyra/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#080808',
              color: '#F5F5F0',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '18px 40px',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a Call
          </a>

          <a
            href="mailto:marketersatzyra@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(8,8,8,0.3)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(8,8,8,0.8)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(8,8,8,0.3)')}
          >
            marketersatzyra@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
