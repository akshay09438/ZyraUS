'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle } from 'lucide-react'

interface FormValues {
  name: string
  company: string
  email: string
  service: string
  budget: string
  message: string
}

const SERVICES = [
  'AI Brand Films & Commercials',
  'Micro Drama Production',
  'Performance Marketing Creatives',
  'Social Media Content Engine',
  'Not sure yet',
]

const BUDGETS = [
  'Under ₹5L',
  '₹5L – ₹15L',
  '₹15L – ₹40L',
  '₹40L+',
]

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const inputClass = `w-full bg-transparent border border-white/10 text-white placeholder-white/20
  font-body text-sm px-5 py-4 focus:outline-none focus:border-white/40
  transition-colors duration-300`

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    // Simulate async submit, wire to Formspree or backend
    await new Promise(r => setTimeout(r, 1200))
    console.log('Form data:', data)
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="flex flex-col items-start gap-6 py-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <CheckCircle size={40} strokeWidth={1} className="text-white/50" />
          <div>
            <h3 className="font-display font-bold text-white text-3xl tracking-tight mb-3">
              Brief received.
            </h3>
            <p className="font-body text-white/40 text-base leading-relaxed max-w-sm">
              We'll review your project and come back with ideas within 24 hours.
              Check your inbox, we may follow up with a short clarifying question.
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="font-body text-white/30 hover:text-white text-sm transition-colors duration-300 underline underline-offset-4"
          >
            Submit another brief
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Row: name + company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register('name', { required: true })}
                placeholder="Your name *"
                className={`${inputClass} ${errors.name ? 'border-white/40' : ''}`}
              />
              {errors.name && <p className="font-body text-white/30 text-xs mt-1 pl-1">Required</p>}
            </div>
            <div>
              <input
                {...register('company')}
                placeholder="Company"
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
              type="email"
              placeholder="Email address *"
              className={`${inputClass} ${errors.email ? 'border-white/40' : ''}`}
            />
            {errors.email && <p className="font-body text-white/30 text-xs mt-1 pl-1">Valid email required</p>}
          </div>

          {/* Service + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                {...register('service', { required: true })}
                className={`${inputClass} ${errors.service ? 'border-white/40' : ''}`}
                defaultValue=""
              >
                <option value="" disabled className="bg-bg-primary">Service *</option>
                {SERVICES.map(s => (
                  <option key={s} value={s} className="bg-bg-primary">{s}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                {...register('budget')}
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled className="bg-bg-primary">Budget range</option>
                {BUDGETS.map(b => (
                  <option key={b} value={b} className="bg-bg-primary">{b}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register('message', { required: true })}
              placeholder="Tell us about your project *"
              rows={5}
              className={`${inputClass} resize-none ${errors.message ? 'border-white/40' : ''}`}
            />
            {errors.message && <p className="font-body text-white/30 text-xs mt-1 pl-1">Required</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="self-start inline-flex items-center gap-3 bg-white text-black
              font-body font-semibold text-xs uppercase tracking-[0.18em]
              px-8 py-4 hover:bg-white/90 transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Send Brief'}
            {!submitting && <ArrowUpRight size={13} />}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
