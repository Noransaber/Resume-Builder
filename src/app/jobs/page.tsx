"use client"
export const dynamic = 'force-dynamic'
import { useEffect, useMemo, useRef, useState } from 'react'
import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore'
import { db, firebaseReady } from '@/lib/firebase'
import type { Job } from '@/types/models'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { JobCard } from '@/components/jobs/JobCard'
import { Skeleton } from '@/components/ui/Skeleton'

type Filters = {
  search: string
  location: string
  experience: '' | 'junior' | 'mid' | 'senior'
  type: '' | 'remote' | 'onsite' | 'hybrid'
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const lastDocRef = useRef<any>(null)
  const [filters, setFilters] = useState<Filters>({ search: '', location: '', experience: '', type: '' })
  const { ref, inView } = useInView()

  const baseQuery = useMemo(() => {
    if (!firebaseReady || !db) return null
    const col = collection(db, 'jobs')
    let q: any = query(col, where('isActive', '==', true), orderBy('postedAt', 'desc'), limit(12))
    if (filters.location) q = query(q, where('location', '==', filters.location))
    if (filters.experience) q = query(q, where('experience', '==', filters.experience))
    if (filters.type) q = query(q, where('type', '==', filters.type))
    return q
  }, [filters.location, filters.experience, filters.type])

  useEffect(() => {
    setJobs([])
    setHasMore(true)
    lastDocRef.current = null
    if (!firebaseReady) {
      // Fallback mock data for initial design preview
      const mock: Job[] = Array.from({ length: 6 }).map((_, i) => ({
        id: `mock-${i}`,
        title: ['Frontend Developer', 'Fullstack Engineer', 'React Developer'][i % 3],
        company: ['Acme Inc', 'Globex', 'Umbrella'][i % 3],
        location: ['Remote', 'Paris, FR', 'NYC, USA'][i % 3],
        type: ['remote', 'hybrid', 'onsite'][i % 3] as any,
        experience: ['junior', 'mid', 'senior'][i % 3] as any,
        salaryMin: 60000,
        salaryMax: 90000,
        currency: 'USD',
        description: 'Build and ship modern web apps with React and TypeScript.',
        tags: ['react', 'typescript', 'nextjs'],
        isActive: true
      }))
      setJobs(mock)
      setHasMore(false)
      return
    }
    void loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseQuery])

  useEffect(() => {
    if (inView && hasMore && !loading) void loadMore()
  }, [inView, hasMore, loading])

  async function loadMore() {
    if (!hasMore || !baseQuery) return
    setLoading(true)
    try {
      const q = lastDocRef.current ? query(baseQuery, startAfter(lastDocRef.current)) : baseQuery
      const snap = await getDocs(q)
      const batch: Job[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }))
      setJobs((prev) => [...prev, ...batch])
      lastDocRef.current = snap.docs[snap.docs.length - 1]
      if (batch.length < 12) setHasMore(false)
    } finally {
      setLoading(false)
    }
  }

  const filtered = useMemo(() => {
    if (!filters.search) return jobs
    const s = filters.search.toLowerCase()
    return jobs.filter((j) =>
      j.title.toLowerCase().includes(s) ||
      j.company.toLowerCase().includes(s) ||
      (j.tags || []).some((t) => t.toLowerCase().includes(s))
    )
  }, [jobs, filters.search])

  return (
    <Container>
      <div className="grid gap-6">
        <h1 className="text-2xl font-bold tracking-tight">Jobs</h1>

        <Card>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Input aria-label="Search jobs" placeholder="Search..." value={filters.search} onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))} />
            <Input aria-label="Location" placeholder="Location" value={filters.location} onChange={(e) => setFilters((f) => ({ ...f, location: e.target.value }))} />
            <Select aria-label="Experience level" value={filters.experience} onChange={(e) => setFilters((f) => ({ ...f, experience: e.target.value as any }))}>
              <option value="">Any Experience</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </Select>
            <Select aria-label="Type" value={filters.type} onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value as any }))}>
              <option value="">Any Type</option>
              <option value="remote">Remote</option>
              <option value="onsite">On-site</option>
              <option value="hybrid">Hybrid</option>
            </Select>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
          {loading && Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>

        <div ref={ref} className="h-8" />
        {!hasMore && !loading && <p className="text-center text-sm opacity-70">End of results</p>}
      </div>
    </Container>
  )
}


