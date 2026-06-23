import EmailForm from '@/components/email'
import { FAQ } from '@/components/faq'
import Footer from '@/components/footer'
import { CaseCard } from '@/components/marketing/case-card'
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
import { ArrowRight, ArrowUp, CheckCircle2, Code2, Gauge, Globe2, Paintbrush, Rocket, Smartphone, Sparkles, Zap } from 'lucide-react'
import React, { useEffect, useMemo, useRef } from 'react'

type PackageType = 'basic' | 'standard' | 'premium' | ''

const WebServicesView: React.FC = () => {
  const { t, ts, currentLanguage } = useTranslation()
  const isEnglish = currentLanguage === 'en'

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

  const [type, setType] = React.useState<PackageType>('')
  const [emailFormDesc, setEmailFormDesc] = React.useState<string>('')
  const [isEmailFormOpen, setIsEmailFormOpen] = React.useState<boolean>(false)
  const [isUserInteraction, setIsUserInteraction] = React.useState(false)
  const [isEmailSent, setIsEmailSent] = React.useState(false)

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const pricingRef = useRef(null)
  const whymeRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })
  const pricingInView = useInView(pricingRef, { once: true, margin: '-100px' })
  const whymeInView = useInView(whymeRef, { once: true, margin: '-100px' })

  const services = useMemo(() => [
    {
      icon: <Globe2 className="h-7 w-7" />,
      title: t('websites').toString(),
      description: t('wwwService1').toString(),
    },
    {
      icon: <Gauge className="h-7 w-7" />,
      title: t('optimalization').toString(),
      description: t('wwwService2').toString(),
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: 'RWD',
      description: t('wwwService3').toString(),
    },
    {
      icon: <Paintbrush className="h-7 w-7" />,
      title: t('futureDesign').toString(),
      description: t('wwwService4').toString(),
    },
  ], [t])

  const packages = useMemo(() => [
    {
      id: 'basic' as const,
      name: 'Basic',
      price: 999,
      description: isEnglish ? 'A compact start for small businesses and landing pages.' : 'Kompaktowy start dla małych firm i prostych stron ofertowych.',
      features: [ts('onePage'), ts('responsiveDesign'), ts('basicSEO')],
    },
    {
      id: 'standard' as const,
      name: 'Standard',
      price: 1999,
      featured: true,
      badge: isEnglish ? 'Most popular' : 'Najczęstszy wybór',
      description: isEnglish ? 'The practical package for most business websites.' : 'Praktyczny pakiet dla większości firmowych stron WWW.',
      features: [ts('to5SubSites'), ts('responsiveDesign'), ts('advancedSEO'), ts('contactForm')],
    },
    {
      id: 'premium' as const,
      name: 'Premium',
      price: 4999,
      description: isEnglish ? 'Advanced website with content scale, admin and integrations.' : 'Rozbudowana strona z miejscem na treści, administrację i integracje.',
      features: [ts('unlimitedSubSites'), ts('adminPanel'), ts('systemsIntegration'), ts('fullSupport')],
    },
  ], [isEnglish, ts])

  const techItems = [
    { text: t('aboutReact').toString(), icon: <Zap className="h-5 w-5" /> },
    { text: t('aboutTypeScript').toString(), icon: <Code2 className="h-5 w-5" /> },
    { text: t('aboutTailwind').toString(), icon: <Paintbrush className="h-5 w-5" /> },
  ]

  const projects = [
    {
      title: 'Rbiuro.pl',
      category: 'Strony WWW',
      metric: '+250%',
      metricLabel: 'wzrost zapytań',
      description: t('rbiuroDescription').toString(),
      link: 'https://rbiuro.pl',
      tags: ['SEO', 'CTA', 'Lead generation'],
    },
    {
      title: 'NetraIT',
      category: 'Strony WWW',
      metric: 'IT',
      metricLabel: 'branża',
      description: t('netraitDescription').toString(),
      link: 'https://netrait.pl/',
      tags: ['B2B', 'Serwis IT', 'Kontakt'],
    },
    {
      title: 'System ERP',
      category: 'Aplikacje',
      metric: '99.9%',
      metricLabel: 'czas działania',
      description: t('erpDescription').toString(),
      tags: ['Enterprise', 'ERP', 'Stability'],
    },
    {
      title: 'Apartament Danusia',
      category: 'Rezerwacje',
      metric: '+300%',
      metricLabel: 'wzrost rezerwacji',
      description: t('danusiaDescription').toString(),
      link: 'https://apartamentdanusia.pl/',
      tags: ['Booking', 'Tourism', 'SEO'],
    },
  ]

  useEffect(() => {
    switch (type) {
      case 'basic':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('basicPackageEmailDesc'))
        break
      case 'standard':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('standardPackageEmailDesc'))
        break
      case 'premium':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('premiumPackageEmailDesc'))
        break
      case '':
        setIsEmailFormOpen(false)
        setEmailFormDesc('')
        break
      default:
        setIsEmailFormOpen(false)
        setEmailFormDesc('')
        break
    }
  }, [type, ts])

  const handleTypeChange = (newType: PackageType) => {
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
              eyebrow={isEnglish ? '// Websites and web applications' : '// Strony WWW i aplikacje webowe'}
              title={ts('websites')}
              description={ts('wwwDescription')}
              className="mx-auto"
            />
          </motion.div>

          <motion.div
            className="mx-auto mt-8 max-w-3xl text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            <p className="font-body text-base leading-8 text-zinc-400 sm:text-lg">
              {isEnglish
                ? 'Fast, responsive and SEO-ready websites for companies that need more trust, better leads and a clear path to growth.'
                : 'Szybkie, responsywne i gotowe pod SEO strony dla firm, które potrzebują większego zaufania, lepszych leadów i jasnej ścieżki rozwoju.'}
            </p>
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
              eyebrow={isEnglish ? '// Website packages' : '// Cennik stron WWW'}
              title={ts('priceList')}
              description={isEnglish ? 'Transparent packages. Choose a scope and we will prepare the next step.' : 'Przejrzyste pakiety. Wybierz zakres, a przygotujemy kolejny krok współpracy.'}
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
                    description={pkg.description}
                    featured={pkg.featured}
                    badge={pkg.badge}
                    ctaLabel={ts('pickPackage')}
                    onCta={() => handleTypeChange(pkg.id)}
                    className={type === pkg.id ? 'scale-[1.02] ring-2 ring-purple-400/35' : undefined}
                  >
                    {pkg.features.map((feature) => (
                      <FeatureRow key={feature}>{feature}</FeatureRow>
                    ))}
                  </PricingCard>
                </motion.div>
              ) : (
                <div key={pkg.id} className="hidden rounded-3xl border border-white/5 bg-white/[0.02] lg:block" aria-hidden="true" />
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
              <Button variant="interactive" size="icon" onClick={() => handleTypeChange('')} aria-label={isEnglish ? 'Back to packages' : 'Wróć do pakietów'}>
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
              {ts('thankForTheMessage')}
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
            <SectionHeading eyebrow={isEnglish ? '// Why Interactive' : '// Dlaczego Interactive'} title={ts('whyme')} />
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr]"
            initial={{ opacity: 0 }}
            animate={whymeInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="interactive-glass rounded-3xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{ts('newTechnologies')}</h3>
                </div>
                <div className="space-y-4">
                  {techItems.map((item, index) => (
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

            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{ts('realizedProjects')}</h3>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target={project.link ? '_blank' : undefined}
                    rel={project.link ? 'noopener noreferrer' : undefined}
                    className={project.link ? 'block' : 'pointer-events-none block'}
                    initial={{ opacity: 0, y: 24 }}
                    animate={whymeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ delay: 0.14 + index * 0.07, duration: 0.4 }}
                  >
                    <CaseCard
                      title={project.title}
                      category={project.category}
                      metric={project.metric}
                      metricLabel={project.metricLabel}
                      description={project.description}
                      tags={project.tags}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <ScrollDownButton servicesInView={whymeInView} id="faq" />
      </section>

      <FAQ
        items={t('faqWWW') as Array<{ question: string; answer: string }>}
        title={ts('faqTitle')}
        id="faq"
      />

      <Footer />
      <SlideUp />
      {!isMobile() ? (
        <ViewMap
          items={[
            {
              id: 'home',
              name: ts('wwwViewMap1'),
            },
            {
              id: 'pricing',
              name: ts('wwwViewMap2'),
            },
            {
              id: 'whyme',
              name: ts('wwwViewMap3'),
            },
          ]}
        />
      ) : null}
    </div>
  )
}

export default WebServicesView
