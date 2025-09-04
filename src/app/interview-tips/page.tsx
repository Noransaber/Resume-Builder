'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Target, Award, ArrowRight, CheckCircle, Star, Zap, Eye, Clock, Brain, Heart } from 'lucide-react'
import Link from 'next/link'

const InterviewTipsPage = () => {
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

  const interviewTypes = [
    {
      icon: MessageCircle,
      title: 'Behavioral Interviews',
      description: 'Master the STAR method and behavioral questions',
      tips: 15,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Technical Interviews',
      description: 'Prepare for coding challenges and technical assessments',
      tips: 12,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Panel Interviews',
      description: 'Navigate multiple interviewers and group dynamics',
      tips: 8,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Case Interviews',
      description: 'Ace consulting and problem-solving interviews',
      tips: 6,
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const essentialTips = [
    {
      id: 1,
      title: 'Research the Company Thoroughly',
      description: 'Know their mission, values, recent news, and industry position. This shows genuine interest and preparation.',
      category: 'Preparation',
      icon: Target,
      importance: 'Critical'
    },
    {
      id: 2,
      title: 'Prepare Your STAR Stories',
      description: 'Have 3-5 specific examples ready using the Situation-Task-Action-Result framework.',
      category: 'Strategy',
      icon: Award,
      importance: 'High'
    },
    {
      id: 3,
      title: 'Practice Common Questions',
      description: 'Prepare answers for "Tell me about yourself," "Why this company," and "What are your weaknesses."',
      category: 'Practice',
      icon: MessageCircle,
      importance: 'High'
    },
    {
      id: 4,
      title: 'Body Language Matters',
      description: 'Maintain eye contact, good posture, and confident gestures. Smile and show enthusiasm.',
      category: 'Communication',
      icon: Heart,
      importance: 'Medium'
    },
    {
      id: 5,
      title: 'Ask Smart Questions',
      description: 'Prepare thoughtful questions about the role, team, and company culture.',
      category: 'Strategy',
      icon: Brain,
      importance: 'High'
    },
    {
      id: 6,
      title: 'Follow Up Professionally',
      description: 'Send a thank-you email within 24 hours, reiterating your interest and key points.',
      category: 'Follow-up',
      icon: CheckCircle,
      importance: 'Medium'
    }
  ]

  const commonQuestions = [
    {
      question: "Tell me about yourself",
      tip: "Keep it under 2 minutes, focus on professional background and why you're interested in this role."
    },
    {
      question: "Why do you want to work here?",
      tip: "Show you've researched the company and explain how your goals align with their mission."
    },
    {
      question: "What are your strengths/weaknesses?",
      tip: "Choose real weaknesses that you've worked to improve, and back up strengths with examples."
    },
    {
      question: "Where do you see yourself in 5 years?",
      tip: "Show ambition while staying realistic about growth within the company."
    },
    {
      question: "Why did you leave your last job?",
      tip: "Focus on positive reasons like seeking new challenges or career growth."
    },
    {
      question: "What is your salary expectation?",
      tip: "Research market rates first, then give a range based on your experience level."
    }
  ]

  const successMetrics = [
    { label: 'Interview Success Rate', value: '85%', description: 'Users who improved their interview performance' },
    { label: 'Response Time', value: '2x', description: 'Faster interview callbacks after using our tips' },
    { label: 'Job Offer Rate', value: '3x', description: 'Higher chance of receiving job offers' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-rose-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-400/10 to-purple-500/10 rounded-full blur-3xl"
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-6"
          >
            Ace Your Interviews
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Master the art of interviewing with proven strategies, practice techniques, and insider tips from industry experts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Practice
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
            >
              View All Tips
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Success Metrics */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Interview Types */}
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
              Interview Types & Strategies
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {interviewTypes.map((type, index) => (
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
                      {type.tips} tips
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

        {/* Essential Tips */}
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
              Essential Interview Tips
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {essentialTips.map((tip) => (
                <motion.div
                  key={tip.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <tip.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tip.importance === 'Critical' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                      tip.importance === 'High' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                    }`}>
                      {tip.importance}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                      {tip.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {tip.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tip.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Common Questions */}
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
              Common Interview Questions & Answers
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {commonQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    "{item.question}?"
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {item.tip}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-medium">Pro Tip</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Practice Section */}
        <section className="px-4 pb-16">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-12 text-white"
            >
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Practice Makes Perfect</h3>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of professionals who have improved their interview skills with our mock interview platform.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Mock Interview
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Success Stories */}
        <section className="px-4 pb-20">
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
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <CheckCircle className="w-12 h-12 mb-6 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">From Nervous to Confident</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "These interview tips completely transformed my approach. I went from being terrified of interviews to landing multiple offers!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Alex Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at TechCorp</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-8 text-white"
              >
                <Award className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Dream Job Secured</h3>
                <p className="text-purple-100 mb-6">
                  "The STAR method and question preparation helped me stand out. Now I'm working at my dream company!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Williams</p>
                    <p className="text-sm text-purple-200">Product Manager at InnovateCo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}

export default InterviewTipsPage
