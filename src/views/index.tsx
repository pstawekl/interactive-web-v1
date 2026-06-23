import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { useTranslation } from '@/hooks/useTranslation'
import { isMobile } from '@/lib/utils'
import { Suspense, lazy } from 'react'

const Headings = lazy(() => import('@/components/headings').then((m) => ({ default: m.Headings })))
const TrustBadges = lazy(() => import('@/components/trust-badges').then((m) => ({ default: m.TrustBadges })))
const Process = lazy(() => import('@/components/process').then((m) => ({ default: m.Process })))
const CaseStudies = lazy(() => import('@/components/case-studies').then((m) => ({ default: m.CaseStudies })))
const Testimonials = lazy(() => import('@/components/testimonials').then((m) => ({ default: m.Testimonials })))
const CallToAction = lazy(() => import('@/components/call-to-action'))
const ViewMap = lazy(() => import('@/components/view-map').then((m) => ({ default: m.ViewMap })))
const SlideUp = lazy(() => import('@/components/slide-up'))
const Footer = lazy(() => import('@/components/footer'))

const LoadingFallback = () => (
  <div className="flex h-32 w-full items-center justify-center">
    <div className="animate-pulse text-gray-400">Ładowanie...</div>
  </div>
)

export default function Index() {
  const { ts, currentLanguage } = useTranslation()
  const isEnglish = currentLanguage === 'en'

  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Stats />
      <Suspense fallback={<LoadingFallback />}>
        <Headings />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TrustBadges />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Process />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CallToAction />
      </Suspense>
      {!isMobile() && (
        <Suspense fallback={null}>
          <ViewMap
            items={[
              { id: 'banner', name: ts('indexViewMap1') },
              { id: 'about', name: ts('aboutTitle') },
              { id: 'stats', name: ts('statsTitle') },
              { id: 'offer', name: ts('indexViewMap2') },
              { id: 'description', name: ts('indexViewMap3') },
              { id: 'trust', name: isEnglish ? 'Standards' : 'Standard pracy' },
              { id: 'process', name: isEnglish ? 'Process' : 'Proces' },
              { id: 'caseStudies', name: isEnglish ? 'Projects' : 'Realizacje' },
              { id: 'testimonials', name: isEnglish ? 'Reviews' : 'Opinie' },
              { id: 'callToAction', name: ts('indexViewMap4') },
            ]}
          />
        </Suspense>
      )}
      <Suspense fallback={null}>
        <SlideUp />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
