import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ALL_SERVICES } from '@/lib/service-data'
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Services | Zyra AI Content Studio',
  description: 'AI Brand Films, Micro Drama Production, Performance Creatives, and Social Media Content - five pillars, one studio.',
}

function Curve({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 100" style={{ display: 'block', width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill={to} />
      </svg>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero, CREAM */}
      <section className="bg-[#F5F4F0] pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <div className="w-8 h-px bg-[#080808]/25 mb-5" />
            <span className="section-label block mb-6">What We Do</span>
          </FadeInUp>
          <TextReveal
            text="Five pillars."
            className="font-display font-bold text-display tracking-[-0.025em] leading-[0.95]"
            style={{ color: '#080808' }}
            stagger={0.08}
          />
          <TextReveal
            text="One studio."
            className="font-display font-bold text-display tracking-[-0.025em] leading-[0.95] italic"
            style={{ color: 'rgba(8,8,8,0.18)' }}
            delay={0.2}
            stagger={0.08}
          />
          <FadeInUp delay={0.4} className="mt-8 max-w-xl">
            <p className="font-body text-[#080808]/50 text-lg leading-relaxed">
              Each service is a complete production capability, strategy, creative direction, production, and delivery. You brief us once. We handle everything else.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* cream → dark */}
      <Curve from="#F5F4F0" to="#080808" />

      {/* Services list, DARK */}
      <section className="bg-[#080808] py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <StaggerContainer className="divide-y divide-white/[0.07]">
            {ALL_SERVICES.map((s, i) => (
              <StaggerItem key={s.slug} variants={staggerItemVariants}>
                <Link
                  href={`/${s.slug}`}
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-12 md:py-16 cursor-pointer"
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <span className="font-display font-bold text-white/[0.07] text-5xl md:text-6xl leading-none tracking-tight w-16 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.01em] mb-2 group-hover:text-white/55 transition-colors duration-300">
                        {s.title}
                      </h2>
                      <p className="font-body text-white/40 text-base leading-relaxed max-w-lg">{s.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 text-white/25 group-hover:text-white transition-colors duration-300">
                    <span className="font-body text-xs uppercase tracking-[0.2em]">Explore</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* dark → cream */}
      <Curve from="#080808" to="#F5F4F0" />

      {/* CTA, CREAM */}
      <CTASection />
    </>
  )
}
