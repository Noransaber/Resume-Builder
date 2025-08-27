"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Users, Award, Shield, Play, Zap, ChevronRight } from 'lucide-react'

export function Hero() {
	return (
		<section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/50" />
			<motion.div
				animate={{ 
					rotate: [0, 360],
					scale: [1, 1.1, 1]
				}}
				transition={{ 
					duration: 20, 
					repeat: Infinity, 
					ease: "linear" 
				}}
				className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-pink-600/10 rounded-full blur-3xl"
			/>
			<motion.div
				animate={{ 
					rotate: [360, 0],
					scale: [1, 1.2, 1]
				}}
				transition={{ 
					duration: 25, 
					repeat: Infinity, 
					ease: "linear" 
				}}
				className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
			/>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Left Column - Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						{/* Trust Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
						>
							<Star className="w-4 h-4 text-yellow-500 fill-current" />
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
								Trusted by 2M+ professionals
							</span>
						</motion.div>

						{/* Main Heading */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight"
						>
							Build a resume that{' '}
							<span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
								gets you hired
							</span>
						</motion.h1>

						{/* Subtitle */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
						>
							Create a professional resume in minutes with our AI-powered builder. 
							Get more interviews with ATS-optimized templates designed by experts.
						</motion.p>

						{/* Key Benefits */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="grid gap-3 sm:grid-cols-2"
						>
							<div className="flex items-center gap-3">
								<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
								<span className="text-gray-700 dark:text-gray-300">ATS-optimized templates</span>
							</div>
							<div className="flex items-center gap-3">
								<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
								<span className="text-gray-700 dark:text-gray-300">AI-powered suggestions</span>
							</div>
							<div className="flex items-center gap-3">
								<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
								<span className="text-gray-700 dark:text-gray-300">Export to PDF & Word</span>
							</div>
							<div className="flex items-center gap-3">
								<CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
								<span className="text-gray-700 dark:text-gray-300">Unlimited revisions</span>
							</div>
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="flex flex-wrap gap-4"
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Link 
									href="/resume-templates" 
									className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200"
								>
									Create My Resume
									<ArrowRight className="w-5 h-5" />
								</Link>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Link 
									href="/resume/upload" 
									className="inline-flex items-center gap-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
								>
									Upload My Resume
								</Link>
							</motion.div>
						</motion.div>

						{/* Social Proof */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="flex items-center gap-6 pt-4"
						>
							<div className="flex items-center gap-2">
								<Users className="w-5 h-5 text-primary" />
								<span className="text-sm text-gray-600 dark:text-gray-400">
									<span className="font-semibold text-gray-900 dark:text-white">2M+</span> users
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Award className="w-5 h-5 text-primary" />
								<span className="text-sm text-gray-600 dark:text-gray-400">
									<span className="font-semibold text-gray-900 dark:text-white">4.9/5</span> rating
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Shield className="w-5 h-5 text-primary" />
								<span className="text-sm text-gray-600 dark:text-gray-400">
									<span className="font-semibold text-gray-900 dark:text-white">100%</span> secure
								</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Column - Visual */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative mx-auto w-full max-w-xl"
					>
						{/* Main Resume Preview */}
						<motion.div
							whileHover={{ scale: 1.02, rotateY: 5 }}
							transition={{ duration: 0.3 }}
							className="relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-2xl dark:border-white/10 bg-white dark:bg-gray-800"
						>
							<Image 
								src="https://resume.io/assets/landing/home/hero/typing-hero-19c17dfac3e22fdc206c80e7f4d80e2c2feaa5cc2ac34f29257ec4da6ec6c722.png" 
								alt="Professional resume preview" 
								width={1200} 
								height={900} 
								className="h-full w-full object-cover" 
							/>
							
							{/* Overlay with stats */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
							
							{/* Floating stats card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
							>
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-900 dark:text-white">Resume Score</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">ATS Optimized</p>
									</div>
									<div className="text-right">
										<p className="text-2xl font-bold text-primary">95%</p>
										<p className="text-xs text-green-600">Excellent</p>
									</div>
								</div>
							</motion.div>
						</motion.div>

						{/* Floating decorative elements */}
						<motion.div
							animate={{ y: [-10, 10, -10] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary to-pink-600 rounded-full shadow-lg flex items-center justify-center"
						>
							<Star className="w-6 h-6 text-white" />
						</motion.div>
						<motion.div
							animate={{ y: [10, -10, 10] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
							className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center"
						>
							<CheckCircle className="w-5 h-5 text-white" />
						</motion.div>
						
						{/* Additional floating element */}
						<motion.div
							animate={{ 
								rotate: [0, 360],
								scale: [1, 1.1, 1]
							}}
							transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
							className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}


