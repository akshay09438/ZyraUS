'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PROJECTS } from '@/lib/dummy-content'

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // With 23 cards each ~480px + 24px gap ≈ 11 500px total width.
  // Move from 0 → ~-68% of the motion container so all cards are reachable.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#080808', minHeight: '350vh' }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
        style={{ justifyContent: 'center', gap: '32px' }}
      >
        {/* Header — no extra padding, vertically centred by flex */}
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

        {/* Horizontal reel */}
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

function WorkCard({ project }: { project: typeof PROJECTS[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/work/${project.id}`}
      className="relative flex-shrink-0 overflow-hidden block"
      style={{
        width: 'clamp(260px, 30vw, 440px)',
        aspectRatio: '16/9',
        borderRadius: '4px',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={project.video}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: hovered ? 1 : 0.65,
          transition: 'opacity 0.4s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '0.5s',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }}
      />

      {/* Play icon on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M1 1L13 8L1 15V1Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Card info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              fontSize: '9px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
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
            fontWeight: 700,
            color: '#F5F5F0',
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  )
}
