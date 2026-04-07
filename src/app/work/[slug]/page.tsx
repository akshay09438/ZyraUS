import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ALL_PROJECTS, getProjectBySlug } from '@/lib/work-data'
import { WorkProjectClient } from './WorkProjectClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title}, ${project.client} | Zyra AI`,
    description: project.brief,
  }
}

export default async function WorkProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const others = ALL_PROJECTS.filter(p => p.slug !== slug).slice(0, 3)

  return <WorkProjectClient project={project} others={others} />
}
