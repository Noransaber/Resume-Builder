'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users, Star, CheckCircle, XCircle } from 'lucide-react'

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.')
      setLoading(false)
      return
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@resumebuilder.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm.'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Resume Street, CV City, RC 12345',
      description: 'Come say hello at our office!'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-pink-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <motion.section
          className="text-center py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <MessageCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about our resume builder? Need help with your account?
            We're here to help you create the perfect resume and land your dream job!
          </motion.p>
        </motion.section>

        {/* Contact Information Cards */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 dark:text-white font-semibold text-center mb-2">
                  {info.content}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We'd love to hear from you. Fill out the form below and we'll get back to you soon!
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-xl"
                    >
                      <XCircle className="w-5 h-5" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    </div>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How quickly do you respond?",
                  answer: "We typically respond within 24 hours during business days."
                },
                {
                  question: "Do you offer phone support?",
                  answer: "Yes! Our phone lines are open Monday through Friday, 8am to 6pm."
                },
                {
                  question: "Can I schedule a demo?",
                  answer: "Absolutely! We'd love to show you around our platform."
                },
                {
                  question: "Do you have a free trial?",
                  answer: "Yes, we offer a 14-day free trial with full access to all features."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default ContactUsPage
