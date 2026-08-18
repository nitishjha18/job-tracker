# JobTrackr — Complete Project Context

## 1. Who I Am

My name is Nitish Jha. I am a final-year B.Tech Computer Science student at JECRC University (graduating July 2026), based in Noida, UP. I am currently an AI Trainee at Garage Collective where I build full-stack SaaS products.

My current tech stack from my resume:

- **Languages:** JavaScript, TypeScript, Java, HTML, CSS
- **Frontend:** React.js, Next.js, Redux Toolkit, Tailwind CSS, Vite, React Router DOM
- **Backend:** Node.js, Express.js, REST API Design, Zod, Prisma ORM, Rate Limiting
- **Database:** MongoDB, PostgreSQL, Supabase
- **Auth:** JWT, Google OAuth, Supabase Auth, Clerk, NextAuth.js
- **DevOps & Tools:** Git, GitHub, Vercel, GitHub Actions, Postman, Playwright, Puppeteer

My goals for this project:

1. **Learn deeply, not just ship.** I want to understand every single line of code — what it does, why we wrote it that way, and what the alternatives were. I will be asking "why" constantly and I expect you to always answer that question.

2. **I orchestrate, AI assists.** I use AI coding agents (Cursor, Copilot, etc.) to write code, but I decide what gets built, in what order, and how. I review every piece before moving on.

3. **Interview-ready understanding.** By the end of this project, I should be able to explain every decision — database schema design, auth flow, API structure, cron jobs, AI integration — confidently in a technical interview.

4. **This is how I want sessions to work:**
   - We decide what to build next together
   - You explain the concept and the why before giving me anything to implement
   - I implement it (with AI tools) and come back with questions
   - We debug and review together
   - We update `task-update.md` at the end of each session

How to be my mentor in this project:

- **Always explain before instructing.** Before telling me to write any code, explain what we're building and why this approach.
- **Offer alternatives.** When there's more than one way to do something (e.g., cookie vs localStorage for JWT, Zod vs Joi for validation), tell me the tradeoffs. Don't just pick one silently.
- **Ask me questions back.** Push me to think. "What do you think will happen if we don't scope this query by userId?" is more valuable than just telling me the answer.
- **Flag things I need to understand.** If you generate or suggest code that has a non-obvious concept (middleware chain, async error propagation, Prisma relations, etc.), call it out and explain it.
- **Do not rush me to the next feature.** Depth over speed.

What I want to be able to explain by the end:

- Why we use Prisma over raw SQL queries
- How Clerk middleware intercepts requests and what `requireUser` does
- What happens if we forget to scope a DB query by userId (security issue)
- Why StatusHistory is a separate table and not just a field on Application
- How Gemini API works and how we structure the prompt for resume analysis
- How node-cron works and why we run it at 9 AM daily
- What Resend is and how transactional email differs from marketing email
- The full auth flow end to end (Clerk → frontend → backend → DB)
- Why we use HTTP-only cookies vs localStorage for tokens
- How drag-and-drop on the Kanban board triggers a PATCH request
- How Supabase Storage works for resume PDFs
- Every single REST endpoint: what it does, why it exists, what it returns

## 2. Product Overview

JobTrackr is a full-stack web app for final-year students and freshers to manage job applications intelligently. It replaces Excel-based tracking with a structured, AI-powered platform.

The long-term product goal is to replace spreadsheet-based tracking with a single application that supports authentication, job application tracking, resume analysis, interview preparation, reminders, and analytics.

The intended target users are final-year students, recent graduates, and freshers who apply to many roles at once and need a structured way to manage the process.

What it does:

- Track job applications on a Kanban board (Applied → Screening → Interview → Assignment → Offer / Rejected)
- Upload resume once, reuse for AI analysis
- Compare resume against any job description using Gemini API (match score, missing keywords, suggestions)
- Generate interview prep questions using Gemini API
- Save answers to interview questions
- Set follow-up reminders; receive email reminders via Resend
- Dashboard analytics: response rate, rejection rate, best source, stale applications
- Store company, role, source, job description, notes, and application dates
- See each application's current status

What it is NOT:

- Not a job board
- Not a resume builder
- No mobile app
- No collaborative features
- No microservices — monolith only

Intended user flow:

### 1. Landing Page

The user lands on the app and sees a landing page explaining the product. They click `Get Started` and are taken to the sign-in page.

Current status: partially implemented.

- The root route `/` exists.
- It currently only shows a minimal `Job Tracker` heading.
- A proper landing page and `Get Started` flow are not implemented yet.

### 2. Sign In

The user signs in with Google through Clerk. First-time users are synced into the Supabase PostgreSQL database automatically. After sign-in, they land on the dashboard.

Current status: partially implemented.

- Clerk is installed on frontend and backend.
- Frontend sign-in page exists at `/sign-in/[[...rest]]`.
- Frontend redirects signed-in users to `/dashboard`.
- Backend has `POST /api/user/sync`.
- Dashboard calls the sync endpoint when a Clerk user is loaded.

Important limitation:

- The frontend currently calls the backend with `credentials: "include"` but does not explicitly send a Clerk bearer token. This auth strategy must be verified before treating the flow as fully reliable.

### 3. First-Time Setup

The user goes to their profile page, fills in target role, selects experience level, and uploads a resume PDF. This resume is stored and later used for AI resume analysis.

Current status: partially implemented on backend.

- The database model has `targetRole`, `experienceLevel`, `resumeUrl`, and `resumeText` fields on `User`.
- `POST /api/user/resume` exists and uploads a PDF to Supabase Storage, extracts text with `pdf-parse`, then updates `User.resumeUrl` and `User.resumeText`.
- Resume text extraction is implemented in `backend/src/modules/user/user.controller.ts` with `const pdfParse = require("pdf-parse")`, `pdfParse(req.file.buffer)`, and `pdfData.text`.
- Resume upload/text extraction testing is not documented in the current codebase notes.
- There is no frontend profile page yet.
- There is no `PUT /api/user/profile` endpoint yet.

### 4. Adding A Job Application

The user clicks `Add Application` and enters company name, job title, job description, source, and date applied. This creates a card under the `Applied` column on the Kanban board.

Example:

- Company: Razorpay
- Role: Backend Engineer
- Source: LinkedIn
- Status: Applied

Current status: backend implemented and previously documented as tested in Postman.

- The Prisma `Application` model exists.
- All 5 Applications CRUD backend routes exist in `backend/src/modules/applications/applications.routes.ts`.
- The controller and service implement create, list, get-one, update, and delete.
- Application queries are scoped by authenticated local `userId`.
- Create inserts the initial `StatusHistory` row.
- Update inserts a new `StatusHistory` row when `status` changes.
- All 5 applications endpoints were tested in Postman and are passing.
- No frontend application form exists yet.
- No Kanban UI exists yet.

### 5. Tracking Status

The user hears back from the company and drags the card from `Applied` to `Screening`. The application status updates in the database immediately.

Current status: backend status update behavior implemented; frontend not implemented.

- `Application.status` exists.
- `StatusHistory` exists.
- `PUT /api/applications/:id` updates applications, including status.
- Status history is created on application create and status change.
- No drag and drop frontend exists yet.

### 6. AI Resume Analysis

Before an interview, the user opens an application and clicks `Analyze Resume`. The backend sends the user's resume and the application's job description to Gemini. The user receives:

- Match score.
- Missing keywords.
- Suggestions about what to highlight.

Current status: not implemented.

- `@google/generative-ai` is installed in the backend.
- No Gemini client exists yet.
- No resume text extraction/storage flow exists yet.
- No `POST /api/ai/analyze-resume` endpoint exists yet.

### 7. AI Interview Prep

The user clicks `Prepare for Interview`. Gemini generates 10 to 15 likely technical and behavioral questions based on the job description. The user writes answers and saves them in the app.

Current status: schema only.

- `AiInterview` and `AiInterviewQuestion` models exist.
- No AI interview endpoint exists yet.
- No answer-saving endpoint exists yet.
- No frontend interview prep UI exists yet.

### 8. Setting A Reminder

The user sets a follow-up reminder for an application. If no response has happened by that date, the system sends an email telling the user to follow up with that company.

Current status: schema only.

- `Reminder` model exists.
- `resend` and `node-cron` are installed.
- No reminder routes exist yet.
- No cron job exists yet.
- No email integration exists yet.
- No reminder UI exists yet.

### 9. Status Progression

Over time, an application moves through:

```text
Applied -> Screening -> Interview -> Assignment -> Offer
```

Or it moves to:

```text
Rejected
```

The board should always reflect the real current state of the user's job search.

### 10. Dashboard Insights

The user checks their dashboard and sees:

- Total applications sent.
- Response rate.
- Rejection rate.
- Best performing job source.
- Applications stale for two or more weeks.
- Applications grouped by status.

Current status: not implemented.

- There is a minimal protected dashboard page.
- No analytics endpoint exists yet.
- No dashboard cards or charts exist yet.

## 3. Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Clerk |
| Backend | Node.js, Express 5, TypeScript, Clerk Express SDK |
| ORM | Prisma |
| Database | PostgreSQL via Supabase |
| AI | Google Gemini API (`@google/generative-ai`) |
| Email | Resend |
| Cron | node-cron |
| File Storage | Supabase Storage |
| Deployment | Vercel (frontend), Railway (backend) |

Frontend:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Clerk for authentication

Backend:

- Node.js
- Express 5
- TypeScript
- Clerk Express SDK
- Prisma ORM
- PostgreSQL

Planned integrations:

These packages are already present in the backend dependencies, but the feature modules are not implemented yet:

- Google Gemini through `@google/generative-ai`
- Resend for email
- Node Cron for scheduled reminders

Environment variables:

Create environment files locally. Do not commit secrets.

Backend:

Create `backend/.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:3000

DATABASE_URL="postgresql://user:password@host:port/database"
DIRECT_URL="postgresql://user:password@host:port/database"

CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...

GEMINI_API_KEY=...
RESEND_API_KEY=...
```

Only Clerk, database, and Supabase variables are needed for currently implemented backend flows. Gemini and Resend are for planned features.

Frontend:

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

Installation:

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

Database setup:

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

Development:

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

Build:

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

## 4. Project Structure

Planned full directory tree from `project-structure.md`:

```text
job-tracker/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.ts          # Prisma client instance
│   │   │   └── env.ts         # Environment variables validation
│   │   ├── middleware/
│   │   │   ├── auth.ts        # JWT verification middleware
│   │   │   └── errorHandler.ts # Global error handler
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.controller.ts
│   │   │   │   └── auth.service.ts
│   │   │   ├── user/
│   │   │   │   ├── user.routes.ts
│   │   │   │   ├── user.controller.ts
│   │   │   │   └── user.service.ts
│   │   │   ├── applications/
│   │   │   │   ├── applications.routes.ts
│   │   │   │   ├── applications.controller.ts
│   │   │   │   └── applications.service.ts
│   │   │   ├── ai/
│   │   │   │   ├── ai.routes.ts
│   │   │   │   ├── ai.controller.ts
│   │   │   │   └── ai.service.ts
│   │   │   ├── reminders/
│   │   │   │   ├── reminders.routes.ts
│   │   │   │   ├── reminders.controller.ts
│   │   │   │   └── reminders.service.ts
│   │   │   └── dashboard/
│   │   │       ├── dashboard.routes.ts
│   │   │       ├── dashboard.controller.ts
│   │   │       └── dashboard.service.ts
│   │   ├── jobs/
│   │   │   └── reminderJob.ts  # Cron job for email reminders
│   │   ├── utils/
│   │   │   ├── jwt.ts          # JWT helper functions
│   │   │   └── email.ts        # Resend email helper
│   │   └── index.ts            # Entry point, Express app setup
│   ├── prisma/
│   │   └── schema.prisma       # Your existing schema
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── app/
    │   ├── (auth)/
    │   │   └── login/
    │   │       └── page.tsx
    │   ├── (dashboard)/
    │   │   ├── layout.tsx
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── applications/
    │   │   │   ├── page.tsx       # Kanban board
    │   │   │   └── [id]/
    │   │   │       └── page.tsx   # Single application detail
    │   │   ├── resume/
    │   │   │   └── page.tsx       # Resume upload + AI analysis
    │   │   └── profile/
    │   │       └── page.tsx
    │   ├── layout.tsx
    │   └── page.tsx               # Landing page
    ├── components/
    │   ├── ui/                    # Reusable UI components
    │   ├── kanban/
    │   │   ├── KanbanBoard.tsx
    │   │   └── KanbanCard.tsx
    │   ├── dashboard/
    │   │   └── StatsCard.tsx
    │   └── shared/
    │       ├── Navbar.tsx
    │       └── Sidebar.tsx
    ├── lib/
    │   ├── api.ts                 # Axios instance for backend calls
    │   └── auth.ts                # Auth helper functions
    ├── hooks/
    │   └── useApplications.ts     # Custom React hooks
    ├── types/
    │   └── index.ts               # Shared TypeScript types
    ├── .env.local
    ├── package.json
    └── tsconfig.json
```

Current repository structure from `README.md`:

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

Current code map:

Root:

- `.gitignore`
  - Currently ignores `prd.md` and `project-structure.md`.
  - Does not ignore `.env`, `node_modules`, `.next`, `dist`, or generated outputs yet.

- `README.md`
  - Clean current overview of actual implementation.
  - Updated to remove emojis and corrupted text.

- `prd.md`
  - Original product requirements.
  - Keep this separate. Do not merge it into this file.

- `project-structure.md`
  - Planned project structure.

- `task-update.md`
  - Current implementation handoff and session status.

Backend:

- `backend/package.json`
  - Backend dependencies and scripts.

- `backend/tsconfig.json`
  - TypeScript config.

- `backend/src/index.ts`
  - Express app entrypoint.

- `backend/src/config/db.ts`
  - Prisma client.

- `backend/src/config/supabase.ts`
  - Supabase client/config for resume upload.

- `backend/src/middleware/auth.ts`
  - Clerk middleware and auth helpers.

- `backend/src/modules/user/user.routes.ts`
  - User route definitions.

- `backend/src/modules/user/user.controller.ts`
  - User route handlers.

- `backend/src/modules/user/user.service.ts`
  - User database operations.

- `backend/src/modules/applications/applications.routes.ts`
  - Applications route definitions.

- `backend/src/modules/applications/applications.controller.ts`
  - Applications route handlers.

- `backend/src/modules/applications/applications.service.ts`
  - Applications database operations.

- `backend/prisma/schema.prisma`
  - Database schema.

- `backend/prisma/migrations/20260509134933_init/migration.sql`
  - Initial migration.

- `backend/src/generated/prisma`
  - Generated Prisma client output.

Frontend:

- `frontend/package.json`
  - Frontend dependencies and scripts.

- `frontend/app/layout.tsx`
  - Root layout and Clerk provider.

- `frontend/app/page.tsx`
  - Minimal landing page.

- `frontend/app/dashboard/page.tsx`
  - Current protected dashboard and sync trigger.

- `frontend/app/sign-in/[[...rest]]/page.tsx`
  - Clerk sign-in page.

- `frontend/middleware.ts`
  - Route protection.

- `frontend/app/globals.css`
  - Global styles and Tailwind import.

## 5. Database Schema

The Prisma schema is defined in `backend/prisma/schema.prisma`.

Implemented models:

- `User`
- `Application`
- `StatusHistory`
- `AiInterview`
- `AiInterviewQuestion`
- `Reminder`

Implemented enums:

- `ApplicationStatus`
- `ApplicationSource`

Current schema:

```prisma
model User {
  id              String   @id @default(cuid())
  clerkId         String   @unique  // This is how you link Clerk user to your DB
  name            String
  email           String   @unique
  profilePicture  String?
  targetRole      String?
  experienceLevel String?
  resumeUrl       String?
  resumeText      String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  applications    Application[]
  reminders       Reminder[]
}

enum ApplicationStatus {
APPLIED
SCREENING
INTERVIEW
ASSIGNMENT
OFFER
REJECTED
}

enum ApplicationSource {
LINKED_IN
NAUKARI
REFERAL
COLDEMAIL
SOCIAL_MEDIA
OTHER_JOB_APPS
}

model Application {
id String  @id @default(cuid())
companyName String
jobTitle String
jobDescription String
status ApplicationStatus @default(APPLIED)
source ApplicationSource 
dateApplied DateTime @default(now())
notes String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
userId String
user User @relation(fields: [userId], references: [id], onDelete: Cascade)
aiInterviews AiInterview[]
reminders Reminder[]
statusHistory StatusHistory[]
}

model StatusHistory  {
id String @id @default(cuid())
applicationId String
status ApplicationStatus @default(APPLIED)
createdAt DateTime @default(now())
application Application @relation(fields: [applicationId], references: [id], onDelete: Cascade)
}

model AiInterview {
id String @id @default(cuid())
applicationId String
overallScore Int?
overallFeedback String?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
application Application @relation(fields: [applicationId], references: [id], onDelete: Cascade)
questions AiInterviewQuestion[]
}

model AiInterviewQuestion {
id String @id @default(cuid())
question String
userAnswer String?
aiInterviewId String
questionNumber Int
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
aiInterview AiInterview @relation(fields: [aiInterviewId], references: [id], onDelete: Cascade)
}

model Reminder {
  id            String      @id @default(cuid())
  applicationId String
  userId        String
  reminderDate  DateTime
  isSent        Boolean     @default(false)
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt
  application   Application @relation(fields: [applicationId], references: [id], onDelete: Cascade)
  user          User        @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

Model purpose:

- **User** — stores Clerk-linked user info, target role, experience level, profile picture, resume URL, and resume text.
- **Application** — core table, one row per job applied to.
- **StatusHistory** — every time status changes, log it. This powers the timeline.
- **AiInterview** — stores an AI interview prep session linked to an application, with optional overall score and feedback.
- **AiInterviewQuestion** — one record per question, linked to AiInterview, stores the question, question number, and the user's answer.
- **Reminder** — follow-up reminder date per application, linked to both application and user.

Known schema issues and notes:

- `ApplicationSource` contains misspellings: `NAUKARI`, `REFERAL`, and `COLDEMAIL`.
- Because these values are already in the migration, fix them through a Prisma migration instead of editing migration history once shared.
- Older notes used `role`, `appliedAt`, and `changedAt`, but the current schema uses `jobTitle`, `dateApplied`, and `createdAt`.
- Older notes used `Reminder.sent`; the current schema uses `Reminder.isSent`.
- Older notes used `ApplicationSource` values `LINKEDIN`, `NAUKRI`, `INTERNSHALA`, `REFERRAL`, `COLDEMAIL`, `OTHER`; the current schema uses `LINKED_IN`, `NAUKARI`, `REFERAL`, `COLDEMAIL`, `SOCIAL_MEDIA`, `OTHER_JOB_APPS`.

## 6. API Endpoints

Current backend behavior:

- Loads environment variables with `dotenv`.
- Creates an Express app.
- Enables CORS for the configured frontend origin.
- Enables JSON body parsing.
- Enables cookie parsing.
- Runs Clerk middleware globally.
- Mounts user routes at `/api/user`.
- Mounts applications routes at `/api/applications`.
- Exposes a health check at `GET /health`.

Protected routes use Clerk auth through `requireUser`.

Health:

```text
GET /health                         # Implemented
```

Auth:

Using Clerk — no custom auth routes are needed beyond user sync.

Built:

```text
POST /api/user/sync              # Implemented: sync Clerk user into local DB
```

User:

Built:

```text
GET  /api/user/profile           # Implemented: fetch local user profile
POST /api/user/resume            # Implemented: upload PDF, extract resume text, save resumeUrl and resumeText
```

Planned:

```text
PUT  /api/user/profile           # Update profile
GET  /api/user/resume            # Fetch current resume URL
```

Applications:

Built and tested in Postman:

```text
POST   /api/applications           # Implemented: create application
GET    /api/applications           # Implemented: list all for user
GET    /api/applications/:id       # Implemented: single application
PUT    /api/applications/:id       # Implemented: update application, including status
DELETE /api/applications/:id       # Implemented: delete application
```

Applications behavior:

- Every route must be protected by Clerk auth.
- Every query must be scoped to the authenticated user.
- Creating an application creates the initial `StatusHistory` entry.
- Updating status adds a `StatusHistory` entry when the status changes.
- `PUT /api/applications/:id` response includes `statusHistory`.

AI:

Not mounted in `backend/src/index.ts`; planned:

```text
POST   /api/ai/analyze-resume      # Resume vs JD analysis via Gemini
POST   /api/ai/interview-prep      # Generate questions via Gemini
POST   /api/ai/save-answers        # Save user answers
GET    /api/ai/answers/:appId      # Fetch saved answers
```

Reminders:

Not mounted in `backend/src/index.ts`; planned:

```text
POST   /api/reminders              # Set reminder
PUT    /api/reminders/:id          # Update date
DELETE /api/reminders/:id          # Remove
```

Dashboard:

Not mounted in `backend/src/index.ts`; planned:

```text
GET    /api/dashboard/stats        # All analytics in one call
```

## 7. What's Fully Done

Session update from 2026-05-26:

- Built full Applications CRUD module (service, controller, routes).
- Fixed `AuthenticatedRequest` type so `user` is required, not optional.
- Removed dead 401 null checks from all applications controllers.
- Fixed field name mismatches:
  - `role` -> `jobTitle`
  - `appliedAt` -> `dateApplied`
  - `changedAt` -> `createdAt`
- Removed all `as any` type assertions from applications service.
- Fixed `requireUser` middleware to fetch local database user and attach to `req.user`.
- Fixed PUT response to include `statusHistory`.
- Fixed user sync controller to handle null Clerk name gracefully.
- Added `console.error(error)` logging to user controller catch blocks.
- Tested all 5 applications endpoints in Postman; all are passing.

Additional code-verified status:

- `POST /api/user/resume` is implemented.
- Resume upload uses `multer.memoryStorage()` and accepts a single `resume` file.
- Resume upload rejects missing files and non-PDF files.
- Resume upload extracts text with `pdf-parse` and saves it to `User.resumeText`.
- Resume upload stores the PDF in the Supabase Storage `resumes` bucket using path `${user.id}/resume.pdf` with `upsert: true`.
- Resume upload updates `User.resumeUrl` and returns `resumeUrl` and `resumeText`.
- Resume upload/text extraction testing is not documented.

Backend foundation:

Files:

- `backend/src/index.ts`
- `backend/src/config/db.ts`
- `backend/src/config/supabase.ts`
- `backend/src/middleware/auth.ts`

Implemented:

- Express app setup.
- CORS setup.
- JSON parsing.
- Cookie parser.
- Environment loading with `dotenv`.
- Clerk middleware mounted globally.
- User routes mounted at `/api/user`.
- Applications routes mounted at `/api/applications`.
- Health route at `GET /health`.
- Prisma client exported from `backend/src/config/db.ts`.
- Supabase client exported from `backend/src/config/supabase.ts`.

Backend scripts:

- `npm run dev`
- `npm run build`
- `npm start`

User sync backend:

Files:

- `backend/src/modules/user/user.routes.ts`
- `backend/src/modules/user/user.controller.ts`
- `backend/src/modules/user/user.service.ts`

Implemented routes:

```text
POST /api/user/sync
GET  /api/user/profile
POST /api/user/resume
```

Implemented behavior:

- Protected user routes with Clerk auth through `requireUser`.
- Reads Clerk user ID from the request.
- Fetches Clerk user details.
- Creates a local `User` row if one does not already exist for the Clerk ID.
- Fetches local user profile by Clerk ID.
- Resume upload endpoint accepts PDF only, extracts resume text with `pdf-parse`, stores the PDF in Supabase Storage, and updates DB `resumeUrl` and `resumeText`.

Applications backend:

Implemented routes:

```text
POST /api/applications
GET /api/applications
GET /api/applications/:id
PUT /api/applications/:id
DELETE /api/applications/:id
```

Implemented behavior:

- Create application.
- List applications.
- Get one application.
- Update application.
- Delete application.
- Status history creation on application create and on status change.
- Every query is scoped to the authenticated user.
- All 5 applications endpoints are passing in Postman.

Database schema:

File:

- `backend/prisma/schema.prisma`

Implemented models:

- `User`
- `Application`
- `StatusHistory`
- `AiInterview`
- `AiInterviewQuestion`
- `Reminder`

Implemented enums:

- `ApplicationStatus`
- `ApplicationSource`

Migration:

- `backend/prisma/migrations/20260509134933_init/migration.sql`

Frontend foundation:

Files:

- `frontend/app/layout.tsx`
- `frontend/app/page.tsx`
- `frontend/app/dashboard/page.tsx`
- `frontend/app/sign-in/[[...rest]]/page.tsx`
- `frontend/middleware.ts`
- `frontend/app/globals.css`

Implemented:

- Next.js frontend with TypeScript.
- Clerk provider wraps the app.
- Public routes are configured.
- Protected routes are configured.
- Clerk sign-in page exists.
- Clerk sign-in page renders `<SignIn forceRedirectUrl="/dashboard" />`.
- Dashboard reads Clerk user with `useUser`.
- Dashboard calls backend sync endpoint.
- Dashboard calls `useAuth().getToken()` and logs the Clerk token to the console, but does not attach it to the sync request.
- Dashboard shows a simple welcome message and Clerk user button.

Documentation:

Files:

- `README.md`
- `task-update.md`

Implemented:

- README has been rewritten to match the actual current codebase.
- README has no emojis and no corrupted emoji text.
- `task-update.md` tracks current status and roadmap.

Build and verification status:

- Backend `npm run build` passed.
- Frontend `npm run build` passed.
- No automated tests exist yet.

## 8. What's In Progress

Current stage:

- The project is transitioning from backend-complete Applications CRUD to the frontend applications experience.

Current active feature:

- Frontend applications pages/components, or Kanban start.

Current engineering focus:

- Keep project context accurate so the next coding sessions stay aligned.
- Build applications frontend after backend Applications CRUD has been implemented and tested.

Partially built or built but not fully complete:

- Landing page exists but is minimal.
- Dashboard page exists but is not the final dashboard.
- Sign-in and sync flow exists, but the frontend-to-backend Clerk bearer token flow is incomplete: the dashboard logs a token with `getToken()` but the `fetch("http://localhost:5000/api/user/sync")` request does not send an `Authorization` header.
- User sync route exists, but `router.post("/sync", requireUser, syncUserController)` requires a local DB user before sync can create one, which can block first-time user sync.
- Resume upload backend exists and extracts `resumeText`, but testing is not documented and there is no frontend resume upload/profile UI.
- User profile database fields exist, and resume upload/text extraction exists, but profile update and frontend profile page are not implemented.
- Applications backend is complete and tested, but frontend application list, detail page, form, and Kanban UI are not implemented.
- Status update backend behavior exists through `PUT /api/applications/:id`, but drag-and-drop status updates are not implemented on the frontend.
- Gemini, Resend, and node-cron packages are present, but their feature modules are not implemented.

## 9. What's Not Done Yet

Recommended next session:

1. Fix `.gitignore` to exclude env files, build outputs, and generated artifacts as needed.
2. Build applications frontend:
   - list page
   - create form
   - detail page
3. Optionally start Kanban board after basic applications pages are stable.
4. Create a Prisma migration to fix `ApplicationSource` enum misspellings.
5. Re-run backend build and smoke-test impacted endpoints in Postman.

Full remaining feature list in build order:

### Phase 1: Backend Core

#### Day 3: User Profile

Build:

- `PUT /api/user/profile`
- `GET /api/user/resume`

Already built:

- `POST /api/user/resume`

Requirements:

- Update target role.
- Update experience level.
- Keep existing resume PDF upload working through Supabase Storage.
- Keep existing `User.resumeUrl` and `User.resumeText` updates working.
- Fetch current resume URL.
- Test all routes in Postman.

Status: partially started because resume upload and text extraction exist; profile update, resume fetch, frontend profile page, and documented tests are not started.

#### Day 4: Dashboard Analytics

Build:

- `GET /api/dashboard/stats`

Stats required:

- Total applications count.
- Applications per status.
- Response rate.
- Rejection rate.
- Best source.
- Stale applications.

Status: not started.

#### Day 5: Reminders

Build:

- `POST /api/reminders`
- `PUT /api/reminders/:id`
- `DELETE /api/reminders/:id`
- Daily cron job.
- Resend email integration.

Requirements:

- Reminder routes must be scoped to the authenticated user.
- Cron job should find reminders due today and not already sent.
- Email should tell the user to follow up with the company.
- Test routes in Postman.

Status: not started.

### Phase 2: AI Features Backend

#### Day 1-2: Gemini Integration

Build:

- Gemini API client.
- `POST /api/ai/analyze-resume`
- `POST /api/ai/interview-prep`

Requirements:

- Resume analysis compares resume content with job description.
- Interview prep generates 10 to 15 technical and behavioral questions.
- Test prompts and responses in Postman.

Status: not started.

#### Day 3: Save AI Results

Build:

- `POST /api/ai/save-answers`
- `GET /api/ai/answers/:appId`

Requirements:

- Link AI results to a specific application.
- Save user answers.
- Fetch saved answers.
- Test in Postman.

Status: not started.

#### Day 4-5: Backend Polish

Build:

- `errorHandler.ts`
- Input validation on every endpoint.
- Consistent HTTP status codes.
- Route protection across all private routes.
- Edge case handling.

Status: not started.

### Phase 3: Frontend Core

#### Day 1: Setup And Layout

Build:

- Install Axios or use a consistent fetch wrapper.
- `frontend/lib/api.ts`
- Sidebar component.
- Navbar component.
- Dashboard layout.
- Clerk token attachment for every backend request.

Status: not started.

#### Day 2-3: Kanban Board

Build:

- `KanbanBoard` component.
- `KanbanCard` component.
- Drag and drop status updates.
- Applications grouped by status.
- API integration with applications backend.

Status: not started.

#### Day 4: Application Management

Build:

- Add application form.
- Single application detail page.
- Edit application.
- Delete application.
- Notes section.

Status: not started.

#### Day 5: User Profile Page

Build:

- Profile form.
- Target role input.
- Experience level input.
- Resume PDF upload.
- Current resume display.

Status: not started.

### Phase 4: Frontend AI Features

#### Day 1-2: Resume Analyzer

Build:

- Resume analysis UI.
- Job description input.
- Match score display.
- Missing keywords display.
- Suggestions about what to highlight.
- Integration with `POST /api/ai/analyze-resume`.

Status: not started.

#### Day 3-4: Interview Prep

Build:

- AI question display per application.
- Answer text areas.
- Save answers.
- Fetch and display saved answers.

Status: not started.

#### Day 5: Reminders UI

Build:

- Reminder date picker.
- Upcoming reminders display.
- Integration with reminders API.

Status: not started.

### Phase 5: Dashboard And Polish

#### Day 1-2: Dashboard Page

Build:

- Total applications card.
- Response rate card.
- Rejection rate card.
- Best source chart using Recharts.
- Stale applications list.
- Integration with `GET /api/dashboard/stats`.

Status: not started.

#### Day 3: UI Polish

Build:

- Consistent visual design.
- Loading states.
- Error states.
- Responsive layouts.

Status: not started.

#### Day 4: Manual Testing

Test:

- Every feature.
- Edge cases.
- Different screen sizes.
- Authentication behavior.

Status: not started.

#### Day 5: Deployment

Deploy:

- Backend to Railway.
- Frontend to Vercel.
- Production environment variables.
- Production end-to-end test.

Status: not started.

### Phase 6: Final Week

Documentation:

- Keep README current.
- Add screenshots when UI exists.
- Document API endpoints.
- Add comments only where code is complex.

Interview preparation:

- Explain database schema.
- Explain auth flow end to end.
- Explain every API endpoint.
- Explain Gemini integration.
- Explain cron job setup.
- Keep commit history clean.

Status: not started.

Other not implemented yet:

- Kanban board.
- Drag and drop status updates.
- Application detail page.
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

## 10. AI Feature Plan

### What it does

Two separate AI-powered tools, both using Google Gemini API:

**Tool 1 — Resume Analyzer**
User pastes a job description → Gemini compares it against their stored resume → returns a match score, missing keywords, and specific suggestions to improve the resume for that role.

**Tool 2 — Interview Prep**
User selects a job application → Gemini reads the job description → generates 5-10 likely interview questions for that role → user can write and save their answers.

### The Flow Step by Step

```text
User uploads resume PDF
        ↓
Resume stored in Supabase Storage
        ↓
Resume URL saved in User table (resumeUrl field)
        ↓
        
── TOOL 1 ──────────────────────────────
User opens an application
        ↓
Pastes the job description
        ↓
Frontend sends { resumeUrl, jobDescription } to backend
        ↓
Backend fetches resume text from Supabase
        ↓
Backend builds a prompt and sends to Gemini API
        ↓
Gemini returns { matchScore, missingKeywords, suggestions }
        ↓
Frontend displays the analysis

── TOOL 2 ──────────────────────────────
User clicks "Generate Interview Questions"
        ↓
Frontend sends { jobDescription } to backend
        ↓
Backend builds a prompt and sends to Gemini API
        ↓
Gemini returns list of questions
        ↓
Backend saves questions to AiInterview + AiInterviewQuestion tables
        ↓
User writes answers → saved to AiInterviewQuestion.userAnswer
        ↓
User can come back and review their answers anytime
```

### Database Tables Involved

- `User.resumeUrl` — stores the Supabase Storage URL of the resume
- `User.resumeText` — stores extracted resume text from the uploaded PDF
- `AiInterview` — one record per interview prep session, linked to an application
- `AiInterviewQuestion` — one record per question, linked to AiInterview, stores the question and the user's answer

### API Endpoints

```text
POST /api/user/resume          → upload resume, extract text, save URL and text to user profile
POST /api/ai/analyze-resume    → resume vs JD analysis
POST /api/ai/interview-prep    → generate interview questions
POST /api/ai/save-answers      → save user's answers
GET  /api/ai/answers/:appId    → fetch saved answers for an application
```

### What Gemini Actually Does

You send Gemini a carefully written prompt like:

```text
You are a technical recruiter. Given this resume and job description, 
return a JSON with:
- matchScore (0-100)
- missingKeywords (array of strings)
- suggestions (array of specific improvements)

Resume: {resume text}
Job Description: {job description}
```

Gemini reads both and returns structured data that your frontend displays.

### Build Order

1. Resume upload → stores PDF, saves URL
2. Resume analyzer → uses stored resume + JD
3. Interview prep → generates and saves questions
4. Save/fetch answers → lets user prepare

Save this. When we start building, this is the map we follow.

## 11. Known Issues

Known gaps and risks:

- Frontend-to-backend Clerk auth flow may need explicit bearer token handling.
- Frontend currently calls `http://localhost:5000` hardcoded — needs env-based config.
- Frontend uses `credentials: "include"` but does not explicitly send Clerk bearer token — needs verification.
- The dashboard calls `http://localhost:5000/api/user/sync` directly. This should later be moved to an environment-based API client.
- `frontend/app/dashboard/page.tsx` calls `useAuth().getToken()` and logs the token, but does not attach it to the sync request as an `Authorization: Bearer ...` header.
- `frontend/app/dashboard/page.tsx` logs the Clerk token to the browser console, which is useful for debugging but should not remain in production.
- `POST /api/user/sync` is protected by `requireUser`, and `requireUser` returns `401` when no local DB user exists. This can block first-time sync because sync is the endpoint that should create the local user.
- Backend lacks global error handling.
- Backend lacks input validation.
- No global error handler yet; unhandled rejections can crash.
- No input validation on endpoints yet.
- Application create only manually checks `companyName`, `jobTitle`, and `source`; request bodies are not validated with Zod or another schema validator.
- `source` and `status` values are passed to Prisma without explicit enum validation before the database call.
- `backend/src/middleware/auth.ts` still uses `(req as any).user = localUser`.
- `backend/src/modules/user/user.controller.ts` still uses `(req as any).user` in `uploadResumeController`.
- Applications controllers return 500 responses but do not call `console.error(error)`, unlike user controllers.
- `syncUserController` reads `clerkUser.emailAddresses[0].emailAddress`; missing Clerk email addresses are not defensively handled.
- `backend/src/config/supabase.ts` uses non-null assertions for `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, so missing env vars will fail at runtime without a clear validation layer.
- `.gitignore` is incomplete.
- `.gitignore` at root does not yet ignore `node_modules`, `.env`, `dist`, `.next`.
- The root `.gitignore` currently does not ignore common generated files and secret files.
- `frontend/.env` exists locally and must not be committed.
- `backend/dist/` exists after build and should usually be ignored.
- Generated Prisma output is inside `backend/src/generated/prisma`.
- Generated Prisma client is inside `src/generated/prisma` — may need to be gitignored.
- Application source enum values include misspellings.
- `ApplicationSource` contains misspellings in the existing migration: `NAUKARI`, `REFERAL`, and `COLDEMAIL`.
- User sync does not update existing users when Clerk profile changes.
- Existing user sync returns an existing database user without updating changed Clerk profile details.
- User sync does not defensively handle missing Clerk profile fields in all cases.
- Missing first name, last name, or email need defensive handling.
- No tests exist.
- No automated tests exist yet.
- Postman collections are not present in the repo.
- `README.md` is currently untracked unless it is added to Git.
- Next.js reports that `middleware.ts` is deprecated in favor of `proxy`.
- Landing page is minimal.
- Dashboard is not the final dashboard.
- API client abstraction does not exist yet.
- `prd.md` is the original product requirements and should remain separate.

Documentation/status conflict notes that were resolved in this merged file:

- Older `context-prompt.md` said Applications CRUD was not done. Newer `task-update.md`, `README.md`, and actual routes show Applications CRUD is implemented and tested.
- Older `context-prompt.md` said resume upload was planned. Newer `README.md` and actual routes show `POST /api/user/resume` is implemented.
- Older `task-update.md` still says the current engineering focus is to start Applications CRUD. Newer status says Applications CRUD is complete and the next focus is frontend applications/Kanban.

## 12. Rules We Follow

- Do not start frontend for a module until backend is tested in Postman.
- Do not move to frontend work for a module until that module's backend is implemented and tested in Postman.
- Commit after every completed feature, not only at the end.
- Commit to GitHub after every completed feature, not only at the end.
- Never commit `.env` files.
- Keep `.env` files out of GitHub.
- Read and understand all AI-generated code before moving on.
- Debug independently for a focused effort before asking for help.
- Keep `task-update.md` updated every session.
- Keep `task-update.md` current after every session.
- Keep `README.md` aligned with the actual current codebase.
- Keep `README.md` aligned with the real current codebase, not only the planned product.
- All routes are protected by default unless intentionally public.
- Keep routes protected unless they are intentionally public.
- Every DB query must be scoped to the authenticated user.
- Scope all user-owned records by authenticated Clerk user.
- Never trust client-sent `userId`.
- On application create: insert initial `StatusHistory` record.
- On status update: insert new `StatusHistory` record when status changes.
- Fix `ApplicationSource` enum misspellings through a new Prisma migration, do not edit migration history.
- Add comments only where code is complex.
- Keep commit history clean.

## 13. How To Start A Session

At the start of a new chat, paste this entire file so the AI has the full project context.

Then tell the AI:

> "I've shared the full project context above. Here's what I want to work on today: [describe what you want]. Before we write any code, explain what we're building, why, and what alternatives exist."

Then work through it step by step:

1. Decide what to build next together.
2. Ask the AI to explain the concept and why before giving implementation steps.
3. Implement with AI tools.
4. Come back with questions.
5. Debug and review together.
6. Update `task-update.md` at the end of the session.

Current recommended starting point:

1. Fix `.gitignore` to exclude env files, build outputs, and generated artifacts as needed.
2. Build applications frontend:
   - list page
   - create form
   - detail page
3. Optionally start Kanban board after basic applications pages are stable.
4. Create a Prisma migration to fix `ApplicationSource` enum misspellings.
5. Re-run backend build and smoke-test impacted endpoints in Postman.

After that, update `task-update.md` with:

- frontend files added/updated
- migration details
- testing performed
- updated current stage
- next planned feature
