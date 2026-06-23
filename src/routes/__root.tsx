import LanguagePicker from '@/components/language-picker'
import { NotFound } from '@/components/not-found'
import ThemeToggle from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'
import { useTranslation } from '@/hooks/useTranslation'
import { generateOrganizationSchema, generateWebsiteSchema, StructuredDataScript } from '@/lib/structured-data'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import * as React from 'react'
import LogoHorizontal from '../assets/logo-horizontal.png'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <NotFound />
  },
})

const navLinkClass =
  'group relative inline-flex items-center gap-1 rounded-xl px-3 py-2 font-body text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'

const mobileLinkClass =
  'font-display text-3xl font-bold tracking-tight text-zinc-950 transition-colors hover:text-purple-600 dark:text-zinc-100 dark:hover:text-cyan-300'

const activeNavClass = `${navLinkClass} text-zinc-950 dark:text-white active`

const localSeoLinks = [
  { to: '/strony-internetowe-lodzkie', label: 'Województwo Łódzkie', strong: true },
  { to: '/strony-internetowe-lodz', label: 'Strony WWW Łódź' },
  { to: '/strony-internetowe-zdunska-wola', label: 'Strony WWW Zduńska Wola' },
  { to: '/strony-internetowe-sieradz', label: 'Strony WWW Sieradz' },
]

function RootComponent() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isWwwDropdownOpen, setIsWwwDropdownOpen] = React.useState(false)
  const { theme } = useTheme()
  const { t, currentLanguage } = useTranslation()
  const isDark = theme === 'dark'

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((window.scrollY || window.pageYOffset || 0) > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsWwwDropdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl'
  const organizationSchema = generateOrganizationSchema(baseUrl)
  const websiteSchema = generateWebsiteSchema(baseUrl)

  const mainNavItems = [
    { to: '/ecommerce', label: t('onlineStore') },
    { to: '/courses', label: t('courses') },
    { to: '/contact', label: t('contact') },
  ]

  const renderNavUnderline = () => (
    <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 rounded-full [background:var(--gradient-brand)] transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100" />
  )

  return (
    <>
      <StructuredDataScript schemas={[organizationSchema, websiteSchema]} />
      <header
        className={
          isScrolled
            ? 'fixed left-0 right-0 top-0 z-[100] w-full px-3 py-3 lg:px-6'
            : `sticky top-0 z-[100] h-[66px] w-full border-b backdrop-blur-xl ${
                isDark ? 'border-white/[0.06] bg-[#050506]' : 'border-zinc-200/80 bg-white/90'
              }`
        }
      >
        <motion.div
          className="mx-auto grid h-full w-full grid-cols-2 items-center gap-4 border text-lg lg:grid-cols-[auto_1fr_auto]"
          style={{
            maxWidth: isScrolled ? '80rem' : '100%',
            height: isScrolled ? '56px' : '66px',
            padding: isScrolled ? '0 1rem' : '0 1.5rem',
            borderRadius: isScrolled ? 'var(--radius-2xl)' : '0',
            borderColor: isScrolled ? (isDark ? 'rgba(255,255,255,0.12)' : 'rgba(24,24,27,0.12)') : 'transparent',
            backgroundColor: isScrolled ? (isDark ? 'rgba(9,9,11,0.78)' : 'rgba(255,255,255,0.84)') : 'transparent',
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
            boxShadow: isScrolled
              ? isDark
                ? '0 18px 80px rgba(8,8,12,0.5)'
                : '0 18px 70px rgba(24,24,27,0.12)'
              : 'none',
            transition:
              'max-width 0.3s var(--ease-out), height 0.3s var(--ease-out), padding 0.3s var(--ease-out), background-color 0.3s var(--ease-out), border-radius 0.3s var(--ease-out), border-color 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out)',
          }}
        >
          <Link to="/" className="inline-flex items-center" aria-label="Interactive - strona główna">
            <img
              src={LogoHorizontal}
              alt="Interactive"
              width={isScrolled ? 146 : 168}
              height={50}
              className="h-auto w-[150px] transition-all duration-300 lg:w-[168px]"
              style={{ width: isScrolled ? 146 : 168 }}
              loading="eager"
            />
          </Link>

          <nav className="hidden flex-row items-center justify-center gap-1 font-body lg:flex" aria-label="Główne menu">
            <Link to="/" className={navLinkClass} activeProps={{ className: activeNavClass }} activeOptions={{ exact: true }}>
              <span className="relative z-10">{t('indexViewMap1').toString()}</span>
              {renderNavUnderline()}
            </Link>

            {currentLanguage === 'pl' ? (
              <div
                className="relative"
                onMouseEnter={() => setIsWwwDropdownOpen(true)}
                onMouseLeave={() => setIsWwwDropdownOpen(false)}
                onFocusCapture={() => setIsWwwDropdownOpen(true)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setIsWwwDropdownOpen(false)
                  }
                }}
              >
                <Link to="/www" className={navLinkClass} activeProps={{ className: activeNavClass }}>
                  <span className="relative z-10">{t('www').toString()}</span>
                  <motion.span animate={{ rotate: isWwwDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} />
                  </motion.span>
                  {renderNavUnderline()}
                </Link>

                <AnimatePresence>
                  {isWwwDropdownOpen && (
                    <motion.div
                      className="absolute left-0 top-full z-50 mt-4 w-72 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-2 shadow-[0_24px_80px_rgba(24,24,27,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#09090b]/95 dark:shadow-[0_24px_90px_rgba(88,28,135,0.34)]"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      {localSeoLinks.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to as any}
                          className="block rounded-xl px-4 py-3 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.07] dark:hover:text-white"
                          onClick={() => setIsWwwDropdownOpen(false)}
                        >
                          <span className={item.strong ? 'font-semibold text-zinc-950 dark:text-white' : undefined}>{item.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/www" className={navLinkClass} activeProps={{ className: activeNavClass }}>
                <span className="relative z-10">{t('www').toString()}</span>
                {renderNavUnderline()}
              </Link>
            )}

            {mainNavItems.map((item) => (
              <Link key={item.to} to={item.to as any} className={navLinkClass} activeProps={{ className: activeNavClass }}>
                <span className="relative z-10">{item.label.toString()}</span>
                {renderNavUnderline()}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-row items-center justify-end gap-3 lg:flex">
            <ThemeToggle />
            <LanguagePicker />
            <Button asChild variant="interactive" size="md" className="h-10 rounded-lg px-6 text-[15px]">
              <Link to="/contact">{currentLanguage === 'en' ? 'Free quote' : 'Bezpłatna wycena'}</Link>
            </Button>
          </div>

          <motion.button
            className="interactive-focus z-50 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-lg border border-zinc-200/80 bg-white/90 text-zinc-950 lg:hidden dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.94 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-x-0 top-[66px] z-40 bg-white/98 px-6 py-10 backdrop-blur-xl lg:hidden dark:bg-[#050506]/98"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="mx-auto flex max-w-sm flex-col gap-6 text-center" aria-label="Menu mobilne">
                <Link to="/" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  {t('indexViewMap1').toString()}
                </Link>
                <Link to="/www" className={mobileLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  {t('www').toString()}
                </Link>
                {currentLanguage === 'pl' && (
                  <div className="interactive-glass w-full space-y-2 rounded-2xl p-4">
                    {localSeoLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to as any}
                        className={`block transition-colors hover:text-purple-600 dark:hover:text-cyan-300 ${
                          item.strong ? 'text-base font-semibold text-zinc-950 dark:text-white' : 'text-sm text-zinc-600 dark:text-zinc-300'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
                {mainNavItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to as any}
                    className={mobileLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label.toString()}
                  </Link>
                ))}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <ThemeToggle />
                  <LanguagePicker />
                  <Button asChild variant="interactive" size="md" className="h-10 rounded-lg px-5">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      {currentLanguage === 'en' ? 'Free quote' : 'Bezpłatna wycena'}
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="min-h-screen w-full overflow-x-hidden" style={{ overflowY: 'auto' }}>
        <main className="min-h-screen w-full">
          <Outlet />
        </main>
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
      </div>
    </>
  )
}
