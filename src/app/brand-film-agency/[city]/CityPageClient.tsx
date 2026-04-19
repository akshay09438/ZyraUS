'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FadeInUp, MagneticButton } from '@/components/animations'
import { CTASection } from '@/components/home/CTASection'
import { FAQAccordion } from '@/components/shared/FAQ'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const FEATURED_BRANDS = [
  { client: 'Cars24',       category: 'Brand Film',  poster: '/posters/cars24.webp'         },
  { client: 'Meesho',       category: 'Ad Creative', poster: '/posters/meesho.webp'         },
  { client: 'Swiggy',       category: 'Brand Film',  poster: '/posters/swiggy.webp'         },
  { client: 'Wildstone',    category: 'Brand Film',  poster: '/posters/wildstone-edge.webp' },
  { client: 'Adani × NDTV', category: 'Brand Film',  poster: '/posters/adani-ndtv.webp'    },
]

const VALUE_PROPS = [
  { label: 'Speed',      title: 'Brief to film in 3 weeks',  body: 'From your brief to a finished cinematic film — no long retainers, no agency lag.' },
  { label: 'Technology', title: 'AI-assisted production',    body: 'AI tools cut production time and cost without touching creative quality.' },
  { label: 'Focus',      title: 'Built for Indian brands',   body: 'Every story we tell is rooted in the cultural and market context your audience actually lives in.' },
]

interface FAQ { q: string; a: string }

interface CityEntry {
  city: string
  slug: string
  h1: string
  subheading: string
  introParagraph: string
  ctaLine: string
  nearbyCities: string[]
  cityFaqs: FAQ[]
}

interface Props {
  city: CityEntry
  allCities: { city: string; slug: string }[]
  sharedFaqs: FAQ[]
}

function SectionLabelDark({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
      {children}
    </p>
  )
}

function SectionLabelLight({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(8,8,8,0.3)', marginBottom: '20px' }}>
      {children}
    </p>
  )
}

function BrandCard({ brand }: { brand: typeof FEATURED_BRANDS[number] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }}>
      <Link href="/work" style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', backgroundColor: '#111', lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.poster}
            alt={`${brand.client} brand film by Zyra`}
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 55%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700, color: '#F5F5F0', letterSpacing: '-0.01em' }}>{brand.client}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>{brand.category}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function ValueCard({ vp, delay }: { vp: typeof VALUE_PROPS[number]; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: EASE }}
      style={{ padding: '32px', borderRadius: '6px', border: '1px solid rgba(8,8,8,0.1)', height: '100%' }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(8,8,8,0.3)', marginBottom: '16px' }}>{vp.label}</p>
      <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 700, color: '#080808', letterSpacing: '-0.01em', marginBottom: '12px' }}>{vp.title}</p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(8,8,8,0.55)', lineHeight: 1.7 }}>{vp.body}</p>
    </motion.div>
  )
}

export function CityPageClient({ city, allCities, sharedFaqs }: Props) {
  const allFaqs = [...city.cityFaqs, ...sharedFaqs]
  const nearby = city.nearbyCities.map(slug => allCities.find(c => c.slug === slug)).filter(Boolean) as { city: string; slug: string }[]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden" style={{ minHeight: '90vh', backgroundColor: '#080808' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78vh', minWidth: '100%', height: '56.25vw', minHeight: '100%', transform: 'translate(-50%, -50%)', objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }}>
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.15) 50%, rgba(8,8,8,0.65) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, transparent, #080808)', pointerEvents: 'none', zIndex: 5 }} />

        <div className="relative px-6 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginBottom: '24px' }}>
            Brand Film Production · {city.city}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(42px, 6.5vw, 96px)', fontWeight: 700, color: '#F5F5F0', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '20px' }}>
            {city.h1}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 400, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 36px' }}>
            {city.subheading}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: EASE }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton>
              <a href="https://calendly.com/marketersatzyra/30min" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#F5F5F0', color: '#080808', fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none' }}>
                Book a 15-min Call <ArrowUpRight size={13} />
              </a>
            </MagneticButton>
            <a href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', padding: '16px 28px', borderRadius: '9999px', textDecoration: 'none' }}>
              View Our Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F5F4F0', padding: 'clamp(64px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInUp>
            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 400, color: 'rgba(8,8,8,0.72)', lineHeight: 1.85 }}>
              {city.introParagraph}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Brands ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#080808', padding: 'clamp(64px, 8vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInUp>
            <div style={{ marginBottom: '56px' }}>
              <SectionLabelDark>Our Work</SectionLabelDark>
              <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 700, color: '#F5F5F0', letterSpacing: '-0.02em', lineHeight: 1.0 }}>
                Brands We&apos;ve Made Films For
              </h2>
            </div>
          </FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {FEATURED_BRANDS.map(brand => <BrandCard key={brand.client} brand={brand} />)}
          </div>
          <FadeInUp delay={0.2}>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
                See all our work <ArrowUpRight size={12} />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Why Zyra ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F5F4F0', padding: 'clamp(64px, 8vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInUp>
            <div style={{ marginBottom: '56px' }}>
              <SectionLabelLight>Why Zyra</SectionLabelLight>
              <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 700, color: '#080808', letterSpacing: '-0.02em', lineHeight: 1.0 }}>
                Built Different.
              </h2>
            </div>
          </FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {VALUE_PROPS.map((vp, i) => <ValueCard key={vp.label} vp={vp} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#080808', padding: 'clamp(64px, 8vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <FadeInUp>
            <div style={{ marginBottom: '56px' }}>
              <SectionLabelDark>Common Questions</SectionLabelDark>
              <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 700, color: '#F5F5F0', letterSpacing: '-0.02em', lineHeight: 1.0 }}>
                Everything you need to know.
              </h2>
            </div>
          </FadeInUp>
          <FAQAccordion items={allFaqs} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#080808' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 0' }}>
          <FadeInUp>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,244,240,0.35)' }}>
              {city.ctaLine}
            </p>
          </FadeInUp>
        </div>
        <CTASection dark={true} />
      </div>

      {/* ── Explore Other Cities ───────────────────────────────────── */}
      {nearby.length > 0 && (
        <nav style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 24px' }} aria-label="Other city pages">
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>Explore other cities:</span>
            {nearby.map(c => (
              <Link key={c.slug} href={`/brand-film-agency/${c.slug}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
                Brand Film Agency in {c.city}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}
