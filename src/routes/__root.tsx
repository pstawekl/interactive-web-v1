import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Facebook, Github, Instagram, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import Logo from '../assets/logo.png'
import LanguagePicker from '@/components/language-picker'
import { useTranslation } from '@/hooks/useTranslation'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { t } = useTranslation()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight * 0.2)) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`p-2 transition duration-300 items-center grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-2 text-lg w-full justify-between z-10 ${isScrolled ? 'fixed z-10 bg-gray-100 border-black dark:border-white dark:bg-[#090d14] lg:py-2 lg:px-2 lg:w-[70vw] left-1/2 transform -translate-x-1/2 rounded-xl' : ''}`}>
        <a href="#">
          <img className={`transition duration-300 hover:filter hover:sepia ${isScrolled ? 'rounded' : ''}`} src={Logo} alt="Interactive logo" width="30" />
        </a>

        {/* Desktop Menu */}
        <div className='hidden lg:flex flex-row gap-2 justify-center uppercase text-lg font-light'>
          <Link
            to="/"
            className='hover:cursor-pointer hover:text-gray-600'
            activeProps={{
              className: 'text-gray-600 text-xl transition duration-300 hover:text-gray-100',
            }}
            activeOptions={{ exact: true }}
          >
            {t('indexViewMap1')}
          </Link>
          <Link
            to="/www"
            className='hover:cursor-pointer hover:text-gray-600'
            activeProps={{
              className: 'text-gray-600 text-xl transition duration-300 hover:text-gray-100',
            }}
          >
            {t('www')}
          </Link>
          <Link
            to="/ecommerce"
            className='hover:cursor-pointer hover:text-gray-600'
            activeProps={{
              className: 'text-gray-600 text-xl transition duration-300 hover:text-gray-100',
            }}
          >
            {t('onlineStore')}
          </Link>
          <Link
            to="/courses"
            className='hover:cursor-pointer hover:text-gray-600'
            activeProps={{
              className: 'text-gray-600 text-xl transition duration-300 hover:text-gray-100',
            }}
          >
            {t('courses')}
          </Link>
          <Link
            to="/contact"
            className='hover:cursor-pointer hover:text-gray-600'
            activeProps={{
              className: 'text-gray-600 text-xl transition duration-300 hover:text-gray-100',
            }}
          >
            {t('contact')}
          </Link>
        </div>

        <div className='hidden lg:flex flex-row gap-2 justify-end items-center'>
          <a href="https://facebook.com/interactivenetpl" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://instagram.com/interactivenetpl" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/jakub-stawski-dev" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <a href="https://github.com/pstawekl" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <a href="tel:+48518275470">
            <Phone className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <a href="mailto:jakub.stawski@interactive.net.pl">
            <Mail className="w-6 h-6 hover:text-gray-600 transition-colors" />
          </a>
          <LanguagePicker />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden justify-self-end"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#090d14] z-50 flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          <Link
            to="/"
            className='text-2xl hover:text-white'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('indexViewMap1')}
          </Link>
          <Link
            to="/www"
            className='text-2xl hover:text-white'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('www')}
          </Link>
          <Link
            to="/ecommerce"
            className='text-2xl hover:text-white'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('onlineStore')}
          </Link>
          <Link
            to="/courses"
            className='text-2xl hover:text-white'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('courses')}
          </Link>
          <Link
            to="/contact"
            className='text-2xl hover:text-white'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('contact')}
          </Link>
          <div className='w-80 justify-center items-center flex flex-row flex-wrap gap-4 mt-8'>
            <a href='https://www.facebook.com/interactivenetpl' target='_blank'><Facebook className='transition duration-300 hover:text-blue-500' size={40} /></a>
            <a href='https://www.instagram.com/interactivenetpl' target='_blank'><Instagram className='transition duration-300 hover:text-blue-500' size={40} /></a>
            <a href="https://linkedin.com/in/jakub-stawski-dev" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-gray-600 transition-colors" size={40} />
            </a>
            <a href="https://github.com/pstawekl" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-gray-600 transition-colors" size={40} />
            </a>
            <a href="tel:+48518275470">
              <Phone className="hover:text-gray-600 transition-colors" size={40} />
            </a>
            <a href="mailto:jakub.stawski@interactive.net.pl">
              <Mail className="hover:text-gray-600 transition-colors" size={40} />
            </a>
            <LanguagePicker />
          </div>
        </div>
      )}

      <hr />
      <Outlet />
      {
        import.meta.env.DEV && (
          <TanStackRouterDevtools position="bottom-right" />
        )
      }
    </>
  )
}
