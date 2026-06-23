import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Calendar, Clock, Code2, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import ScrollDownButton from './ui/scroll-down-button'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })

    return unsubscribe
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export function Stats() {
  const { t, ts } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: Calendar,
      value: 7,
      suffix: '+',
      label: t('statsYears'),
    },
    {
      icon: Code2,
      value: 45,
      suffix: '+',
      label: t('statsProjects'),
    },
    {
      icon: Users,
      value: 98,
      suffix: '%',
      label: t('statsClients'),
    },
    {
      icon: Clock,
      value: 4,
      suffix: '-6',
      label: t('statsTime'),
      staticValue: '4-6',
    },
  ]

  return (
    <section ref={ref} id="stats" className="interactive-section relative w-full overflow-hidden bg-[#0e0e11]">
      <div aria-hidden="true" className="absolute inset-0 [background:var(--gradient-band)] opacity-90" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
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
          <SectionHeading eyebrow="// Wyniki" title={ts('statsTitle')} gradient={false} className="[&_h2]:text-white [&_p]:text-white/70" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label.toString()}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              >
                <Card className="group h-full rounded-2xl border-white/15 bg-[#09090b]/72 text-white shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl hover:-translate-y-1 hover:border-white/35 hover:bg-[#09090b]/84">
                  <CardContent className="p-7 text-center">
                    <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="interactive-gradient-text font-display text-4xl font-extrabold leading-none sm:text-5xl">
                      {stat.staticValue ? stat.staticValue : <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
                    </div>
                    <p className="mt-4 font-body text-sm font-medium leading-6 text-white/78">{stat.label.toString()}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
      <ScrollDownButton servicesInView={isInView} id="offer" />
    </section>
  )
}
