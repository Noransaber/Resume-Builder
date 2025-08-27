"use client"
import { useAuthStore } from '@/stores/authStore'
import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useEffect, useState } from 'react'

export function SaveJobButton({ jobId }: { jobId: string }) {
  const { user } = useAuthStore()
  const [savedId, setSavedId] = useState<string | null>(null)

  useEffect(() => {
    if (!user) return
    ;(async () => {
      const snap = await getDocs(query(collection(db, 'savedJobs'), where('uid', '==', user.uid), where('jobId', '==', jobId)))
      setSavedId(snap.empty ? null : snap.docs[0].id)
    })()
  }, [user, jobId])

  async function toggle() {
    if (!user) return
    if (savedId) {
      await deleteDoc(doc(db, 'savedJobs', savedId))
      setSavedId(null)
    } else {
      const ref = await addDoc(collection(db, 'savedJobs'), { uid: user.uid, jobId, savedAt: serverTimestamp() })
      setSavedId(ref.id)
    }
  }

  return (
    <button className="rounded-md border px-3 py-2 text-sm" aria-pressed={!!savedId} onClick={toggle}>
      {savedId ? 'Saved' : 'Save Job'}
    </button>
  )
}


