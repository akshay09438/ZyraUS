import Link from 'next/link'
import { NAV_LINKS } from '@/lib/dummy-content'
import { Globe, Rss, Play, X } from 'lucide-react'

const SERVICES_LINKS = [
  { label: 'AI Brand Films',   href: '/ai-brand-films' },
  { label: 'Micro Drama',      href: '/micro-drama-production' },
  { label: 'Ad Creatives',     href: '/ai-ad-creatives' },
  { label: 'Social Content',   href: '/social-media-content' },
]

const SOCIALS = [
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: Rss,   href: '#', label: 'LinkedIn' },
  { icon: Play,  href: '#', label: 'YouTube' },
  { icon: X,     href: '#', label: 'Twitter / X' },
]

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-display font-bold text-2xl text-white tracking-[-0.02em] leading-none">ZYRA</span>
              <span className="font-body text-white/25 leading-none mt-1"
                style={{ fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                AI Content Studio
              </span>
            </Link>
            <p className="font-body text-white/30 text-sm leading-relaxed max-w-[190px]">
              India&apos;s premier AI Content Studio. OTT-level quality at the speed of culture.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="text-white/20 hover:text-white/70 transition-colors duration-300">
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="section-label mb-5">Navigate</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-body text-white/30 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-body text-white/30 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-5">Get in Touch</h4>
            <a href="mailto:marketersatzyra@gmail.com"
              className="font-body text-white/30 hover:text-white text-sm transition-colors duration-300 block mb-2">
              marketersatzyra@gmail.com
            </a>
            <p className="font-body text-white/15 text-xs">Gurgaon, Haryana</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/15 text-xs">
            &copy; {new Date().getFullYear()} Zyra AI Content Studio
          </p>
          <div className="flex items-center gap-6">
            {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms', href: '/terms' }].map(({ label, href }) => (
              <Link key={label} href={href}
                className="font-body text-white/15 hover:text-white/40 text-xs transition-colors duration-300">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
