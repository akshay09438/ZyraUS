'use client'

import { FadeInUp, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'
import { TESTIMONIALS, CLIENTS } from '@/lib/dummy-content'

function TestimonialCard({ quote, name, title, company }: typeof TESTIMONIALS[number]) {
  return (
    <div
      className="border flex flex-col gap-6 min-w-[320px] md:min-w-[460px] p-8 md:p-10"
      style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}
    >
      {/* Large quotation — decorative */}
      <span className="font-display text-[#0D1117]/10 leading-none select-none"
        style={{ fontSize: '72px', lineHeight: '0.8' }} aria-hidden>
        &ldquo;
      </span>

      <blockquote className="font-display italic text-[#4B5563] text-xl md:text-2xl leading-[1.5] flex-1">
        {quote}
      </blockquote>

      <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: '#E5E7EB' }}>
        <div
          className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#F0F0F0', borderColor: '#E5E7EB' }}
        >
          <span className="font-display font-bold text-[#9BA3AF] text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-body text-[#0D1117] text-sm font-medium">{name}</p>
          <p className="font-body text-[#9BA3AF] text-xs">{title}, {company}</p>
        </div>
      </div>
    </div>
  )
}

function ClientMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS, ...CLIENTS]

  return (
    <div className="overflow-hidden py-6 mt-16 border-t" style={{ borderColor: '#E5E7EB' }}>
      <div className="flex items-center gap-16 w-max" style={{ animation: 'marquee 30s linear infinite' }}>
        {doubled.map((name, i) => (
          <span key={i}
            className="font-body font-medium text-sm tracking-[0.22em] uppercase whitespace-nowrap text-[#9BA3AF]/60 hover:text-[#4B5563] transition-colors duration-300 cursor-default">
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: '#F5F4F0' }} className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-14">
          <span className="accent-line" />
          <span className="section-label block mb-5">What Clients Say</span>
          <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)', color: '#0D1117' }}>
            Words that matter.
          </h2>
        </FadeInUp>
      </div>

      <div className="overflow-x-auto px-6 md:px-10 pb-2 hide-scrollbar">
        <StaggerContainer className="flex gap-4 w-max">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name} variants={staggerItemVariants}>
              <TestimonialCard {...t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <ClientMarquee />
    </section>
  )
}
