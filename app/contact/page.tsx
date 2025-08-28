'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/home page/TK_beach.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
                             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold mb-6 text-kombucha-green">
                 Contact Us
               </h1>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                STOCKISTS, CONSUMERS, FEEDBACK... ALL IS WELCOME! WE'D LOVE TO HEAR FROM YOU AND WILL GET BACK TO YOU AS SOON AS WE CAN.
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'bg-gray-400' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Brewery Address</h3>
                  <p className="text-gray-600">
                    Unit 23, Crawley Road Studios<br />
                    38 Crawley Road<br />
                    N226AG
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Opening Hours</h3>
                  <p className="text-gray-600">
                    M-F: 9am - 5pm<br />
                    Sat: Closed<br />
                    Sun: Various markets
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Contact Details</h3>
                  <p className="text-gray-600">
                    Phone: <a href="tel:07731609598" className="text-primary-600 hover:underline">07731 609 598</a><br />
                    Email: <a href="mailto:Lou@twistedkombucha.co.uk" className="text-primary-600 hover:underline">Lou@twistedkombucha.co.uk</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Customer Reviews</h3>
                  <img 
                    src="/images/home page/trustpilot2.png" 
                    alt="Trustpilot"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
