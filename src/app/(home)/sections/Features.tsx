"use client"
import { motion } from 'framer-motion'
import { Rocket, CheckCircle, FileText, Sparkles, Trophy, DollarSign, Zap, Target, Award, Users } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lightning-Fast Resume Creation',
    text: 'Transform your career story into a winning resume in minutes with our AI-powered builder.',
    gradient: 'from-purple-500 to-pink-500',
    stats: '5min average'
  },
  {
    icon: CheckCircle,
    title: 'ATS-Optimized Templates',
    text: 'Beat the algorithms with templates designed to pass Applicant Tracking Systems with flying colors.',
    gradient: 'from-green-500 to-emerald-500',
    stats: '99% pass rate'
  },
  {
    icon: FileText,
    title: 'Pre-Written Content Library',
    text: 'Access thousands of professionally written phrases, summaries, and descriptions tailored to your industry.',
    gradient: 'from-blue-500 to-cyan-500',
    stats: '10,000+ phrases'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Enhancement',
    text: 'Let artificial intelligence optimize your content for maximum impact and professional appeal.',
    gradient: 'from-indigo-500 to-purple-500',
    stats: 'Smart suggestions'
  },
  {
    icon: Trophy,
    title: 'Industry-Leading Templates',
    text: 'Stand out from the competition with professionally designed templates trusted by top companies.',
    gradient: 'from-yellow-500 to-orange-500',
    stats: '50+ templates'
  },
  {
    icon: DollarSign,
    title: 'Salary Negotiation Power',
    text: 'Know your worth with our salary analyzer and get the compensation you deserve.',
    gradient: 'from-red-500 to-pink-500',
    stats: '15% higher offers'
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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  }
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.2
    }
  }
}

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Supercharge Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unleash the full potential of your resume with cutting-edge features designed to make you irresistible to employers
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-500 hover:border-purple-300/50"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Floating Stats Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                {feature.stats}
              </motion.div>

              {/* Icon with enhanced animation */}
              <motion.div
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {feature.text}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  padding: '2px',
                  backgroundClip: 'padding-box'
                }}
              >
                <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 rounded-3xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mb-6 shadow-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Ready to Transform Your Career?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of professionals who've already discovered the power of our AI-enhanced resume builder
          </p>
        </motion.div>
      </div>
    </section>
  )
}


