import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import cities from '@/data/pseo-cities.json'
import { CityPageClient } from './CityPageClient'

const BASE_URL = 'https://zyra-us.vercel.app'

const SHARED_FAQS = [
  {
    q: 'How long does a brand film take to deliver?',
    a: '10–14 days from approved brief to final delivery. For time-critical campaigns we have delivered in 7 days. Micro drama series (5 episodes) take 3–4 weeks.',
  },
  {
    q: 'What is the budget range for a brand film?',
    a: 'Brand films start at ₹6L and scale to ₹25L depending on scope. Performance creative packages (3+ ad variants) start at ₹3–4L. We are transparent about pricing from the first call.',
  },
]

type Props = { params: Promise<{ city: string }> }

export function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = cities.find(c => c.slug === slug)
  if (!city) return {}

  const url = `${BASE_URL}/brand-film-agency/${city.slug}`

  return {
    title: city.title,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url,
      siteName: 'Zyra AI Content Studio',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: city.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: city.title,
      description: city.metaDescription,
      images: ['/assets/og-image.jpg'],
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const city = cities.find(c => c.slug === slug)
  if (!city) notFound()

  const allCities = cities.map(c => ({ city: c.city, slug: c.slug }))
  const url = `${BASE_URL}/brand-film-agency/${city.slug}`
  const allFaqs = [...city.cityFaqs, ...SHARED_FAQS]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Brand Film Production in ${city.city}`,
        description: city.metaDescription,
        url,
        provider: {
          '@type': 'Organization',
          name: 'Zyra',
          url: BASE_URL,
          logo: `${BASE_URL}/logo.png`,
        },
        serviceType: 'Brand Film Production',
        areaServed: {
          '@type': 'City',
          name: city.city,
          containedInPlace: { '@type': 'Country', name: 'India' },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: allFaqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Brand Film Agency India', item: `${BASE_URL}/brand-film-agency-india` },
          { '@type': 'ListItem', position: 3, name: `Brand Film Agency in ${city.city}`, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityPageClient city={city} allCities={allCities} sharedFaqs={SHARED_FAQS} />
    </>
  )
}
