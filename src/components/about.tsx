import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { motion, useInView } from 'framer-motion'
import { Award, CheckCircle2, Shield, Target, Zap } from 'lucide-react'
import { useRef } from 'react'
import { Card, CardContent } from './ui/card'
import ScrollDownButton from './ui/scroll-down-button'

const iconMap = {
  award: Award,
  shield: Shield,
  zap: Zap,
  target: Target,
}

export function About() {
  const { t, ts } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const valuesRaw = t('aboutValues')
  const values = Array.isArray(valuesRaw) ? valuesRaw as Array<{ title: string; description: string; icon: string }> : []
  const achievementsRaw = t('aboutAchievements')
  const achievements = Array.isArray(achievementsRaw) ? achievementsRaw as Array<string> : []

  return (
    <section ref={ref} id="about" className="interactive-section relative w-full overflow-hidden bg-[#09090b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(37,99,235,0.16),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(147,51,234,0.16),transparent_32%)]"
      />

      <div className="interactive-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <SectionHeading
            eyebrow="// O nas"
            title={ts('aboutTitle')}
            description={ts('aboutDescription')}
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap] || Award

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              >
                <Card className="group h-full rounded-2xl border-white/10 bg-[#0e0e11]/86 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[var(--glow-purple)]">
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{value.title}</h3>
                    <p className="mt-3 font-body text-sm leading-7 text-zinc-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {achievements.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="interactive-glass rounded-3xl border-white/10">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-center font-display text-2xl font-bold text-white">
                  {ts('aboutAchievementsTitle')}
                </h3>
                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      initial={{ opacity: 0, x: -14 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                      transition={{ delay: 0.38 + index * 0.06, duration: 0.35 }}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
                      <p className="font-body text-sm leading-6 text-zinc-300">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
      <ScrollDownButton servicesInView={isInView} id="stats" />
    </section>
  )
}
