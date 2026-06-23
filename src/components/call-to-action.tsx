import { Card, CardContent } from '@/components/ui/card'
import { useTranslation } from '@/hooks/useTranslation'
import { useNavigate } from '@tanstack/react-router'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CalendarCheck, ShieldCheck, Zap } from 'lucide-react'
import React, { useRef } from 'react'
import { Button } from './ui/button'

const CallToAction: React.FC = () => {
  const navigate = useNavigate()
  const { ts, currentLanguage } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '0px' })
  const isEnglish = currentLanguage === 'en'
  const eyebrow = isEnglish ? '// Free consultation' : '// Bezpłatna konsultacja'
  const proofItems = isEnglish
    ? [
        { icon: CalendarCheck, label: 'Quote in 24-48h' },
        { icon: Zap, label: 'Implementation plan without guesswork' },
        { icon: ShieldCheck, label: 'Secure technology and support' },
      ]
    : [
        { icon: CalendarCheck, label: 'Wycena w 24-48h' },
        { icon: Zap, label: 'Plan wdrożenia bez zgadywania' },
        { icon: ShieldCheck, label: 'Bezpieczne technologie i wsparcie' },
      ]

  return (
    <section id="callToAction" className="interactive-section relative w-full overflow-hidden bg-[#09090b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_78%_30%,rgba(147,51,234,0.24),transparent_36%),radial-gradient(circle_at_50%_86%,rgba(219,39,119,0.16),transparent_34%)]"
      />

      <div className="interactive-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <Card className="relative overflow-hidden rounded-3xl border-white/10 bg-[#0e0e11]/86 shadow-[0_28px_110px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 [background:var(--gradient-brand)]" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(6,182,212,0.14),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(219,39,119,0.16),transparent_34%)]"
            />

            <CardContent className="relative z-10 grid grid-cols-1 gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
                  {eyebrow}
                </p>
                <h2 className="interactive-gradient-text mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  {ts('indexCallToActionTitle')}
                </h2>
                <p className="mt-6 max-w-2xl font-body text-base leading-8 text-zinc-300 sm:text-lg">
                  {ts('indexCallToActionDescription')}
                </p>

                <Button
                  onClick={() => navigate({ to: '/contact' })}
                  variant="interactive"
                  size="lg"
                  className="mt-8"
                  aria-label={ts('contactUs')}
                >
                  {ts('contactUs')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid content-center gap-4">
                {proofItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="interactive-glass flex items-center gap-4 rounded-2xl p-4">
                      <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-body text-sm font-semibold text-zinc-200">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
