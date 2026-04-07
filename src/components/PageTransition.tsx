'use client'

import { motion } from 'framer-motion'

export function PageProgressBar() {
  return (
    <motion.div
      initial={{ scaleX: 0, transformOrigin: 'left' }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: '#FFFFFF',
        zIndex: 9999,
        transformOrigin: 'left',
      }}
    />
  )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
