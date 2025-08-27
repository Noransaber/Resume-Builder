"use client"
export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { useAuthStore } from '@/stores/authStore'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { user, init, loginGoogle, logout } = useAuthStore()
  useEffect(() => { init() }, [init])
  return (
    <div className="grid gap-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      {!user ? (
        <div className="rounded-lg border p-4">
          <p className="mb-2">Sign in to save resumes and track applications.</p>
          <button className="rounded-md bg-primary px-4 py-2 text-white" onClick={() => loginGoogle()}>Sign in with Google</button>
        </div>
      ) : (
        <div className="grid gap-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <p className="font-medium">{user.email}</p>
              <p className="text-sm opacity-70">Signed in</p>
            </div>
            <button className="rounded-md border px-3 py-2" onClick={() => logout()}>Log out</button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Link href="/dashboard/resumes" className="rounded-lg border p-4 hover:border-primary">Resumes</Link>
            <Link href="/dashboard/applications" className="rounded-lg border p-4 hover:border-primary">Applied Jobs</Link>
            <Link href="/dashboard/saved" className="rounded-lg border p-4 hover:border-primary">Saved Jobs</Link>
          </div>
        </div>
      )}
    </div>
  )
}


