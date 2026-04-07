const LOGOS = [
  { src: '/logos/1.png',  alt: 'Logo 1' },
  { src: '/logos/2.png',  alt: 'Logo 2' },
  { src: '/logos/3.png',  alt: 'Logo 3' },
  { src: '/logos/4.png',  alt: 'Logo 4' },
  { src: '/logos/5.png',  alt: 'Logo 5' },
  { src: '/logos/6.png',  alt: 'Logo 6' },
  { src: '/logos/7.png',  alt: 'Logo 7' },
  { src: '/logos/8.png',  alt: 'Logo 8' },
  { src: '/logos/9.png',  alt: 'Logo 9' },
  { src: '/logos/10.png', alt: 'Logo 10' },
  { src: '/logos/11.png', alt: 'Logo 11' },
  { src: '/logos/12.png', alt: 'Logo 12' },
  { src: '/logos/13.png', alt: 'Logo 13' },
  { src: '/logos/14.png', alt: 'Logo 14' },
  { src: '/logos/15.png', alt: 'Logo 15' },
  { src: '/logos/16.png', alt: 'Logo 16' },
  { src: '/logos/17.png', alt: 'Logo 17' },
]

export function LogoTicker() {
  return (
    <section
      style={{
        background: '#080808',
        paddingTop: '100px',
        paddingBottom: '110px',
        position: 'relative',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C9A96E',
            fontWeight: 800,
            marginBottom: '16px',
          }}
        >
          Trusted by brands that
        </p>
        <h2
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(48px, 8vw, 100px)',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#F5F4F0',
            margin: 0,
          }}
        >
          Shape The World
        </h2>
      </div>

      {/* Top fade — smooth entry from hero */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, #080808, transparent)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Left/right edge fades */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 8%, rgba(0,0,0,0) 92%, rgba(0,0,0,1) 100%)',
          background: '#080808',
        }}
      />

      {/* Overflow clip wrapper */}
      <div style={{ overflow: 'hidden', width: '100%', position: 'relative', zIndex: 3 }}>
        {/* Track */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'logoScroll 25s linear infinite',
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                marginRight: '64px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: '140px',
                  width: 'auto',
                  maxWidth: '300px',
                  objectFit: 'contain',
                  opacity: 0.85,
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
