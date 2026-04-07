import type { Metadata } from 'next'
import { FadeInUp } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Terms of Service | Zyra AI Content Studio',
  description: 'Terms and conditions for working with Zyra AI Content Studio.',
}

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: 'By engaging Zyra for services or using our website, you agree to these Terms of Service. If you do not agree to any part of these terms, please do not use our services.',
  },
  {
    title: 'Services',
    body: 'Zyra provides AI-assisted content production services including brand films, micro drama production, performance marketing creatives, and social media content. The specific deliverables, timelines, and pricing for each project are defined in individual project agreements or statements of work.',
  },
  {
    title: 'Payment Terms',
    body: 'Projects require a 50% deposit before work begins and the remaining 50% upon delivery of final files. Late payments beyond 14 days of invoice date may incur a 2% monthly interest charge. Zyra reserves the right to pause active projects where payment is overdue by more than 30 days.',
  },
  {
    title: 'Intellectual Property',
    body: 'Upon receipt of full payment, all creative work produced by Zyra for a client project transfers to the client. Zyra retains the right to display the work in its portfolio and marketing materials unless a written portfolio exclusion is agreed upon. Zyra retains ownership of all underlying tools, templates, workflows, and proprietary processes used in production.',
  },
  {
    title: 'Confidentiality',
    body: 'Both parties agree to keep confidential any non-public information shared in connection with a project, including briefs, strategies, creative concepts, and business information. This obligation survives termination of the project relationship for a period of two years.',
  },
  {
    title: 'Revisions and Approvals',
    body: 'Each project agreement specifies the number of revision rounds included. Additional revisions beyond the agreed scope will be billed at our standard hourly rate. Client approval at each milestone constitutes acceptance of that stage of work.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Zyra\'s liability for any claim arising from the services shall not exceed the total fees paid for the specific project in dispute. Zyra is not liable for indirect, incidental, or consequential damages including loss of revenue or business opportunity.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Gurgaon, Haryana.',
  },
]

export default function TermsPage() {
  return (
    <section className="bg-bg-primary min-h-screen pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-16">
          <span className="section-label block mb-4">Legal</span>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl tracking-[-0.025em] leading-[1.05]">Terms of Service</h1>
          <p className="font-body text-white/30 text-sm mt-4">Last updated: March 2026</p>
        </FadeInUp>

        <div className="flex flex-col divide-y divide-white/[0.05]">
          {SECTIONS.map(section => (
            <div key={section.title} className="py-10">
              <h2 className="font-display font-bold text-white text-xl mb-4">{section.title}</h2>
              <p className="font-body text-white/50 text-base leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-white/[0.05]">
          <p className="font-body text-white/30 text-sm leading-relaxed">
            For questions about these terms, contact us at{' '}
            <a href="mailto:marketersatzyra@gmail.com" className="text-white/60 hover:text-white transition-colors duration-300">
              marketersatzyra@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
