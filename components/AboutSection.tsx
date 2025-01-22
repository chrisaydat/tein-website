import React from 'react'

const About = () => {
  const missionPoints = [
    'To mobilize and empower students to participate actively in the political process.',
    'To advocate for policies that improve the lives of students and Ghanaians.',
    'To foster a culture of intellectual discourse and critical thinking.',
    'To provide a platform for students to develop their leadership skills.',
    'To contribute to the growth and development of the NDC.',
  ]

  const activities = [
    'Organizing political rallies, forums, and debates.',
    'Conducting voter education and registration drives.',
    'Participating in community outreach programs.',
    'Providing academic support and mentorship to students.',
    'Collaborating with other student organizations and community groups.',
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-ndc-black text-center">
          About TEIN GIMPA
        </h2>
        
        {/* Main Description */}
        <div className="mb-16 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <p className="mb-6">
            The Tertiary Educational Institutions Network (TEIN) at GIMPA is a vibrant 
            student organization dedicated to promoting the ideals and values of the 
            National Democratic Congress (NDC) within the university community. We are 
            a dynamic group of young leaders committed to political engagement, academic 
            excellence, and social responsibility.
          </p>
        </div>

        {/* Mission & Activities Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-ndc-red">Our Mission</h3>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-ndc-green mr-3 mt-1">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-ndc-red">Our Activities</h3>
            <ul className="space-y-4">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-ndc-green mr-3 mt-1">•</span>
                  <span className="text-gray-700">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-ndc-black">Join Us</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            If you are a GIMPA student who is passionate about politics and making 
            a difference, we invite you to join TEIN. Together, we can build a 
            brighter future for Ghana.
          </p>
          <button className="bg-ndc-red text-white px-8 py-3 rounded-full hover:bg-ndc-red/90 transition-colors text-lg font-medium">
            Become a Member
          </button>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-ndc-red transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-ndc-red transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-ndc-red transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
