import LanguagePicker from '@/components/language-picker'
import { NotFound } from '@/components/not-found'
import ThemeToggle from '@/components/theme-toggle'
import { useTranslation } from '@/hooks/useTranslation'
import { generateOrganizationSchema, generateWebsiteSchema, StructuredDataScript } from '@/lib/structured-data'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Facebook, Github, Instagram, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import * as React from 'react'
import Logo from '../assets/logo.png'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <NotFound />
  }
})

function RootComponent() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isWwwDropdownOpen, setIsWwwDropdownOpen] = React.useState(false)
  const { t, currentLanguage } = useTranslation()

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0
      const shouldBeFixed = scrollY > 50
      setIsScrolled(shouldBeFixed)
    }

    // Sprawdź przy załadowaniu
    handleScroll()

    // Dodaj listener na window (główny scroll)
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Dodaj również na document jako fallback
    document.addEventListener('scroll', handleScroll, { passive: true })
    // Dodaj również wheel event jako fallback
    window.addEventListener('wheel', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleScroll)
    }
  }, [isScrolled])

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://interactive.net.pl';
  const organizationSchema = generateOrganizationSchema(baseUrl);
  const websiteSchema = generateWebsiteSchema(baseUrl);

  return (
    <>
      <StructuredDataScript schemas={[organizationSchema, websiteSchema]} />
      <header
        className={isScrolled ? 'fixed top-0 left-0 right-0 z-[100] w-full' : 'relative w-full'}
        style={isScrolled ? { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, width: '100%' } : { position: 'relative', width: '100%' }}
      >
        <motion.div
          className={`transition-all duration-500 items-center grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-2 text-lg justify-between
          ${isScrolled
              ? 'py-3 px-4 lg:px-6 w-full backdrop-blur-xl bg-white/80 dark:bg-transparent border-b border-white/20 dark:border-white/10 shadow-2xl'
              : 'w-full p-2'
            }`}
        >
          <motion.a
            href="#"
          >
            <motion.img
              className={`transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
              src={Logo}
              alt="Interactive logo"
              width={30}
              height={30}
              loading="eager"
              whileHover={{ filter: "brightness(1.2)" }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <motion.nav
            className='hidden lg:flex flex-row gap-6 justify-center uppercase text-base font-medium'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Home */}
            <Link
              to="/"
              className='relative hover:cursor-pointer text-gray-700 dark:text-gray-300 transition-colors group'
              activeProps={{
                className: 'text-blue-600 dark:text-blue-400',
              }}
              activeOptions={{ exact: true }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                {t('indexViewMap1').toString()}
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Strony WWW - Dropdown dla PL, zwykły link dla EN */}
            {currentLanguage === 'pl' ? (
              <div
                className="relative"
                onMouseEnter={() => setIsWwwDropdownOpen(true)}
                onMouseLeave={() => setIsWwwDropdownOpen(false)}
              >
                <Link
                  to="/www"
                  className='relative hover:cursor-pointer text-gray-700 dark:text-gray-300 transition-colors group flex items-center gap-1'
                  activeProps={{
                    className: 'text-blue-600 dark:text-blue-400',
                  }}
                >
                  <span className="relative z-10">
                    {t('www').toString()}
                  </span>
                  <motion.div
                    animate={{ rotate: isWwwDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isWwwDropdownOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/strony-internetowe-lodzkie"
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-200 dark:border-gray-700"
                        onClick={() => setIsWwwDropdownOpen(false)}
                      >
                        <span className="font-semibold">Województwo Łódzkie</span>
                      </Link>
                      <Link
                        to="/strony-internetowe-lodz"
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsWwwDropdownOpen(false)}
                      >
                        Strony WWW Łódź
                      </Link>
                      <Link
                        to="/strony-internetowe-zdunska-wola"
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsWwwDropdownOpen(false)}
                      >
                        Strony WWW Zduńska Wola
                      </Link>
                      <Link
                        to="/strony-internetowe-sieradz"
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setIsWwwDropdownOpen(false)}
                      >
                        Strony WWW Sieradz
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/www"
                className='relative hover:cursor-pointer text-gray-700 dark:text-gray-300 transition-colors group'
                activeProps={{
                  className: 'text-blue-600 dark:text-blue-400',
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {t('www').toString()}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )}

            {/* Other Menu Items */}
            {[
              { to: "/ecommerce", label: t('onlineStore') },
              { to: "/courses", label: t('courses') },
              { to: "/contact", label: t('contact') },
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to as any}
                className='relative hover:cursor-pointer text-gray-700 dark:text-gray-300 transition-colors group'
                activeProps={{
                  className: 'text-blue-600 dark:text-blue-400',
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label.toString()}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </motion.nav>

          <motion.div
            className='hidden lg:flex flex-row gap-3 justify-end items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { href: "https://facebook.com/interactivenetpl", icon: Facebook, color: "hover:text-blue-600" },
              { href: "https://instagram.com/interactivenetpl", icon: Instagram, color: "hover:text-pink-600" },
              { href: "https://linkedin.com/in/jakub-stawski-dev", icon: Linkedin, color: "hover:text-blue-500" },
              { href: "https://github.com/pstawekl", icon: Github, color: "hover:text-gray-600 dark:hover:text-gray-400" },
              { href: "tel:+48518275470", icon: Phone, color: "hover:text-green-600" },
              { href: "mailto:jakub.stawski@interactive.net.pl", icon: Mail, color: "hover:text-red-600" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${social.href.includes('facebook') ? 'Facebook' : social.href.includes('instagram') ? 'Instagram' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('github') ? 'GitHub' : social.href.includes('tel') ? 'Telefon' : 'Email'} - Interactive`}
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-6 h-6 transition-colors ${social.color}`}
                >
                  <Icon className="w-full h-full" />
                </motion.a>
              );
            })}
            <ThemeToggle />
            <LanguagePicker />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden justify-self-end z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={30} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={30} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#090d14] dark:via-[#0a0e15] dark:to-[#0b0f16] z-40 flex flex-col items-center justify-center space-y-8 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Home */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 * 0.1 }}
              >
                <Link
                  to="/"
                  className='text-2xl font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('indexViewMap1').toString()}
                </Link>
              </motion.div>

              {/* Strony WWW */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
              >
                <Link
                  to="/www"
                  className='text-2xl font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('www').toString()}
                </Link>
              </motion.div>

              {/* Strony WWW Submenu - tylko dla języka polskiego */}
              {currentLanguage === 'pl' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 * 0.1 }}
                  className="pl-6 space-y-2"
                >
                  <Link
                    to="/strony-internetowe-lodzkie"
                    className='block text-xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Województwo Łódzkie
                  </Link>
                  <Link
                    to="/strony-internetowe-lodz"
                    className='block text-lg font-normal text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Strony WWW Łódź
                  </Link>
                  <Link
                    to="/strony-internetowe-zdunska-wola"
                    className='block text-lg font-normal text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Strony WWW Zduńska Wola
                  </Link>
                  <Link
                    to="/strony-internetowe-sieradz"
                    className='block text-lg font-normal text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Strony WWW Sieradz
                  </Link>
                </motion.div>
              )}

              {/* Other Menu Items */}
              {[
                { to: "/ecommerce", label: t('onlineStore'), delay: 2 },
                { to: "/courses", label: t('courses'), delay: 3 },
                { to: "/contact", label: t('contact'), delay: 4 },
              ].map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay * 0.1 }}
                >
                  <Link
                    to={item.to as any}
                    className='text-2xl font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label.toString()}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className='w-80 justify-center items-center flex flex-row flex-wrap gap-4 mt-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { href: 'https://www.facebook.com/interactivenetpl', icon: Facebook, color: 'hover:text-blue-500' },
                  { href: 'https://www.instagram.com/interactivenetpl', icon: Instagram, color: 'hover:text-pink-500' },
                  { href: "https://linkedin.com/in/jakub-stawski-dev", icon: Linkedin, color: 'hover:text-blue-600' },
                  { href: "https://github.com/pstawekl", icon: Github, color: 'hover:text-gray-600 dark:hover:text-gray-400' },
                  { href: "tel:+48518275470", icon: Phone, color: 'hover:text-green-600' },
                  { href: "mailto:jakub.stawski@interactive.net.pl", icon: Mail, color: 'hover:text-red-600' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.href.includes('facebook') ? 'Facebook' : social.href.includes('instagram') ? 'Instagram' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('github') ? 'GitHub' : social.href.includes('tel') ? 'Telefon' : 'Email'} - Interactive`}
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      whileTap={{ scale: 0.9 }}
                      className={`transition-colors ${social.color}`}
                    >
                      <Icon size={40} />
                    </motion.a>
                  );
                })}
                <ThemeToggle />
                <LanguagePicker />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="min-h-screen w-full overflow-x-hidden" style={{ overflowY: 'auto' }}>
        <main className="w-full min-h-screen">
          <Outlet />
        </main>
        {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-right" />}
      </div>
    </>
  )
}
