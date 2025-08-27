"use client"
export const dynamic = 'force-dynamic'
import { useAuthStore } from '@/stores/authStore'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Saved = { id: string; jobId: string }

export default function SavedJobsPage() {
  const { user, init } = useAuthStore()
  const [saved, setSaved] = useState<Saved[]>([])
  useEffect(() => { init() }, [init])
  useEffect(() => {
    if (!user) return
    ;(async () => {
      const snap = await getDocs(query(collection(db, 'savedJobs'), where('uid', '==', user.uid)))
      setSaved(snap.docs.map((d) => ({ id: d.id, jobId: (d.data() as any).jobId })))
    })()
  }, [user])
  if (!user) return <p>Please sign in</p>
  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-semibold">Saved Jobs</h1>
      <div className="grid gap-3">
        {saved.map((s) => (
          <Link key={s.id} href={`/jobs/${s.jobId}`} className="rounded-lg border p-4 hover:border-primary">{s.jobId}</Link>
        ))}
        {!saved.length && <p className="opacity-70">No saved jobs yet.</p>}
      </div>
    </div>
  )
}


