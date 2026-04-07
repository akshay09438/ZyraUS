'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { TextReveal, MagneticButton, LineReveal } from '@/components/animations'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function CTASection({ dark = false }: { dark?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const bg        = dark ? '#080808'              : '#F5F4F0'
  const primary   = dark ? '#F5F4F0'              : '#080808'
  const muted     = dark ? 'rgba(245,244,240,0.4)': 'rgba(8,8,8,0.4)'
  const subtle    = dark ? 'rgba(245,244,240,0.5)': 'rgba(8,8,8,0.5)'
  const faint     = dark ? 'rgba(245,244,240,0.2)': 'rgba(8,8,8,0.2)'
  const emailTone = dark ? 'rgba(245,244,240,0.3)': 'rgba(8,8,8,0.3)'

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Label */}
        <motion.span
          className="section-label block mb-10"
          style={{ color: muted }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          Ready to Create?
        </motion.span>

        {/* Big EB Garamond headline */}
        <TextReveal
          text="Let's make something"
          className={`font-display font-bold text-display leading-[0.92] tracking-[-0.03em]`}
          style={{ color: primary }}
          stagger={0.07}
        />
        <TextReveal
          text="impossible."
          className={`font-display italic font-bold text-display leading-[0.92] tracking-[-0.03em] mt-2`}
          style={{ color: faint }}
          delay={0.3}
          stagger={0.07}
        />

        <LineReveal delay={0.6} className="mt-10 mb-14 max-w-md">
          <p className="font-body text-lg leading-relaxed" style={{ color: subtle }}>
            Brief us on your project and we&apos;ll come back with ideas within 24 hours.
          </p>
        </LineReveal>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE_OUT_EXPO }}
        >
          <MagneticButton>
            <a
              href="https://calendly.com/marketersatzyra/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 transition-colors duration-300"
              style={{ backgroundColor: primary, color: bg }}
            >
              Schedule a Call
              <ArrowUpRight size={13} />
            </a>
          </MagneticButton>

          <a
            href="mailto:marketersatzyra@gmail.com"
            className="font-body text-sm transition-colors duration-300 self-center"
            style={{ color: emailTone }}
          >
            marketersatzyra@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
