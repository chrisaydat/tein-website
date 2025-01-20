import React, { useEffect, useState } from 'react'

const Preloader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const ndcColors = ['#D8232A', '#128A2C', '#000000'] // Red, Green, Black
  
  useEffect(() => {
    // Color animation
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % ndcColors.length)
    }, 600)
    
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      clearInterval(colorInterval)
      onLoadingComplete()
    }, 3000)
    
    return () => {
      clearInterval(colorInterval)
      clearTimeout(timer)
    }
  }, [onLoadingComplete])
  
  return (
    <div className="fixed inset-0 bg-ndc-green z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 
          className="text-6xl md:text-8xl font-sans font-bold tracking-wider"
          style={{ color: ndcColors[currentColorIndex] }}
        >
          TEIN-GIMPA
        </h1>
        <div className="mt-4 flex space-x-2 justify-center">
          <div className="w-2 h-2 rounded-full animate-bounce" style={{ 
            backgroundColor: ndcColors[currentColorIndex],
            animationDelay: '0s' 
          }} />
          <div className="w-2 h-2 rounded-full animate-bounce" style={{ 
            backgroundColor: ndcColors[currentColorIndex],
            animationDelay: '0.2s' 
          }} />
          <div className="w-2 h-2 rounded-full animate-bounce" style={{ 
            backgroundColor: ndcColors[currentColorIndex],
            animationDelay: '0.4s' 
          }} />
        </div>
      </div>
    </div>
  )
}

export default Preloader 