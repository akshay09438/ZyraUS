import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ALL_SERVICES } from '@/lib/service-data'
import { FadeInUp, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const services = slugs
    .map(slug => ALL_SERVICES.find(s => s.slug === slug))
    .filter(Boolean) as typeof ALL_SERVICES

  return (
    <section className="bg-bg-primary py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-14">
          <span className="accent-line" />
          <span className="section-label block mb-5">Other Services</span>
          <h2 className="font-display font-bold text-white tracking-[-0.02em] leading-[1.0]" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}>
            Explore the studio.
          </h2>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
          {services.map(s => (
            <StaggerItem key={s.slug} variants={staggerItemVariants}>
              <Link
                href={`/${s.slug}`}
                className="group block bg-bg-secondary p-8 md:p-10 hover:bg-white/[0.03] transition-colors duration-300 min-h-[220px] flex flex-col justify-between border border-transparent hover:border-white/10"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="section-label">{s.label}</span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-white/20 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-[1.1] tracking-[-0.01em] mb-3 group-hover:text-white/80 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-body text-white/30 text-sm leading-relaxed line-clamp-2">
                    {s.subtitle}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
