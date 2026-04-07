import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/service-data'
import { ServicePageTemplate } from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

const service = getServiceBySlug('ai-brand-films')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDesc,
    url: 'https://www.thezyra.in/ai-brand-films',
  },
}

export default function AIBrandFilmsPage() {
  if (!service) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'AI Brand Film Production',
        description: service.metaDesc,
        provider: { '@type': 'Organization', name: 'Zyra AI Content Studio', url: 'https://www.thezyra.in' },
        areaServed: 'India',
        serviceType: 'AI Video Production',
        url: 'https://www.thezyra.in/ai-brand-films',
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://www.thezyra.in' },
          { '@type': 'ListItem', position: 2, name: 'AI Brand Films', item: 'https://www.thezyra.in/ai-brand-films' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicePageTemplate service={service} />
    </>
  )
}
