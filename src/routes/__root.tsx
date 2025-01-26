import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Facebook, Github, Instagram, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import Logo from '../assets/logo.png'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

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
      <div className={`p-2 transition duration-300 items-center grid grid-cols-2 lg:grid-cols-3 gap-2 text-lg w-full justify-between z-10 ${isScrolled ? 'fixed z-10 bg-[#090d14] lg:py-2 lg:px-2 lg:w-[70vw] left-1/2 transform -translate-x-1/2 rounded-xl' : ''}`}>
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
            Home
          </Link>
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
            Home
          </Link>
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
