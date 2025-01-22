import React, { useState } from 'react'
import { useRouter } from 'next/router'

interface FormData {
  fullName: string
  faculty: string
  studentId: string
  level: string
  email: string
  phone: string
}

const RegistrationForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    faculty: '',
    studentId: '',
    level: '',
    email: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMBASE_ENDPOINT!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'TEIN-GIMPA Website',
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Registration failed. Please try again.')
      }

      setSuccess(true)
      setTimeout(() => {
        void router.push('/')
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const levelOptions = ['100', '200', '300', '400', 'Graduate']
  const facultyOptions = [
    'Faculty of Law',
    'Business School',
    'School of Public Service and Governance',
    'School of Technology',
    'Other',
  ]

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-ndc-black text-center">
            Join TEIN-GIMPA
          </h2>

          {success ? (
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-green-800 mb-2">Registration Successful!</h3>
              <p className="text-green-600">
                Thank you for joining TEIN-GIMPA. Redirecting you to the homepage...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Faculty */}
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-1">
                  Faculty/Programme
                </label>
                <select
                  id="faculty"
                  name="faculty"
                  required
                  value={formData.faculty}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
                >
                  <option value="">Select your faculty</option>
                  {facultyOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Student ID */}
              <div>
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                  Student ID
                </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  required
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
                  placeholder="Enter your student ID"
                />
              </div>

              {/* Level */}
              <div>
                <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <select
                  id="level"
                  name="level"
                  required
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
                >
                  <option value="">Select your level</option>
                  {levelOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Student Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
                  placeholder="Enter your student email"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ndc-red/20 focus:border-ndc-red"
                  placeholder="Enter your phone number"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-ndc-red text-white p-3 rounded-lg font-medium 
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-ndc-red/90'} 
                  transition-colors`}
              >
                {isLoading ? 'Submitting...' : 'Register'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm 