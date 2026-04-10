'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { SERVICES } from '@/lib/dummy-content'
import { LazyVideo } from '@/components/ui/LazyVideo'
import { LazyCFIframe } from '@/components/ui/LazyCFIframe'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

function StudioPanel({
  service,
  index,
  isMobile,
}: {
  service: (typeof SERVICES)[number]
  index: number
  isMobile: boolean
}) {
  const isEven = index % 2 === 0

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        minHeight: '100vh',
        height: isMobile ? 'auto' : '100vh',
        zIndex: index + 1,
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '0' : `0 clamp(48px, 5vw, 96px)`,
      }}
    >
      {/* Inset card */}
      <div
        style={{
          flex: 1,
          height: isMobile ? 'auto' : '100%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : (isEven ? 'row' : 'row-reverse'),
          overflow: 'hidden',
        }}
      >
        {/* ── Text side ──────────────────────────────────────── */}
        <div
          style={{
            flex: isMobile ? '0 0 auto' : '0 0 50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isMobile ? 'clamp(28px, 6vw, 48px) clamp(20px, 5vw, 40px)' : 'clamp(40px, 5vw, 80px)',
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
              fontSize: isMobile ? 'clamp(28px, 7vw, 48px)' : 'clamp(32px, 4vw, 64px)',
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
              fontSize: isMobile ? '15px' : 'clamp(14px, 1.1vw, 18px)',
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
              ;(e.currentTarget as HTMLAnchorElement).style.background = '#080808'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#F5F4F0'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#080808'
            }}
          >
            Explore
          </a>
        </div>

        {/* ── Video side ─────────────────────────────────────── */}
        <div
          style={{
            flex: isMobile ? '0 0 58vw' : '0 0 50%',
            minHeight: isMobile ? '58vw' : undefined,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {service.cfStream ? (
            <LazyCFIframe
              lazySrc={`https://customer-rphzzo1xs9tbitpo.cloudflarestream.com/${service.cfStream}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=metadata&poster=${encodeURIComponent(`https://customer-rphzzo1xs9tbitpo.cloudflarestream.com/${service.cfStream}/thumbnails/thumbnail.jpg?height=600`)}`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '177.78vh',
                minWidth: '100%',
                height: '177.78vh',
                minHeight: '100%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                pointerEvents: 'none',
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            />
          ) : (
            <LazyVideo
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
          )}
        </div>
      </div>
    </div>
  )
}

export function FourStudiosSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })
  const isMobile = useIsMobile()

  return (
    <section
      id="four-studios"
      style={{ backgroundColor: '#080808', position: 'relative' }}
    >
      {/* ── Section header ─────────────────────────────────── */}
      <div
        ref={headerRef}
        style={{
          padding: 'clamp(48px, 8vh, 140px) clamp(24px, 6vw, 96px) clamp(36px, 5vh, 100px)',
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
          <StudioPanel key={service.id} service={service} index={i} isMobile={isMobile} />
        ))}
        <div style={{ height: '20vh', backgroundColor: '#080808' }} />
      </div>
    </section>
  )
}
