import { Button } from '@/components/ui/button'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const copy = {
  pl: {
    eyebrow: '// SOFTWARE HOUSE • OD 2017',
    title: 'Rozwiązania IT, które napędzą Twój sukces',
    subtitle:
      'Od wizji po wdrożenie - profesjonalne usługi programistyczne: strony, sklepy, aplikacje webowe i rozwiązania AI.',
    primaryCta: 'Dowiedz się więcej',
    secondaryCta: 'Sprawdź projekty',
    badges: ['React', 'TypeScript', 'AI', 'ERP'],
    uptime: '99.9% uptime',
  },
  en: {
    eyebrow: '// SOFTWARE HOUSE • SINCE 2017',
    title: 'IT solutions that drive your growth',
    subtitle:
      'From vision to deployment - professional software services: websites, stores, web applications and AI solutions.',
    primaryCta: 'Learn more',
    secondaryCta: 'See projects',
    badges: ['React', 'TypeScript', 'AI', 'ERP'],
    uptime: '99.9% uptime',
  },
}

export function Hero() {
  const { currentLanguage } = useTranslation()
  const heroCopy = currentLanguage === 'en' ? copy.en : copy.pl

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="banner"
      className="relative flex min-h-[684px] w-full items-start justify-center overflow-hidden border-b border-zinc-200/80 bg-[#f8fafc] px-4 pb-24 pt-[116px] text-zinc-950 sm:px-6 lg:px-8 dark:border-white/[0.06] dark:bg-[#050506] dark:text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_23%_20%,rgba(147,51,234,0.14),transparent_34%),radial-gradient(circle_at_74%_23%,rgba(37,99,235,0.12),transparent_38%),radial-gradient(circle_at_58%_92%,rgba(46,193,171,0.12),transparent_44%),linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#f1f5f9_100%)] dark:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_23%_20%,rgba(147,51,234,0.26),transparent_35%),radial-gradient(circle_at_74%_23%,rgba(37,99,235,0.24),transparent_38%),radial-gradient(circle_at_58%_92%,rgba(46,193,171,0.16),transparent_44%),linear-gradient(180deg,#050506_0%,#08101f_45%,#061a18_100%)] dark:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(24,24,27,0.9) 1px, transparent 0)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center text-center">
        <motion.p
          className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-500 sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {heroCopy.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-7 font-display text-[clamp(3.1rem,7vw,4.85rem)] font-extrabold leading-[0.98] tracking-tight"
          style={{
            background: 'linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #db2777 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          {heroCopy.title}
        </motion.h1>

        <motion.p
          className="mt-7 max-w-[690px] font-body text-xl leading-[1.45] text-zinc-600 sm:text-[22px] dark:text-zinc-400"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          {heroCopy.subtitle}
        </motion.p>

        <motion.div
          className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.5 }}
        >
          <Button
            variant="interactive"
            size="lg"
            className="h-[52px] min-w-[232px] rounded-xl px-8 text-base"
            onClick={() => scrollTo('offer')}
            aria-label={heroCopy.primaryCta}
          >
            {heroCopy.primaryCta}
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-[52px] min-w-[196px] rounded-xl border-zinc-300 bg-white/70 px-8 text-base text-zinc-950 hover:border-purple-400/40 hover:bg-zinc-50 dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-cyan-300/25 dark:hover:bg-white/[0.04]"
            onClick={() => scrollTo('caseStudies')}
            aria-label={heroCopy.secondaryCta}
          >
            {heroCopy.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.45 }}
        >
          {heroCopy.badges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.09em] text-purple-600 dark:text-purple-300"
            >
              {item}
            </span>
          ))}
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/12 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.09em] text-emerald-600 dark:border-emerald-400/25 dark:text-emerald-300">
            {heroCopy.uptime}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
