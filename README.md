# Job Tracker

Job Tracker is a full-stack web application for students and freshers who need a structured way to manage job applications. The long-term product goal is to replace spreadsheet-based tracking with a single application that supports authentication, job application tracking, resume analysis, interview preparation, reminders, and analytics.

The current repository is in an early foundation stage. Authentication, user synchronization, the base backend server, the base frontend app, and the database schema are present. Most product features described in the PRD are still planned and not yet implemented.

## Current Status

Implemented:

- Express backend with TypeScript.
- Clerk authentication middleware on the backend.
- Prisma client setup.
- PostgreSQL schema through Prisma.
- Initial Prisma migration.
- User sync from Clerk into the local database.
- User profile fetch endpoint.
- Next.js frontend with TypeScript.
- Clerk provider in the frontend root layout.
- Protected frontend routes through Clerk middleware.
- Clerk sign-in page.
- Basic dashboard page that calls the backend user sync endpoint.

Not implemented yet:

- Job application CRUD API.
- Kanban board.
- Drag and drop status updates.
- Application detail page.
- Resume upload.
- Resume parsing or Supabase Storage integration.
- Gemini resume analysis.
- Gemini interview question generation.
- Saved interview answers.
- Reminder API.
- Daily reminder cron job.
- Resend email integration.
- Dashboard analytics API.
- Shared frontend components.
- Frontend API client abstraction.
- Automated tests.

For a detailed session handoff and implementation map, see `task-update.md`.

## Product Objective

The objective from `prd.md` is to build a smart job application tracker for final-year students, recent graduates, and freshers who apply to many roles at once.

The intended product should help users:

- Track every job application in one place.
- See the current stage of each application.
- Store company, role, source, job description, notes, and application dates.
- Use AI to compare a resume against a job description.
- Use AI to generate interview preparation questions.
- Set follow-up reminders.
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
- PostgreSQL

### Planned Integrations

These packages are already present in the backend dependencies, but the feature modules are not implemented yet:

- Google Gemini through `@google/generative-ai`
- Resend for email
- Node Cron for scheduled reminders

## Repository Structure

```text
job-tracker/
  backend/
    prisma/
      migrations/
      schema.prisma
    src/
      config/
        db.ts
      middleware/
        auth.ts
      modules/
        user/
          user.controller.ts
          user.routes.ts
          user.service.ts
      generated/
        prisma/
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
    postcss.config.mjs
    tsconfig.json

  prd.md
  project-structure.md
  task-update.md
  README.md
```

Note: `backend/src/generated/prisma` is generated Prisma output, not hand-written application logic.

## Backend Overview

The backend entrypoint is `backend/src/index.ts`.

Current behavior:

- Loads environment variables with `dotenv`.
- Creates an Express app.
- Enables CORS for the configured frontend origin.
- Enables JSON body parsing.
- Enables cookie parsing.
- Runs Clerk middleware globally.
- Mounts user routes at `/api/user`.
- Exposes a health check at `/health`.

Current routes:

```text
GET  /health
POST /api/user/sync
GET  /api/user/profile
```

Protected routes use Clerk auth through `requireUser`.

## Frontend Overview

The frontend is a Next.js App Router application.

Current pages:

```text
/                         Basic landing page
/sign-in/[[...rest]]      Clerk sign-in page
/dashboard                Protected dashboard page
```

Current behavior:

- `frontend/app/layout.tsx` wraps the app in `ClerkProvider`.
- `frontend/middleware.ts` protects all routes except `/`, `/sign-in`, and `/sign-up`.
- `frontend/app/dashboard/page.tsx` reads the current Clerk user and calls the backend user sync route.

Important current limitation:

- The dashboard calls `http://localhost:5000/api/user/sync` directly. This should later be moved to an environment-based API client.

## Database Schema

The Prisma schema is defined in `backend/prisma/schema.prisma`.

Current models:

- `User`
- `Application`
- `StatusHistory`
- `AiInterview`
- `AiInterviewQuestion`
- `Reminder`

Current enums:

- `ApplicationStatus`
- `ApplicationSource`

Known schema cleanup needed:

- `ApplicationSource` currently contains misspelled enum values: `NAUKARI`, `REFERAL`, and `COLDEMAIL`.
- Because these values are already in the migration, correcting them should be done through a proper Prisma migration.

## Environment Variables

Create environment files locally. Do not commit secrets.

### Backend

Create `backend/.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:3000

DATABASE_URL="postgresql://user:password@host:port/database"
DIRECT_URL="postgresql://user:password@host:port/database"

CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

GEMINI_API_KEY=...
RESEND_API_KEY=...
```

Only the Clerk and database variables are needed for the currently implemented backend flow. Gemini and Resend are for planned features.

### Frontend

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Installation

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

## Database Setup

Run Prisma migrations from the backend directory:

```bash
cd backend
npx prisma migrate dev
```

Generate Prisma client if needed:

```bash
cd backend
npx prisma generate
```

## Development

Start the backend:

```bash
cd backend
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

Start the frontend:

```bash
cd frontend
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

## Build

Build the backend:

```bash
cd backend
npm run build
```

Build the frontend:

```bash
cd frontend
npm run build
```

Both builds passed during the latest codebase review.

Known build warning:

- Next.js reports that the `middleware.ts` convention is deprecated in favor of `proxy`.

## Planned Feature Roadmap

### Phase 1: Core Tracking

- Complete user profile flow.
- Add application CRUD backend module.
- Add application list page.
- Add application detail page.
- Add status update support.
- Build a basic Kanban board.

### Phase 2: AI Features

- Add resume upload.
- Extract or store resume text.
- Add Gemini resume analysis against job descriptions.
- Add Gemini interview question generation.
- Save and fetch interview answers.

### Phase 3: Reminders And Analytics

- Add reminder CRUD endpoints.
- Add daily cron job for follow-up reminders.
- Send reminder emails through Resend.
- Add dashboard statistics endpoint.
- Add frontend dashboard analytics UI.

### Phase 4: Hardening

- Add global backend error handling.
- Add request validation.
- Add frontend API client.
- Add tests.
- Improve `.gitignore`.
- Clean generated output from source control if needed.
- Prepare deployment configuration.

## Known Issues

- `README.md` is currently untracked unless it is added to Git.
- `backend/dist/` may be created after running the backend build and should usually be ignored.
- `frontend/.env` exists locally and should not be committed.
- The root `.gitignore` currently does not ignore common generated files and secret files.
- The current user sync flow may need explicit Clerk bearer token handling for reliable frontend-to-backend authentication across separate origins.
- Existing user sync returns an existing database user without updating changed Clerk profile details.
- No tests are implemented yet.

## Useful Files

- `prd.md`: product requirements and long-term feature plan.
- `project-structure.md`: planned project structure.
- `task-update.md`: current implementation handoff and session status.
- `backend/prisma/schema.prisma`: database schema.
- `backend/src/index.ts`: backend entrypoint.
- `frontend/app/dashboard/page.tsx`: current authenticated frontend flow.

## License

This project currently uses the ISC license listed in `backend/package.json`.
