"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles, Zap, Star, Users, Award } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "How do I create a professional resume?",
    answer: "Creating a professional resume is easy with our AI-powered builder. Simply choose a template, fill in your information, and let our smart suggestions guide you. Our ATS-friendly templates ensure your resume gets past applicant tracking systems.",
    category: "Getting Started",
    icon: Sparkles
  },
  {
    id: 2,
    question: "Are your resume templates ATS-friendly?",
    answer: "Absolutely! All our templates are designed to be ATS (Applicant Tracking System) friendly. They use clean formatting, standard fonts, and proper structure that hiring software can easily read and parse. This increases your chances of getting past the initial screening.",
    category: "Templates",
    icon: Zap
  },
  {
    id: 3,
    question: "Can I download my resume in different formats?",
    answer: "Yes! You can export your resume in multiple formats including PDF, DOCX, and plain text. PDF is recommended for online applications as it maintains formatting across all devices and platforms.",
    category: "Export",
    icon: Star
  },
  {
    id: 4,
    question: "How much does it cost to use your resume builder?",
    answer: "We offer a free plan with basic templates and features. Our Pro plan ($9/month) includes unlimited resumes, all templates, AI suggestions, and premium features. Check our pricing page for detailed comparison.",
    category: "Pricing",
    icon: Users
  },
  {
    id: 5,
    question: "Do you offer cover letter templates?",
    answer: "Yes! Our Pro plan includes a comprehensive cover letter builder with professional templates, AI-powered content suggestions, and customization options to match your resume style perfectly.",
    category: "Cover Letters",
    icon: Award
  },
  {
    id: 6,
    question: "Can I edit my resume after creating it?",
    answer: "Of course! You can edit your resume anytime. All your work is automatically saved, and you can make changes, switch templates, or update information whenever you need to.",
    category: "Editing",
    icon: HelpCircle
  },
  {
    id: 7,
    question: "What makes your resume builder different?",
    answer: "Our AI-powered platform combines professional templates with intelligent suggestions. We analyze job descriptions to optimize your resume, provide real-time feedback, and ensure ATS compatibility while maintaining beautiful design.",
    category: "Features",
    icon: Sparkles
  },
  {
    id: 8,
    question: "Is my data secure and private?",
    answer: "Your privacy and security are our top priorities. We use industry-standard encryption, never share your personal information, and you have full control over your data. You can delete your account and data anytime.",
    category: "Security",
    icon: Star
  }
]

const categories = ['All', 'Getting Started', 'Templates', 'Export', 'Pricing', 'Cover Letters', 'Editing', 'Features', 'Security']

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about creating professional resumes with our AI-powered builder
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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-pink-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <motion.div
                  layout
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <motion.button
                    layout
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-pink-600 flex items-center justify-center">
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {faq.question}
                        </h3>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6">
                          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-pink-600 rounded-3xl p-8 text-white">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HelpCircle className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you create the perfect resume and land your dream job.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Contact Support
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
