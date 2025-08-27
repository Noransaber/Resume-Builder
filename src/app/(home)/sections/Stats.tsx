"use client"
import { motion } from 'framer-motion'
import { FileCheck, Clock, ThumbsUp, Headphones } from 'lucide-react'

const stats = [
  { icon: FileCheck, value: '5K+', label: 'Resumes Created' },
  { icon: Clock, value: '<5min', label: 'Avg. Build Time' },
  { icon: ThumbsUp, value: '99%', label: 'Customer Satisfaction' },
  { icon: Headphones, value: '24/7', label: 'Support Available' }
]

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
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function Stats() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Find Your Answer Instantly
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Everything you need to know about creating professional resumes with AI
        </p>
      </motion.div>

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
            whileHover={{ y: -8, scale: 1.05 }}
            className="group rounded-2xl border bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-gray-800 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-pink-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-8 h-8" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
              className="text-3xl font-bold mb-2"
            >
              {stat.value}
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}


