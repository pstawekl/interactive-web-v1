import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { motion, useInView } from 'framer-motion'
import { Award, CheckCircle2, Headphones, Lock, Shield, Zap } from 'lucide-react'
import { useRef } from 'react'
import ScrollDownButton from './ui/scroll-down-button'

const iconMap = {
  shield: Shield,
  award: Award,
  headphones: Headphones,
  lock: Lock,
  check: CheckCircle2,
  zap: Zap,
}

export function TrustBadges() {
  const { t, ts } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const badgesRaw = t('trustBadges')
  const badges = Array.isArray(badgesRaw)
    ? badgesRaw as Array<{
        title: string
        description: string
        icon: string
      }>
    : []

  return (
    <section ref={ref} id="trust" className="interactive-section relative w-full overflow-hidden bg-[#09090b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(147,51,234,0.18),transparent_32%),radial-gradient(circle_at_84%_78%,rgba(6,182,212,0.12),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="interactive-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <SectionHeading eyebrow="// Standard pracy" title={ts('trustTitle')} />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, index) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap] || Shield
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              >
                <Card className="group h-full rounded-2xl border-white/10 bg-[#0e0e11]/86 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[var(--glow-purple)]">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{badge.title}</h3>
                    <p className="mt-3 font-body text-sm leading-7 text-zinc-400">{badge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
      <ScrollDownButton servicesInView={isInView} id="process" />
    </section>
  )
}
