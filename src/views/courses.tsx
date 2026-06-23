import EmailForm from '@/components/email'
import { FAQ } from '@/components/faq'
import Footer from '@/components/footer'
import { FeatureRow } from '@/components/marketing/feature-row'
import { PricingCard } from '@/components/marketing/pricing-card'
import { ServiceCard } from '@/components/marketing/service-card'
import SlideUp from '@/components/slide-up'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ScrollDownButton from '@/components/ui/scroll-down-button'
import { SectionHeading } from '@/components/ui/section-heading'
import { ViewMap } from '@/components/view-map'
import { useTranslation } from '@/hooks/useTranslation'
import { isMobile } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { ArrowUp, Award, BookOpen, Calendar, Code, GraduationCap, Rocket, Users, Zap } from 'lucide-react'
import React, { useEffect, useMemo, useRef } from 'react'

type CoursesType = 'frontend' | 'backend' | 'fullstack' | ''

const CoursesView: React.FC = () => {
  const { t, ts, currentLanguage } = useTranslation()
  const isEnglish = currentLanguage === 'en'

  const [type, setType] = React.useState<CoursesType>('')
  const [emailFormDesc, setEmailFormDesc] = React.useState<string>('')
  const [isEmailFormOpen, setIsEmailFormOpen] = React.useState<boolean>(false)
  const [isUserInteraction, setIsUserInteraction] = React.useState(false)
  const [isEmailSent, setIsEmailSent] = React.useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    switch (type) {
      case 'frontend':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('frontendEmailDesc'))
        break
      case 'backend':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('backendEmailDesc'))
        break
      case 'fullstack':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('fullstackEmailDesc'))
        break
      case '':
        setIsEmailFormOpen(false)
        setEmailFormDesc('')
        break
      default:
        setIsEmailFormOpen(false)
        setEmailFormDesc('')
    }
  }, [type, ts])

  const services = useMemo(
    () => [
      {
        icon: <GraduationCap className="h-7 w-7" />,
        title: ts('trainingServices.training'),
        description: ts('trainingServices.trainingDesc'),
      },
      {
        icon: <BookOpen className="h-7 w-7" />,
        title: ts('trainingServices.materials'),
        description: ts('trainingServices.materialsDesc'),
      },
      {
        icon: <Users className="h-7 w-7" />,
        title: ts('trainingServices.smallGroups'),
        description: ts('trainingServices.smallGroupsDesc'),
      },
      {
        icon: <Calendar className="h-7 w-7" />,
        title: ts('trainingServices.flexibility'),
        description: ts('trainingServices.flexibilityDesc'),
      },
    ],
    [ts]
  )

  const packages = useMemo(
    () => [
      {
        id: 'frontend' as CoursesType,
        name: 'Front-end',
        price: '1 799',
        originalPrice: '1 999',
        featured: false,
        features: [ts('trainings.frontendBasics'), ts('trainings.reactBasics'), ts('trainings.fiveDays')],
      },
      {
        id: 'backend' as CoursesType,
        name: 'Back-end',
        price: '2 249',
        originalPrice: '2 499',
        featured: true,
        badge: isEnglish ? 'Most popular' : 'Najpopularniejszy',
        features: ['Node.js, Python', isEnglish ? 'REST API fundamentals' : 'Podstawy interfejsów REST API', isEnglish ? '14 days of training' : '14 dni szkolenia'],
      },
      {
        id: 'fullstack' as CoursesType,
        name: 'Full-stack',
        price: '6 299',
        originalPrice: '6 999',
        featured: false,
        features: ['Next.js, PostgreSQL', isEnglish ? 'Advanced React' : 'React zaawansowane', isEnglish ? '30 days of training' : '30 dni szkolenia'],
      },
    ],
    [isEnglish, ts]
  )

  const programItems = [
    { text: ts('aboutProgram.reactTs'), icon: <Zap className="h-5 w-5" /> },
    { text: ts('aboutProgram.nodeExpress'), icon: <Code className="h-5 w-5" /> },
    { text: ts('aboutProgram.projects'), icon: <Award className="h-5 w-5" /> },
  ]

  const handleTypeChange = (newType: CoursesType) => {
    setIsUserInteraction(true)
    setType(newType)
  }

  const handleEmailSent = () => {
    setIsEmailSent(true)
    setTimeout(() => {
      setType('')
      setIsEmailSent(false)
    }, 2000)
  }

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const pricingRef = useRef(null)
  const whymeRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
  const pricingInView = useInView(pricingRef, { once: true, margin: '-100px' })
  const whymeInView = useInView(whymeRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isEmailFormOpen) {
      document.getElementById('emailForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (isUserInteraction) {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isEmailFormOpen, type, isUserInteraction])

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden bg-[#09090b]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(147,51,234,0.18),transparent_34%),radial-gradient(circle_at_54%_92%,rgba(219,39,119,0.12),transparent_32%)]"
      />

      <section id="home" ref={heroRef} className="interactive-section relative w-full overflow-hidden pt-24 lg:pt-32">
        <div className="interactive-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <SectionHeading
              eyebrow={isEnglish ? '// IT training and workshops' : '// Szkolenia i warsztaty IT'}
              title={ts('itTraining')}
              description={ts('trainingDescription')}
              className="mx-auto"
            />
          </motion.div>

          <motion.div
            className="mx-auto mt-4 max-w-xl text-center"
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-sm font-semibold text-emerald-300">
              {ts('earlyBirdDiscount')}
            </span>
          </motion.div>

          <div ref={servicesRef} className="mt-14">
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                >
                  <ServiceCard title={service.title} description={service.description} icon={service.icon} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <ScrollDownButton servicesInView={servicesInView} id="pricing" />
      </section>

      <section id="pricing" ref={pricingRef} className="interactive-section relative w-full overflow-hidden bg-[#0e0e11]">
        <div className="interactive-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <SectionHeading
              eyebrow={isEnglish ? '// Training offer' : '// Oferta szkoleń'}
              title={ts('trainingOffer')}
              description={
                isEnglish
                  ? 'Practical, project-based training. Sign up and get an early-bird discount.'
                  : 'Praktyczne szkolenia oparte na projektach. Zapisz się i skorzystaj z rabatu early-bird.'
              }
            />
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={pricingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            {packages.map((pkg, index) => {
              const visible = type === pkg.id || type === ''
              return visible ? (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                >
                  <PricingCard
                    name={pkg.name}
                    price={pkg.price}
                    featured={pkg.featured}
                    badge={'badge' in pkg ? pkg.badge : undefined}
                    ctaLabel={ts('signUp')}
                    onCta={() => handleTypeChange(pkg.id)}
                    className={type === pkg.id ? 'scale-[1.02] ring-2 ring-purple-400/35' : undefined}
                  >
                    <div className="font-body text-xs text-zinc-500">
                      {isEnglish ? 'Regular price: ' : 'Cena regularna: '}
                      <span className="line-through">{pkg.originalPrice} zł</span>
                      {' · '}
                      <span className="text-emerald-400">{ts('discount')}</span>
                    </div>
                    {pkg.features.map((feature) => (
                      <FeatureRow key={feature}>{feature}</FeatureRow>
                    ))}
                  </PricingCard>
                </motion.div>
              ) : (
                <div
                  key={pkg.id}
                  className="hidden rounded-3xl border border-white/5 bg-white/[0.02] lg:block"
                  aria-hidden="true"
                />
              )
            })}
          </motion.div>

          {isEmailFormOpen && !isEmailSent ? (
            <motion.div
              className="mt-20 grid grid-cols-1 justify-items-center gap-8"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Button
                variant="interactive"
                size="icon"
                onClick={() => handleTypeChange('')}
                aria-label={isEnglish ? 'Back to courses' : 'Wróć do szkoleń'}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
              <Card className="interactive-glass w-full max-w-2xl rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <EmailForm description={emailFormDesc} onEmailSent={handleEmailSent} />
                </CardContent>
              </Card>
            </motion.div>
          ) : null}

          {isEmailSent ? (
            <motion.div
              className="mt-20 text-center font-display text-2xl font-bold text-emerald-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {ts('thankYouForTheMessage')}
            </motion.div>
          ) : null}
        </div>
        <ScrollDownButton servicesInView={pricingInView} id="whyme" />
      </section>

      <section id="whyme" ref={whymeRef} className="interactive-section relative w-full overflow-hidden bg-[#09090b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(6,182,212,0.12),transparent_32%),radial-gradient(circle_at_84%_70%,rgba(147,51,234,0.16),transparent_34%)]"
        />
        <div className="interactive-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={whymeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            <SectionHeading
              eyebrow={isEnglish ? '// Why Interactive' : '// Dlaczego Interactive'}
              title={ts('whyme')}
            />
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={whymeInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="interactive-glass rounded-3xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{ts('trainingProgram')}</h3>
                </div>
                <div className="space-y-3">
                  {programItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      initial={{ opacity: 0, x: -14 }}
                      animate={whymeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                      transition={{ delay: 0.12 + index * 0.06, duration: 0.35 }}
                    >
                      <div className="mt-0.5 text-cyan-300">{item.icon}</div>
                      <p className="font-body text-sm leading-6 text-zinc-300">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-glass rounded-3xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{ts('ourStudents')}</h3>
                </div>
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 14 }}
                  animate={whymeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <p className="font-body text-sm leading-7 text-zinc-300">{ts('newCourseOffer')}</p>
                  <p className="font-body text-sm leading-7 text-zinc-400">{ts('earlyBirdInfo')}</p>
                  <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
                    <Rocket className="h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="font-mono text-sm font-semibold text-emerald-300">{ts('earlyBirdDiscount')}</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <ScrollDownButton servicesInView={whymeInView} id="faq" />
      </section>

      <FAQ
        items={Array.isArray(t('faqCourses')) ? (t('faqCourses') as Array<{ question: string; answer: string }>) : []}
        title={typeof t('faqTitle') === 'string' ? (t('faqTitle') as string) : 'FAQ'}
        id="faq"
      />

      <Footer />
      <SlideUp />
      {!isMobile() && (
        <ViewMap
          items={[
            { id: 'home', name: ts('itTraining') },
            { id: 'pricing', name: ts('trainingOffer') },
            { id: 'whyme', name: ts('whyme') },
          ]}
        />
      )}
    </div>
  )
}

export default CoursesView
