## MVP Plan

### Scope
- Resume Editor (basic fields, autosave)
- Template System (single modern template preview)
- Export/Share (phase-ready; PDF print via browser for now)
- Auth (Google)
- Jobs Portal (browse, filter, infinite scroll, job detail, apply with resume)

### Milestones
1. Project scaffold (Next.js App Router, Tailwind dark mode, i18n, Zustand, Firebase)
2. Jobs Portal pages and flows
3. Auth + Dashboard with Resumes list
4. Resume Editor with autosave and live preview
5. Apply with Resume modal, Applications dashboard
6. Saved Jobs
7. README and deployment steps

### Data
- Firestore collections: jobs, resumes, applications, savedJobs
- Timestamps: serverTimestamp on write
- Security: rules to restrict by uid and role

### Accessibility
- Keyboard focus styles, aria-labels, semantic headings

### Performance
- Pagination with limit + startAfter
- Avoid heavy client computation; memoize filters

### Risks
- Firestore indexes may be required for composite queries
- PDF export quality cross-browser


