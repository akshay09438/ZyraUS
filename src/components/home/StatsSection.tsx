'use client'

import { AnimatedCounter, FadeInUp } from '@/components/animations'
import { STATS } from '@/lib/dummy-content'

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-36 overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.025) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-10 md:mb-16">
          <span className="accent-line" />
          <span className="section-label">By the Numbers</span>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className={`py-6 md:py-0 ${i < STATS.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.06]' : ''} ${i > 0 ? 'md:pl-16' : ''} ${i < STATS.length - 1 ? 'md:pr-16' : ''}`}
            >
              <div className="font-display font-bold leading-none tracking-tight mb-4"
                style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}>
                <AnimatedCounter target={value} suffix="" duration={2.5} />
                <span className="text-white/20">{suffix}</span>
              </div>
              <p className="font-body text-white/30 text-xs uppercase tracking-[0.18em]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
