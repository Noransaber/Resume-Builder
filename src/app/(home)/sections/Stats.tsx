"use client"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { FileCheck, Clock, ThumbsUp, Headphones, TrendingUp, Users, Star, Zap, Target, Award } from 'lucide-react'

const stats = [
  {
    icon: FileCheck,
    value: '50K+',
    label: 'Resumes Created',
    description: 'Professional resumes built by our users',
    gradient: 'from-blue-500 to-cyan-500',
    trend: '+25%'
  },
  {
    icon: Clock,
    value: '<5min',
    label: 'Avg. Build Time',
    description: 'Lightning-fast resume creation',
    gradient: 'from-green-500 to-emerald-500',
    trend: 'Fastest'
  },
  {
    icon: ThumbsUp,
    value: '99%',
    label: 'Success Rate',
    description: 'Interview success with our templates',
    gradient: 'from-purple-500 to-pink-500',
    trend: 'Industry leading'
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Expert Support',
    description: 'Always here to help you succeed',
    gradient: 'from-orange-500 to-red-500',
    trend: 'Round the clock'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
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

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg"
          >
            <TrendingUp className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent">
              Numbers That
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who've already transformed their careers with our comprehensive platform
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.05,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
              }}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Floating Trend Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4"
              >
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </motion.div>

              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${stat.gradient} text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
              >
                <stat.icon className="w-10 h-10" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  className="text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                >
                  {stat.value}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.label}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  padding: '3px',
                  backgroundClip: 'padding-box'
                }}
              >
                <div className="w-full h-full bg-white/95 dark:bg-gray-800/95 rounded-3xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
            <div className="text-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg"
              >
                <Award className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our platform powers career success for professionals across all industries and experience levels
              </p>
            </div>

            {/* Mini Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: 'Tech', desc: '50% of users' },
                { icon: Target, value: 'Marketing', desc: '25% of users' },
                { icon: Star, value: 'Finance', desc: '15% of users' },
                { icon: Zap, value: 'Healthcare', desc: '10% of users' }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center"
                >
                  <industry.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-1">{industry.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{industry.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg"
          >
            <Target className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start building your professional resume today and become part of our growing community of career achievers
          </p>
        </motion.div>
      </div>
    </section>
  )
}


