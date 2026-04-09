'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { ServiceData } from '@/lib/service-data'
import { RelatedServices } from '@/components/shared/RelatedServices'
import { CTASection } from '@/components/home/CTASection'
import { FadeInUp, TextReveal, LineReveal, StaggerContainer, StaggerItem, staggerItemVariants, MagneticButton } from '@/components/animations'
import * as LucideIcons from 'lucide-react'
import { ALL_PROJECTS } from '@/lib/work-data'

// ── Work slug map per service ─────────────────────────────────────────────────
const SERVICE_WORK_MAP: Record<string, string[]> = {
  'ott-production':         ['the-holy-tirthankars', 'kapil-muni', 'ramayana', 'dharmruchi-angaar'],
  'ai-brand-films':         ['adani-ndtv', 'cars24', 'swiggy', 'jito'],
  'micro-drama-production': ['vama', 'vaishno-devi', 'kedarnath', 'madhusudhan-ghee'],
  'ai-ad-creatives':        ['wildstone-edge', 'wildstone-ultra-sensual', 'rabitat', 'goodscore'],
  'social-media-content':   ['kissansay', 'bharat-ki-soch', 'inyou', 'mederma', 'country-delight'],
}

// ── Single-direction curve — ONE per transition, no doubling ──────────────────
// bg = the section you're leaving, fill = the section you're entering
function Curve({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ background: from, lineHeight: 0, display: 'block' }}>
      <svg viewBox="0 0 1440 100" style={{ display: 'block', width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill={to} />
      </svg>
    </div>
  )
}

// ── Icon resolver ─────────────────────────────────────────────────────────────
function DeliverableIcon({ name }: { name: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (LucideIcons as any)[name] ?? LucideIcons.Star
  return <Icon size={18} strokeWidth={1.5} />
}

// ── Service Hero ──────────────────────────────────────────────────────────────
function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end pb-20 md:pb-32 overflow-hidden bg-bg-primary">
      {/* Poster image — full brightness */}
      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Light gradient — keeps left text legible, right stays bright */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.3) 55%, rgba(8,8,8,0.08) 100%)' }} />

      {/* Bottom fade into page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }} />

      {/* Hashtag — bottom-right, large */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 hidden md:block">
        <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '28px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
          #{service.slug}
        </span>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <FadeInUp className="mb-8">
          <nav className="flex items-center gap-2 font-body text-xs text-white/25">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white/50 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/50">{service.title}</span>
          </nav>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <span className="section-label-light block mb-6">{service.label}</span>
        </FadeInUp>
        <TextReveal text={service.title} className="font-display font-bold text-display text-white tracking-[-0.025em] leading-[0.95] mb-6" delay={0.2} stagger={0.07} />
        <LineReveal delay={0.6} className="mb-10">
          <p className="font-display italic text-white/40 text-xl md:text-2xl max-w-xl">{service.subtitle}</p>
        </LineReveal>
        <FadeInUp delay={0.8}>
          <MagneticButton>
            <a href="https://calendly.com/marketersatzyra/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-black font-body font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-white/90 transition-colors duration-300">
              Schedule a Call <ArrowUpRight size={13} />
            </a>
          </MagneticButton>
        </FadeInUp>
      </div>
    </section>
  )
}

// ── Stats Section — CREAM ────────────────────────────────────────────────────
function ProblemSection({ service }: { service: ServiceData }) {
  const hasTwoStats = service.stats.length >= 2

  return (
    <>
      {/* dark → cream */}
      <Curve from="#080808" to="#F5F4F0" />
      <section className="bg-[#F5F4F0] py-28 md:py-40 relative overflow-hidden">
        {/* Ghost background — first stat value */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none select-none overflow-hidden">
          <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(200px, 30vw, 380px)', color: 'rgba(8,8,8,0.04)', lineHeight: 1, fontWeight: 700 }}>
            {service.stats[0]?.value}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

            {/* Left — headline + stats */}
            <FadeInUp>
              <div className="flex flex-col gap-8">
                <span className="font-body text-[#080808]/30 text-xs uppercase tracking-[0.22em]">
                  {service.statsHeadline}
                </span>

                {/* Stats — side by side if 2, full-width if 1 */}
                <div className={`${hasTwoStats ? 'grid grid-cols-2 gap-8' : 'flex flex-col gap-2'}`}>
                  {service.stats.map((stat, i) => (
                    <div key={i}>
                      <span
                        className="font-display font-bold text-[#080808] leading-none tracking-[-0.03em] block"
                        style={{ fontSize: hasTwoStats ? 'clamp(52px, 7vw, 96px)' : 'clamp(72px, 10vw, 130px)' }}
                      >
                        {stat.value}
                      </span>
                      <p className="font-body text-[#080808]/40 text-xs uppercase tracking-[0.18em] mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-[#080808]/10 w-24" />
              </div>
            </FadeInUp>

            {/* Right — body copy */}
            <div className="flex flex-col gap-6 lg:pt-16">
              {service.problemBody.map((para, i) => (
                <FadeInUp key={i} delay={0.1 + i * 0.1}>
                  <p className={`font-body leading-[1.9] text-base md:text-lg ${i === 0 ? 'text-[#080808]/70' : 'text-[#080808]/40'}`}>{para}</p>
                </FadeInUp>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

// ── Work Showcase — DARK, editorial film-credits layout ───────────────────────
function WorkShowcase({ service }: { service: ServiceData }) {
  const slugs = SERVICE_WORK_MAP[service.slug] ?? []
  const projects = ALL_PROJECTS.filter(p => slugs.includes(p.slug))
  if (projects.length === 0) return null

  const [featured, ...allRest] = projects
  const rest = allRest.slice(0, 2) // always exactly 2 right-column cards — no empty cells

  return (
    <>
      {/* cream → dark */}
      <Curve from="#F5F4F0" to="#080808" />
      <section className="bg-[#080808] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          {/* Editorial section header */}
          <div className="flex items-baseline justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div className="flex items-baseline gap-4">
              <span
                className="font-display font-bold text-white/[0.05] select-none leading-none"
                style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}
                aria-hidden
              >
                {String(projects.length).padStart(2, '0')}
              </span>
              <span className="font-body text-white/25 text-xs uppercase tracking-[0.28em]">Selected Work</span>
            </div>
            <Link
              href="/work"
              className="font-body text-white/30 text-xs uppercase tracking-[0.18em] hover:text-white transition-colors duration-200 flex items-center gap-2 cursor-pointer"
            >
              View All <ArrowUpRight size={11} />
            </Link>
          </div>

          {/* Cards — film contact sheet */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-[3px] md:h-[580px]">

            {/* Featured — 58% wide on desktop, full width on mobile */}
            {featured && (
              <Link
                href={`/work/${featured.slug}`}
                className="group relative overflow-hidden cursor-pointer block aspect-video md:aspect-auto md:[flex:0_0_58%]"
              >
                <Image
                  src={featured.poster}
                  alt={featured.title}
                  fill
                  sizes="58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Persistent gradient — title always legible */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.25) 45%, transparent 70%)' }}
                />
                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <span className="font-body text-white/55 text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 bg-black/50 backdrop-blur-sm">
                    {featured.category}
                  </span>
                </div>
                {/* Arrow — hover only */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-black" />
                  </div>
                </div>
                {/* Ghost index */}
                <span
                  className="absolute bottom-5 right-6 font-display font-bold text-white/[0.06] select-none leading-none"
                  style={{ fontSize: '100px' }}
                  aria-hidden
                >01</span>
                {/* Client + title — always on */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-7">
                  <p className="font-body text-white/40 text-[10px] uppercase tracking-[0.24em] mb-2">{featured.client}</p>
                  <p
                    className="font-display font-bold text-white tracking-[-0.025em] leading-[1.05]"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 32px)' }}
                  >
                    {featured.title}
                  </p>
                </div>
              </Link>
            )}

            {/* Right column — 2 stacked cards on desktop, side by side on mobile */}
            {rest.length > 0 && (
              <div className="flex flex-row md:flex-col gap-1 md:gap-[3px] md:flex-1">
                {rest.map((project, i) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="group relative overflow-hidden flex-1 cursor-pointer block aspect-video md:aspect-auto"
                  >
                    <Image
                      src={project.poster}
                      alt={project.title}
                      fill
                      sizes="42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    {/* Dark veil — lifts on hover */}
                    <div className="absolute inset-0 bg-black/55 group-hover:bg-black/10 transition-colors duration-500" />
                    {/* Hover gradient for text */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88), transparent)' }}
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="font-body text-white/45 text-[8px] uppercase tracking-[0.22em] px-2 py-0.5 bg-black/40 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    {/* Arrow — hover only */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-7 h-7 bg-white flex items-center justify-center">
                        <ArrowUpRight size={10} className="text-black" />
                      </div>
                    </div>
                    {/* Ghost index */}
                    <span
                      className="absolute bottom-3 right-4 font-display font-bold text-white/[0.06] select-none leading-none"
                      style={{ fontSize: '68px' }}
                      aria-hidden
                    >
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    {/* Title — slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-350">
                      <p className="font-body text-white/45 text-[9px] uppercase tracking-[0.2em] mb-1">{project.client}</p>
                      <p className="font-display font-bold text-white text-base tracking-[-0.015em]">{project.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}

// ── Deliverables Section — CREAM ──────────────────────────────────────────────
function DeliverablesSection({ service }: { service: ServiceData }) {
  return (
    <>
      {/* dark → cream */}
      <Curve from="#080808" to="#F5F4F0" />
      <section className="bg-[#F5F4F0] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp className="mb-16">
            <span className="font-body text-[#080808]/30 text-xs uppercase tracking-[0.22em] block mb-4">What You Get</span>
            <h2 className="font-display font-bold text-[#080808] tracking-[-0.025em] leading-[0.95]" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
              Everything<br /><span className="text-[#080808]/20 italic">included.</span>
            </h2>
          </FadeInUp>
          <StaggerContainer className="divide-y divide-[#080808]/10">
            {service.deliverables.map((item, i) => (
              <StaggerItem key={i} variants={staggerItemVariants}>
                <div className="py-7 grid grid-cols-[48px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start group cursor-default">
                  <span className="font-display font-bold text-[#080808]/15 text-3xl md:text-4xl leading-none mt-1 group-hover:text-[#080808]/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-[#080808] text-lg md:text-xl mb-1 tracking-[-0.01em]">{item.title}</h3>
                    <p className="font-body text-[#080808]/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-[#080808]/20 group-hover:text-[#080808]/50 transition-colors duration-300 mt-1">
                    <DeliverableIcon name={item.icon} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}

// ── Process Section — DARK ────────────────────────────────────────────────────
function OurProcess({ service }: { service: ServiceData }) {
  return (
    <>
      {/* cream → dark */}
      <Curve from="#F5F4F0" to="#080808" />
      <section className="bg-bg-primary py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
            <FadeInUp className="lg:sticky lg:top-32 lg:self-start">
              <span className="font-body text-white/20 text-xs uppercase tracking-[0.22em] block mb-6">How It Works</span>
              <h2 className="font-display font-bold text-white tracking-[-0.025em] leading-[1.05] mb-4" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Our process.
              </h2>
              <p className="font-body text-white/35 text-base leading-relaxed max-w-xs">
                No surprises. No runaway timelines. Just a clear path from brief to delivery.
              </p>
            </FadeInUp>
            <div className="flex flex-col">
              {service.process.map((step, i) => (
                <FadeInUp key={step.num} delay={i * 0.1}>
                  <div className="group flex gap-8 pb-12 border-b border-white/[0.06] mb-12 last:border-0 last:pb-0 last:mb-0">
                    <span className="font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300 flex-shrink-0"
                      style={{ fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <div className="pt-2">
                      <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 tracking-[-0.01em]">{step.title}</h3>
                      <p className="font-body text-white/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Full Template ─────────────────────────────────────────────────────────────
export function ServicePageTemplate({ service }: { service: ServiceData }) {
  return (
    <>
      <ServiceHero service={service} />
      <ProblemSection service={service} />
      <WorkShowcase service={service} />
      <DeliverablesSection service={service} />
      <OurProcess service={service} />
      <RelatedServices slugs={service.relatedSlugs} />
      {/* dark → cream before CTA */}
      <Curve from="#080808" to="#F5F4F0" />
      <CTASection />
    </>
  )
}
