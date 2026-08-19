# ApplynTrack

ApplynTrack is a full-stack web application for students and freshers who need a structured way to manage job applications. It replaces spreadsheet-based tracking with a single application that supports authentication, job application tracking, AI-powered resume analysis, interview preparation, automated reminders, and analytics.

The backend is now fully complete and tested. Frontend feature work is the next phase.

## Current Status

### Backend — Complete

- Express backend with TypeScript.
- Clerk authentication middleware on the backend.
- Prisma ORM connected to PostgreSQL via Supabase.
- User sync from Clerk into the local database.
- User profile fetch and update endpoints.
- Resume upload to Supabase Storage with PDF text extraction via pdf2json.
- Applications CRUD module — create, list, get, update, delete with StatusHistory auto-tracking.
- AI module — resume analysis and interview prep via Google Gemini API.
- Save and fetch interview answers.
- Reminders CRUD module — create, update, delete.
- Daily cron job via node-cron — runs at 9am, sends HTML reminder emails via Resend.
- Custom email domain — reminders@applyntrack.online.
- Dashboard analytics endpoint — total applications, response rate, rejection rate, best source, stale applications.

### Frontend — Minimal

- Next.js frontend with TypeScript.
- Clerk provider in the root layout.
- Protected frontend routes through Clerk middleware.
- Clerk sign-in page.
- Dashboard page with bearer token display for development testing.

### Not Yet Built

- Kanban board.
- Application list and detail pages.
- Resume upload UI.
- AI analysis UI.
- Interview prep UI.
- Dashboard analytics UI.
- Frontend API client abstraction.
- Automated tests.

## Product Objective

ApplynTrack helps final-year students, recent graduates, and freshers who apply to many roles at once to:

- Track every job application in one place.
- See the current stage of each application.
- Store company, role, source, job description, notes, and application dates.
- Use AI to compare a resume against a job description.
- Use AI to generate interview preparation questions.
- Set follow-up reminders with email notifications.
- View analytics about job search progress.

This project is not intended to be a job board, resume builder, mobile app, collaborative workspace, or microservices architecture.

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Clerk for authentication

### Backend

- Node.js
- Express 5
- TypeScript
- Clerk Express SDK
- Prisma ORM
- PostgreSQL via Supabase

### Integrations

- Google Gemini via `@google/generative-ai` — resume analysis and interview prep
- Resend — transactional HTML emails
- node-cron — daily reminder job scheduler
- Supabase Storage — resume PDF storage
- pdf2json — PDF text extraction

## Repository Structure

```text
smarty-j/
  backend/
    prisma/
      migrations/
      schema.prisma
    src/
      config/
        db.ts
        gemini.ts
        supabase.ts
      middleware/
        auth.ts
      modules/
        user/
          user.controller.ts
          user.routes.ts
          user.service.ts
        applications/
          applications.controller.ts
          applications.routes.ts
          applications.service.ts
        ai/
          ai.controller.ts
          ai.routes.ts
          ai.service.ts
        reminders/
          reminders.controller.ts
          reminders.routes.ts
          reminders.service.ts
        dashboard/
          dashboard.controller.ts
          dashboard.routes.ts
          dashboard.service.ts
      jobs/
        reminderJob.ts
      utils/
        email.ts
      index.ts
    package.json
    tsconfig.json

  frontend/
    app/
      dashboard/
        page.tsx
      sign-in/
        [[...rest]]/
          page.tsx
      globals.css
      layout.tsx
      page.tsx
    middleware.ts
    next.config.ts
    package.json
    tsconfig.json
```

## API Endpoints

```text
GET  /health

POST /api/user/sync
GET  /api/user/profile
PUT  /api/user/profile
POST /api/user/resume

POST   /api/applications
GET    /api/applications
GET    /api/applications/:id
PUT    /api/applications/:id
DELETE /api/applications/:id

POST /api/ai/analyze-resume
POST /api/ai/interview-prep
POST /api/ai/save-answers
GET  /api/ai/answers/:appId

POST   /api/reminders
PUT    /api/reminders/:id
DELETE /api/reminders/:id

GET /api/dashboard/stats
```

All routes except `/health` are protected by Clerk authentication via `requireUser` middleware.

## Database Schema

Models:

- `User` — clerkId, email, name, targetRole, experienceLevel, resumeUrl, resumeText
- `Application` — userId, companyName, jobTitle, jobDescription, source, status, notes, dateApplied
- `StatusHistory` — applicationId, status, createdAt
- `AiInterview` — applicationId, overallScore, overallFeedback
- `AiInterviewQuestion` — aiInterviewId, question, userAnswer, questionNumber
- `Reminder` — userId, applicationId, reminderDate, isSent, notes

Enums:

- `ApplicationStatus` — APPLIED, SCREENING, INTERVIEW, ASSIGNMENT, OFFER, REJECTED
- `ApplicationSource` — LINKED_IN, NAUKARI, REFERAL, COLDEMAIL, SOCIAL_MEDIA, OTHER_JOB_APPS

## Environment Variables

### Backend — `backend/.env`

```env
PORT=5000
CLIENT_URL=http://localhost:3000

DATABASE_URL=...
DIRECT_URL=...

CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...

GEMINI_API_KEY=...

RESEND_API_KEY=...
RESEND_FROM_EMAIL=reminders@applyntrack.online
```

### Frontend — `frontend/.env.local`

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Installation

```bash
cd backend && npm install
cd frontend && npm install
```

## Database Setup

```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

## Development

```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

Backend runs on `http://localhost:5000`
Frontend runs on `http://localhost:3000`

## Build

```bash
cd backend && npm run build
cd frontend && npm run build
```

## Known Issues

- Frontend pages for applications, AI features, and dashboard are not yet built.
- `ApplicationSource` enum has legacy misspellings in the migration history — NAUKARI, REFERAL, COLDEMAIL. These are intentional and consistent throughout the codebase.
- No global error handler middleware yet.
- No input validation with Zod yet.
- No automated tests yet.
- `.gitignore` at root may need cleanup for dist, generated, and env files.
- Deprecated `requireAuth` warning from Clerk SDK — functional but should be updated to `clerkMiddleware` with `getAuth`.

## Useful Files

- `prd.md` — product requirements.
- `context.md` — complete project context and session handoff.
- `task-update.md` — current implementation status.
- `backend/prisma/schema.prisma` — database schema.
- `backend/src/index.ts` — backend entrypoint.

## License

ISC