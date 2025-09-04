'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Users, Award, ArrowRight, CheckCircle, Star, Zap, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

const CareerAdvicePage = () => {
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

  const adviceCategories = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Strategies for advancing your professional journey',
      articles: 12,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and achieve meaningful career objectives',
      articles: 8,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Build professional relationships and connections',
      articles: 15,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Celebrate milestones and recognize accomplishments',
      articles: 6,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const featuredAdvice = [
    {
      id: 1,
      title: '5-Year Career Planning: Building Your Professional Roadmap',
      description: 'Create a comprehensive plan that aligns your career goals with market opportunities and personal growth.',
      readTime: '12 min read',
      author: 'Dr. Sarah Mitchell',
      rating: 4.8,
      icon: Target
    },
    {
      id: 2,
      title: 'Navigating Career Transitions: From Tech to Management',
      description: 'Successfully pivot your career while leveraging your existing skills and experience.',
      readTime: '10 min read',
      author: 'Mark Johnson',
      rating: 4.9,
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Building a Personal Brand That Attracts Opportunities',
      description: 'Develop a strong professional identity that opens doors to new career possibilities.',
      readTime: '15 min read',
      author: 'Emma Rodriguez',
      rating: 4.7,
      icon: Users
    }
  ]

  const quickTips = [
    {
      icon: Lightbulb,
      title: 'Daily Learning',
      tip: 'Dedicate 30 minutes daily to learning something new in your field.'
    },
    {
      icon: Briefcase,
      title: 'Skill Assessment',
      tip: 'Regularly evaluate your skills and identify areas for improvement.'
    },
    {
      icon: Zap,
      title: 'Goal Tracking',
      tip: 'Set SMART goals and track your progress weekly.'
    },
    {
      icon: Star,
      title: 'Mentorship',
      tip: 'Find a mentor who can guide your career development.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-teal-400/10 to-emerald-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 dark:from-white dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-6"
          >
            Career Growth & Development
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Accelerate your career with expert strategies, goal-setting techniques, networking tips, and professional development guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
            >
              Get Career Assessment
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Categories Grid */}
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
              Career Development Areas
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {adviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {category.articles} articles
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg`}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Advice */}
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
              Featured Career Advice
            </motion.h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredAdvice.map((advice) => (
                <motion.div
                  key={advice.id}
                  variants={itemVariants}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                    <advice.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {advice.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {advice.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{advice.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{advice.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      By {advice.author}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quick Tips Section */}
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
              Quick Career Tips
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-white" />
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

        {/* Career Assessment CTA */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-white text-center">
              <motion.div variants={itemVariants}>
                <TrendingUp className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Take our free career assessment to identify your strengths, areas for growth, and personalized development plan.
                </p>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Career Assessment
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="px-4 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
              <motion.div variants={itemVariants}>
                <Target className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Stay Ahead in Your Career
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Get weekly career insights, skill development tips, and industry trends delivered to your inbox.
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default CareerAdvicePage
