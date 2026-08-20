# ApplynTrack — Frontend Development Context

Paste this file at the start of every frontend development session along with `backend-api.md`.
The AI will have full context and be ready to work immediately with zero clarifying questions.

---

## Who You Are Working With

Name: Nitish Jha
Role: Software engineer, full-stack focus
Stack: Next.js, TypeScript, Tailwind CSS, Express, Prisma, Supabase, Clerk
Goal: Build a functional frontend that connects to the completed backend. Functional first, polish later.

---

## The Product

ApplynTrack is a job application tracker for final-year students and freshers. It replaces Excel-based tracking with a structured, AI-powered platform.

Core features:
- Track job applications with status (Kanban-style)
- Upload resume once, reuse for AI analysis
- Compare resume against job descriptions using Gemini AI
- Generate interview prep questions using Gemini AI
- Set follow-up reminders with email notifications
- View dashboard analytics about the job search

See `prd.md` for the full product requirements.

---

## Current State

### Backend — 100% Complete and Tested

The entire backend is built, tested in Postman, and working. Do not touch the backend.

All API endpoints, request shapes, response shapes, and field names are documented in `backend-api.md`. That document is the source of truth. Never guess field names — always refer to it.

### Frontend — Minimal

What already exists:
- Next.js 16 project with TypeScript
- Tailwind CSS 4 configured
- Clerk authentication provider in `frontend/app/layout.tsx`
- Clerk sign-in page at `frontend/app/sign-in/[[...rest]]/page.tsx`
- Route protection via `frontend/middleware.ts`
- Basic dashboard page at `frontend/app/dashboard/page.tsx` — currently only shows a bearer token for dev testing and calls user sync

What does NOT exist yet:
- API client abstraction
- Applications list page
- Application detail page
- Application create form
- Profile page
- Resume upload UI
- AI analysis UI
- Interview prep UI
- Dashboard analytics UI
- Shared components (Navbar, Sidebar)
- TypeScript types for API responses

---

## Tech Stack

```
Framework:     Next.js 16 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS 4
Auth:          Clerk (@clerk/nextjs)
HTTP Client:   fetch (native) — no Axios
State:         React useState and useEffect — no Redux
```

Do not add new packages without asking. Everything needed is already installed.

---

## How Auth Works In The Frontend

Clerk manages authentication. Every API call to the backend needs a bearer token.

Get the token using the `useAuth` hook:

```ts
"use client"
import { useAuth } from "@clerk/nextjs"

const { getToken } = useAuth()
const token = await getToken()
```

The token expires every 60 seconds. Always call `getToken()` fresh before each request. Clerk caches it internally so this is not expensive.

Send it on every request:
```ts
headers: {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
}
```

For file uploads (resume), do NOT set Content-Type — the browser sets it automatically with the multipart boundary.

---

## API Client — Build This First

Before any page, create `frontend/lib/api.ts`. This is the single place all API calls are made from. No page should make raw fetch calls directly.

Pattern to follow:

```ts
// frontend/lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

async function apiFetch(path: string, token: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers
    }
  })
  
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || "Something went wrong")
  }
  
  return res.json()
}

// User
export const syncUser = (token: string) =>
  apiFetch("/api/user/sync", token, { method: "POST" })

export const getProfile = (token: string) =>
  apiFetch("/api/user/profile", token)

export const updateProfile = (token: string, data: object) =>
  apiFetch("/api/user/profile", token, {
    method: "PUT",
    body: JSON.stringify(data)
  })

// Resume upload is separate because it uses FormData
export const uploadResume = async (token: string, file: File) => {
  const formData = new FormData()
  formData.append("resume", file)
  
  const res = await fetch(`${API_URL}/api/user/resume`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` },
    body: formData
  })
  
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || "Upload failed")
  }
  
  return res.json()
}

// Applications
export const createApplication = (token: string, data: object) =>
  apiFetch("/api/applications", token, {
    method: "POST",
    body: JSON.stringify(data)
  })

export const getApplications = (token: string) =>
  apiFetch("/api/applications", token)

export const getApplication = (token: string, id: string) =>
  apiFetch(`/api/applications/${id}`, token)

export const updateApplication = (token: string, id: string, data: object) =>
  apiFetch(`/api/applications/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(data)
  })

export const deleteApplication = (token: string, id: string) =>
  apiFetch(`/api/applications/${id}`, token, { method: "DELETE" })

// AI
export const analyzeResume = (token: string, applicationId: string) =>
  apiFetch("/api/ai/analyze-resume", token, {
    method: "POST",
    body: JSON.stringify({ applicationId })
  })

export const generateInterviewPrep = (token: string, applicationId: string) =>
  apiFetch("/api/ai/interview-prep", token, {
    method: "POST",
    body: JSON.stringify({ applicationId })
  })

export const saveAnswers = (token: string, answers: object[]) =>
  apiFetch("/api/ai/save-answers", token, {
    method: "POST",
    body: JSON.stringify({ answers })
  })

export const getAnswers = (token: string, appId: string) =>
  apiFetch(`/api/ai/answers/${appId}`, token)

// Reminders
export const createReminder = (token: string, data: object) =>
  apiFetch("/api/reminders", token, {
    method: "POST",
    body: JSON.stringify(data)
  })

export const updateReminder = (token: string, id: string, data: object) =>
  apiFetch(`/api/reminders/${id}`, token, {
    method: "PUT",
    body: JSON.stringify(data)
  })

export const deleteReminder = (token: string, id: string) =>
  apiFetch(`/api/reminders/${id}`, token, { method: "DELETE" })

// Dashboard
export const getDashboardStats = (token: string) =>
  apiFetch("/api/dashboard/stats", token)
```

Also add to `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## TypeScript Types — Create These

Create `frontend/types/index.ts`:

```ts
export type ApplicationStatus =
  | "APPLIED"
  | "SCREENING"
  | "INTERVIEW"
  | "ASSIGNMENT"
  | "OFFER"
  | "REJECTED"

export type ApplicationSource =
  | "LINKED_IN"
  | "NAUKARI"
  | "REFERAL"
  | "COLDEMAIL"
  | "SOCIAL_MEDIA"
  | "OTHER_JOB_APPS"

export interface User {
  id: string
  clerkId: string
  name: string
  email: string
  profilePicture: string | null
  targetRole: string | null
  experienceLevel: string | null
  resumeUrl: string | null
  resumeText: string | null
  createdAt: string
  updatedAt: string
}

export interface StatusHistory {
  id: string
  applicationId: string
  status: ApplicationStatus
  createdAt: string
}

export interface Application {
  id: string
  userId: string
  companyName: string
  jobTitle: string
  jobDescription: string
  status: ApplicationStatus
  source: ApplicationSource
  dateApplied: string
  notes: string | null
  createdAt: string
  updatedAt: string
  statusHistory?: StatusHistory[]
}

export interface AiInterviewQuestion {
  id: string
  aiInterviewId: string
  question: string
  userAnswer: string | null
  questionNumber: number
  createdAt: string
  updatedAt: string
}

export interface AiInterview {
  id: string
  applicationId: string
  overallScore: number | null
  overallFeedback: string | null
  createdAt: string
  updatedAt: string
  questions: AiInterviewQuestion[]
}

export interface Reminder {
  id: string
  userId: string
  applicationId: string
  reminderDate: string
  isSent: boolean
  notes: string | null
  createdAt: string
  updatedAt: string
}

export interface DashboardStats {
  totalApplications: number
  responseRate: number
  rejectionRate: number
  bestSource: ApplicationSource | null
  staleApplications: number
}
```

---

## Pages To Build

Build in this exact order. Do not skip ahead.

### 1. API Client and Types (before any page)
- `frontend/lib/api.ts`
- `frontend/types/index.ts`
- Add `NEXT_PUBLIC_API_URL` to `.env.local`

### 2. Update Dashboard Page
File: `frontend/app/dashboard/page.tsx`

What it should show:
- Welcome message with user's name
- Stats cards: total applications, response rate, rejection rate, stale applications
- Best source
- Link/button to go to applications list
- Remove the bearer token display (dev tool no longer needed)

API calls:
- `syncUser` on mount
- `getDashboardStats` on mount

### 3. Applications List Page
File: `frontend/app/applications/page.tsx`

What it should show:
- List of all applications as cards
- Each card shows: company name, job title, status badge, source, date applied
- Button to create new application (links to create page)
- Click on a card navigates to `/applications/:id`

API calls:
- `getApplications` on mount

### 4. Create Application Page
File: `frontend/app/applications/new/page.tsx`

What it should show:
- Form with fields: companyName, jobTitle, jobDescription, source (dropdown), notes, dateApplied
- Submit button
- On success, redirect to `/applications/:id` with the new application ID

API calls:
- `createApplication` on submit

### 5. Application Detail Page
File: `frontend/app/applications/[id]/page.tsx`

What it should show:
- Full application details
- Status history timeline
- Status update dropdown — change status triggers PUT and re-fetches
- Edit notes inline
- Delete button with confirmation
- "Analyze Resume" button — calls analyzeResume, shows results below
- "Generate Interview Questions" button — calls generateInterviewPrep, shows questions
- If interview questions exist, show them with text areas to write answers
- Save answers button
- Set reminder section — date picker and notes field, submit creates reminder

API calls:
- `getApplication` on mount
- `updateApplication` for status and notes changes
- `deleteApplication` on delete
- `analyzeResume` on button click
- `generateInterviewPrep` on button click
- `saveAnswers` on save
- `getAnswers` on mount (to show existing answers)
- `createReminder` on reminder submit

### 6. Profile Page
File: `frontend/app/profile/page.tsx`

What it should show:
- Current profile: name, email, targetRole, experienceLevel
- Edit form for name, targetRole, experienceLevel
- Resume upload section — file picker, upload button
- Show current resumeUrl if exists with a link
- Save profile button

API calls:
- `getProfile` on mount
- `updateProfile` on save
- `uploadResume` on file upload

---

## Navigation Structure

Add a simple navbar or sidebar that appears on all protected pages:

```
Dashboard     → /dashboard
Applications  → /applications
Profile       → /profile
Sign Out      → Clerk signOut()
```

Use Next.js `<Link>` for navigation.

---

## Styling Rules

- Use Tailwind CSS only — no custom CSS files
- Functional first — basic layout, readable, nothing broken
- Status badges should be color-coded:
  - APPLIED — blue
  - SCREENING — yellow
  - INTERVIEW — purple
  - ASSIGNMENT — orange
  - OFFER — green
  - REJECTED — red
- Loading states: show "Loading..." text while fetching
- Error states: show the error message from the API response
- No animations, no transitions, no fancy hover effects in Phase 1

---

## Session Rules

Follow these rules in every session:

- Explain what you are building and why before writing any code
- Build one page or one component at a time — do not generate the entire frontend at once
- After building each page, wait for Nitish to test it before moving to the next
- Use the exact field names from `backend-api.md` — never guess
- Always call `getToken()` fresh before each API call
- Never hardcode `http://localhost:5000` — always use `process.env.NEXT_PUBLIC_API_URL`
- Never add new npm packages without asking
- Never start backend work — the backend is complete and untouchable
- If something is unclear, ask before building

---

## What Functional First Means

Phase 1 is functional, not beautiful.

- Forms work and submit correctly
- Data fetches and displays correctly
- Navigation works
- Auth is enforced
- Errors are shown to the user
- Loading states exist

Phase 1 is NOT:
- Pixel-perfect design
- Animations
- Drag and drop Kanban
- Mobile responsive
- Optimistic updates

All of that comes in Phase 2 after the full product is working end to end.

---

## How To Start A Session

After pasting this file and `backend-api.md`, tell the AI:

> "The context files are loaded. Today I want to build [page or feature name]. Before writing any code, explain what we are building, what API calls it makes, and what the component structure looks like."

Then work through it step by step, one component at a time.