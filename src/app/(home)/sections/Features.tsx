"use client"
import { motion } from 'framer-motion'
import { Rocket, CheckCircle, FileText, Sparkles, Trophy, DollarSign } from 'lucide-react'

const features = [
  { icon: Rocket, title: 'A better resume in minutes', text: 'Replace your old resume in a few simple clicks. Our builder gives recruiters what they want.' },
  { icon: CheckCircle, title: 'ATS-friendly templates', text: 'Tick every box and make sure your resume is never filtered out by the hiring software.' },
  { icon: FileText, title: 'Pre-written content', text: 'Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.' },
  { icon: Sparkles, title: 'Easy with AI', text: 'Quickly generate formal phrases and summaries. Sound professional, faster.' },
  { icon: Trophy, title: 'Beat the competition', text: 'Our tested resume templates are designed to make you more attractive to recruiters.' },
  { icon: DollarSign, title: 'Get paid more', text: 'A higher salary begins with a strong resume. Our salary analyzer tells you if your offer is competitive.' }
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

export function Features() {
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
          Get hired fast with a powerful resume
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white/10 bg-white dark:bg-gray-800"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-pink-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}


