"use client"
export const dynamic = 'force-dynamic'
import { collection, addDoc, serverTimestamp, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuthStore } from '@/stores/authStore'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type ResumeListItem = { id: string; title: string }

export default function ResumesPage() {
  const { user, init } = useAuthStore()
  const [resumes, setResumes] = useState<ResumeListItem[]>([])

  useEffect(() => { init() }, [init])
  useEffect(() => {
    if (!user) return
    ;(async () => {
      const snap = await getDocs(query(collection(db, 'resumes'), where('uid', '==', user.uid)))
      setResumes(snap.docs.map((d) => ({ id: d.id, title: (d.data() as any).title || 'Untitled' })))
    })()
  }, [user])

  if (!user) return <p>Please sign in</p>

  async function createResume() {
    if (!user) return
    const docRef = await addDoc(collection(db, 'resumes'), {
      uid: user.uid,
      title: 'My Resume',
      profile: { firstName: '', lastName: '', email: user.email },
      sections: {},
      templateId: 'modern',
      language: 'en',
      order: ['profile', 'summary', 'experience', 'projects', 'education', 'skills', 'languages'],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    setResumes((prev) => [{ id: docRef.id, title: 'My Resume' }, ...prev])
  }

  async function removeResume(id: string) {
    await deleteDoc(doc(db, 'resumes', id))
    setResumes((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Resumes</h1>
        <button className="rounded-md bg-primary px-4 py-2 text-white" onClick={createResume}>New</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {resumes.map((r) => (
          <div key={r.id} className="flex items-center justify-between rounded-lg border p-4">
            <div className="grid">
              <span className="font-medium">{r.title}</span>
              <span className="text-sm opacity-70">{r.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <Link className="rounded-md border px-3 py-1 text-sm" href={`/resume/${r.id}`}>Edit</Link>
              <button className="rounded-md border px-3 py-1 text-sm" onClick={() => removeResume(r.id)}>Delete</button>
            </div>
          </div>
        ))}
        {!resumes.length && <p className="opacity-70">No resumes yet.</p>}
      </div>
    </div>
  )
}


