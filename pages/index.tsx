import { useState } from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import Hero from '../components/Hero'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      <main className="min-h-screen bg-ndc-green">
        <Background />
        <Navbar />
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg text-center max-w-2xl mx-auto">
              We are a creative team passionate about building modern web experiences
              using cutting-edge technologies.
            </p>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 bg-primary/50 backdrop-blur-sm text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Web Development', 'UI/UX Design', '3D Graphics'].map((service) => (
                <div key={service} className="p-6 rounded-lg bg-primary/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">{service}</h3>
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-primary/30 border border-gray-600 text-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-primary/30 border border-gray-600 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  )
}
