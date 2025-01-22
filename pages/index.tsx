import { useState } from 'react'
import Head from 'next/head'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

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
