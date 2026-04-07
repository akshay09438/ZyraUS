import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FadeInUp } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Brief Received | Zyra AI Content Studio',
  description: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
}

export default function ThankYouPage() {
  return (
    <section className="bg-bg-primary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-40">
        <FadeInUp>
          <div className="max-w-xl">
            <span className="accent-line" />
            <h1 className="font-display font-bold text-white text-4xl md:text-6xl tracking-[-0.025em] leading-[1.0] mt-6 mb-6">
              Brief received.<br />
              <span className="text-white/25 italic">We're on it.</span>
            </h1>
            <p className="font-body text-white/40 text-base leading-relaxed mb-10">
              We read every brief personally and respond within 24 hours. Expect a reply with perspective, not a templated deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 bg-white text-black font-body font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 hover:bg-white/90 transition-all duration-300"
              >
                See Our Work
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-body font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
