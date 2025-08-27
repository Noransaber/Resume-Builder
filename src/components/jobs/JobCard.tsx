"use client"
import Link from 'next/link'
import type { Job } from '@/types/models'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

export function JobCard({ job, index }: { job: Job; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      className="h-full"
    >
      <Link href={`/jobs/${job.id}`} className="block h-full rounded-2xl border p-5 shadow-sm transition hover:shadow-md dark:border-white/10">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight">{job.title}</h3>
          <Badge className="shrink-0 capitalize">{job.experience}</Badge>
        </div>
        <p className="mt-1 text-sm opacity-80">{job.company}</p>
        <p className="text-sm opacity-80">{job.location} • {job.type}</p>
        {job.salaryMin && (
          <p className="mt-2 text-sm">{job.currency || 'USD'} {job.salaryMin} - {job.salaryMax}</p>
        )}
        {!!job.tags?.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full border px-2 py-0.5 text-xs opacity-80 dark:border-white/10">{t}</span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  )
}



