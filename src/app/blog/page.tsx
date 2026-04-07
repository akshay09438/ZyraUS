import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { ALL_POSTS } from '@/lib/blog-data'
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Blog | Zyra AI Content Studio',
  description: 'Thinking on AI production, brand storytelling, and the future of creative content in India.',
}

export default function BlogPage() {
  const featured = ALL_POSTS.find(p => p.featured)
  const rest = ALL_POSTS.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-primary pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <span className="accent-line" />
            <span className="section-label block mb-6">The Zyra Journal</span>
          </FadeInUp>
          <TextReveal text="Thinking out loud." className="font-display font-bold text-display text-white tracking-[-0.025em] leading-[0.95]" stagger={0.07} />
          <FadeInUp delay={0.3} className="mt-8 max-w-xl">
            <p className="font-body text-white/40 text-lg leading-relaxed">
              Ideas on AI production, brand storytelling, and the creative economy in India.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="bg-bg-secondary border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
            <FadeInUp>
              <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={featured.poster}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="bg-bg-primary border border-white/[0.05] border-l-0 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-body text-white/30 text-xs uppercase tracking-[0.18em] border border-white/10 px-3 py-1">{featured.category}</span>
                      <span className="font-body text-white/20 text-xs">Featured</span>
                    </div>
                    <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.01em] leading-[1.15] mb-4 group-hover:text-white/70 transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="font-body text-white/40 text-sm leading-relaxed">{featured.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.05]">
                    <div className="flex items-center gap-4">
                      <span className="font-body text-white/20 text-xs">{featured.date}</span>
                      <span className="font-body text-white/20 text-xs">{featured.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 font-body text-xs uppercase tracking-[0.18em] text-white/30 group-hover:text-white transition-colors duration-300">
                      Read
                      <ArrowUpRight size={12} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="bg-bg-primary py-20 md:py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {rest.map(post => (
              <StaggerItem key={post.slug} variants={staggerItemVariants} className="bg-bg-primary">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.poster}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-body text-white/20 text-[10px] uppercase tracking-[0.18em] border border-white/[0.08] px-2.5 py-1">{post.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-lg leading-[1.25] mb-3 group-hover:text-white/60 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="font-body text-white/30 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.05]">
                      <div className="flex items-center gap-3">
                        <span className="font-body text-white/20 text-xs">{post.date}</span>
                        <span className="font-body text-white/20 text-xs">{post.readTime}</span>
                      </div>
                      <ArrowUpRight size={12} strokeWidth={1.5} className="text-white/20 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
