'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, User, Sparkles, Zap } from 'lucide-react'
import 'tailwindcss/tailwind.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/lib/firebase'           // <- our firebase helper
import { useRouter } from 'next/navigation'

const SignupPage = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
    }
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } }
    const floatingVariants = { animate: { y: [0, -10, 0], rotate: [0, 5, -5, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } } }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setError(null)
  
      // basic client-side validation
      if (!formData.name.trim()) {
        setError('Please enter your full name.')
        return
      }
      if (!formData.email.trim()) {
        setError('Please enter your email address.')
        return
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters.')
        return
      }
  
      try {
        setLoading(true)
        // create user with email/password
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        // set displayName
        if (userCredential.user && formData.name) {
          await updateProfile(userCredential.user, { displayName: formData.name })
        }
        // optionally you can show a success toast here
        router.push('/dashboard') // redirect on success
      } catch (err) {
        // friendly error mapping
        const code = err?.code || ''
        let msg = 'Failed to create account. Please try again.'
        if (code.includes('auth/email-already-in-use')) msg = 'This email is already registered. Try signing in.'
        else if (code.includes('auth/invalid-email')) msg = 'Invalid email address.'
        else if (code.includes('auth/weak-password')) msg = 'Password is too weak. Use 6+ characters.'
        else if (err?.message) msg = err.message
        setError(msg)
      } finally {
        setLoading(false)
      }
    }
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl" variants={floatingVariants} animate="animate" />
            <motion.div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-pink-500/20 rounded-full blur-3xl" variants={floatingVariants} animate="animate" transition={{ delay: 2 }} />
            <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl" variants={floatingVariants} animate="animate" transition={{ delay: 4 }} />
          </div>
    
          <div className="relative flex items-center justify-center min-h-screen px-4">
            <motion.div className="w-full max-w-md pb-[32px]" variants={containerVariants} initial="hidden" animate="visible">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center mb-8">
                <motion.div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg" whileHover={{ scale: 1.05, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Join Us</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Create your account and start building amazing resumes</p>
              </motion.div>
    
              {/* Form Card */}
              <motion.div variants={itemVariants} className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* show error */}
                  {error && <div className="text-sm text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-md">{error}</div>}
    
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                      <input name="name" value={formData.name} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300 placeholder-gray-400" placeholder="Enter your full name" />
                    </div>
                  </div>
    
                  {/* Email */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-gray-400" /></div>
                      <input name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300 placeholder-gray-400" placeholder="Enter your email" />
                    </div>
                  </div>
    
                  {/* Password */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-gray-400" /></div>
                      <input name="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleInputChange} className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 dark:bg-gray-700 dark:text-white transition-all duration-300 placeholder-gray-400" placeholder="Create a strong password" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-xl transition-colors duration-200">
                        {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                      </button>
                    </div>
                  </div>
    
                  {/* Submit */}
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full ${loading ? 'opacity-80 cursor-wait' : ''} bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    <div className="flex items-center justify-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>{loading ? 'Creating account...' : 'Create Account'}</span>
                    </div>
                  </motion.button>
                </form>
    
                {/* Divider & sign-in */}
                <motion.div variants={itemVariants} className="mt-8 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300 dark:border-gray-600"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Already have an account?</span></div>
                  </div>
                </motion.div>
    
                <motion.div variants={itemVariants} className="text-center">
                  <a href="/signin" className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200">
                    Sign in instead
                    <motion.svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </a>
                </motion.div>
              </motion.div>
    
              <motion.p variants={itemVariants} className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
                By signing up, you agree to our <a href="/terms-and-conditions" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">Terms</a> and <a href="/privacy-policy" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">Privacy Policy</a>.
              </motion.p>
            </motion.div>
          </div>
        </div>
      )
    }
    

export default SignupPage;
