"use client"
export const dynamic = 'force-dynamic'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useEffect, useState } from 'react'
import type { Job } from '@/types/models'
import { useAuthStore } from '@/stores/authStore'
import { ApplyModal } from '@/components/jobs/ApplyModal'
import { SaveJobButton } from '@/components/jobs/SaveJobButton'
import { useRouter, useParams } from 'next/navigation'

export default function JobDetailPage() {
  const params = useParams<{ id: string }>()
  const jobId = Array.isArray(params?.id) ? params?.id[0] : params?.id
  const [job, setJob] = useState<Job | null>(null)
  const [open, setOpen] = useState(false)
  const { user, init } = useAuthStore()
  const router = useRouter()

  useEffect(() => { init() }, [init])

  useEffect(() => {
    ;(async () => {
      if (!jobId) return
      const snap = await getDoc(doc(db, 'jobs', jobId))
      if (snap.exists()) setJob({ id: snap.id, ...(snap.data() as any) })
    })()
  }, [jobId])

  if (!job) return <p>Loading...</p>

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-semibold">{job.title}</h1>
        <p className="opacity-80">{job.company} • {job.location} • {job.type}</p>
        {job.salaryMin && (
          <p className="mt-1">{job.currency || 'USD'} {job.salaryMin} - {job.salaryMax}</p>
        )}

        <section className="prose mt-6 max-w-none dark:prose-invert">
          <h2>Description</h2>
          <p>{job.description}</p>
          {job.requirements?.length ? (
            <>
              <h3>Requirements</h3>
              <ul>
                {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </>
          ) : null}
          {job.benefits?.length ? (
            <>
              <h3>Benefits</h3>
              <ul>
                {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </>
          ) : null}
        </section>
      </div>

      <aside className="grid gap-3 self-start rounded-lg border p-4">
        <button
          className="rounded-md bg-primary px-4 py-2 text-white"
          onClick={() => {
            if (!user) {
              router.push('/dashboard')
              return
            }
            setOpen(true)
          }}
          aria-label="Apply with Resume"
        >
          Apply with Resume
        </button>
        <SaveJobButton jobId={job.id} />
      </aside>

      <ApplyModal open={open} onClose={() => setOpen(false)} jobId={job.id} />
    </div>
  )
}


