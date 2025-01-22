import React from 'react'

const EventsSection = () => {
  return (
    <section id="events" className="py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-ndc-black">
            TEIN-GIMPA Events
          </h2>
          
          {/* Coming Soon Banner */}
          <div className="relative py-16 px-8 mt-8 bg-gradient-to-r from-ndc-red via-ndc-green to-ndc-black rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                We&apos;re preparing an exciting lineup of events for the upcoming semester. 
                Stay tuned for rallies, forums, debates, and more!
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 text-gray-700">
            <p className="text-lg">
              Want to stay updated about our events?
            </p>
            <button className="mt-4 bg-ndc-red text-white px-8 py-3 rounded-full hover:bg-ndc-red/90 transition-colors text-lg font-medium">
              Subscribe for more updates
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection