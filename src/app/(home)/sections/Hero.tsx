"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Users, Award, Shield, Sparkles, Zap, Target, Rocket, TrendingUp, Play, ChevronRight } from 'lucide-react'

export function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-purple-50/60 to-pink-50/80 dark:from-gray-900/90 dark:via-purple-900/70 dark:to-pink-900/80" />

      {/* Multiple Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-rose-400/10 to-fuchsia-500/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
        <motion.div
          className="absolute top-40 left-40 w-32 h-32 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 6 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* Left Column - Enhanced Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-10"
          >
            {/* Enhanced Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl shadow-purple-500/10"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center"
              >
                <Star className="w-5 h-5 text-white fill-current" />
              </motion.div>
              <span className="text-sm font-bold text-gray-800 dark:text-white">
                Trusted by <span className="text-purple-600">2M+</span> professionals worldwide
              </span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent block">
                  Build a Resume
                </span>
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent block">
                  That Gets You
                </span>
                <motion.span
                  className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  HIRED
                </motion.span>
              </h1>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full origin-left"
              />
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Transform your career with our <span className="font-bold text-purple-600">AI-powered</span> resume builder.
              Create professional resumes in minutes and land your dream job faster.
            </motion.p>

            {/* Enhanced Key Benefits */}
            <motion.div
              variants={itemVariants}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                { icon: Target, text: 'ATS-Optimized Templates', color: 'text-green-600' },
                { icon: Sparkles, text: 'AI-Powered Suggestions', color: 'text-purple-600' },
                { icon: Zap, text: 'Lightning-Fast Creation', color: 'text-yellow-600' },
                { icon: Shield, text: '100% Secure & Private', color: 'text-blue-600' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <benefit.icon className={`w-5 h-5 text-white`} />
                  </motion.div>
                  <span className="font-semibold text-gray-800 dark:text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href="/resume-templates"
                  className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="relative z-10"
                  >
                    <Rocket className="w-6 h-6" />
                  </motion.div>
                  <span className="relative z-10">Create My Resume</span>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

              </motion.div>
            </motion.div>

            {/* Enhanced Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-8 pt-6"
            >
              {[
                { icon: Users, value: '2M+', label: 'Happy Users', color: 'text-purple-600' },
                { icon: Award, value: '4.9/5', label: 'User Rating', color: 'text-yellow-600' },
                { icon: Shield, value: '100%', label: 'Secure', color: 'text-green-600' },
                { icon: TrendingUp, value: '45%', label: 'More Interviews', color: 'text-blue-600' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg"
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Visual */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full max-w-2xl h-full"
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              mouseX.set(e.clientX - rect.left - rect.width / 2)
              mouseY.set(e.clientY - rect.top - rect.height / 2)
            }}
          >
            {/* Main Resume Preview with Enhanced Effects */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/20"
            >
              <Image
                src="https://resume.io/assets/landing/home/hero/typing-hero-19c17dfac3e22fdc206c80e7f4d80e2c2feaa5cc2ac34f29257ec4da6ec6c722.png"
                alt="Professional resume preview"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500"
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent" />

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">95%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">ATS Score</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white fill-current" />
                  <span className="text-white font-bold text-sm">Top Rated</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -15 }}
              >
                <Target className="w-7 h-7 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl"
            />

            <motion.div
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-20 -left-8 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


