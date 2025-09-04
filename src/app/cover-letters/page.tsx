'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, PenTool, Target, Award, ArrowRight, CheckCircle, Star, Zap, Eye, Download, Copy } from 'lucide-react'
import Link from 'next/link'

const CoverLettersPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, -2, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const coverLetterTypes = [
    {
      icon: FileText,
      title: 'Entry Level',
      description: 'Perfect for recent graduates and career starters',
      templates: 8,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: PenTool,
      title: 'Experienced Professional',
      description: 'Showcase your expertise and leadership skills',
      templates: 12,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Career Transition',
      description: 'Highlight transferable skills for new industries',
      templates: 6,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Executive Level',
      description: 'Command attention at the highest levels',
      templates: 4,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const featuredTemplates = [
    {
      id: 1,
      title: 'Modern Professional Template',
      description: 'Clean, contemporary design that stands out in digital applications.',
      features: ['ATS-friendly', 'Mobile optimized', 'Customizable sections'],
      downloads: '2.5K',
      rating: 4.9,
      image: '/images/templates/modern-cover.jpg'
    },
    {
      id: 2,
      title: 'Executive Leadership Template',
      description: 'Sophisticated design for senior-level positions and executive roles.',
      features: ['Premium styling', 'Leadership focus', 'Achievement highlights'],
      downloads: '1.8K',
      rating: 4.8,
      image: '/images/templates/executive-cover.jpg'
    },
    {
      id: 3,
      title: 'Creative Portfolio Template',
      description: 'Bold design for creative fields and design-related positions.',
      features: ['Visual elements', 'Portfolio integration', 'Unique styling'],
      downloads: '3.2K',
      rating: 4.7,
      image: '/images/templates/creative-cover.jpg'
    }
  ]

  const writingTips = [
    {
      icon: Zap,
      title: 'Strong Opening',
      tip: 'Start with a compelling hook that grabs attention in the first 30 seconds.',
      importance: 'High'
    },
    {
      icon: Target,
      title: 'Tailored Content',
      tip: 'Customize your letter for each job application, not just your resume.',
      importance: 'High'
    },
    {
      icon: Eye,
      title: 'Proofread Carefully',
      tip: 'Typos and errors can eliminate you from consideration instantly.',
      importance: 'Critical'
    },
    {
      icon: Award,
      title: 'Quantify Achievements',
      tip: 'Use specific numbers and metrics to demonstrate your impact.',
      importance: 'High'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6"
          >
            Perfect Cover Letters
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Create compelling cover letters that showcase your unique value proposition and get noticed by employers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Create Cover Letter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              Browse Templates
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Cover Letter Types */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
            >
              Choose Your Style
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coverLetterTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {type.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {type.templates} templates
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 bg-gradient-to-r ${type.gradient} rounded-xl shadow-lg`}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Templates */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
            >
              Popular Templates
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-blue-400" />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{template.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">{template.downloads}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {template.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {template.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {template.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Use Template
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Writing Tips */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
            >
              Writing Tips & Best Practices
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {writingTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tip.importance === 'Critical' ? 'bg-red-100 text-red-600' :
                      tip.importance === 'High' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {tip.importance}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {tip.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {tip.tip}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Success Stories */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
            >
              Success Stories
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white"
              >
                <CheckCircle className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Sarah's Story</h3>
                <p className="text-blue-100 mb-6">
                  "I used one of your cover letter templates and landed my dream job at Google. The template helped me highlight my achievements perfectly!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">S</span>
                  </div>
                  <span className="font-medium">Sarah Johnson, Software Engineer</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <Award className="w-12 h-12 mb-6 text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mike's Achievement</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "The cover letter I created with your templates helped me stand out from 200+ applicants and secure a promotion."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">M</span>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Mike Rodriguez, Marketing Manager</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl p-12 text-white text-center">
              <motion.div variants={itemVariants}>
                <FileText className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Cover Letter?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Choose from our professionally designed templates and get started in minutes.
                </p>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Creating Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default CoverLettersPage
