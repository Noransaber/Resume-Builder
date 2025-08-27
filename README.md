# Resume Builder + Jobs Portal (Next.js + Firebase)

Production-ready scaffold for a resume builder integrated with a jobs portal.

## Stack
- Next.js 14 (App Router)
- TailwindCSS (darkMode: class) + next-themes
- Zustand (state)
- Firebase (Auth, Firestore, Storage)
- i18n (i18next + language detector)

## Features (MVP)
- Jobs: listing with filters + infinite scroll; job detail; save/apply with resume
- Auth: Google OAuth
- Dashboard: Resumes list, Applications list, Saved jobs
- Resume Editor: basic fields, autosave, live preview

## Getting Started
1. Install dependencies
```bash
npm i
```
2. Create `.env.local`
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```
3. Run dev server
```bash
npm run dev
```

## Firebase Setup
- Create a Firebase project
- Enable Authentication: Google (and Email/Password optionally)
- Create Firestore database in production mode
- Create the following collections when needed by UI:
  - `jobs` (seed some sample docs)
  - `resumes`
  - `applications`
  - `savedJobs`
- Suggested indexes:
  - jobs: `(isActive desc, postedAt desc)` + filters `(location, experience)`
  - applications: `(applicantUid, submittedAt desc)`

## Theming
- Dark mode toggle in header (next-themes)
- Tailwind theme extends colors: `primary`, `dark`

## i18n & RTL
- i18next with detector and three locales (en, fr, ar)
- Sets `<html dir>` based on language

## Accessibility
- Focus-visible outline, aria labels for inputs/buttons, semantic headings

## Project Structure
- `src/app`: routes and API handlers
- `src/components`: UI and feature components
- `src/stores`: Zustand stores
- `src/lib`: Firebase client
- `src/types`: TypeScript types
- `src/i18n`: i18n config
- `plan/`: project plans

## Next Steps (Phase 2)
- Employer side (post/manage jobs, view applicants)
- AI suggestions via Cloud Functions proxy
- Email notifications & alerts
- Full i18n translation files and TMS integration
- PDF/DOCX export and public sharing

## Notes
- For production, add Firestore security rules and composite indexes.
- Ensure environment variables are configured in hosting provider.
