'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'

const BlogPage = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: '10 Resume Mistakes That Are Killing Your Job Search',
      excerpt: 'Discover the most common resume errors that are keeping you from landing interviews and learn how to fix them.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Resume Tips',
      image: '/images/blog/resume-mistakes.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'How to Write a Standout Cover Letter in 2024',
      excerpt: 'Master the art of crafting compelling cover letters that grab attention and get you noticed by recruiters.',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Cover Letters',
      image: '/images/blog/cover-letter-guide.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Remote Work Interviews',
      excerpt: 'Navigate virtual interviews with confidence using these proven strategies and tips.',
      author: 'Emma Davis',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Interview Tips',
      image: '/images/blog/remote-interview.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Career Transitions: How to Change Industries Successfully',
      excerpt: 'Learn the strategic steps to pivot your career and make a successful transition to a new field.',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'Career Advice',
      image: '/images/blog/career-transition.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Networking Strategies That Actually Work',
      excerpt: 'Build meaningful professional connections that can advance your career and open new opportunities.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Career Advice',
      image: '/images/blog/networking.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Salary Negotiation: How to Get What You Deserve',
      excerpt: 'Master the art of negotiation to secure competitive compensation packages.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '11 min read',
      category: 'Career Advice',
      image: '/images/blog/salary-negotiation.jpg',
      featured: false
    }
  ]

  const categories = [
    { name: 'All', count: blogPosts.length, icon: BookOpen },
    { name: 'Resume Tips', count: blogPosts.filter(p => p.category === 'Resume Tips').length, icon: Target },
    { name: 'Career Advice', count: blogPosts.filter(p => p.category === 'Career Advice').length, icon: TrendingUp },
    { name: 'Interview Tips', count: blogPosts.filter(p => p.category === 'Interview Tips').length, icon: Users },
    { name: 'Cover Letters', count: blogPosts.filter(p => p.category === 'Cover Letters').length, icon: BookOpen }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl"
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
          >
            Career Insights & Tips
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Stay ahead in your career with expert advice, resume tips, interview strategies, and the latest job market insights.
          </motion.p>

          {/* Search and Filter Bar */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
              </div>
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300">
                  <option>All Categories</option>
                  <option>Resume Tips</option>
                  <option>Career Advice</option>
                  <option>Interview Tips</option>
                  <option>Cover Letters</option>
                </select>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Categories Filter */}
        <section className="px-4 pb-8">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
                >
                  <category.icon className="w-5 h-5 text-indigo-500" />
                  <span className="font-semibold text-gray-900 dark:text-white">{category.name}</span>
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Featured Post */}
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
              Featured Article
            </motion.h2>

            {blogPosts.filter(post => post.featured).map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="md:w-1/2 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center p-8 md:p-12">
                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 pb-20">
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
              Latest Articles
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-indigo-400" />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-sm">{post.author}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span className="text-sm">Read</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Load More Articles
              </motion.button>
            </motion.div>
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
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white">
              <motion.div variants={itemVariants}>
                <BookOpen className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
                <p className="text-lg mb-8 opacity-90">
                  Get the latest career advice, resume tips, and job market insights delivered to your inbox weekly.
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

export default BlogPage
