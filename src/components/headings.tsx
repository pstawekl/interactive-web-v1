import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { useNavigate } from '@tanstack/react-router'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Code2, GraduationCap, Globe2, ServerCog } from 'lucide-react'
import { ReactElement, useRef } from 'react'
import { Button } from './ui/button'
import ScrollDownButton from './ui/scroll-down-button'

export function Headings() {
  return (
    <div id="headings">
      <HeadingSelections />
      <HeadingDescription />
    </div>
  )
}

function HeadingSelections() {
  const { t, ts, currentLanguage } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '0px' })
  const offerDescription = currentLanguage === 'en'
    ? 'Websites, stores, and applications designed for a clear business goal: more inquiries, smoother sales, and less manual work.'
    : 'Strony, sklepy i aplikacje projektowane pod realny cel biznesowy: więcej zapytań, sprawniejsza sprzedaż i mniej ręcznej pracy.'

  const selections = [
    {
      title: t('onlineStore'),
      description: t('indexHeadingSelections1Description'),
      price: 1699,
      icon: <Globe2 className="h-7 w-7" />,
      link: '/ecommerce',
      delay: 0.08,
    },
    {
      title: t('webApplications'),
      description: t('indexHeadingSelections2Description'),
      price: 999,
      icon: <Code2 className="h-7 w-7" />,
      link: '/www',
      delay: 0.16,
    },
    {
      title: t('courses'),
      description: t('indexHeadingSelections3Description'),
      price: 999,
      icon: <GraduationCap className="h-7 w-7" />,
      link: '/courses',
      delay: 0.24,
    },
  ]

  return (
    <section id="offer" ref={ref} className="interactive-section relative w-full overflow-hidden bg-[#09090b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(6,182,212,0.12),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(147,51,234,0.18),transparent_32%)]"
      />

      <div className="interactive-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <SectionHeading
            eyebrow="// Oferta"
            title={ts('indexHeadingSelectionsTitle')}
            description={offerDescription}
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {selections.map((item) => (
            <motion.div
              key={item.link}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            >
              <SelectionPick
                title={item.title.toString()}
                description={item.description.toString()}
                price={item.price}
                icon={item.icon}
                link={item.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollDownButton servicesInView={isInView} id="description" />
    </section>
  )
}

function HeadingDescription() {
  const { ts, currentLanguage } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '0px' })
  const isEnglish = currentLanguage === 'en'
  const frontCard = isEnglish
    ? 'React, TypeScript, and interfaces refined for speed, clarity, and conversion.'
    : 'React, TypeScript i interfejsy dopracowane pod szybkość, czytelność oraz konwersję.'
  const systemsCard = isEnglish
    ? 'E-commerce, LMS, APIs, automations, and stable foundations for business processes.'
    : 'E-commerce, LMS, API, automatyzacje i stabilne zaplecze dla procesów biznesowych.'

  return (
    <section id="description" className="interactive-section relative w-full overflow-hidden bg-[#0e0e11]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_86%,rgba(219,39,119,0.12),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(37,99,235,0.12),transparent_34%)]"
      />

      <div className="interactive-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <SectionHeading
              align="left"
              eyebrow={isEnglish ? '// Engineering and business' : '// Inżynieria i biznes'}
              title={ts('indexHeadingTitle')}
              description={ts('indexHeadingDescription')}
            />
            <p className="mt-5 max-w-2xl font-body text-base leading-8 text-zinc-400 sm:text-lg">
              {ts('indexHeadingDescription2')}
            </p>
            <a href="https://github.com/pstawekl" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex">
              <Button variant="interactive" size="lg">
                {ts('checkProjects')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="interactive-glass rounded-3xl sm:mt-10">
              <CardContent className="p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{isEnglish ? 'Frontend and UX' : 'Frontend i UX'}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-zinc-400">
                  {frontCard}
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-glass rounded-3xl">
              <CardContent className="p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white">
                  <ServerCog className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{isEnglish ? 'Systems and integrations' : 'Systemy i integracje'}</h3>
                <p className="mt-3 font-body text-sm leading-7 text-zinc-400">
                  {systemsCard}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <ScrollDownButton servicesInView={true} id="trust" />
    </section>
  )
}

function SelectionPick({
  title,
  description,
  price,
  icon,
  link,
}: {
  title: string
  description: string
  price: number
  icon?: ReactElement
  link: string
}) {
  const { ts } = useTranslation()
  const navigate = useNavigate()

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-white/10 bg-[#0e0e11]/88 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[var(--glow-purple)]">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
          {icon}
        </div>
        <h3 className="interactive-gradient-text font-display text-2xl font-extrabold">{title}</h3>
        <span className="mt-4 font-mono text-sm uppercase tracking-[0.16em] text-zinc-500">od</span>
        <span className="font-display text-3xl font-extrabold text-white">
          {price} <span className="text-xl text-zinc-400">zł</span>
        </span>
        <p className="mt-4 flex-1 font-body text-sm leading-7 text-zinc-400">{description}</p>
        <Button variant="interactive" className="mt-6 w-full" onClick={() => navigate({ to: link as any })}>
          {ts('check')}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
