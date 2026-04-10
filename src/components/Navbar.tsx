'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/dummy-content'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

const ALL_LINKS = [...NAV_LINKS, { label: 'Contact', href: '/contact' }]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(12px)' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
      >
        <div className="px-4 md:px-8 lg:px-12 h-[48px] md:h-[58px] flex items-center justify-between">

          {/* Left — MENU trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2.5 group"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ minWidth: '120px' }}
          >
            <div className="flex flex-col gap-[5px]">
              <motion.span
                className="block h-px bg-white"
                style={{ width: '22px' }}
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              />
              <motion.span
                className="block h-px bg-white"
                style={{ width: '22px' }}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px bg-white"
                style={{ width: '22px' }}
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              />
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', 'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              Menu
            </span>
          </button>

          {/* Center — ZYRA logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/zyra-logo.webp" alt="Zyra" width={150} height={54} style={{ objectFit: 'contain' }} priority />
          </Link>

          {/* Right — balance spacer */}
          <div style={{ minWidth: '120px' }} />
        </div>
      </motion.nav>

      {/* ── Half-screen drawer ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — right half, semi-transparent */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel — left half */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-50 flex flex-col"
              style={{
                width: 'clamp(280px, 100vw, 680px)',
                backgroundColor: '#080808',
              }}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
            >
              {/* Top row: ZYRA logo + close */}
              <div
                style={{
                  height: 'clamp(64px, 10vw, 80px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 clamp(28px, 5vw, 56px)',
                  flexShrink: 0,
                }}
              >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Image src="/zyra-logo.webp" alt="Zyra" width={120} height={44} style={{ objectFit: 'contain' }} />
                </Link>

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '20px',
                    lineHeight: 1,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#FFFFFF')}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.5)')}
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <nav
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '0 clamp(28px, 5vw, 56px)',
                  gap: '4px',
                }}
              >
                {ALL_LINKS.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: EASE_OUT_EXPO }}
                    >
                      <Link
                        href={link.href}
                        style={{
                          display: 'block',
                          fontFamily: "'EB Garamond', Georgia, serif",
                          fontSize: 'clamp(36px, 5vw, 64px)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.15,
                          color: isActive ? '#2bc8a1' : '#FFFFFF',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease, opacity 0.2s ease',
                        }}
                        onMouseEnter={e => {
                          if (!isActive) (e.currentTarget as HTMLAnchorElement).style.opacity = '0.4'
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = '1'
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Bottom: social icons + email */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                style={{
                  padding: 'clamp(24px, 4vh, 40px) clamp(28px, 5vw, 56px)',
                  flexShrink: 0,
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                {/* Social icons */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  {[
                    { label: 'Instagram', icon: 'IG', href: 'https://instagram.com' },
                    { label: 'X',         icon: 'X',  href: 'https://x.com' },
                    { label: 'LinkedIn',  icon: 'in', href: 'https://linkedin.com' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.35)',
                        textDecoration: 'none',
                        letterSpacing: '0.04em',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF')}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)')}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Email */}
                <a
                  href="mailto:marketersatzyra@gmail.com"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.2)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.2)')}
                >
                  marketersatzyra@gmail.com
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
