'use client'

import { motion } from 'framer-motion'

const CF_BASE = 'https://customer-rphzzo1xs9tbitpo.cloudflarestream.com'
const HERO_STREAM_ID = 'a652979718c22bb94b19f626e3a62720'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#080808' }}
    >
      {/* Background video — Cloudflare Stream */}
      <iframe
        src={`${CF_BASE}/${HERO_STREAM_ID}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=true`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '177.78vh',
          minWidth: '100%',
          height: '56.25vw',
          minHeight: '100%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          opacity: 0.85,
          pointerEvents: 'none',
        }}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      />

      {/* Uniform dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.1) 50%, rgba(8,8,8,0.55) 100%)' }}
      />

      {/* Bottom fade — blends seamlessly into next section */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '180px', background: 'linear-gradient(to bottom, transparent, #080808)', pointerEvents: 'none', zIndex: 5 }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-[11px] tracking-[0.25em] uppercase mb-6 md:mb-10"
          style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
        >
          India&rsquo;s AI Content Studio
        </motion.p>

        {/* Headline — elegant mixed italic serif */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="font-display font-bold leading-[1.05] tracking-[-0.02em] mb-5 md:mb-8"
          style={{ fontSize: 'clamp(42px, 6.5vw, 96px)', color: '#F5F5F0' }}
        >
          Where AI meets{' '}
          <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Cinema</em>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="text-sm md:text-lg leading-relaxed mb-8 md:mb-12 max-w-xs md:max-w-lg"
          style={{ color: 'rgba(255,255,255,0.75)', fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
        >
          From brand films to short films and micro drama, we make content that earns its screen time
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="/work"
            className="px-7 py-3 text-sm tracking-wide transition-all duration-300 hover:opacity-80 w-full sm:w-auto text-center"
            style={{
              backgroundColor: '#F5F5F0',
              color: '#080808',
              borderRadius: '9999px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            View Our Work
          </a>
          <a
            href="https://calendly.com/marketersatzyra/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 text-sm tracking-wide transition-all duration-300 hover:border-white/60 w-full sm:w-auto text-center"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.7)',
              borderRadius: '9999px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            Schedule a Call
          </a>
        </motion.div>
      </div>

      {/* Scroll label — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-px"
          style={{ height: '40px', background: 'rgba(255,255,255,0.2)', transformOrigin: 'top' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.0, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'DM Sans', sans-serif" }}
        >
          Scroll
        </span>
      </motion.div>

    </section>
  )
}
