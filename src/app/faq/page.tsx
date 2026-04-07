import type { Metadata } from 'next'
import { FadeInUp, TextReveal } from '@/components/animations'
import { FAQAccordion } from '@/components/shared/FAQ'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'FAQ | Zyra AI Content Studio',
  description: 'Common questions about AI brand films, micro drama production, performance creatives, and working with Zyra.',
}

const FAQ_ITEMS = [
  {
    q: 'What exactly is AI-assisted production?',
    a: 'It means we use AI tools for specific parts of the production pipeline, visualisation, asset generation, motion synthesis, voiceover, while keeping human creative direction at the centre. The brief, strategy, script, and story are always human-led. The AI accelerates execution without replacing the thinking.',
  },
  {
    q: 'How does the quality compare to traditional production?',
    a: 'For most brand content use cases, it is equivalent or better, particularly for cinematic brand films and social content. Where traditional production still has an edge is in situations requiring real human performance on screen. We are transparent about this, and our case studies show real results from real campaigns.',
  },
  {
    q: 'How fast can you turn around a brand film?',
    a: 'Our standard timeline is 10–14 days from approved brief to final delivery. We have delivered in 7 days for time-critical campaigns. For micro drama series (5 episodes), we typically need 3–4 weeks.',
  },
  {
    q: 'What is included in a brand film project?',
    a: 'Everything: brief intake, creative strategy, scriptwriting, storyboard, visual development, production, sound design, colour grade, and final delivery in all required formats. You brief us once. We handle everything else.',
  },
  {
    q: 'Do you work with early-stage startups or only large brands?',
    a: 'Both. Our smallest projects start at ₹3–4L for performance creative packages. Our brand films typically range from ₹6L to ₹25L depending on scope. We\'ve worked with seed-stage D2C brands and listed companies. The brief determines the fit, not the stage.',
  },
  {
    q: 'What is a micro drama series and why would a brand want one?',
    a: 'A micro drama is serialised fiction in 3–7 minute episodes, designed for mobile-first consumption. Brands use them to reach audiences who block traditional ads and to build brand affinity through storytelling rather than advertising. The format generates return viewers, which compresses algorithm-driven organic reach over time.',
  },
  {
    q: 'How do you measure success for performance marketing creatives?',
    a: 'We structure every performance creative campaign around three metrics: CPA (cost per acquisition), CTR (click-through rate), and creative fatigue timeline. We deliver variant libraries with A/B structures pre-mapped for your media team. Most clients see meaningful CPA improvement within the first 2–3 weeks of a campaign.',
  },
  {
    q: 'Can I see work samples before committing?',
    a: 'Yes. Visit our Work page for case studies with full results data. We can also share additional samples relevant to your category under NDA if you\'re evaluating us for a specific brief.',
  },
  {
    q: 'Do you retain creative rights to the work you produce?',
    a: 'No. Full rights transfer to the client on final payment. We retain the right to use the work in our portfolio unless you request otherwise, in which case we will agree to a portfolio exclusion clause.',
  },
  {
    q: 'How do I get started?',
    a: 'Send us your brief via the Contact page. We respond within 24 hours with a perspective, not a templated deck. If there\'s a fit, we\'ll move to a short scoping call to align on deliverables and timeline.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-bg-primary pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInUp>
            <span className="accent-line" />
            <span className="section-label block mb-6">Frequently Asked</span>
          </FadeInUp>
          <TextReveal text="Questions we" className="font-display font-bold text-display text-white tracking-[-0.025em] leading-[0.95]" stagger={0.08} />
          <TextReveal text="get asked a lot." className="font-display font-bold text-display text-white/20 tracking-[-0.025em] leading-[0.95] italic" delay={0.2} stagger={0.08} />
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-bg-secondary py-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10 pb-24">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
