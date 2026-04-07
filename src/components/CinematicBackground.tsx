'use client'

interface CinematicBackgroundProps {
  src: string
  poster?: string
}

export function CinematicBackground({ src, poster }: CinematicBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* The video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Layer 1: Color grade — brand tint */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,15,0.4) 0%, rgba(233,69,96,0.05) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Layer 2: Vignette — darkens edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,15,0.9) 100%)',
        }}
      />

      {/* Layer 3: Bottom fade — video dissolves into bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #0A0A0F 100%)',
        }}
      />

      {/* Layer 4: Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-1/4"
        style={{
          background: 'linear-gradient(to top, transparent 0%, rgba(10,10,15,0.6) 100%)',
        }}
      />

      {/* Layer 5: Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
