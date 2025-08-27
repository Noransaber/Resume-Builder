"use client"
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuthStore } from '@/stores/authStore'
import type { Resume } from '@/types/models'
import toast from 'react-hot-toast'

export function ApplyModal({ open, onClose, jobId }: { open: boolean; onClose: () => void; jobId: string }) {
  const { user } = useAuthStore()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [selected, setSelected] = useState<string>('')
  const [cover, setCover] = useState<string>('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!user || !open) return
    ;(async () => {
      const snap = await getDocs(query(collection(db, 'resumes'), where('uid', '==', user.uid)))
      const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as any
      setResumes(list)
      if (list[0]) setSelected(list[0].id)
    })()
  }, [user, open])

  async function submit() {
    if (!user || !selected) return
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'applications'), {
        jobId,
        applicantUid: user.uid,
        resumeId: selected,
        coverLetterId: cover || null,
        status: 'applied',
        submittedAt: serverTimestamp()
      })
      toast.success('Application submitted')
      onClose()
    } catch (e) {
      toast.error('Failed to submit')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-150" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all dark:bg-dark sm:my-8 sm:max-w-lg">
                <Dialog.Title className="text-lg font-semibold">Apply with Resume</Dialog.Title>
                <div className="mt-4 grid gap-3">
                  <label className="text-sm">Choose Resume</label>
                  <select className="rounded-md border px-3 py-2" value={selected} onChange={(e) => setSelected(e.target.value)}>
                    {resumes.map((r) => (
                      <option key={r.id} value={r.id}>{r.title}</option>
                    ))}
                  </select>

                  <label className="mt-4 text-sm">Cover Letter (optional)</label>
                  <input className="rounded-md border px-3 py-2" placeholder="Existing cover letter ID" value={cover} onChange={(e) => setCover(e.target.value)} />
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <button className="rounded-md border px-4 py-2" onClick={onClose}>Cancel</button>
                  <button
                    className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-60"
                    onClick={submit}
                    disabled={!selected || submitting}
                  >
                    {submitting ? 'Submitting...' : 'Apply'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


