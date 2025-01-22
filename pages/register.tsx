import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navigationbar'
import Footer from '../components/Footer'
import Background from '../components/Background'
import RegistrationForm from '../components/RegistrationForm'

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>TEIN-GIMPA | Register</title>
        <meta name="description" content="Join TEIN-GIMPA - Register to become a member and be part of our vibrant community." />
      </Head>
      <main className="min-h-screen bg-ndc-green">
        <Background />
        <Navbar />
        <RegistrationForm />
        <Footer />
      </main>
    </>
  )
}

export default RegisterPage 