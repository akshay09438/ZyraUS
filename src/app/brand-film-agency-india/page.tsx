import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CTASection } from '@/components/home/CTASection'
import cities from '@/data/pseo-cities.json'

const BASE_URL = 'https://zyra-us.vercel.app'

export const metadata: Metadata = {
  title: 'Brand Film Agency Across India | Zyra',
  description: "Zyra is India's AI-native brand film studio. We create cinematic brand films for brands in Mumbai, Delhi, Bangalore, Hyderabad, and 6 more cities. Brief us today.",
  keywords: ['brand film agency India', 'brand film production India', 'brand film company India', 'AI brand films India', 'cinematic brand films India', 'brand film studio India'],
  alternates: { canonical: `${BASE_URL}/brand-film-agency-india` },
  openGraph: {
    title: 'Brand Film Agency Across India | Zyra',
    description: "Zyra creates cinematic brand films for India's best brands — from Mumbai to Surat, Delhi to Chennai. AI-assisted. Delivered in 3 weeks.",
    url: `${BASE_URL}/brand-film-agency-india`,
    siteName: 'Zyra AI Content Studio',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: 'Brand Film Agency Across India | Zyra' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Film Agency Across India | Zyra',
    description: "Zyra creates cinematic brand films for India's best brands across 10 cities.",
    images: ['/assets/og-image.jpg'],
  },
}

export default function BrandFilmAgencyIndiaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Brand Film Production Across India',
        description: "Zyra is India's AI-native brand film studio, creating cinematic brand films for brands in Mumbai, Delhi, Bangalore, Hyderabad, Pune, Chennai, Ahmedabad, Kolkata, Jaipur, and Surat.",
        url: `${BASE_URL}/brand-film-agency-india`,
        provider: { '@type': 'Organization', name: 'Zyra', url: BASE_URL, logo: `${BASE_URL}/logo.png` },
        serviceType: 'Brand Film Production',
        areaServed: { '@type': 'Country', name: 'India' },
      },
      {
        '@type': 'ItemList',
        name: 'Brand Film Agency City Pages',
        itemListElement: cities.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: `Brand Film Agency in ${c.city}`,
          url: `${BASE_URL}/brand-film-agency/${c.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Brand Film Agency India', item: `${BASE_URL}/brand-film-agency-india` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#080808', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(80px, 12vw, 160px) 24px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
          Brand Film Production · Across India
        </p>
        <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(40px, 6vw, 90px)', fontWeight: 700, color: '#F5F5F0', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '8px' }}>
          Brand Films. Every City.
        </h1>
        <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(40px, 6vw, 90px)', fontWeight: 700, fontStyle: 'italic', color: 'rgba(245,245,240,0.22)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '36px' }}>
          Every Industry.
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 400, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '540px', marginBottom: '40px' }}>
          Zyra is India&apos;s AI-native brand film studio. We work with brands in Mumbai, Delhi, Bangalore, and across the country — creating cinematic films that make your brand impossible to ignore, delivered in 3 weeks.
        </p>
        <a href="https://calendly.com/marketersatzyra/30min" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#F5F5F0', color: '#080808', fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '16px 32px', textDecoration: 'none' }}>
          Book a 15-min Call <ArrowUpRight size={13} />
        </a>
      </section>

      {/* ── City Grid ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F5F4F0', padding: 'clamp(64px, 8vw, 120px) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '56px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(8,8,8,0.3)', marginBottom: '20px' }}>Select Your City</p>
            <h2 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 56px)', fontWeight: 700, color: '#080808', letterSpacing: '-0.02em', lineHeight: 1.0 }}>Find Your City</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
            {cities.map(city => (
              <Link key={city.slug} href={`/brand-film-agency/${city.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ padding: '32px', borderRadius: '6px', border: '1px solid rgba(8,8,8,0.1)', height: '100%' }}>
                  <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 700, color: '#080808', letterSpacing: '-0.01em', marginBottom: '10px' }}>
                    Brand Film Agency in {city.city}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(8,8,8,0.48)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {city.ctaLine}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(8,8,8,0.3)' }}>
                    View page <ArrowUpRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark={false} />
    </>
  )
}
