"use client"
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '1 Professional Resume',
      'Basic Templates (5)',
      'PDF Export',
      'Email Support',
      'Basic ATS Optimization'
    ],
    popular: false,
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Pro',
    price: '$9',
    period: 'per month',
    description: 'Most popular choice for professionals',
    features: [
      'Unlimited Resumes',
      'All Templates (50+)',
      'AI-Powered Suggestions',
      'Cover Letter Builder',
      'Priority Support',
      'Advanced ATS Optimization',
      'Resume Analytics',
      'Custom Branding'
    ],
    popular: true,
    icon: Star,
    gradient: 'from-primary to-pink-600'
  },
  {
    name: 'Team',
    price: '$19',
    period: 'per month',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team Collaboration',
      'Admin Dashboard',
      'Bulk Resume Management',
      'Custom Templates',
      'API Access',
      'Dedicated Support',
      'White-label Options'
    ],
    popular: false,
    icon: Crown,
    gradient: 'from-purple-500 to-indigo-600'
  }
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

const cardVariants = {
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

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Choose the Perfect Plan for Your Needs
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get unlimited access to professional templates and advanced features with our flexible pricing options.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto px-4"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative rounded-3xl p-8 h-full ${
              plan.popular 
                ? 'bg-gradient-to-br from-primary/10 to-pink-500/10 border-2 border-primary/20 shadow-2xl' 
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-gradient-to-r from-primary to-pink-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}


