"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '@/stores/authStore'
import { 
  LogIn, 
  Mail, 
  Github, 
  ArrowRight, 
  Shield, 
  Sparkles, 
  Users,
  CheckCircle,
  Loader2,
  Eye,
  EyeOff
} from 'lucide-react'
import Link from 'next/link'
import { FullScreenLoader, LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { LoadingButton } from '@/components/ui/PageLoader'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

// Initialize Firebase Auth
import { getAuth } from 'firebase/auth'

// Use getAuth to initialize auth
const auth = getAuth()

// Ensure signInWithEmailAndPassword is used correctly
import { signInWithEmailAndPassword } from 'firebase/auth'

// Use signInWithEmailAndPassword in loginEmail
const loginEmail = async (email: string, password: string) => {
  const auth = getAuth()
  await signInWithEmailAndPassword(auth, email, password)
}

/**
 * Modern Sign-In Page Component
 * 
 * Features:
 * - Beautiful gradient background with animated elements
 * - Responsive design for all screen sizes
 * - Smooth Framer Motion animations
 * - Firebase authentication integration
 * - Loading states and error handling
 * - Accessibility features
 */
export default function SignInPage() {
  const router = useRouter()
  const { user, loading, init, loginGoogle, loginGithub } = useAuthStore()
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(false)

  // Initialize auth state and redirect if already signed in
  useEffect(() => {
    init()
  }, [init])

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  /**
   * Handle Google Sign-In
   */
  const handleGoogleSignIn = async () => {
    try {
      setAuthLoading(true)
      setError(null)
      await loginGoogle()
      // Redirect will happen automatically via useEffect
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google')
    } finally {
      setAuthLoading(false)
    }
  }

  /**
   * Handle GitHub Sign-In
   */
  const handleGithubSignIn = async () => {
    try {
      setAuthLoading(true)
      setError(null)
      await loginGithub()
      // Redirect will happen automatically via useEffect
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with GitHub')
    } finally {
      setAuthLoading(false)
    }
  }

  // Define signInWithEmail in your auth store if not already defined
  // Example implementation
  const signInWithEmail = async (email: string, password: string) => {
    // Use Firebase's signInWithEmailAndPassword
    const userCredential = await auth.signInWithEmailAndPassword(email, password)
    return userCredential.user
  }

  // Type the data parameter
  const handleEmailSignIn: SubmitHandler<FieldValues> = async (data) => {
    try {
      setAuthLoading(true)
      setError(null)
      await signInWithEmailAndPassword(auth, data.email, data.password)
// Firebase will persist auth automatically
    // Redirect happens via useEffect
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with email')
    } finally {
      setAuthLoading(false)
    }
  }

  // Show loading spinner while checking auth state
  if (loading) {
    return <FullScreenLoader />
  }

  // If user is already signed in, don't show the sign-in page
  if (user) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-32">
        {/* Left Side - Branding & Features */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start space-x-3 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              ResumeBuilder
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Build Your
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Dream Career
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Create professional resumes, track applications, and land your dream job with our AI-powered platform.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            {[
              { icon: Sparkles, text: "AI-Powered Builder" },
              { icon: Shield, text: "ATS-Optimized" },
              { icon: Users, text: "Trusted by 1M+" },
              { icon: CheckCircle, text: "Free Templates" }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:hidden"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sign in to save resumes and track applications →
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Sign In Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 lg:p-10">
            {/* Form Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                className="w-16 h-16 bg-gradient-to-r from-primary to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <LogIn className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
              >
                Welcome Back
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-600 dark:text-gray-300"
              >
                Sign in to save resumes and track applications
              </motion.p>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl mb-6 text-sm"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sign In Buttons */}
            <div className="space-y-4">
              {/* Google Sign In */}
              <LoadingButton
                isLoading={authLoading}
                onClick={handleGoogleSignIn}
                loadingText="Signing in..."
                className="w-full flex items-center justify-center space-x-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-200 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                    <path fill="#4285F4" d="M24 9.5c3.9 0 7.1 1.6 9.3 3.3l7-7C35.8 2.5 30.3 0 24 0 14.6 0 6.4 5.8 2.5 14.1l8.3 6.4C12.5 14.1 17.7 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M46.5 24c0-1.5-.1-3-.4-4.5H24v9h12.7c-.5 2.5-1.9 4.6-3.9 6.1l6.1 4.7c3.6-3.3 5.6-8.1 5.6-13.3z"/>
                    <path fill="#FBBC05" d="M10.8 28.5c-1-2.5-1.6-5.2-1.6-8s.6-5.5 1.6-8l-8.3-6.4C1.1 10.5 0 17 0 24s1.1 13.5 2.5 19.9l8.3-6.4z"/>
                    <path fill="#EA4335" d="M24 48c6.5 0 12-2.1 16-5.7l-6.1-4.7c-2.2 1.5-5 2.4-9.9 2.4-6.3 0-11.5-4.6-13.4-10.7l-8.3 6.4C6.4 42.2 14.6 48 24 48z"/>
                    <path fill="none" d="M0 0h48v48H0z"/>
                  </svg>
                  <span>Continue with Google</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </LoadingButton>

{/* Github Sign In */}
<LoadingButton
  isLoading={authLoading}
  onClick={handleGithubSignIn}
  loadingText="Signing in..."
  className="w-full flex items-center justify-center space-x-3 bg-gray-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
>
  <div className="flex items-center space-x-2">
    <Github className="w-5 h-5" />
    <span>Continue with GitHub</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </div>
</LoadingButton>




              {/* Email Sign In Form */}
              <form onSubmit={handleSubmit(handleEmailSignIn)} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="min-h-[56px] mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{String(errors.email.message)}</p>}
                </div>

                {/* <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="min-h-[56px] mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                  {errors.firstName && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{String(errors.firstName.message)}</p>}
                </div> */}

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      {...register('password', { required: 'Password is required' })}
                      className="min-h-[56px] block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{String(errors.password.message)}</p>}
                </div>

                <LoadingButton
                  isLoading={authLoading}
                  loadingText="Signing in..."
                  className="w-full flex items-center justify-center space-x-3 bg-primary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </LoadingButton>
              </form>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Trusted by professionals worldwide
                </span>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center text-sm text-gray-500 dark:text-gray-400"
            >
              <p>
                Don't have an account? Signing in will create one automatically.
              </p>
              <p className="mt-2">
                By continuing, you agree to our{' '}
                <Link href={{ pathname: '/terms' }} className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href={{ pathname: '/privacy' }} className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-pink-600 rounded-full opacity-20 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
