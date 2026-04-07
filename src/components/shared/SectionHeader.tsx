import { TextReveal, FadeInUp } from '@/components/animations'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  titleClass?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  titleClass = '',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <FadeInUp>
        <span className="accent-line" style={align === 'center' ? { margin: '0 auto 20px' } : {}} />
        <span className="section-label block mb-5">{label}</span>
      </FadeInUp>
      <TextReveal
        text={title}
        className={`font-display font-bold text-white tracking-[-0.02em] leading-[1.0] ${titleClass}`}
        style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}
        stagger={0.07}
      />
      {subtitle && (
        <FadeInUp delay={0.2} className="mt-5">
          <p className="font-body text-white/40 text-lg leading-relaxed max-w-xl">
            {subtitle}
          </p>
        </FadeInUp>
      )}
    </div>
  )
}
