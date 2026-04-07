'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { WorkProject } from '@/lib/work-data'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ── Floating rotating star (fixed right-center) ───────────────── */
function FloatingStar() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        translateY: '-50%',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: '#C8F400',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 2L15.5 10.5L22 7L17.5 13L26 14L17.5 15L22 21L15.5 17.5L14 26L12.5 17.5L6 21L10.5 15L2 14L10.5 13L6 7L12.5 10.5Z"
            fill="#000000"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

/* ── Main client component ─────────────────────────────────────── */
export function WorkProjectClient({
  project,
  others,
}: {
  project: WorkProject
  others: WorkProject[]
}) {
  const videoRef = useRef<HTMLDivElement>(null)
  const videoInView = useInView(videoRef, { once: true, margin: '-80px' })

  return (
    <>
      <FloatingStar />

      {/* ── 1. CINEMATIC HERO ──────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Background poster */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={project.heroPoster ?? project.poster}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            loading="eager"
            style={{ opacity: 0.92 }}
          />
          {/* Bottom-up dark gradient so text is legible */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.88) 100%)',
            }}
          />
          {/* Left-side fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Content overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'clamp(80px, 8vw, 120px) clamp(28px, 6vw, 72px) clamp(48px, 6vh, 72px)',
          }}
        >
          {/* Small ZYRA mark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{ marginBottom: '32px' }}
          >
            <span
              style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: '22px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              ZYRA
            </span>
          </motion.div>

          {/* Layout: left text + right CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '48px',
              flexWrap: 'wrap',
            }}
          >
            {/* Left: title + metadata + brief */}
            <div style={{ maxWidth: '700px', flex: '1 1 400px' }}>
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: EASE }}
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 'clamp(52px, 8vw, 110px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.025em',
                  lineHeight: 0.92,
                  marginBottom: '20px',
                }}
              >
                {project.title}
              </motion.h1>

              {/* Metadata line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '24px',
                }}
              >
                {project.client}&nbsp;&nbsp;|&nbsp;&nbsp;{project.category}&nbsp;&nbsp;|&nbsp;&nbsp;{project.year}
              </motion.p>

              {/* Brief (description) */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 'clamp(14px, 1.1vw, 17px)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.75,
                  maxWidth: '520px',
                }}
              >
                {project.brief}
              </motion.p>
            </div>

            {/* Right: category tag + "More Work" button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '16px',
                flex: '0 0 auto',
              }}
            >
              {/* Category hashtag */}
              <span
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 'clamp(36px, 4.5vw, 72px)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                #{project.category.toLowerCase().replace(/ /g, '-')}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. CINEMATIC VIDEO SECTION ─────────────────────────── */}
      <section
        ref={videoRef}
        style={{ backgroundColor: '#000000', padding: 'clamp(48px, 6vw, 80px) clamp(28px, 6vw, 80px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={videoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          {/* Video header, YouTube-style */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '18px',
              padding: '0 4px',
            }}
          >
            {/* Avatar placeholder */}
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Z
              </span>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {project.title}, Official Trailer
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.35)',
                  margin: 0,
                  marginTop: '2px',
                }}
              >
                Zyra AI Studio · {project.year}
              </p>
            </div>
          </div>

          {/* Video container, 9:16 vertical or 16:9 horizontal */}
          {(project.playerVertical ?? project.vertical) ? (
            /* Vertical: centred, max 420px wide, natural 9:16 height */
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: 'min(420px, 100%)',
                  aspectRatio: '9 / 16',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.07)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <video
                  autoPlay muted loop playsInline controls
                  src={project.video}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          ) : (
            /* Horizontal: full width 16:9 */
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                backgroundColor: '#0A0A0A',
                border: '1px solid rgba(255,255,255,0.07)',
                overflow: 'hidden',
              }}
            >
              <video
                autoPlay muted loop playsInline controls
                src={project.video}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Tags below video */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '5px 12px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 3. MORE WORK ───────────────────────────────────────── */}
      {others.length > 0 && (
        <section
          style={{
            backgroundColor: '#080808',
            padding: 'clamp(60px, 8vw, 100px) clamp(28px, 6vw, 80px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 'clamp(32px, 4vh, 48px)',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <h2
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: 'clamp(28px, 3vw, 48px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                More Work
              </h2>
              <Link
                href="/work"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)')}
              >
                View All →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2px',
              }}
            >
              {others.map(p => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden' }}
                  className="group"
                >
                  {/* Thumbnail */}
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#0A0A0A' }}>
                    <Image
                      src={p.poster}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      style={{ transition: 'transform 0.7s ease', transform: 'scale(1)' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
                      onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                      }}
                    />
                    {/* Bottom label */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px' }}>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '10px',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.4)',
                          marginBottom: '4px',
                        }}
                      >
                        {p.client}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'EB Garamond', Georgia, serif",
                          fontSize: 'clamp(18px, 1.6vw, 24px)',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.1,
                          margin: 0,
                        }}
                      >
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. CTA ─────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#F5F4F0',
          padding: 'clamp(80px, 10vw, 130px) clamp(28px, 6vw, 80px)',
          textAlign: 'center',
          borderTop: '1px solid rgba(8,8,8,0.07)',
        }}
      >
        <h2
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#080808',
            letterSpacing: '-0.025em',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          Ready to create something cinematic?
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(14px, 1vw, 17px)',
            fontWeight: 300,
            color: 'rgba(8,8,8,0.45)',
            marginBottom: '40px',
            maxWidth: '420px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.7,
          }}
        >
          Brief us on your project and we'll come back with ideas within 24 hours.
        </p>
        <a
          href="https://calendly.com/marketersatzyra/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#F5F4F0',
            backgroundColor: '#080808',
            padding: '18px 48px',
            textDecoration: 'none',
            transition: 'opacity 0.25s ease',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.8')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          Schedule a Call
        </a>
      </section>
    </>
  )
}
