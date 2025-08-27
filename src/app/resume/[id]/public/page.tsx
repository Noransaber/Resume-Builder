"use client"
export const dynamic = 'force-dynamic'
import { useEffect, useRef, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Resume } from '@/types/models'
import { useParams } from 'next/navigation'

export default function PublicResumePage() {
  const params = useParams<{ id: string }>()
  const resumeId = Array.isArray(params?.id) ? params?.id[0] : params?.id
  const [resume, setResume] = useState<Resume | null>(null)
  useEffect(() => {
    ;(async () => {
      if (!resumeId) return
      const snap = await getDoc(doc(db, 'resumes', resumeId))
      if (snap.exists()) setResume({ id: snap.id, ...(snap.data() as any) })
    })()
  }, [resumeId])
  if (!resume) return <p>Loading...</p>
  return (
    <div className="mx-auto max-w-3xl rounded-lg border p-6">
      <div className="text-2xl font-semibold">{resume.profile.firstName} {resume.profile.lastName}</div>
      <div className="opacity-70">{resume.profile.email}</div>
    </div>
  )
}


