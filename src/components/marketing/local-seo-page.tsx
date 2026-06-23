import { FeatureRow } from '@/components/marketing/feature-row'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/utils'
import { Link, useNavigate } from '@tanstack/react-router'
import { motion, useInView } from 'framer-motion'
import * as React from 'react'

// ─── Shared data types ────────────────────────────────────────────────────────

export interface LocalSeoFeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

export interface LocalSeoServiceItem {
  title: string
  body: string
}

export interface LocalSeoProcessStep {
  title: string
  body: string
}

export interface LocalSeoBenefit {
  title: string
  body: string
}

export interface LocalSeoFaqItem {
  question: string
  answer: string
}

export interface LocalSeoCityLink {
  to: string
  label: string
  description: string
}

// ─── Component props ──────────────────────────────────────────────────────────

export interface LocalSeoPageProps {
  // Hero
  h1: string
  eyebrow?: string
  heroDescription: string
  breadcrumbLabel: string

  // Intro prose section (city-specific paragraphs; pass <> ... </>)
  introHeading: string
  introBody: React.ReactNode

  // Feature / benefit cards section
  featureSectionHeading: string
  featureCards: LocalSeoFeatureCard[]

  // Optional slot injected between feature cards and services
  // (used by lodzkie.tsx for the regional cities grid)
  afterFeatureCards?: React.ReactNode

  // Services section
  servicesSectionHeading: string
  serviceItems: LocalSeoServiceItem[]

  // Local SEO prose section (optional — some pages omit it)
  seoSectionHeading?: string
  seoBody?: React.ReactNode

  // Process section
  processSectionHeading: string
  processSteps: LocalSeoProcessStep[]

  // Benefits checklist
  benefitsSectionHeading: string
  benefits: LocalSeoBenefit[]

  // Audience section
  audienceSectionHeading: string
  audienceIntro?: string
  audiences: string[]
  audienceOutro?: string

  // FAQ
  faqSectionHeading: string
  faqItems: LocalSeoFaqItem[]

  // Cross-city links
  cityLinksSectionHeading: string
  cityLinksIntro?: string
  cityLinks: LocalSeoCityLink[]

  // CTA
  ctaHeading: string
  ctaSubheading?: string
}

// ─── Small shared primitives ──────────────────────────────────────────────────

const ContentSection = React.forwardRef<HTMLElement, { children: React.ReactNode; alt?: boolean; className?: string }>(
  ({ children, alt = false, className }, ref) => (
    <section ref={ref} className={cn('interactive-section relative w-full overflow-hidden', alt ? 'bg-[#0e0e11]' : 'bg-[#09090b]', className)}>
      <div className="interactive-container relative z-10">{children}</div>
    </section>
  )
)
ContentSection.displayName = 'ContentSection'

function ArticleHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('font-display text-2xl font-bold text-white sm:text-3xl', className)}>
      {children}
    </h2>
  )
}

function ArticleSubheading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn('font-display text-lg font-bold text-white', className)}>
      {children}
    </h3>
  )
}

function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('font-body text-base leading-7 text-zinc-300', className)}>
      {children}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function LocalSeoPage({
  h1,
  eyebrow,
  heroDescription,
  breadcrumbLabel,
  introHeading,
  introBody,
  featureSectionHeading,
  featureCards,
  afterFeatureCards,
  servicesSectionHeading,
  serviceItems,
  seoSectionHeading,
  seoBody,
  processSectionHeading,
  processSteps,
  benefitsSectionHeading,
  benefits,
  audienceSectionHeading,
  audienceIntro,
  audiences,
  audienceOutro,
  faqSectionHeading,
  faqItems,
  cityLinksSectionHeading,
  cityLinksIntro,
  cityLinks,
  ctaHeading,
  ctaSubheading,
}: LocalSeoPageProps) {
  const navigate = useNavigate()

  const heroRef = React.useRef(null)
  const featureRef = React.useRef(null)
  const processRef = React.useRef(null)
  const ctaRef = React.useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: '-80px' })
  const featureInView = useInView(featureRef, { once: true, margin: '-80px' })
  const processInView = useInView(processRef, { once: true, margin: '-80px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <main className="relative flex w-full flex-col items-center overflow-hidden bg-[#09090b]">
      {/* Brand glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.15),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(147,51,234,0.15),transparent_34%),radial-gradient(circle_at_54%_92%,rgba(219,39,119,0.10),transparent_32%)]"
      />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="interactive-section relative w-full overflow-hidden bg-[#09090b] pt-24 lg:pt-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(147,51,234,0.14),transparent_40%)]"
        />
        <div className="interactive-container relative z-10 text-center">
          {eyebrow && (
            <motion.p
              className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500"
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.45 }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="interactive-gradient-text font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          >
            {h1}
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl font-body text-lg leading-8 text-zinc-400"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {heroDescription}
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            <Button
              onClick={() => navigate({ to: '/contact' })}
              variant="interactive"
              size="lg"
              aria-label="Skontaktuj się z nami - darmowa wycena strony internetowej"
            >
              Skontaktuj się z nami
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <div className="w-full bg-[#09090b]">
        <nav aria-label="Breadcrumb" className="interactive-container py-3">
          <ol className="flex items-center gap-2 font-body text-sm text-zinc-500">
            <li>
              <Link to="/" className="transition-colors hover:text-zinc-300">
                Strona główna
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-zinc-300">{breadcrumbLabel}</li>
          </ol>
        </nav>
      </div>

      {/* ── Intro prose ── */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-6">{introHeading}</ArticleHeading>
          <Prose>{introBody}</Prose>
        </div>
      </ContentSection>

      {/* ── Feature cards ── */}
      <ContentSection alt ref={featureRef as React.Ref<HTMLElement>}>
        <SectionHeading
          eyebrow="// Dlaczego Interactive"
          title={featureSectionHeading}
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={featureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="interactive-glass h-full rounded-3xl border-white/10 hover:-translate-y-1 hover:border-purple-400/30">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                    {card.icon}
                  </div>
                  <ArticleSubheading>{card.title}</ArticleSubheading>
                  <Prose className="text-sm">{card.description}</Prose>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* ── Optional slot (e.g. regional cities grid) ── */}
      {afterFeatureCards && (
        <ContentSection>
          {afterFeatureCards}
        </ContentSection>
      )}

      {/* ── Services section ── */}
      <ContentSection alt>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-8">{servicesSectionHeading}</ArticleHeading>
          <div className="flex flex-col gap-5">
            {serviceItems.map((item) => (
              <Card key={item.title} className="interactive-glass rounded-2xl border-white/10">
                <CardContent className="p-6">
                  <ArticleSubheading className="mb-3">{item.title}</ArticleSubheading>
                  <Prose className="text-sm">{item.body}</Prose>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ── Local SEO prose (optional) ── */}
      {seoSectionHeading && seoBody && (
        <ContentSection>
          <div className="mx-auto max-w-3xl">
            <ArticleHeading className="mb-6">{seoSectionHeading}</ArticleHeading>
            <Prose>{seoBody}</Prose>
          </div>
        </ContentSection>
      )}

      {/* ── Process steps ── */}
      <ContentSection alt ref={processRef as React.Ref<HTMLElement>}>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-8">{processSectionHeading}</ArticleHeading>
          <div className="flex flex-col gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Card className="interactive-glass rounded-2xl border-white/10">
                  <CardContent className="flex gap-5 p-6">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full [background:var(--gradient-brand)] font-mono text-sm font-bold text-white shadow-[var(--glow-cta)]">
                      {i + 1}
                    </span>
                    <div>
                      <ArticleSubheading className="mb-2">{step.title}</ArticleSubheading>
                      <Prose className="text-sm">{step.body}</Prose>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ── Benefits checklist ── */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-8">{benefitsSectionHeading}</ArticleHeading>
          <div className="flex flex-col gap-4">
            {benefits.map((b) => (
              <FeatureRow key={b.title}>
                <strong className="text-white">{b.title}</strong>
                {' — '}
                {b.body}
              </FeatureRow>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ── Audience section ── */}
      <ContentSection alt>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-6">{audienceSectionHeading}</ArticleHeading>
          {audienceIntro && <Prose className="mb-5">{audienceIntro}</Prose>}
          <Card className="interactive-glass rounded-2xl border-white/10">
            <CardContent className="p-6">
              <ul className="flex flex-col gap-2">
                {audiences.map((item) => (
                  <FeatureRow key={item}>{item}</FeatureRow>
                ))}
              </ul>
            </CardContent>
          </Card>
          {audienceOutro && <Prose className="mt-5">{audienceOutro}</Prose>}
        </div>
      </ContentSection>

      {/* ── FAQ ── */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-8">{faqSectionHeading}</ArticleHeading>
          <div className="flex flex-col gap-4">
            {faqItems.map((item) => (
              <Card key={item.question} className="interactive-glass rounded-2xl border-white/10">
                <CardContent className="p-6">
                  <ArticleSubheading className="mb-3">{item.question}</ArticleSubheading>
                  <Prose className="text-sm">{item.answer}</Prose>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ── Cross-city links ── */}
      <ContentSection alt>
        <div className="mx-auto max-w-3xl">
          <ArticleHeading className="mb-4">{cityLinksSectionHeading}</ArticleHeading>
          {cityLinksIntro && <Prose className="mb-6">{cityLinksIntro}</Prose>}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cityLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as never}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-purple-400/40 hover:bg-white/[0.06]"
              >
                <p className="font-display text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {link.label}
                </p>
                <p className="mt-1 font-body text-xs text-zinc-500">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ── CTA ── */}
      <ContentSection ref={ctaRef as React.Ref<HTMLElement>}>
        <motion.div
          className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(147,51,234,0.22),rgba(219,39,119,0.16))] p-5 text-center ring-1 ring-white/10 shadow-[var(--glow-cta)] sm:p-8 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <h2 className="interactive-gradient-text font-display text-3xl font-extrabold leading-tight md:text-4xl">
            {ctaHeading}
          </h2>
          {ctaSubheading && (
            <p className="mt-4 font-body text-lg text-zinc-300">{ctaSubheading}</p>
          )}
          <Button
            onClick={() => navigate({ to: '/contact' })}
            variant="interactive"
            size="lg"
            className="mt-8"
            aria-label="Skontaktuj się z nami - darmowa wycena"
          >
            Skontaktuj się z nami
          </Button>
        </motion.div>
      </ContentSection>

      <Footer />
    </main>
  )
}
