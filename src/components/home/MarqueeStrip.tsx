const ITEMS = [
  'AI Brand Films',
  'Micro Dramas',
  'Performance Creatives',
  'Social Content',
  'India',
  'OTT Quality',
  'AI Native',
]

// Double the array for seamless loop
const DOUBLED = [...ITEMS, ...ITEMS]

export function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#080808',
        borderTop: '1px solid #1F2937',
        borderBottom: '1px solid #1F2937',
        paddingTop: '14px',
        paddingBottom: '14px',
      }}
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {DOUBLED.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-[11px] font-medium tracking-[0.2em] uppercase px-6"
              style={{ color: '#4B5563' }}
            >
              {item}
            </span>
            <span
              className="inline-block w-1 h-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
