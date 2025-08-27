"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HomeHero() {
	return (
		<section className="relative overflow-hidden rounded-3xl border p-8 sm:p-12 dark:border-white/10">
			<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
				<h1 className="max-w-3xl bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
					Build a standout resume. Find your next role.
				</h1>
				<p className="mt-3 max-w-2xl text-base opacity-80">
					Create, customize, and apply in minutes. Save time with one-click applications and live previews.
				</p>
				<div className="mt-6 flex flex-wrap gap-3">
					<Link href="/jobs" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white transition-colors hover:brightness-110">Browse Jobs</Link>
					<Link href="/dashboard" className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-white">Open Dashboard</Link>
				</div>
			</motion.div>
			<motion.div
				className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8 }}
			/>
		</section>
	)
}



