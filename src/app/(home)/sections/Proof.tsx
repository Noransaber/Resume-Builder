"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Proof() {
  const items = [
    { img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', title: 'Recruiter Outreach', text: "They're hiring now. Auto-match your resume with 50 recruiters a week" },
    { img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop', title: 'Interview prep', text: 'Get better every time. Unlock 10,000 questions from real interviews' },
    { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop', title: 'Career Coaching', text: 'Avoid making mistakes with expert advice' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold">This resume builder actually gets you the job</h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#" className="inline-flex rounded-xl bg-gradient-to-r from-primary to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200">
            Get hired faster
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group rounded-2xl border overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/10 bg-white dark:bg-gray-800"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={1200} 
                  height={900} 
                  className="h-full w-full object-cover transition-transform duration-300" 
                />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}


