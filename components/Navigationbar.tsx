import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LoadingState from './LoadingState'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const menuItems = [
    { label: 'About', href: '/#about' },
    { label: 'Events', href: '/events' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Contact', href: '/#contact' },
  ]
  
  const handleNavigation = async (href: string) => {
    setIsMenuOpen(false)
    
    if (href.startsWith('/#')) {
      const targetId = href.substring(2)
      if (router.pathname !== '/') {
        setIsLoading(true)
        await router.push('/')
        setTimeout(() => {
          const element = document.getElementById(targetId)
          element?.scrollIntoView({ behavior: 'smooth' })
          setIsLoading(false)
        }, 100) // Small delay to ensure DOM is ready
      } else {
        const element = document.getElementById(targetId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setIsLoading(true)
      await router.push(href)
      setIsLoading(false)
    }
  }
  
  return (
    <>
      {isLoading && <LoadingState />}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <nav className="mx-auto rounded-full bg-[#FDF6E3] shadow-lg">
          <div className="flex items-center justify-between h-14 px-6">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-ndc-black font-bold text-lg hover:text-ndc-red transition-colors"
              onClick={() => setIsLoading(true)}
            >
              TEIN-GIMPA
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {menuItems.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavigation(href)}
                  className={`px-4 py-2 text-ndc-black hover:text-ndc-red transition-colors text-sm font-medium ${
                    router.pathname === href ? 'text-ndc-red' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="w-px h-6 bg-gray-300 mx-2" />
              <Link 
                href="/register"
                className="bg-ndc-red text-white px-5 py-1.5 rounded-full hover:bg-ndc-red/90 transition-colors text-sm font-medium"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-ndc-black p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl bg-[#FDF6E3] shadow-lg overflow-hidden">
              <div className="py-3 px-3 space-y-1">
                {menuItems.map(({ label, href }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigation(href)}
                    className={`block w-full text-left px-4 py-2 text-ndc-black hover:bg-black/5 transition-colors text-sm font-medium rounded-xl ${
                      router.pathname === href ? 'text-ndc-red' : ''
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <div className="pt-2 border-t border-gray-200 mt-2">
                  <Link 
                    href="/register"
                    className="w-full bg-ndc-red text-white px-4 py-2 rounded-xl hover:bg-ndc-red/90 transition-colors text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Navbar
