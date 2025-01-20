import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Contact', id: 'contact' },
  ]
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ndc-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-white font-bold text-xl md:text-2xl hover:text-ndc-red transition-colors"
          >
            TEIN-GIMPA
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-white hover:text-ndc-red transition-colors text-sm uppercase tracking-wider"
              >
                {label}
              </button>
            ))}
            <button className="bg-ndc-red text-white px-4 py-2 rounded-md hover:bg-ndc-red/80 transition-colors text-sm uppercase tracking-wider">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="py-4 space-y-4">
            {menuItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-4 py-2 text-white hover:text-ndc-red transition-colors text-sm uppercase tracking-wider"
              >
                {label}
              </button>
            ))}
            <div className="px-4 pt-4 border-t border-white/10">
              <button className="w-full bg-ndc-red text-white px-4 py-2 rounded-md hover:bg-ndc-red/80 transition-colors text-sm uppercase tracking-wider">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
