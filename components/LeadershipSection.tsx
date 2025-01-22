import React from 'react'

const Leadership = () => {
  const leaders = [
    {
      role: 'President',
      name: 'Coming Soon',
      image: '/placeholder.jpg', // Add placeholder image
    },
    {
      role: 'Vice President',
      name: 'Coming Soon',
      image: '/placeholder.jpg',
    },
    {
      role: 'General Secretary',
      name: 'Coming Soon',
      image: '/placeholder.jpg',
    },
    // Add more leadership positions as needed
  ]

  return (
    <section id="leadership" className="py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-12 text-ndc-black text-center">
            Our Leadership
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder for leader's image */}
                  <div className="w-full h-full bg-gradient-to-br from-ndc-red/20 to-ndc-green/20" />
                </div>
                <h3 className="text-xl font-bold text-ndc-black text-center mb-2">
                  {leader.role}
                </h3>
                <p className="text-gray-600 text-center">{leader.name}</p>
              </div>
            ))}
          </div>
          
          {/* Vision Statement */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-ndc-red">
              Leadership Vision
            </h3>
            <p className="text-gray-700 text-lg">
              Our leadership team is committed to fostering a vibrant political discourse, 
              promoting student welfare, and advancing the principles of social democracy 
              within GIMPA and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership 