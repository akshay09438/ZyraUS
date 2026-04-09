'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const PARTNERS = [
  {
    index: '01',
    label: 'Strategic Partner',
    name: 'PRAG India',
    shortName: 'PRAG',
    image: '/partner-prag.png',
    description:
      'PRAG India (Public Relations and Advocacy Group) is a team of highly professional and skilled individuals dedicated to provide you with an entire spectrum of services related to public relations and brand management.',
    accent: '#1a1a1a',
    textAccent: 'rgba(255,255,255,0.06)',
  },
  {
    index: '02',
    label: 'Content Partner',
    name: 'Nandi Pictures',
    shortName: 'Nandi',
    image: '/partner-nandi.png',
    description:
      'Nandi Pictures — An OTT Platform whose mission is to make Jain wisdom, culture, and devotion accessible to today\'s generation in a simple, modern format.',
    accent: '#111111',
    textAccent: 'rgba(255,255,255,0.05)',
  },
  {
    index: '03',
    label: 'Technology Partner',
    name: 'ByteDance',
    shortName: 'Byte',
    image: '/partner-bytedance.png',
    description:
      'ByteDance — We are partners of ByteDance, creating content for their ecosystem by leveraging the latest versions of their Seedance and Seedream models.',
    accent: '#0d0d0d',
    textAccent: 'rgba(255,255,255,0.05)',
  },
]

export default function PartnersPage() {
  return (
    <div className="bg-[#080808] text-white antialiased">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/partners-hero.webp"
          alt="Our Partners"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative z-10 text-center px-6 mt-16 md:mt-24"
        >
          <span
            style={{
              display: 'block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '20px',
            }}
          >
            Our Ecosystem
          </span>
          <h1
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(48px, 7vw, 100px)',
              fontWeight: 700,
              color: '#F5F5F0',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Our Partners
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 1.2vw, 18px)',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 300,
              marginTop: '20px',
              maxWidth: '540px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.7,
            }}
          >
            Built on shared vision. Powered by trust. The organisations we collaborate with to bring ambitious stories to life.
          </p>
        </motion.div>
      </section>

      {/* ── Section header ────────────────────────────────────────── */}
      <div style={{ padding: 'clamp(60px, 8vw, 100px) clamp(32px, 6vw, 96px) clamp(40px, 5vw, 64px)', overflow: 'hidden' }}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            display: 'block',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '20px',
          }}
        >
          Strategic Alliances
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.08, ease: EASE }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(28px, 3.2vw, 52px)',
            fontWeight: 700,
            color: '#F5F5F0',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            maxWidth: '600px',
          }}
        >
          Partners Who<br />Shape What We Build.
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            marginTop: 'clamp(32px, 4vh, 56px)',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* ── Stacking partner panels ───────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {PARTNERS.map((partner, i) => (
          <PartnerPanel key={partner.index} partner={partner} index={i} />
        ))}
        <div style={{ height: '20vh', backgroundColor: '#080808' }} />
      </div>

    </div>
  )
}

function PartnerPanel({
  partner,
  index,
}: {
  partner: (typeof PARTNERS)[number]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        minHeight: '100vh',
        height: '100vh',
        zIndex: index + 1,
        backgroundColor: '#080808',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(48px, 5vw, 96px)',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: isEven ? 'row' : 'row-reverse',
          overflow: 'hidden',
        }}
      >
        {/* ── Text side ─────────────────────────────────────── */}
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
              color: 'rgba(8,8,8,0.5)',
              marginBottom: '12px',
            }}
          >
            {partner.label}
          </span>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(28px, 3.5vw, 56px)',
              fontWeight: 700,
              color: '#080808',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '28px',
            }}
          >
            {partner.name}
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(13px, 1.05vw, 16px)',
              fontWeight: 400,
              color: 'rgba(8,8,8,0.6)',
              lineHeight: 1.8,
              maxWidth: '400px',
            }}
          >
            {partner.description}
          </p>
        </div>

        {/* ── Visual side ───────────────────────────────────── */}
        <div
          style={{
            flex: '0 0 50%',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: partner.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Partner logo */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(180px, 28vw, 360px)',
              height: 'clamp(90px, 14vw, 180px)',
            }}
          >
            <Image
              src={partner.image}
              alt={partner.name}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 180px, 28vw"
            />
          </div>

          {/* Index number */}
          <span
            style={{
              position: 'absolute',
              bottom: 'clamp(24px, 4vw, 48px)',
              right: 'clamp(24px, 4vw, 48px)',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.15)',
            }}
          >
            {partner.index} / 03
          </span>
        </div>
      </div>
    </div>
  )
}
