"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Download, Eye } from 'lucide-react'

const templates = [
  {
    id: 1,
    name: 'Modern Professional',
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    downloads: '2.4k',
    description: 'Clean and modern design perfect for corporate roles',
    popular: true
  },
  {
    id: 2,
    name: 'Creative Portfolio',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    downloads: '1.8k',
    description: 'Stand out with this creative and unique template',
    popular: false
  },
  {
    id: 3,
    name: 'Executive Suite',
    category: 'Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    downloads: '3.1k',
    description: 'Premium template for senior-level positions',
    popular: true
  },
  {
    id: 4,
    name: 'Minimalist Clean',
    category: 'Minimal',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    downloads: '1.5k',
    description: 'Simple and elegant for any industry',
    popular: false
  },
  {
    id: 5,
    name: 'Tech Innovator',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    downloads: '2.7k',
    description: 'Perfect for tech professionals and developers',
    popular: false
  },
  {
    id: 6,
    name: 'Classic Traditional',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    downloads: '1.2k',
    description: 'Timeless design that never goes out of style',
    popular: false
  }
]

const categories = ['All', 'Professional', 'Creative', 'Executive', 'Minimal', 'Technology', 'Traditional']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function ResumeTemplates() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Get the interview with{' '}
            <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              professional resume examples
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our collection of professionally designed templates that have helped thousands land their dream jobs
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                category === 'All'
                  ? 'bg-gradient-to-r from-primary to-pink-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Popular Badge */}
              {template.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-primary to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                </div>
              )}

              {/* Template Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-r from-primary to-pink-600 text-white p-3 rounded-full hover:shadow-lg transition-all"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {template.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {template.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {template.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {template.downloads} downloads
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary hover:text-pink-600 font-medium text-sm transition-colors"
                  >
                    Use Template
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/resume-templates"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View All Templates
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            All templates are free to use and ATS-friendly
          </p>
        </motion.div>
      </div>
    </section>
  )
}
