import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3 } from 'lucide-react'
import ScrollDownButton from './ui/scroll-down-button'

const studies = [
  {
    title: 'Arte - sklep z papeterią',
    summary: 'Budowa sklepu od zera, optymalizacja procesu zamówień i integracja płatności.',
    results: [
      { label: 'Czas budowy', value: '1 miesiąc' },
      { label: 'Zamówień / mies.', value: '300+' },
    ],
  },
  {
    title: 'Oj Lala - rezerwacje',
    summary: 'System rezerwacji online z płatnościami i kalendarzem dla usług lokalnych.',
    results: [
      { label: 'Wzrost rezerwacji', value: '+300%' },
      { label: 'Rezerwacji / mies.', value: '100+' },
    ],
  },
  {
    title: 'Rbiuro.pl - biuro rachunkowe',
    summary: 'Nowy serwis z formularzami, mocniejszym CTA i optymalizacją SEO.',
    results: [
      { label: 'Wzrost zapytań', value: '+250%' },
      { label: 'Odwiedzeń strony', value: '+180%' },
    ],
  },
]

export function CaseStudies() {
  const { currentLanguage } = useTranslation()
  const isEnglish = currentLanguage === 'en'
  const heading = isEnglish ? 'Case studies - project outcomes' : 'Case studies - wyniki naszych projektów'
  const description = isEnglish
    ? 'A few examples of projects where technology supported sales, customer service, and lead generation.'
    : 'Kilka przykładów wdrożeń, w których technologia wspierała sprzedaż, obsługę klienta i pozyskiwanie leadów.'

  return (
    <section id="caseStudies" className="interactive-section relative w-full overflow-hidden bg-[#09090b]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(219,39,119,0.14),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(37,99,235,0.14),transparent_34%)]"
      />

      <div className="interactive-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
        >
          <SectionHeading
            eyebrow={isEnglish ? '// Work' : '// Realizacje'}
            title={heading}
            description={description}
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card className="group h-full overflow-hidden rounded-3xl border-white/10 bg-[#0e0e11]/86 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[var(--glow-purple)]">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{study.title}</h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-7 text-zinc-400">{study.summary}</p>

                  <div className="mt-6 flex flex-col gap-3">
                    {study.results.map((result) => (
                      <div key={result.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="interactive-gradient-text font-display text-2xl font-extrabold">{result.value}</span>
                        <span className="ml-3 font-body text-sm text-zinc-400">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollDownButton servicesInView={true} id="testimonials" />
    </section>
  )
}
