import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
    </div>
  )
}

export default LoadingSpinner 