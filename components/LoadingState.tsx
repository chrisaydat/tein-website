import React from 'react'

const LoadingState = () => {
  return (
    <div className="fixed inset-0 bg-ndc-green/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-ndc-red rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-3 h-3 bg-ndc-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-3 h-3 bg-ndc-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  )
}

export default LoadingState 