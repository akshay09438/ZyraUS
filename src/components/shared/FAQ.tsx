'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import type { FAQ as FAQItem } from '@/lib/service-data'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-white/[0.06]">
      {items.map(({ q, a }, i) => (
        <div key={i}>
          <button
            className="w-full flex items-start justify-between gap-6 py-6 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`font-display text-lg md:text-xl leading-snug transition-colors duration-300 ${
              open === i ? 'text-white' : 'text-white/60 group-hover:text-white'
            }`}>
              {q}
            </span>
            <span className="shrink-0 mt-1 text-white/30 group-hover:text-white transition-colors duration-300">
              {open === i
                ? <Minus size={16} strokeWidth={1.5} />
                : <Plus  size={16} strokeWidth={1.5} />
              }
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="overflow-hidden"
              >
                <p className="font-body text-white/45 text-base leading-relaxed pb-6 max-w-2xl">
                  {a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
