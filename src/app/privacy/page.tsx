import type { Metadata } from 'next'
import { FadeInUp } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zyra AI Content Studio',
  description: 'How Zyra collects, uses, and protects your personal information.',
}

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly, such as your name, email address, company name, and project details when you submit a brief or contact us. We may also collect usage data from our website including pages visited, time spent, and referral sources.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use your information to respond to project enquiries, deliver our services, and improve our website. We do not sell, rent, or share your personal data with third parties for marketing purposes. We may share data with service providers who assist us in operating our business under strict confidentiality agreements.',
  },
  {
    title: 'Data Storage and Security',
    body: 'Your data is stored on secure servers and protected by industry-standard encryption. We retain contact and brief information for up to 24 months to support ongoing project relationships. You may request deletion of your data at any time by contacting us at marketersatzyra@gmail.com.',
  },
  {
    title: 'Cookies',
    body: 'Our website uses essential cookies to ensure basic functionality, and analytics cookies to understand how visitors interact with our site. You can disable non-essential cookies through your browser settings. We do not use advertising or tracking cookies.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to access, correct, or delete your personal data at any time. You may also object to processing or request data portability. To exercise these rights, contact us at marketersatzyra@gmail.com. We will respond within 30 days.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy periodically. Material changes will be communicated via email if we have your contact details. Continued use of our website constitutes acceptance of the updated policy.',
  },
]

export default function PrivacyPage() {
  return (
    <section className="bg-bg-primary min-h-screen pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <FadeInUp className="mb-16">
          <span className="section-label block mb-4">Legal</span>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl tracking-[-0.025em] leading-[1.05]">Privacy Policy</h1>
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
            For any privacy-related questions, contact us at{' '}
            <a href="mailto:marketersatzyra@gmail.com" className="text-white/60 hover:text-white transition-colors duration-300">
              marketersatzyra@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
