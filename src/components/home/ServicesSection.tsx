'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/dummy-content'

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#080808' }}>
      <div className="px-6 md:px-12 lg:px-20 mb-12">
        <span className="section-label block mb-4">What We Build</span>
        <h2
          className="font-display font-bold"
          style={{ fontSize: 'clamp(28px, 3.5vw, 56px)', color: '#F5F5F0' }}
        >
          Four Studios. One Roof.
        </h2>
      </div>

      <div className="px-6 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '2/3', borderRadius: '6px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={service.video}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0.6 }}
      />

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
        }}
      />

      {/* Gold tag — top left */}
      <div className="absolute top-4 left-4">
        <span
          className="text-[10px] font-medium tracking-[0.15em] uppercase"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {service.label}
        </span>
      </div>

      {/* Arrow — top right, hover only */}
      <div
        className="absolute top-4 right-4 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <span style={{ color: '#F5F5F0', fontSize: '18px' }}>→</span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="block text-xs font-mono mb-1"
          style={{ color: '#9BA3AF' }}
        >
          {num}
        </span>
        <h3
          className="font-display font-bold text-xl leading-tight mb-1"
          style={{ color: '#F5F5F0' }}
        >
          {service.title}
        </h3>
        <p className="text-sm italic" style={{ color: '#9BA3AF' }}>
          {service.desc.slice(0, 60)}
        </p>
      </div>
    </div>
  )
}
