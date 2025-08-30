"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Target, TrendingUp, Award, Star, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export function Proof() {
  const items = [
    {
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      title: 'Smart Recruiter Matching',
      text: "AI-powered matching connects you with 50+ recruiters weekly who are actively hiring for your skills",
      icon: Target,
      gradient: 'from-blue-500 to-cyan-500',
      stats: '50+ recruiters',
      features: ['Auto-matching', 'Weekly outreach', 'Direct connections']
    },
    {
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
      title: 'Interview Mastery Program',
      text: 'Master the interview process with 10,000+ real interview questions and expert feedback',
      icon: Award,
      gradient: 'from-purple-500 to-pink-500',
      stats: '10K+ questions',
      features: ['Real interviews', 'Expert feedback', 'Practice mode']
    },
    {
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
      title: 'Personal Career Coach',
      text: 'Get personalized career guidance from industry experts to avoid costly mistakes',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-500',
      stats: 'Expert guidance',
      features: ['Personal coach', 'Career planning', 'Mistake prevention']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const testimonialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl mb-8 shadow-2xl"
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
              This Resume Builder
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Actually Gets You Hired
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join thousands of successful professionals who've landed their dream jobs using our comprehensive career platform
          </p>

          {/* Success Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
          >
            {[
              { value: '94%', label: 'Success Rate', icon: Target },
              { value: '2.5x', label: 'More Interviews', icon: Users },
              { value: '45 Days', label: 'Average Time to Hire', icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                <span>Get Hired Faster</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3 mb-20"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
              }}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-500"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Stats Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4 z-20"
              >
                <span className={`bg-gradient-to-r ${item.gradient} text-white px-3 py-1 rounded-xl text-xs font-bold shadow-lg`}>
                  {item.stats}
                </span>
              </motion.div>

              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg`}
                  >
                    <item.icon className={`w-8 h-8 text-${item.gradient.split('-')[1]}-600`} />
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center mb-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {item.text}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.gradient} text-white shadow-sm`}
                    >
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r ${item.gradient} text-white shadow-lg hover:shadow-xl group-hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Success Stories
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Software Engineer at Google",
                content: "This platform transformed my job search. I went from no interviews to multiple offers in just 6 weeks!",
                rating: 5
              },
              {
                name: "Marcus Johnson",
                role: "Product Manager at Airbnb",
                content: "The resume builder and interview prep tools are incredible. I landed my dream job thanks to this platform.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={testimonialVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-white">
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
      </div>
    </section>
  )
}


