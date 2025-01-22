import { useState } from 'react'
import Head from 'next/head'
import Background from '../components/Background'
import Navbar from '../components/Navigationbar'
import Footer from '../components/FooterSection'
import Preloader from '../components/Preloader'
import Hero from '../components/HeroSection'
import About from '../components/AboutSection'
import Contact from '../components/ContactSection'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Head>
        <title>TEIN-GIMPA | Home</title>
        <meta name="description" content="Tertiary Education Institution Network (TEIN) at GIMPA - Empowering Youth Through Education & Leadership" />
      </Head>
      {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      <main className="min-h-screen bg-ndc-green">
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
