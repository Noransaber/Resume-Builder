"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Download, Eye } from 'lucide-react'

const templates = [
  {
    id: 1,
    name: 'Corporate Executive',
    category: 'Executive',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    downloads: '3.2k',
    description: 'Sophisticated template for senior corporate leaders with authority and prestige',
    popular: true,
    gradient: 'from-slate-500 to-slate-700',
    features: ['Executive presence', 'Corporate styling', 'Leadership focus']
  },
  {
    id: 2,
    name: 'Designer Showcase',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    downloads: '2.1k',
    description: 'Vibrant and creative template perfect for designers, artists, and creative professionals',
    popular: true,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Creative layout', 'Portfolio showcase', 'Visual elements']
  },
  {
    id: 3,
    name: 'Startup Founder',
    category: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    downloads: '1.8k',
    description: 'Dynamic template for entrepreneurs and startup founders showcasing vision and achievements',
    popular: true,
    gradient: 'from-orange-500 to-red-500',
    features: ['Entrepreneur focus', 'Growth metrics', 'Innovation showcase']
  },
  {
    id: 4,
    name: 'Academic Scholar',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    downloads: '1.5k',
    description: 'Professional template for researchers, professors, and academic professionals',
    popular: false,
    gradient: 'from-blue-500 to-indigo-500',
    features: ['Academic credentials', 'Research focus', 'Scholarly design']
  },
  {
    id: 5,
    name: 'Healthcare Professional',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    downloads: '1.9k',
    description: 'Compassionate and professional template for doctors, nurses, and healthcare workers',
    popular: false,
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Healthcare focus', 'Patient care emphasis', 'Medical credentials']
  },
  {
    id: 6,
    name: 'Digital Nomad',
    category: 'Remote',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    downloads: '1.3k',
    description: 'Modern template for remote workers and digital nomads with global experience',
    popular: false,
    gradient: 'from-cyan-500 to-blue-500',
    features: ['Remote work focus', 'Global experience', 'Cultural adaptability']
  }
]

const categories = [
  { id: 'all', name: 'All Templates', count: templates.length },
  { id: 'executive', name: 'Executive', count: templates.filter(t => t.category === 'Executive').length },
  { id: 'creative', name: 'Creative', count: templates.filter(t => t.category === 'Creative').length },
  { id: 'entrepreneur', name: 'Entrepreneur', count: templates.filter(t => t.category === 'Entrepreneur').length },
  { id: 'academic', name: 'Academic', count: templates.filter(t => t.category === 'Academic').length },
  { id: 'healthcare', name: 'Healthcare', count: templates.filter(t => t.category === 'Healthcare').length },
  { id: 'remote', name: 'Remote', count: templates.filter(t => t.category === 'Remote').length }
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

const categoryVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
}

export function ResumeTemplates() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg"
          >
            <Download className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Template
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover professionally designed templates that showcase your skills and land you interviews at top companies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={categoryVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
              {category.count > 0 && (
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  index === 0
                    ? 'bg-white/20 text-white'
                    : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300'
                }`}>
                  {category.count}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
              }}
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-500"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${template.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Popular Badge */}
              {template.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute top-4 left-4 z-20"
                >
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                    ⭐ Popular
                  </span>
                </motion.div>
              )}

              {/* Template Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${template.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-10">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 backdrop-blur-sm text-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Eye className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-gradient-to-r ${template.gradient} text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Download className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-1 rounded-xl text-xs font-semibold">
                    {template.category}
                  </span>
                </div>
              </div>

              {/* Template Info */}
              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {template.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(template.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {template.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {template.downloads}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      downloads
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {template.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.features.slice(0, 2).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${template.gradient} text-white shadow-sm`}
                    >
                      {feature}
                    </span>
                  ))}
                  {template.features.length > 2 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      +{template.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r ${template.gradient} text-white shadow-lg hover:shadow-xl group-hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Use Template</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg"
            >
              <Download className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Ready to Create Your Winning Resume?
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their careers with our expertly designed templates
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/resume-templates"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Browse All Templates</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  <span>Get Started Free</span>
                  <Download className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>ATS-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Free to Use</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Professional Designs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
