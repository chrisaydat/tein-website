import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navigationbar'
import Footer from '../components/FooterSection'
import Background from '../components/Background'
import Leadership from '../components/LeadershipSection'

const LeadershipPage = () => {
  return (
    <>
      <Head>
        <title>TEIN-GIMPA | Leadership</title>
        <meta name="description" content="Meet the leadership team of TEIN-GIMPA, committed to fostering political discourse and student welfare." />
      </Head>
      <main className="min-h-screen bg-ndc-green">
        <Background />
        <Navbar />
        <Leadership />
        <Footer />
      </main>
    </>
  )
}

export default LeadershipPage 