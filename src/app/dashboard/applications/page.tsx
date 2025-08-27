"use client"
export const dynamic = 'force-dynamic'
import { useAuthStore } from '@/stores/authStore'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import type { Application } from '@/types/models'
import Link from 'next/link'

export default function ApplicationsPage() {
  const { user, init } = useAuthStore()
  const [apps, setApps] = useState<Application[]>([])
  useEffect(() => { init() }, [init])
  useEffect(() => {
    if (!user) return
    ;(async () => {
      const snap = await getDocs(query(collection(db, 'applications'), where('applicantUid', '==', user.uid), orderBy('submittedAt', 'desc')))
      setApps(snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })))
    })()
  }, [user])
  if (!user) return <p>Please sign in</p>
  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-semibold">Applied Jobs</h1>
      <div className="grid gap-3">
        {apps.map((a) => (
          <div key={a.id} className="flex items-center justify-between rounded-lg border p-4">
            <div className="grid">
              <span className="text-sm opacity-70">Status: {a.status}</span>
              <span className="text-sm">Resume: {a.resumeId}</span>
            </div>
            <Link className="text-primary" href={`/jobs/${a.jobId}`}>Open</Link>
          </div>
        ))}
        {!apps.length && <p className="opacity-70">No applications yet.</p>}
      </div>
    </div>
  )
}


