export type Job = {
  id: string
  title: string
  company: string
  location: string
  type: 'remote' | 'onsite' | 'hybrid'
  experience: 'junior' | 'mid' | 'senior'
  salaryMin?: number
  salaryMax?: number
  currency?: string
  description: string
  requirements?: string[]
  benefits?: string[]
  tags?: string[]
  postedBy?: string
  isActive: boolean
  postedAt?: any
}

export type Resume = {
  id: string
  uid: string
  title: string
  profile: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    country?: string
    occupation?: string
    links?: string[]
  }
  sections: any
  templateId: string
  language: string
  order: string[]
  createdAt?: any
  updatedAt?: any
}

export type Application = {
  id: string
  jobId: string
  applicantUid: string
  resumeId: string
  coverLetterId?: string | null
  status: 'applied' | 'in_review' | 'viewed' | 'rejected' | 'accepted'
  notes?: string
  submittedAt?: any
}


