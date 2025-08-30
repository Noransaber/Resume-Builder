'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Sparkles, ArrowRight, Users, FileText, Download, Palette, Globe, Shield, Headphones } from 'lucide-react'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

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
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const pricingPlans = [
    {
      name: 'Free',
      icon: FileText,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        '3 Resume Templates',
        'Basic Customization',
        'PDF Export',
        'Email Support',
        'Mobile Friendly'
      ],
      limitations: ['Watermark on exports', 'Limited templates'],
      popular: false,
      buttonText: 'Get Started Free',
      buttonVariant: 'outline'
    },
    {
      name: 'Pro',
      icon: Zap,
      price: { monthly: 9.99, yearly: 99 },
      description: 'Best for job seekers',
      features: [
        '20+ Premium Templates',
        'Advanced Customization',
        'Multiple Formats (PDF, DOC)',
        'Priority Support',
        'ATS Optimization',
        'Cover Letter Builder',
        'Resume Analytics',
        'Cloud Storage'
      ],
      popular: true,
      buttonText: 'Start Pro Trial',
      buttonVariant: 'primary'
    },
    {
      name: 'Premium',
      icon: Crown,
      price: { monthly: 19.99, yearly: 199 },
      description: 'For professionals & teams',
      features: [
        'Unlimited Templates',
        'All Pro Features',
        'Team Collaboration',
        'Custom Branding',
        'White-label Option',
        'API Access',
        'Advanced Analytics',
        'Dedicated Support',
        'Custom Integrations'
      ],
      popular: false,
      buttonText: 'Go Premium',
      buttonVariant: 'premium'
    }
  ]

  const features = [
    {
      icon: Palette,
      title: 'Professional Templates',
      description: 'Choose from hundreds of professionally designed resume templates'
    },
    {
      icon: Shield,
      title: 'ATS Optimized',
      description: 'Our resumes are designed to pass Applicant Tracking Systems'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Templates that work internationally with proper formatting'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Get help from our resume writing experts and support team'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      content: 'This resume builder helped me land my dream job! The templates are amazing and the process was so easy.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      content: 'The Pro plan features are incredible. I got 3 job offers within a week of using my new resume!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Designer',
      content: 'Clean, professional templates that perfectly showcase my portfolio. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/20 to-pink-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 6 }}
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6"
          >
            Choose Your Plan
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Unlock your career potential with our premium resume builder.
            Choose the plan that fits your needs and start creating stunning resumes today!
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-2 shadow-lg border border-white/20 dark:border-gray-700/20"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                Save 17%
              </span>
            </button>
          </motion.div>
        </motion.section>

        {/* Pricing Cards */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative backdrop-blur-xl rounded-3xl p-8 shadow-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-300/50 dark:border-purple-600/50 scale-105'
                    : 'bg-white/80 dark:bg-gray-800/80 border-white/20 dark:border-gray-700/20 hover:scale-105'
                }`}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl mb-4 mx-auto">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      ${plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg hover:shadow-xl'
                      : plan.buttonVariant === 'premium'
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Why Choose Our Platform?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto"
            >
              Join thousands of successful professionals who have transformed their careers with our resume builder
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mb-4 mx-auto">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Real success stories from real users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Join thousands of successful professionals who have landed their dream jobs
              </p>
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-2">
                  <span>Start Building Your Resume</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default PricingPage
