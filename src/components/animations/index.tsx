'use client'

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// ── Premium easing curves (inspired by promise.ai / secretlevel.co) ──────────
const EASE_OUT_EXPO  = [0.16, 1, 0.3, 1]    as [number,number,number,number]
const EASE_IN_OUT    = [0.83, 0, 0.17, 1]   as [number,number,number,number]
const EASE_OUT_QUART = [0.25, 1, 0.5, 1]    as [number,number,number,number]

// ── FADE IN UP ────────────────────────────────────────────────────────────────
export function FadeInUp({
  children,
  delay = 0,
  className = '',
  duration = 0.9,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  )
}

// ── STAGGER CONTAINER ─────────────────────────────────────────────────────────
export function StaggerContainer({
  children,
  className = '',
  stagger = 0.12,
  style,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

// ── STAGGER ITEM ──────────────────────────────────────────────────────────────
export const StaggerItem = motion.div

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
}

// ── MASKED WORD REVEAL ────────────────────────────────────────────────────────
// Each word slides up from clipped overflow — the "unexpected" premium effect
export function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.07,
  style,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  style?: React.CSSProperties
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const words = text.split(' ')

  return (
    <div ref={ref} className={className} style={style}>
      <motion.span
        className="flex flex-wrap gap-x-[0.22em]"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {words.map((word, i) => (
          // The clip is what creates the "masked slide-up" effect
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '115%', opacity: 0, rotateX: 8 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.9,
                    ease: EASE_OUT_EXPO,
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </div>
  )
}

// ── LINE REVEAL — single line slides up from bottom of clip ──────────────────
export function LineReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// ── PARALLAX ──────────────────────────────────────────────────────────────────
export function Parallax({
  children,
  speed = 0.5,
  className = '',
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 20}%`])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// ── MAGNETIC BUTTON ───────────────────────────────────────────────────────────
export function MagneticButton({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      style={{ transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
    >
      {children}
    </div>
  )
}

// ── ANIMATED COUNTER ──────────────────────────────────────────────────────────
function CountUp({ target, duration }: { target: number; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [target, duration])

  return <>{count}</>
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {prefix}
        {isInView ? <CountUp target={target} duration={duration} /> : '0'}
        {suffix}
      </motion.span>
    </div>
  )
}

// ── REVEAL ON SCROLL — wraps any block with a smooth fade+translate ───────────
export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 50 : 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  )
}

// ── CUSTOM CURSOR ─────────────────────────────────────────────────────────────
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`
      }
    }

    const addHover = () => setIsHovering(true)
    const removeHover = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full border border-white/40 pointer-events-none z-[9999] hidden md:block"
        style={{
          width: isHovering ? '44px' : '28px',
          height: isHovering ? '44px' : '28px',
          marginLeft: isHovering ? '-6px' : '0',
          marginTop: isHovering ? '-6px' : '0',
          opacity: isHovering ? 0.9 : 0.5,
          transition: 'transform 0.1s ease-out, width 0.25s, height 0.25s, opacity 0.25s, margin 0.25s',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] hidden md:block"
        style={{ transition: 'transform 0.05s ease-out' }}
      />
    </>
  )
}
