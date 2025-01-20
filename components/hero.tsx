import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-20">
      {/* Top Text */}
      <div className="container mx-auto px-4">
        <h1 className="text-5xl sm:text-7xl lg:text-[180px] font-sans font-bold text-white leading-none">
          TEIN-GIMPA
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end space-y-8 md:space-y-0">
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-sans font-bold mb-2">
              Tertiary Education Institution Network
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              GIMPA Chapter - Accra, Ghana
            </p>
          </div>
          <div className="text-white text-right">
            <p className="text-base sm:text-lg md:text-xl opacity-90">Empowering Youth</p>
            <p className="text-base sm:text-lg md:text-xl opacity-90">
              Through Education & Leadership
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white opacity-50"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
