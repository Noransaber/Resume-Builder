"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 text-white dark:bg-gradient-to-br dark:from-zinc-900 dark:via-zinc-800 dark:to-black"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Land Your Dream Job?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Join over 50,000 professionals who've transformed their careers. Start building your winning resume today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Your Success Story
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


