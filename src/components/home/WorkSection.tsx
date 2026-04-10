'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PROJECTS } from '@/lib/dummy-content'
import { LazyVideo } from '@/components/ui/LazyVideo'
import { LazyCFIframe } from '@/components/ui/LazyCFIframe'

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

export function WorkSection() {
  const isMobile = useIsMobile()
  return isMobile ? <WorkSectionMobile /> : <WorkSectionDesktop />
}

/* ── Desktop: horizontal scroll reel ──────────────────────────── */
function WorkSectionDesktop() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#080808', minHeight: '350vh' }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
        style={{ justifyContent: 'center', gap: '32px' }}
      >
        <SectionHeader />
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ x, gap: '16px', paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: '80px' }}
          >
            {PROJECTS.map((project, i) => (
              <WorkCard key={project.id ?? i} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Mobile: vertical grid ─────────────────────────────────────── */
function WorkSectionMobile() {
  return (
    <section style={{ backgroundColor: '#080808', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ padding: '0 clamp(16px, 5vw, 32px)', marginBottom: '40px' }}>
        <SectionHeader />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
          padding: '0 clamp(16px, 5vw, 32px)',
        }}
      >
        {PROJECTS.map((project, i) => (
          <WorkCardMobile key={project.id ?? i} project={project} />
        ))}
      </div>
    </section>
  )
}

/* ── Shared section header ─────────────────────────────────────── */
function SectionHeader() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <span
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
        Selected Work
      </span>
      <h2
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
        Stories That Move.
      </h2>
    </div>
  )
}

const CF_BASE = 'https://customer-rphzzo1xs9tbitpo.cloudflarestream.com'

/* ── Desktop card ──────────────────────────────────────────────── */
function WorkCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [hovered, setHovered] = useState(false)
  const isPortrait = project.aspect === '9/16'
  const cardWidth = 'clamp(220px, 23vw, 360px)'

  return (
    <Link
      href={`/work/${project.id}`}
      className="relative flex-shrink-0 overflow-hidden block"
      style={{
        width: cardWidth,
        aspectRatio: '16/9',
        borderRadius: '4px',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.cfStream ? (
        <LazyCFIframe
          lazySrc={`${CF_BASE}/${project.cfStream}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=metadata&poster=${encodeURIComponent(`${CF_BASE}/${project.cfStream}/thumbnails/thumbnail.jpg?height=600`)}`}
          style={isPortrait ? {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '316%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            opacity: hovered ? 1 : 0.65,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          } : {
            position: 'absolute',
            inset: 0,
            width: '100%', height: '100%',
            border: 'none',
            opacity: hovered ? 1 : 0.65,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        />
      ) : (
        <LazyVideo
          autoPlay muted loop playsInline
          src={project.video}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: hovered ? 1 : 0.65,
            transition: 'opacity 0.4s ease, transform 0.5s ease',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <div
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1L13 8L1 15V1Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: "'DM Sans', sans-serif" }}>
            {project.category}
          </span>
          <span style={{ color: '#4B5563', fontSize: '9px' }}>·</span>
          <span style={{ fontSize: '9px', color: '#9BA3AF', fontFamily: "'DM Sans', sans-serif" }}>
            {project.client}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(16px, 1.4vw, 22px)',
            fontWeight: 700, color: '#F5F5F0', lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  )
}

/* ── Mobile card ───────────────────────────────────────────────── */
function WorkCardMobile({ project }: { project: (typeof PROJECTS)[number] }) {
  const isPortrait = project.aspect === '9/16'
  return (
    <Link
      href={`/work/${project.id}`}
      className="relative overflow-hidden block"
      style={{ aspectRatio: '16/9', borderRadius: '4px', textDecoration: 'none' }}
    >
      {project.cfStream ? (
        <LazyCFIframe
          lazySrc={`${CF_BASE}/${project.cfStream}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=metadata&poster=${encodeURIComponent(`${CF_BASE}/${project.cfStream}/thumbnails/thumbnail.jpg?height=600`)}`}
          style={isPortrait ? {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '316%',
            transform: 'translate(-50%, -50%)',
            border: 'none', opacity: 0.75, pointerEvents: 'none',
          } : {
            position: 'absolute',
            inset: 0,
            width: '100%', height: '100%',
            border: 'none', opacity: 0.75, pointerEvents: 'none',
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        />
      ) : (
        <LazyVideo
          autoPlay muted loop playsInline
          src={project.video}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.75 }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <h3
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(11px, 3vw, 16px)',
            fontWeight: 700, color: '#F5F5F0', lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  )
}
