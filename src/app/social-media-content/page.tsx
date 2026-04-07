import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/service-data'
import { ServicePageTemplate } from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

const service = getServiceBySlug('social-media-content')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDesc,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDesc,
    url: 'https://www.thezyra.in/social-media-content',
  },
}

export default function SocialMediaContentPage() {
  if (!service) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Social Media Content Engine',
        description: service.metaDesc,
        provider: { '@type': 'Organization', name: 'Zyra AI Content Studio', url: 'https://www.thezyra.in' },
        areaServed: 'India',
        serviceType: 'Social Media Content Production',
        url: 'https://www.thezyra.in/social-media-content',
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
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thezyra.in' },
          { '@type': 'ListItem', position: 2, name: 'Social Media Content', item: 'https://www.thezyra.in/social-media-content' },
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
