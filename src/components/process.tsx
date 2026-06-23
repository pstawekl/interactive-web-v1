import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Code2, MessageSquare, Palette, Rocket } from 'lucide-react'
import { useRef } from 'react'
import ScrollDownButton from './ui/scroll-down-button'

const iconMap = {
  message: MessageSquare,
  palette: Palette,
  code: Code2,
  rocket: Rocket,
}

export function Process() {
  const { t, ts, currentLanguage } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stepsRaw = t('processSteps')
  const steps = Array.isArray(stepsRaw)
    ? stepsRaw as Array<{
        number: number
        title: string
        description: string
        icon: string
      }>
    : []

  return (
    <section ref={ref} id="process" className="interactive-section relative w-full overflow-hidden bg-[#0e0e11]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_86%_24%,rgba(147,51,234,0.16),transparent_34%)]"
      />

      <div className="interactive-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <SectionHeading
            eyebrow={currentLanguage === 'en' ? '// Process' : '// Proces'}
            title={ts('processTitle')}
            description={ts('processDescription')}
          />
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-35 lg:left-1/2 lg:block" />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || CheckCircle2

              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Card className="group h-full rounded-3xl border-white/10 bg-[#09090b]/78 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[var(--glow-purple)]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                          <Icon className="h-7 w-7" />
                        </div>
                        <span className="font-mono text-3xl font-bold text-white/10">0{step.number}</span>
                      </div>
                      <h3 className="mt-6 font-display text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-3 font-body text-sm leading-7 text-zinc-400">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <ScrollDownButton servicesInView={isInView} id="caseStudies" />
    </section>
  )
}
