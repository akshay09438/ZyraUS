'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ProcessStep } from '@/lib/service-data'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[calc(2rem-0.5px)] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

      <div className="flex flex-col gap-0">
        {steps.map((step, i) => (
          <StepItem key={step.num} step={step} index={i} total={steps.length} />
        ))}
      </div>
    </div>
  )
}

function StepItem({
  step,
  index,
  total,
}: {
  step: ProcessStep
  index: number
  total: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 md:gap-12 group pb-10 last:pb-0"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
    >
      {/* Step number — sits on the timeline line */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <div className={`w-16 h-16 flex items-center justify-center border transition-all duration-500 ${
          inView
            ? 'border-white/20 bg-white/[0.04]'
            : 'border-white/[0.06] bg-transparent'
        }`}>
          <span className="font-display font-bold text-white/30 text-sm tracking-wider">
            {step.num}
          </span>
        </div>
        {/* Connector dot on the timeline */}
        {index < total - 1 && (
          <motion.div
            className="flex-1 w-px bg-white/[0.06] mt-3 hidden md:block"
            style={{ minHeight: '40px' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pt-3 pb-10 last:pb-0">
        {/* Large decorative number behind title */}
        <div className="relative">
          <span
            className="absolute -top-6 -left-2 font-display font-bold text-white/[0.03] pointer-events-none select-none leading-none"
            style={{ fontSize: 'clamp(80px, 10vw, 120px)' }}
            aria-hidden
          >
            {step.num}
          </span>
          <h3 className="relative font-display font-bold text-white text-2xl md:text-3xl mb-3 tracking-[-0.01em]">
            {step.title}
          </h3>
        </div>
        <p className="font-body text-white/40 text-base leading-relaxed max-w-lg">
          {step.desc}
        </p>
      </div>
    </motion.div>
  )
}
