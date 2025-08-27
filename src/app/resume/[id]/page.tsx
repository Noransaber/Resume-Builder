"use client"
export const dynamic = 'force-dynamic'
import { useEffect, useMemo, useRef, useState } from 'react'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { Resume } from '@/types/models'
import { useParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useReactToPrint } from 'react-to-print'

export default function ResumeEditorPage() {
  const params = useParams<{ id: string }>()
  const resumeId = Array.isArray(params?.id) ? params?.id[0] : params?.id
  const [resume, setResume] = useState<Resume | null>(null)
  const [saving, setSaving] = useState(false)
  const printRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({ contentRef: printRef })

  useEffect(() => {
    ;(async () => {
      if (!resumeId) return
      const snap = await getDoc(doc(db, 'resumes', resumeId))
      if (snap.exists()) setResume({ id: snap.id, ...(snap.data() as any) })
    })()
  }, [resumeId])

  const autosave = useDebouncedCallback(async (partial: Partial<Resume>) => {
    if (!resumeId) return
    setSaving(true)
    await updateDoc(doc(db, 'resumes', resumeId), { ...partial, updatedAt: serverTimestamp() })
    setSaving(false)
  }, 800)

  function updateTitle(value: string) {
    setResume((r) => (r ? { ...r, title: value } : r))
    autosave({ title: value })
  }

  if (!resume) return <p>Loading...</p>

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="grid gap-3">
        <h1 className="text-xl font-semibold">Resume Editor</h1>
        <label className="text-sm">Title</label>
        <input className="rounded-md border px-3 py-2" value={resume.title} onChange={(e) => updateTitle(e.target.value)} />

        <div className="flex gap-2">
          <button
            className="rounded-md border px-3 py-2 text-sm"
            onClick={handlePrint}
          >
            Export PDF
          </button>
          <button
            className="rounded-md border px-3 py-2 text-sm"
            onClick={async () => {
              const url = `${window.location.origin}/resume/${resumeId}/public`
              await navigator.clipboard.writeText(url)
            }}
          >
            Copy Share Link
          </button>
        </div>

        <section className="grid gap-2">
          <h2 className="font-medium">Profile</h2>
          <div className="grid grid-cols-2 gap-2">
            <input className="rounded-md border px-3 py-2" placeholder="First name" value={resume.profile.firstName || ''} onChange={(e) => { const profile = { ...resume.profile, firstName: e.target.value }; setResume({ ...resume, profile }); autosave({ profile } as any) }} />
            <input className="rounded-md border px-3 py-2" placeholder="Last name" value={resume.profile.lastName || ''} onChange={(e) => { const profile = { ...resume.profile, lastName: e.target.value }; setResume({ ...resume, profile }); autosave({ profile } as any) }} />
            <input className="col-span-2 rounded-md border px-3 py-2" placeholder="Email" value={resume.profile.email || ''} onChange={(e) => { const profile = { ...resume.profile, email: e.target.value }; setResume({ ...resume, profile }); autosave({ profile } as any) }} />
          </div>
        </section>

        <p className="text-sm opacity-70">{saving ? 'Saving...' : 'Saved'}</p>
      </div>

      <div className="rounded-lg border p-4">
        <h2 className="mb-2 font-medium">Live Preview</h2>
        <div ref={printRef} className="rounded-md border p-4">
          <div className="text-lg font-semibold">{resume.profile.firstName} {resume.profile.lastName}</div>
          <div className="text-sm opacity-70">{resume.profile.email}</div>
        </div>
      </div>
    </div>
  )
}


