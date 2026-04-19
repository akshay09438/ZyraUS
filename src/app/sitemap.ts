import type { MetadataRoute } from 'next'
import { ALL_POSTS } from '@/lib/blog-data'
import { ALL_PROJECTS } from '@/lib/work-data'
import cities from '@/data/pseo-cities.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://zyra-us.vercel.app'
  const now = new Date()

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '',                        priority: 1.0, freq: 'weekly'  },
    { path: '/services',               priority: 0.85, freq: 'monthly' },
    { path: '/ai-brand-films',         priority: 0.9, freq: 'monthly' },
    { path: '/micro-drama-production', priority: 0.9, freq: 'monthly' },
    { path: '/ai-ad-creatives',        priority: 0.9, freq: 'monthly' },
    { path: '/social-media-content',   priority: 0.9, freq: 'monthly' },
    { path: '/work',                   priority: 0.8, freq: 'weekly'  },
    { path: '/about',                  priority: 0.7, freq: 'monthly' },
    { path: '/blog',                   priority: 0.8, freq: 'weekly'  },
    { path: '/contact',                priority: 0.8, freq: 'monthly' },
    { path: '/faq',                    priority: 0.6, freq: 'monthly' },
    { path: '/privacy',                priority: 0.3, freq: 'yearly'  },
    { path: '/terms',                  priority: 0.3, freq: 'yearly'  },
  ]

  const blogEntries: MetadataRoute.Sitemap = ALL_POSTS.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const workEntries: MetadataRoute.Sitemap = ALL_PROJECTS.map(p => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const cityEntries: MetadataRoute.Sitemap = cities.map(c => ({
    url: `${base}/brand-film-agency/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticRoutes.map(({ path, priority, freq }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    })),
    { url: `${base}/brand-film-agency-india`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    ...cityEntries,
    ...blogEntries,
    ...workEntries,
  ]
}
