import type { Metadata, Viewport } from 'next'
import { EB_Garamond, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/animations'
import { PageProgressBar, PageTransition } from '@/components/PageTransition'
import './globals.css'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Zyra, AI Content Studio | Where AI Meets Cinematic Storytelling',
  description:
    "India's premier AI Content Studio. Brand films, micro dramas, performance creatives & social content, OTT-level quality at the speed of culture.",
  metadataBase: new URL('https://www.thezyra.in'),
  openGraph: {
    title: 'Zyra, AI Content Studio',
    description:
      "India's premier AI Content Studio. OTT-level quality at the speed of culture.",
    url: 'https://www.thezyra.in',
    siteName: 'Zyra',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyra, AI Content Studio',
    description: "India's premier AI Content Studio.",
    images: ['/assets/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${dmSans.variable}`}>
      <head>
        {/* Warm up the TCP connection to CF Stream before any iframe fires */}
        <link rel="preconnect" href="https://customer-rphzzo1xs9tbitpo.cloudflarestream.com" />
        <link rel="dns-prefetch" href="https://customer-rphzzo1xs9tbitpo.cloudflarestream.com" />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        <PageProgressBar />
        <CustomCursor />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
