'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Target, Award, Sparkles, Heart, Zap, Star, CheckCircle, TrendingUp, Rocket, Globe } from 'lucide-react';

export default function About() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

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
    <>
      <Head>
        <title>About Us - Resume Builder</title>
        <meta
          name="description"
          content="Learn more about our website, mission, values, and team."
        />
      </Head>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-purple-50/80 to-pink-50/90 dark:from-gray-900/95 dark:via-purple-900/80 dark:to-pink-900/90" />

        {/* Multiple Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-rose-400/15 to-fuchsia-500/15 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          {/* Enhanced Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-xl shadow-purple-500/10 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center"
            >
              <Heart className="w-5 h-5 text-white fill-current" />
            </motion.div>
            <span className="text-sm font-bold text-gray-800 dark:text-white">
              Empowering <span className="text-purple-600">2M+</span> careers worldwide
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent block">
                About
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent block">
                Resume Builder
              </span>
            </h1>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full origin-center mx-auto w-32 mb-8"
            />
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            We're on a mission to democratize career success by providing cutting-edge tools that empower
            job seekers to <span className="font-bold text-purple-600">stand out</span> and
            <span className="font-bold text-pink-600"> land their dream jobs</span>.
          </motion.p>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
          >
            {[
              { icon: Users, value: '2M+', label: 'Users Helped', color: 'text-purple-600' },
              { icon: Award, value: '94%', label: 'Success Rate', color: 'text-green-600' },
              { icon: Globe, value: '150+', label: 'Countries', color: 'text-blue-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <Link
              href="/signup"
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
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <span className="relative z-10">Join Our Community</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg"
            >
              <Target className="w-5 h-5" />
              <span className="font-semibold">Our Mission</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                Empowering
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Global Careers
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              To empower job seekers worldwide by providing cutting-edge AI-powered tools that transform
              career aspirations into tangible success. We believe everyone deserves the opportunity to
              showcase their potential and achieve their professional dreams.
            </motion.p>

            {/* Mission Points */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {[
                'AI-powered resume optimization',
                'ATS-friendly templates',
                'Real-time career guidance',
                'Global job market insights'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 dark:text-white font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
            style={{ rotateX, rotateY }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              mouseX.set(e.clientX - rect.left - rect.width / 2)
              mouseY.set(e.clientY - rect.top - rect.height / 2)
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-white/20 dark:border-gray-700/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mission"
                width={1200}
                height={900}
                className="w-full h-full object-cover transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent" />

              {/* Floating Achievement Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white fill-current" />
                  <span className="text-white font-bold text-sm">#1 Platform</span>
                </div>
              </motion.div>

              {/* Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">2M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Careers Launched</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg mb-8"
            >
              <Award className="w-5 h-5" />
              <span className="font-semibold">Our Core Values</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                What Drives
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Mission
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16"
            >
              Our values guide every decision we make and shape the way we serve our community of job seekers worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: CheckCircle,
                title: 'Integrity',
                desc: 'We believe in transparency, honesty, and accountability in everything we do.',
                gradient: 'from-green-500 to-emerald-500',
                features: ['100% transparent', 'Honest reviews', 'Accountable service']
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                desc: 'We constantly improve our tools to provide cutting-edge solutions for job seekers.',
                gradient: 'from-purple-500 to-pink-500',
                features: ['AI-powered tools', 'Latest technology', 'Continuous updates']
              },
              {
                icon: Award,
                title: 'Excellence',
                desc: 'We aim to deliver top-quality services and experiences to our users.',
                gradient: 'from-blue-500 to-cyan-500',
                features: ['Premium quality', 'Best practices', 'Superior results']
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
                }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {value.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2">
                    {value.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${value.gradient} text-white shadow-sm`}
                      >
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Journey Timeline */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg mb-8"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Our Journey</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                From Vision
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                To Reality
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              See how we've evolved from a simple idea into a global platform transforming millions of careers.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-600 h-full rounded-full"></div>

            {[
              {
                year: '2021',
                title: 'The Beginning',
                text: 'Launched Resume Builder with the goal of simplifying resume creation and making professional tools accessible to everyone.',
                icon: Rocket,
                gradient: 'from-purple-500 to-pink-500',
                position: 'left'
              },
              {
                year: '2022',
                title: 'Global Growth',
                text: 'Reached 100k users worldwide, establishing ourselves as a trusted platform for career advancement.',
                icon: Globe,
                gradient: 'from-blue-500 to-cyan-500',
                position: 'right'
              },
              {
                year: '2023',
                title: 'Innovation Peak',
                text: 'Introduced AI-powered resume suggestions, real-time improvements, and advanced analytics.',
                icon: Sparkles,
                gradient: 'from-green-500 to-emerald-500',
                position: 'left'
              },
              {
                year: '2024',
                title: 'Future Forward',
                text: 'Continuing to innovate with cutting-edge features and expanding our global community.',
                icon: TrendingUp,
                gradient: 'from-orange-500 to-red-500',
                position: 'right'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  item.position === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full shadow-lg flex items-center justify-center z-10`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full max-w-md ${
                    item.position === 'left' ? 'mr-8 pr-8' : 'ml-8 pl-8'
                  }`}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">{item.year}</div>
                        <div className="text-sm font-semibold text-purple-600">{item.title}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg mb-8"
            >
              <Users className="w-5 h-5" />
              <span className="font-semibold">Meet Our Team</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                The People Behind
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Success
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Our diverse team of experts is dedicated to helping you achieve your career goals with passion and innovation.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                name: "Sarah Chen",
                role: "Chief Technology Officer",
                image: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                gradient: 'from-purple-500 to-pink-500',
                specialty: 'AI & Machine Learning'
              },
              {
                name: "Marcus Johnson",
                role: "Head of Product Design",
                image: "https://images.unsplash.com/photo-1625181796571-7f0d4571ab12?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                gradient: 'from-blue-500 to-cyan-500',
                specialty: 'UX/UI Design'
              },
              {
                name: "Emma Rodriguez",
                role: "VP of Engineering",
                image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                gradient: 'from-green-500 to-emerald-500',
                specialty: 'Full-Stack Development'
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
                }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-500"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                  {/* Specialty Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-3 py-1"
                  >
                    <span className="text-xs font-semibold text-gray-800 dark:text-white">{member.specialty}</span>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      Passionate about creating innovative solutions that empower job seekers worldwide and drive career success.
                    </p>
                  </motion.div>

                  {/* Social Links Placeholder */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex gap-3 mt-6"
                  >
                    {['linkedin', 'twitter', 'github'].map((social, socialIndex) => (
                      <motion.button
                        key={social}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 bg-gradient-to-r ${member.gradient} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <span className="text-white text-xs font-bold">
                          {social.charAt(0).toUpperCase()}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900" />

        {/* Multiple Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-rose-400/15 to-fuchsia-500/15 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          {/* Enhanced CTA Content */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white font-bold">Join Our Growing Community</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Future?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join over <span className="font-bold text-purple-400">2 million</span> professionals who've already transformed their careers.
            Start your journey to success today with our comprehensive platform.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="/signup"
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
                <span className="relative z-10">Start Your Journey</span>
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
              <Link
                href="/resume-templates"
                className="inline-flex items-center gap-4 px-10 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 shadow-xl"
              >
                <Target className="w-6 h-6" />
                <span>Explore Templates</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Free to Start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>ATS-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
