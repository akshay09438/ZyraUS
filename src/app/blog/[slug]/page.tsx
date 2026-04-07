import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { ALL_POSTS, getPostBySlug } from '@/lib/blog-data'
import { FadeInUp, StaggerContainer, StaggerItem, staggerItemVariants } from '@/components/animations'
import { CTASection } from '@/components/home/CTASection'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Zyra AI`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = ALL_POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Back */}
      <div className="bg-bg-primary pt-28 pb-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <Link href="/blog" className="inline-flex items-center gap-2 font-body text-white/30 hover:text-white text-xs uppercase tracking-[0.18em] transition-colors duration-300">
              <ArrowLeft size={13} strokeWidth={1.5} />
              All Articles
            </Link>
          </FadeInUp>
        </div>
      </div>

      {/* Header */}
      <header className="bg-bg-primary pt-12 pb-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-white/20 text-xs uppercase tracking-[0.18em] border border-white/[0.08] px-3 py-1">{post.category}</span>
              <span className="font-body text-white/20 text-xs">{post.date}</span>
              <span className="font-body text-white/20 text-xs">{post.readTime}</span>
            </div>
            <h1 className="font-display font-bold text-white text-3xl md:text-5xl tracking-[-0.02em] leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="font-body text-white/40 text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
          </FadeInUp>
        </div>

        {/* Hero image */}
        <div className="mt-12 relative aspect-[16/7] overflow-hidden">
          <Image src={post.poster} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </header>

      {/* Article body */}
      <article className="bg-bg-secondary py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <StaggerContainer className="flex flex-col gap-6">
            {post.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <StaggerItem key={i} variants={staggerItemVariants}>
                    <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.01em] mt-6 mb-2 leading-[1.2]">
                      {block.text}
                    </h2>
                  </StaggerItem>
                )
              }
              if (block.type === 'h3') {
                return (
                  <StaggerItem key={i} variants={staggerItemVariants}>
                    <h3 className="font-display font-bold text-white text-xl tracking-[-0.01em] mt-4 mb-1 leading-[1.3]">
                      {block.text}
                    </h3>
                  </StaggerItem>
                )
              }
              if (block.type === 'blockquote') {
                return (
                  <StaggerItem key={i} variants={staggerItemVariants}>
                    <blockquote className="border-l-2 border-white/20 pl-6 py-2 my-4">
                      <p className="font-display font-bold italic text-white/70 text-xl md:text-2xl leading-relaxed tracking-[-0.01em]">
                        &ldquo;{block.text}&rdquo;
                      </p>
                    </blockquote>
                  </StaggerItem>
                )
              }
              return (
                <StaggerItem key={i} variants={staggerItemVariants}>
                  <p className="font-body text-white/60 text-base leading-[1.8]">{block.text}</p>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-bg-primary py-20 md:py-28 border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <FadeInUp className="mb-10">
              <h2 className="font-display font-bold text-white text-2xl">More from the Journal</h2>
            </FadeInUp>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
              {related.map(p => (
                <StaggerItem key={p.slug} variants={staggerItemVariants} className="bg-bg-primary">
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image src={p.poster} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                    <div className="p-5">
                      <p className="font-body text-white/20 text-xs uppercase tracking-[0.15em] mb-2">{p.category}</p>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display font-bold text-white text-base leading-[1.3] group-hover:text-white/60 transition-colors duration-300">{p.title}</h3>
                        <ArrowUpRight size={13} strokeWidth={1.5} className="text-white/20 group-hover:text-white transition-colors duration-300 shrink-0 mt-0.5" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
