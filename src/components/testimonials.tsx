import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useRef } from 'react'
import ScrollDownButton from './ui/scroll-down-button'

export function Testimonials() {
  const { t, ts, currentLanguage } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonialsRaw = t('testimonials')
  const testimonials = Array.isArray(testimonialsRaw)
    ? testimonialsRaw as Array<{
        name: string
        role: string
        rating: number
        text: string
      }>
    : []

  return (
    <section id="testimonials" ref={ref} className="interactive-section relative w-full overflow-hidden bg-[#0e0e11]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(147,51,234,0.14),transparent_32%),radial-gradient(circle_at_84%_74%,rgba(6,182,212,0.1),transparent_34%)]"
      />

      <div className="interactive-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <SectionHeading
            eyebrow={currentLanguage === 'en' ? '// Client reviews' : '// Opinie klientów'}
            title={ts('testimonialsTitle')}
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ delay: index * 0.06, duration: 0.42, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="group h-full rounded-3xl border-white/10 bg-[#09090b]/78 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[var(--glow-purple)]">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                      <Quote className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                  </div>

                  <p className="flex-1 font-body text-sm leading-7 text-zinc-300">"{testimonial.text}"</p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-display text-base font-bold text-white">{testimonial.name}</p>
                    <p className="mt-1 font-body text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollDownButton servicesInView={isInView} id="callToAction" />
    </section>
  )
}
