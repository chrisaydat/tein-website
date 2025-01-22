import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-ndc-black text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-ndc-red hover:bg-ndc-red/90 text-white px-8 py-3 rounded-full transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact 