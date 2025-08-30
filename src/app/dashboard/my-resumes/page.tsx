"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  FileText,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Share,
  Star,
  Clock,
  Calendar,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Zap,
  Heart,
  ArrowRight,
  MoreVertical,
  Copy,
  ExternalLink,
  BarChart3,
  Users,
  Briefcase,
  Crown,
  Flame
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { PageWrapper } from '@/components/ui/PageLoader'

// Mock data for resumes - in a real app, this would come from your backend
const mockResumes = [
  {
    id: '1',
    name: 'Software Engineer Resume',
    template: 'Modern Professional',
    thumbnail: '/images/thumbnails/modern-professional-thumbnail.svg',
    lastModified: '2024-01-15',
    status: 'published',
    downloads: 24,
    views: 156,
    rating: 4.8,
    isFavorite: true,
    category: 'Technology',
    tags: ['React', 'TypeScript', 'Node.js'],
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    name: 'Project Manager Resume',
    template: 'Corporate Executive',
    thumbnail: '/images/thumbnails/corporate-executive-thumbnail.svg',
    lastModified: '2024-01-12',
    status: 'draft',
    downloads: 12,
    views: 89,
    rating: 4.6,
    isFavorite: false,
    category: 'Management',
    tags: ['Agile', 'Scrum', 'Leadership'],
    createdAt: '2024-01-05'
  },
  {
    id: '3',
    name: 'Designer Portfolio',
    template: 'Designer Showcase',
    thumbnail: '/images/thumbnails/designer-showcase-thumbnail.svg',
    lastModified: '2024-01-10',
    status: 'published',
    downloads: 45,
    views: 234,
    rating: 4.9,
    isFavorite: true,
    category: 'Design',
    tags: ['UI/UX', 'Figma', 'Adobe CC'],
    createdAt: '2023-12-20'
  },
  {
    id: '4',
    name: 'Marketing Manager Resume',
    template: 'Sales Professional',
    thumbnail: '/images/thumbnails/sales-professional-thumbnail.svg',
    lastModified: '2024-01-08',
    status: 'published',
    downloads: 18,
    views: 112,
    rating: 4.7,
    isFavorite: false,
    category: 'Marketing',
    tags: ['Digital Marketing', 'SEO', 'Analytics'],
    createdAt: '2023-12-15'
  },
  {
    id: '5',
    name: 'Data Scientist Resume',
    template: 'Academic Scholar',
    thumbnail: '/images/thumbnails/academic-scholar-thumbnail.svg',
    lastModified: '2024-01-05',
    status: 'draft',
    downloads: 8,
    views: 67,
    rating: 4.5,
    isFavorite: false,
    category: 'Data Science',
    tags: ['Python', 'Machine Learning', 'Statistics'],
    createdAt: '2023-12-10'
  },
  {
    id: '6',
    name: 'Healthcare Professional CV',
    template: 'Healthcare Professional',
    thumbnail: '/images/thumbnails/healthcare-professional-thumbnail.svg',
    lastModified: '2024-01-03',
    status: 'published',
    downloads: 32,
    views: 198,
    rating: 4.8,
    isFavorite: true,
    category: 'Healthcare',
    tags: ['Patient Care', 'Medical', 'Nursing'],
    createdAt: '2023-11-25'
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

export default function MyResumesPage() {
  const { user } = useAuthStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Filter and sort resumes
  const filteredResumes = useMemo(() => {
    let filtered = mockResumes.filter(resume => {
      const matchesSearch = resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resume.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resume.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || resume.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort resumes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
        case 'name':
          return a.name.localeCompare(b.name)
        case 'downloads':
          return b.downloads - a.downloads
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  const categories = ['all', ...Array.from(new Set(mockResumes.map(r => r.category)))]

  const stats = {
    totalResumes: mockResumes.length,
    publishedResumes: mockResumes.filter(r => r.status === 'published').length,
    totalDownloads: mockResumes.reduce((sum, r) => sum + r.downloads, 0),
    totalViews: mockResumes.reduce((sum, r) => sum + r.views, 0)
  }

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

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="relative z-10 lg:ml-80 pt-32">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              {/* Enhanced Header Section */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Title Section */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg mb-6"
                    >
                      <FileText className="w-5 h-5" />
                      <span className="font-semibold">My Resumes</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-6xl font-black mb-4">
                      <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent block">
                        Manage Your
                      </span>
                      <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent block">
                        Resume Collection
                      </span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                      Create, edit, and track the performance of your professional resumes.
                      Build your career with confidence using our advanced tools.
                    </p>
                  </div>

                  {/* Create New Resume Button */}
                  <motion.div
                    variants={itemVariants}
                    className="flex-shrink-0"
                  >
                    <Link
                      href="/resume-templates"
                      className="relative inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden group"
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
                        <Plus className="w-6 h-6" />
                      </motion.div>
                      <span className="relative z-10">Create New Resume</span>
                      <motion.div
                        className="relative z-10"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Stats Cards */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                {[
                  {
                    title: 'Total Resumes',
                    value: stats.totalResumes,
                    icon: FileText,
                    gradient: 'from-blue-500 to-cyan-500',
                    change: '+2 this month'
                  },
                  {
                    title: 'Published',
                    value: stats.publishedResumes,
                    icon: Award,
                    gradient: 'from-green-500 to-emerald-500',
                    change: 'Active'
                  },
                  {
                    title: 'Total Downloads',
                    value: stats.totalDownloads,
                    icon: Download,
                    gradient: 'from-purple-500 to-pink-500',
                    change: '+15%'
                  },
                  {
                    title: 'Profile Views',
                    value: stats.totalViews,
                    icon: Eye,
                    gradient: 'from-orange-500 to-red-500',
                    change: '+23%'
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-green-600 font-medium">{stat.change}</div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{stat.title}</h3>
                    <div className={`h-1 bg-gradient-to-r ${stat.gradient} rounded-full`} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Filters and Search */}
              <motion.div
                variants={itemVariants}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resumes by name, category, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex gap-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>

                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="recent">Recently Modified</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="downloads">Most Downloaded</option>
                      <option value="rating">Highest Rated</option>
                    </select>

                    {/* View Mode Toggle */}
                    <div className="flex bg-white/50 dark:bg-gray-700/50 rounded-2xl p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'grid'
                            ? 'bg-purple-500 text-white shadow-lg'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-600/50'
                        }`}
                      >
                        Grid
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                          viewMode === 'list'
                            ? 'bg-purple-500 text-white shadow-lg'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-600/50'
                        }`}
                      >
                        List
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredResumes.length} of {mockResumes.length} resumes
                </div>
              </motion.div>

              {/* Enhanced Resume Grid/List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid gap-8 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                }`}
              >
                {filteredResumes.map((resume, index) => (
                  <motion.div
                    key={resume.id}
                    variants={itemVariants}
                    whileHover="hover"
                    variants={cardHoverVariants}
                    className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
                  >
                    {/* Status and Favorite Badges */}
                    <div className="absolute top-6 left-6 z-20 flex gap-2">
                      {resume.status === 'published' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                          className="bg-green-500 rounded-2xl p-2 shadow-lg"
                        >
                          <Award className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                      {resume.isFavorite && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                          className="bg-red-500 rounded-2xl p-2 shadow-lg"
                        >
                          <Heart className="w-4 h-4 text-white fill-current" />
                        </motion.div>
                      )}
                    </div>

                    {/* Template Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={resume.thumbnail}
                        alt={resume.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Quick Actions Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="flex gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                            title="Edit Resume"
                          >
                            <Edit className="w-6 h-6 text-gray-800" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                            title="Download PDF"
                          >
                            <Download className="w-6 h-6 text-gray-800" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                            title="Share Resume"
                          >
                            <Share className="w-6 h-6 text-gray-800" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold text-gray-800 dark:text-white">
                            {resume.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Resume Info */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                            {resume.name}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                            {resume.template}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {resume.category}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {resume.status === 'published' ? (
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                              Published
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">
                              Draft
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {resume.tags.slice(0, 3).map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + tagIndex * 0.1 }}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Stats and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{resume.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{resume.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(resume.lastModified).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-gray-400 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20"
                            title="More options"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* No Results State */}
              {filteredResumes.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    No resumes found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Try adjusting your search or create a new resume
                  </p>
                  <Link
                    href="/resume-templates"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300"
                  >
                    Create Your First Resume
                  </Link>
                </motion.div>
              )}

              {/* Enhanced CTA Section */}
              <motion.div
                variants={itemVariants}
                className="mt-20 relative overflow-hidden"
              >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-3xl" />

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"
                    variants={floatingVariants}
                    animate="animate"
                  />
                  <motion.div
                    className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                  />
                </div>

                <div className="relative z-10 p-12 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mb-8"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-white font-bold">Ready to Take Your Career to the Next Level?</span>
                  </motion.div>

                  <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent block">
                      Create Your Next
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                      Winning Resume
                    </span>
                  </h2>

                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                    Join thousands of professionals who have transformed their careers with our AI-powered resume builder.
                    Start creating your professional resume today!
                  </p>

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
                          <Plus className="w-6 h-6" />
                        </motion.div>
                        <span className="relative z-10">Create New Resume</span>
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
                        href="/dashboard"
                        className="inline-flex items-center gap-4 px-10 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 shadow-xl"
                      >
                        <BarChart3 className="w-6 h-6" />
                        <span>View Dashboard</span>
                        <ArrowRight className="w-6 h-6" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </PageWrapper>
  )
}
