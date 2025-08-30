"use client"
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Star,
  Download,
  Eye,
  ChevronRight,
  Search,
  Filter,
  Sparkles,
  Target,
  Award,
  Heart,
  Zap,
  TrendingUp,
  Users,
  CheckCircle,
  Crown,
  Flame,
  Rocket,
  Globe
} from 'lucide-react'
import { templates, categories } from '../../templates'
import { PageWrapper } from '@/components/ui/PageLoader'

// Convert template data to match the expected format
const resumeTemplates = templates.map(template => ({
  id: template.id,
  name: template.name,
  category: template.category,
  previewImage: template.thumbnail,
  rating: 4.8, // Default rating
  downloads: template.popular ? '2.5k' : '1.2k', // Mock download counts
  description: template.description,
  popular: template.popular,
  style: template.id,
  featured: template.featured,
  atsOptimized: template.atsOptimized,
  features: template.features
}))

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

const cardHoverVariants = {
  hover: {
    y: -15,
    scale: 1.03,
    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 }
  }
}

export default function ResumeTemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Filter templates based on active category and search
  const filteredTemplates = useMemo(() => {
    let filtered = resumeTemplates

    if (activeCategory !== 'all') {
      filtered = filtered.filter(template =>
        template.category.toLowerCase() === activeCategory
      )
    }

    if (searchQuery) {
      filtered = filtered.filter(template =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }, [activeCategory, searchQuery])

  const featuredTemplates = resumeTemplates.filter(t => t.featured)
  const popularTemplates = resumeTemplates.filter(t => t.popular)

  return (
    <PageWrapper isLoading={false} loadingType="general">
      <div className="relative min-h-screen overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90 via-purple-50/80 to-pink-50/90 dark:from-gray-900/95 dark:via-purple-900/80 dark:to-pink-900/90" />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-rose-400/10 to-fuchsia-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          />
        </div>

        {/* Enhanced Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
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
                  <Sparkles className="w-5 h-5 text-white fill-current" />
                </motion.div>
                <span className="text-sm font-bold text-gray-800 dark:text-white">
                  <span className="text-purple-600">10+</span> Professional Templates
                </span>
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.div variants={itemVariants}>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-8">
                  <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent block">
                    Choose Your
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent block">
                    Perfect Template
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
                Transform your career with our professionally designed templates.
                Each template is <span className="font-bold text-purple-600">ATS-optimized</span> and crafted to help you
                <span className="font-bold text-pink-600"> stand out from the competition</span>.
              </motion.p>

              {/* Enhanced Search and CTA */}
              <motion.div
                variants={itemVariants}
                className="max-w-2xl mx-auto mb-12"
              >
                {/* Search Bar */}
                <div className="relative mb-8">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search templates by name, category, or style..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-16 pr-6 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-lg"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowFilters(!showFilters)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white">
                      <Filter className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                      <span className="relative z-10">Browse Templates</span>
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
                      href="/signup"
                      className="inline-flex items-center gap-4 px-10 py-5 border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-2xl font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      <Target className="w-6 h-6" />
                      <span>Get Started Free</span>
                      <ChevronRight className="w-6 h-6" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {[
                  { icon: Users, value: '2M+', label: 'Users Served', color: 'text-purple-600' },
                  { icon: Award, value: '94%', label: 'Success Rate', color: 'text-green-600' },
                  { icon: Globe, value: '150+', label: 'Countries', color: 'text-blue-600' },
                  { icon: Star, value: '4.9/5', label: 'User Rating', color: 'text-yellow-600' }
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
            </motion.div>
          </div>
        </section>

        {/* Enhanced Category Tabs */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-purple-500/25'
                      : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-white/20 dark:border-gray-700/20'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 text-xs ${
                    activeCategory === category.id
                      ? 'text-white/90'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    ({category.count})
                  </span>

                  {/* Active indicator */}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl -z-10"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Templates Showcase */}
        {activeCategory === 'all' && !searchQuery && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-12"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg mb-8"
                >
                  <Crown className="w-5 h-5" />
                  <span className="font-semibold">Featured Templates</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-4xl lg:text-5xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
                    Most Popular
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Professional Templates
                  </span>
                </motion.h2>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-8 lg:grid-cols-3"
              >
                {featuredTemplates.slice(0, 3).map((template, index) => (
                  <motion.div
                    key={template.id}
                    variants={itemVariants}
                    whileHover="hover"
                    className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/20"
                  >
                    {/* Template Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={template.previewImage}
                        alt={template.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating Badges */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-3 shadow-xl"
                      >
                        <Flame className="w-5 h-5 text-white" />
                      </motion.div>

                      {/* Use Template Button */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl"
                        >
                          <Link href={`/resume/builder/${template.id}`}>
                            Use This Template
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {template.name}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-semibold">
                            {template.category}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {template.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {template.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {template.features.slice(0, 2).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Enhanced Templates Grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            {(activeCategory !== 'all' || searchQuery) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {filteredTemplates.length} Template{filteredTemplates.length !== 1 ? 's' : ''} Found
                </h2>
                {activeCategory !== 'all' && (
                  <p className="text-gray-600 dark:text-gray-400">
                    Showing templates in <span className="font-semibold text-purple-600">{activeCategory}</span> category
                  </p>
                )}
              </motion.div>
            )}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  variants={itemVariants}
                  whileHover="hover"
                  variants={cardHoverVariants}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20"
                >
                  {/* Popular Badge */}
                  {template.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="absolute top-6 left-6 z-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-3 shadow-xl"
                    >
                      <Flame className="w-5 h-5 text-white" />
                    </motion.div>
                  )}

                  {/* Featured Badge */}
                  {template.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="absolute top-6 right-6 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-3 shadow-xl"
                    >
                      <Crown className="w-5 h-5 text-white" />
                    </motion.div>
                  )}

                  {/* Template Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={template.previewImage}
                      alt={template.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* ATS Badge */}
                    {template.atsOptimized && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="absolute bottom-6 left-6 bg-green-500 rounded-2xl p-3 shadow-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </motion.div>
                    )}

                    {/* Use Template Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl"
                      >
                        <Link href={`/resume/builder/${template.id}`}>
                          Use This Template
                        </Link>
                      </motion.div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-gray-800 dark:text-white">
                          {template.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                          {template.name}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold">
                          {template.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                      {template.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {template.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + featureIndex * 0.1 }}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Download className="w-4 h-4" />
                        <span className="text-xs font-medium">{template.downloads}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          title="Preview template"
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-pink-600 transition-colors rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20"
                          title="Download template"
                        >
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredTemplates.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  No templates found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Try adjusting your search or browse our full collection
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all')
                    setSearchQuery('')
                  }}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300"
                >
                  Browse All Templates
                </button>
              </motion.div>
            )}
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
            {/* Enhanced CTA Content */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-white font-bold">Ready to Transform Your Career?</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Start Building
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your Future Today
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Join <span className="font-bold text-purple-400">millions of professionals</span> who have already transformed their careers
              with our AI-powered resume builder and premium templates.
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
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                  <span className="relative z-10">Create Your Resume</span>
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
                  href="/pricing"
                  className="inline-flex items-center gap-4 px-10 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 shadow-xl"
                >
                  <Zap className="w-6 h-6" />
                  <span>View Pricing</span>
                  <TrendingUp className="w-6 h-6" />
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
                <span>ATS-Optimized</span>
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
      </div>
    </PageWrapper>
  )
}

