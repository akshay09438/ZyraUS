import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { FadeInUp, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'

const POSTS = [
  {
    slug: 'ai-brand-films-future',
    date: 'Mar 2026',
    category: 'Industry',
    title: 'Why AI Brand Films Will Dominate Indian Marketing in 2026',
    excerpt: "The economics are changing. OTT-level production is no longer a luxury, it's a competitive requirement.",
    readTime: '5 min read',
    poster: 'https://picsum.photos/seed/blog1/800/500',
  },
  {
    slug: 'micro-drama-playbook',
    date: 'Feb 2026',
    category: 'Playbook',
    title: 'The Micro Drama Playbook: How Brands Are Winning With Episodic Content',
    excerpt: "Short-form serialised storytelling is the fastest-growing content format in India. Here's how to do it right.",
    readTime: '8 min read',
    poster: 'https://picsum.photos/seed/blog2/800/500',
  },
  {
    slug: 'performance-creative-formula',
    date: 'Jan 2026',
    category: 'Performance',
    title: '50 Ad Variants in a Week: The Performance Creative Formula',
    excerpt: "How we scaled one campaign's creative output by 10× without sacrificing quality, and dropped CPA by 40%.",
    readTime: '6 min read',
    poster: 'https://picsum.photos/seed/blog3/800/500',
  },
]

export function BlogSection() {
  return (
    <section className="py-16 md:py-32" style={{ backgroundColor: '#F5F4F0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          <div>
            <span className="accent-line" />
            <span className="section-label block mb-4">From the Studio</span>
            <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05]" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)', color: '#0D1117' }}>
              Ideas worth reading.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.18em] transition-colors duration-300 group shrink-0" style={{ color: '#4B5563' }}
          >
            All articles
            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
          {POSTS.map((post) => (
            <StaggerItem key={post.slug} variants={staggerItemVariants} className="group" style={{ backgroundColor: '#FFFFFF' }}>
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ paddingBottom: '60%' }}>
                  <Image
                    src={post.poster}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/60 border border-white/20 bg-black/50 backdrop-blur-sm px-2.5 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 md:p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 font-body text-xs" style={{ color: '#9CA3AF' }}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg leading-[1.25] tracking-[-0.01em] transition-colors duration-300" style={{ color: '#0D1117' }}>
                    {post.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed flex-1" style={{ color: '#4B5563' }}>
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.15em] transition-colors duration-300 mt-2" style={{ color: '#4B5563' }}>
                    Read article
                    <ArrowUpRight size={11} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
