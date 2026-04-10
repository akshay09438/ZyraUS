'use client'

import { useRef, useEffect } from 'react'
import { LazyCFIframe } from '@/components/ui/LazyCFIframe'

/**
 * Combined ZYRA + Manifesto scroll sequence.
 *
 * Progress mapping (0→1 over the section's scroll travel):
 *   scale  [0.00 → 0.50]  1 → 5.5
 *   y      [0.15 → 0.60]  0 → -900px
 *   opacity[0.28 → 0.50]  1 → 0   (ZYRA fades, manifesto revealed)
 *   line   [0.65 → 0.95]  0 → 400px height
 */
export function ZyraManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const zyraRef    = useRef<HTMLDivElement>(null)
  const lineRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lerp    = (a: number, b: number, t: number) => a + (b - a) * t
    const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
    const invlerp = (a: number, b: number, v: number) => clamp01((v - a) / (b - a))

    const tick = () => {
      const section = sectionRef.current
      const zyra    = zyraRef.current
      const line    = lineRef.current
      if (!section || !zyra || !line) return

      const rect     = section.getBoundingClientRect()
      const scrolled = -rect.top
      const total    = section.offsetHeight - window.innerHeight
      const p        = clamp01(scrolled / total)

      const scale   = lerp(1, 5.5, invlerp(0,    0.50, p))
      const y       = lerp(0, -900, invlerp(0.15, 0.60, p))
      const opacity = lerp(1, 0,   invlerp(0.28, 0.50, p))

      zyra.style.transform = `translateY(${y}px) scale(${scale})`
      zyra.style.opacity   = String(opacity)

      const lineH = lerp(0, 400, invlerp(0.65, 0.95, p))
      line.style.height = `${lineH}px`
    }

    const raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', tick, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', tick)
    }
  }, [])

  const CF_LOGO_ID = '211c8fbfbd0cdae0bd9edb40def1afa6'

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#F5F4F0',
        height: '340vh',
        position: 'relative',
      }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >

        {/* ── z:1  Manifesto — visible once ZYRA exits ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 clamp(32px, 6vw, 96px)',
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(18px, 3.9vw, 63px)',
              color: '#080808',
              lineHeight: 1.4,
              fontWeight: 400,
              letterSpacing: '-0.01em',
              textAlign: 'center',
              whiteSpace: 'normal',
            }}
          >
            An entertainment studio built for the GenAI era,<br className="hidden md:block" />
            {' '}reimagining how visionary artists create films,<br className="hidden md:block" />
            {' '}series, and new forms of storytelling.
          </p>

          {/* Scroll-driven growing line */}
          <div
            ref={lineRef}
            style={{
              width: '1.5px',
              height: '0px',
              backgroundColor: '#080808',
              marginTop: 'clamp(48px, 7vh, 80px)',
            }}
          />
        </div>

        {/* ── z:2  ZYRA — covers manifesto, exits on scroll ── */}
        <div
          ref={zyraRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            backgroundColor: '#F5F4F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformOrigin: 'center center',
            willChange: 'transform, opacity',
          }}
        >
          {/* Video-in-text: video behind SVG mask with letter-shaped holes */}
          <div style={{ width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#F5F4F0' }}>
            {/* Video behind the SVG — CF iframe scaled to fill the 1000:320 SVG area */}
            {/* SVG is ~3.125:1, video is 16:9 (1.778:1). To fill by width: height = 175.8% */}
            <LazyCFIframe
              lazySrc={`https://customer-rphzzo1xs9tbitpo.cloudflarestream.com/${CF_LOGO_ID}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=metadata`}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '176%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                pointerEvents: 'none',
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            />

            {/*
              SVG mask: cream rect with ZYRA-shaped holes.
              overflow: visible + the mask/rect extend 10px beyond the viewBox
              on all sides — this kills any sub-pixel hairline at the SVG boundary.
            */}
            <svg
              viewBox="0 0 1000 320"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', position: 'relative', zIndex: 1, overflow: 'visible' }}
            >
              <defs>
                <mask
                  id="zyra-mask"
                  maskUnits="userSpaceOnUse"
                  x="-10" y="-10" width="1020" height="340"
                >
                  <rect x="-10" y="-10" width="1020" height="340" fill="white" />
                  <text
                    x="500"
                    y="285"
                    textAnchor="middle"
                    fontFamily="'EB Garamond', Georgia, serif"
                    fontSize="290"
                    fontWeight="800"
                    fill="black"
                    style={{ letterSpacing: '-12px' }}
                  >
                    ZYRA
                  </text>
                </mask>
              </defs>
              {/* Cream rect bleeds 10px beyond viewBox on all sides — no edge hairlines */}
              <rect
                x="-10" y="-10" width="1020" height="340"
                fill="#F5F4F0"
                mask="url(#zyra-mask)"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  )
}
