'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TextReveal, FadeInUp, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

const DIFFERENTIATORS = [
  { metric: '2',    unit: 'Weeks',   label: 'Average delivery time' },
  { metric: '50+',  unit: 'Variants', label: 'Ad variants per campaign' },
  { metric: '70%',  unit: 'Savings', label: 'Cost vs. traditional production' },
]

export function AntiAgencySection() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section className="relative overflow-hidden py-16 md:py-40" style={{ backgroundColor: '#F5F4F0' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Large editorial statement */}
        <div className="mb-12 md:mb-28">
          <TextReveal
            text="Not an agency."
            className="font-display font-bold text-display text-[#0D1117]/20 leading-[0.95] tracking-[-0.03em]"
            stagger={0.1}
          />
          {/* Thin horizontal rule — reveals with motion */}
          <div ref={lineRef} className="my-6 md:my-8">
            <motion.div
              className="h-px bg-[#E5E7EB] origin-left"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT_EXPO }}
              style={{ transformOrigin: 'left center' }}
            />
          </div>
          <TextReveal
            text="A studio."
            className="font-display font-bold text-display text-[#0D1117] leading-[0.95] tracking-[-0.03em]"
            delay={0.15}
            stagger={0.1}
          />
        </div>

        {/* Split layout: copy left, stats right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          <FadeInUp delay={0.1}>
            <p className="font-body text-[#4B5563] text-base md:text-lg leading-[1.8] max-w-sm">
              Agencies manage timelines. Studios obsess over frames.
              We operate with the precision of a tech company and
              the soul of a film collective.
            </p>
            <p className="font-body text-[#4B5563] text-lg leading-[1.8] max-w-sm mt-4">
              OTT-level content, delivered at the speed of culture.
            </p>
          </FadeInUp>

          {/* Stats — no boxes, pure type */}
          <StaggerContainer className="flex flex-col gap-8">
            {DIFFERENTIATORS.map(({ metric, unit, label }) => (
              <StaggerItem key={label} variants={staggerItemVariants}>
                <div className="flex items-baseline gap-3 border-b border-[#E5E7EB] pb-8 last:border-0">
                  <span className="font-display font-bold text-[#0D1117] leading-none"
                    style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>
                    {metric}
                  </span>
                  <span className="font-display text-[#9BA3AF] text-2xl md:text-3xl leading-none">
                    {unit}
                  </span>
                  <span className="font-body text-[#9BA3AF] text-xs uppercase tracking-[0.15em] ml-auto hidden md:block">
                    {label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  )
}
