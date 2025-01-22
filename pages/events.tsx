import React from 'react'
import Head from 'next/head'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events from '../components/EventsSection'

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>TEIN-GIMPA | Events</title>
        <meta name="description" content="Stay updated with TEIN-GIMPA's upcoming events, rallies, forums, and debates." />
      </Head>
      <main className="min-h-screen bg-ndc-green">
        <Background />
        <Navbar />
        <Events />
        <Footer />
      </main>
    </>
  )
}

export default EventsPage 