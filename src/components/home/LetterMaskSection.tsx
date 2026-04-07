'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DUMMY_VIDEOS } from '@/lib/dummy-content'

export function LetterMaskSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Exit ZYRA by 60% scroll progress (= 90vh into 150vh section)
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 5.5])
  const y = useTransform(scrollYProgress, [0.2, 0.75], ['0vh', '-130vh'])
  const opacity = useTransform(scrollYProgress, [0.35, 0.6], [1, 0])

  const videoSrc = DUMMY_VIDEOS.brandFilm ?? Object.values(DUMMY_VIDEOS)[0]

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#F5F4F0',
        height: '150vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{ scale, y, opacity }}
          className="w-full flex flex-col items-center"
        >
          <div className="w-full">
            <svg
              viewBox="0 0 1000 320"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <defs>
                <clipPath id="zyra-clip">
                  <text
                    x="50%"
                    y="285"
                    textAnchor="middle"
                    fontFamily="'EB Garamond', Georgia, serif"
                    fontSize="290"
                    fontWeight="800"
                    letterSpacing="-12"
                  >
                    ZYRA
                  </text>
                </clipPath>
              </defs>
              <rect width="1000" height="320" fill="#F5F4F0" />
              <g clipPath="url(#zyra-clip)">
                <foreignObject x="0" y="0" width="1000" height="320">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={videoSrc}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </foreignObject>
              </g>
            </svg>
          </div>
          <p
            className="mt-6 text-xs tracking-[0.3em] uppercase"
            style={{ color: '#9BA3AF', fontFamily: "'DM Sans', 'Inter', sans-serif" }}
          >
            AI Content Studio
          </p>
        </motion.div>
      </div>
    </section>
  )
}
