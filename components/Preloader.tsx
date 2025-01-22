import React, { useEffect } from 'react'

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 3000)
    
    return () => {
      clearTimeout(timer)
    }
  }, [onLoadingComplete])
  
  return (
    <div className="fixed inset-0 bg-ndc-green z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 
          className="text-6xl md:text-8xl font-sans font-bold tracking-wider relative"
          style={{
            background: 'linear-gradient(-60deg, #D8232A, #128A2C, #000000, #D8232A)',
            backgroundSize: '300% 300%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            animation: 'gradient 3s ease infinite'
          }}
        >
          TEIN-GIMPA
        </h1>
        <div className="mt-4 flex space-x-2 justify-center">
          <div className="w-2 h-2 rounded-full animate-bounce bg-white/50" style={{ 
            animationDelay: '0s' 
          }} />
          <div className="w-2 h-2 rounded-full animate-bounce bg-white/50" style={{ 
            animationDelay: '0.2s' 
          }} />
          <div className="w-2 h-2 rounded-full animate-bounce bg-white/50" style={{ 
            animationDelay: '0.4s' 
          }} />
        </div>
      </div>
    </div>
  )
}

export default Preloader 