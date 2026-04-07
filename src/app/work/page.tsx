'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ALL_PROJECTS } from '@/lib/work-data'
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'
import { CTASection } from '@/components/home/CTASection'

const CATEGORIES = ['OTT Production', 'Brand Film', 'Micro Drama', 'Ad Creative', 'Social'] as const

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function WorkPage() {
  const [active, setActive] = useState<string>('OTT Production')

  const filtered = ALL_PROJECTS.filter(p => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F4F0] pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <span className="accent-line" style={{ background: 'rgba(8,8,8,0.3)' }} />
            <span className="section-label block mb-6" style={{ color: 'rgba(8,8,8,0.4)' }}>Selected Work</span>
          </FadeInUp>
          <TextReveal text="The proof is" className="font-display font-bold text-display text-[#080808] tracking-[-0.025em] leading-[0.95]" stagger={0.08} />
          <TextReveal text="in the results." className="font-display font-bold text-display text-[#080808]/20 tracking-[-0.025em] leading-[0.95] italic" delay={0.2} stagger={0.08} />
          <FadeInUp delay={0.4} className="mt-8 max-w-xl">
            <p className="font-body text-[#080808]/50 text-lg leading-relaxed">
              1,000+ creatives. 5 formats. 50 million views. Countless results.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-[#F5F4F0] border-b border-[#080808]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-center gap-1 py-4 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 font-body text-xs uppercase tracking-[0.18em] px-5 py-2.5 transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#080808] text-[#F5F4F0]'
                    : 'text-[#080808]/40 hover:text-[#080808] border border-transparent hover:border-[#080808]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-bg-primary py-20 md:py-28 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                  className="bg-bg-secondary"
                >
                  <Link href={`/work/${project.slug}`} className="group block">
                    {/* Thumbnail */}
                    <div className={`relative overflow-hidden bg-white/[0.03] ${project.vertical ? 'aspect-[9/16]' : 'aspect-[4/3]'}`}>
                      <Image
                        src={project.poster}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-9 h-9 bg-white flex items-center justify-center">
                          <ArrowUpRight size={14} strokeWidth={2} className="text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 text-center border border-white/10">
                      <p className="font-body text-white/30 text-xs uppercase tracking-[0.18em] mb-1">{project.client}</p>
                      <div className="flex items-center justify-center mb-3">
                        <h3 className="font-display font-bold text-white text-xl group-hover:text-white/70 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="font-body text-[10px] uppercase tracking-[0.15em] text-white/20 border border-white/[0.08] px-2.5 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-body text-white/20 text-base">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
