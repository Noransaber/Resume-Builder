## Phase 2 Plan

### Employer Side
- Role-based UI (users.role === 'employer')
- Post Job form with validation
- Manage Jobs: edit/pause/delete, applicants list

### AI Suggestions (via Cloud Functions)
- Proxy endpoints: /ai/suggestBullets, /ai/suggestSkills, /ai/refineText, /ai/tailorResume
- Rate limiting and auth verification

### Notifications & Alerts
- Alerts collection and scheduled function (Pub/Sub) to match new jobs
- Email provider integration (SendGrid/Mailgun)

### i18n
- Expand JSON translation files
- Right-to-left layouts for Arabic/Hebrew

### Export & Sharing
- Server-side PDF/DOCX generation in Functions (better fidelity)
- Signed URLs in Storage for shared exports


