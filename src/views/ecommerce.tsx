import EmailForm from '@/components/email'
import { FAQ } from '@/components/faq'
import Footer from '@/components/footer'
import { FeatureRow } from '@/components/marketing/feature-row'
import { PricingCard } from '@/components/marketing/pricing-card'
import { ServiceCard } from '@/components/marketing/service-card'
import { RealizedProject } from '@/components/realized-project'
import SlideUp from '@/components/slide-up'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ScrollDownButton from '@/components/ui/scroll-down-button'
import { SectionHeading } from '@/components/ui/section-heading'
import { ViewMap } from '@/components/view-map'
import { useTranslation } from '@/hooks/useTranslation'
import { isMobile } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { ArrowUp, CreditCard, Gauge, Rocket, Shield, ShoppingCart, Store, Zap } from 'lucide-react'
import React, { useEffect, useMemo, useRef } from 'react'

const EcommerceView: React.FC = () => {
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

  const [type, setType] = React.useState<'basic' | 'standard' | 'premium' | ''>('')
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

  const services = useMemo(
    () => [
      { icon: <ShoppingCart className="h-7 w-7" />, title: ts('onlineStores'), description: ts('ecommerceService1') },
      { icon: <Gauge className="h-7 w-7" />, title: ts('performance'), description: ts('ecommerceService2') },
      { icon: <Shield className="h-7 w-7" />, title: ts('security'), description: ts('ecommerceService3') },
      { icon: <CreditCard className="h-7 w-7" />, title: ts('payments'), description: ts('ecommerceService4') },
    ],
    [ts]
  )

  const packages = useMemo(
    () => [
      {
        id: 'basic' as const,
        name: 'Basic',
        price: '2 999',
        featured: false,
        features: [ts('upTo100Products'), ts('adminPanel'), ts('basicSEO')],
      },
      {
        id: 'standard' as const,
        name: 'Standard',
        price: '4 999',
        featured: true,
        badge: isEnglish ? 'Most popular' : 'Najpopularniejszy',
        features: [ts('upTo1000Products'), ts('paymentsIntegration'), ts('advancedSEO'), ts('notificationSystem')],
      },
      {
        id: 'premium' as const,
        name: 'Premium',
        price: '9 999',
        featured: false,
        features: [ts('unlimitedProducts'), ts('loyaltySystem'), ts('erpIntegration'), ts('fullSupport')],
      },
    ],
    [isEnglish, ts]
  )

  const techItems = [
    { text: ts('aboutWooCommerce'), icon: <ShoppingCart className="h-5 w-5" /> },
    { text: ts('aboutPrestaShop'), icon: <Gauge className="h-5 w-5" /> },
    { text: ts('aboutShopify'), icon: <Zap className="h-5 w-5" /> },
  ]

  const projects = [
    {
      name: 'LucasK9',
      description: ts('lucask9Description'),
      link: 'https://shop.lucask9.com',
      results: [
        { label: 'sklep', value: 'WooCommerce', icon: 'check' as const },
        { label: 'LMS', value: 'Moodle', icon: 'users' as const },
      ],
    },
    {
      name: 'E-butik',
      description: ts('ebutikDescription'),
      results: [
        { label: isEnglish ? 'conversion growth' : 'wzrost konwersji', value: '+220%', icon: 'trending' as const },
        { label: isEnglish ? 'load time' : 'czas ładowania', value: '<1.8s', icon: 'clock' as const },
      ],
    },
    {
      name: isEnglish ? 'Natural cosmetics' : 'Kosmetyki naturalne',
      description: ts('naturalCosmeticsDescription'),
      results: [
        { label: isEnglish ? 'order growth' : 'wzrost zamówień', value: '+250%', icon: 'trending' as const },
        { label: isEnglish ? 'retention' : 'powracalność', value: '+180%', icon: 'check' as const },
      ],
    },
  ]

  useEffect(() => {
    switch (type) {
      case 'basic':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('basicStoreEmailDesc'))
        break
      case 'standard':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('standardStoreEmailDesc'))
        break
      case 'premium':
        setIsEmailFormOpen(true)
        setEmailFormDesc(ts('premiumStoreEmailDesc'))
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

  const handleTypeChange = (newType: 'basic' | 'standard' | 'premium' | '') => {
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
              eyebrow={isEnglish ? '// Online stores and e-commerce' : '// Sklepy internetowe i e-commerce'}
              title={ts('onlineStores')}
              description={ts('ecommerceDescription')}
              className="mx-auto"
            />
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
              eyebrow={isEnglish ? '// E-commerce packages' : '// Pakiety sklepów internetowych'}
              title={ts('priceList')}
              description={
                isEnglish
                  ? 'Transparent packages for every business scale. Pick your scope and we will prepare the next step.'
                  : 'Przejrzyste pakiety dla każdej skali biznesu. Wybierz zakres, a przygotujemy kolejny krok.'
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
                aria-label={isEnglish ? 'Back to packages' : 'Wróć do pakietów'}
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
            <SectionHeading
              eyebrow={isEnglish ? '// Why Interactive' : '// Dlaczego Interactive'}
              title={ts('whyme')}
            />
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
                    <Store className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{ts('ecommerceTechnologies')}</h3>
                </div>
                <div className="space-y-3">
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
              <div className="flex flex-col gap-5">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={whymeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.4 }}
                  >
                    <RealizedProject
                      name={project.name}
                      description={project.description}
                      link={project.link}
                      results={project.results}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <ScrollDownButton servicesInView={whymeInView} id="faq" />
      </section>

      <FAQ
        items={Array.isArray(t('faqEcommerce')) ? (t('faqEcommerce') as Array<{ question: string; answer: string }>) : []}
        title={typeof t('faqTitle') === 'string' ? (t('faqTitle') as string) : 'FAQ'}
        id="faq"
      />

      <Footer />
      <SlideUp />
      {!isMobile() && (
        <ViewMap
          items={[
            { id: 'home', name: ts('onlineStores') },
            { id: 'pricing', name: ts('priceList') },
            { id: 'whyme', name: ts('whyme') },
          ]}
        />
      )}
    </div>
  )
}

export default EcommerceView
