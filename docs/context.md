# ApplynTrack — Project Context & Session Handoff

**Last updated:** August 2026  
**Author:** Nitish Jha  
**Purpose:** Complete project state for session handoff. Paste this file at the start of any new development session to get full context with zero clarifying questions.

---

## What This Product Is

ApplynTrack is a full-stack job application tracker for final-year students and freshers. It replaces Excel-based tracking with a structured, AI-powered platform.

Target user: a fresher applying to 20-100+ companies simultaneously who needs to track every application, get AI feedback on their resume, prepare for interviews, and receive follow-up reminders.

This is a commercial product, not a portfolio project. The primary competitor is Huntr.co. ApplynTrack's differentiators are simpler UI, free analytics, and AI features Huntr lacks.

---

## Repository Structure

```
smarty-j/
  backend/                        ← Complete. Do not touch.
    prisma/
      schema.prisma
    src/
      middleware/auth.ts
      modules/
        user/
        applications/
        ai/
        reminders/
        dashboard/
      jobs/reminderJob.ts
      utils/email.ts
      index.ts

  frontend/                       ← Active development.
    app/
      (protected)/
        layout.tsx                ✅ complete
        dashboard/page.tsx        ✅ complete — wired with real data
        applications/page.tsx     ✅ complete
        applications/new/page.tsx ✅ complete
        applications/[id]/page.tsx ✅ complete — AI features wired
        profile/page.tsx          ❌ not built
      sign-in/[[...rest]]/page.tsx ✅ complete
    components/
      Sidebar.tsx                 ✅ complete
    lib/
      api.ts                      ✅ complete
    types/
      index.ts                    ✅ complete
    middleware.ts                 ✅ complete

  docs/
    architecture.md               ✅ complete
    context.md                    ✅ this file
    modules/
      dashboard.md                ✅ complete
      applications.md             ✅ complete
      profile.md                  ❌ not written
      ai.md                       ❌ not written
```

---

## Backend Status — 100% Complete and Locked

The backend is fully built, tested in Postman, and working. It is untouchable unless a genuine new feature requirement forces a change, in which case it requires a separate discussion before any modification.

### What the backend does

- Express REST API with TypeScript
- Clerk authentication middleware on every protected route
- Prisma ORM connected to PostgreSQL via Supabase
- User sync from Clerk into the local database
- User profile fetch and update
- Resume upload to Supabase Storage with PDF text extraction via pdf2json
- Applications CRUD with automatic StatusHistory tracking on every status change
- AI module — resume analysis and interview prep via Google Gemini (`gemini-3.6-flash`)
- Save and fetch interview answers
- Reminders CRUD
- Daily cron job via node-cron — runs at 9am, sends HTML reminder emails via Resend
- Custom email domain — reminders@applyntrack.online
- Dashboard analytics endpoint — totalApplications, responseRate, rejectionRate, bestSource, staleApplications

### Critical backend rules for frontend development

- Never send `userId` from the frontend — the backend reads it from the Clerk token
- Never hardcode `http://localhost:5000` — always use `process.env.NEXT_PUBLIC_API_URL`
- Resume upload uses `multipart/form-data` — do NOT set `Content-Type` header manually
- `jobTitle` is NOT called `role` or `title`
- `dateApplied` is NOT called `appliedAt` or `date`
- `isSent` on Reminder is NOT called `sent`
- NAUKARI, REFERAL, COLDEMAIL are intentional legacy spellings — do not correct them
- `/api/user/sync` uses `clerkAuth` middleware, not `requireUser` — this is intentional to solve the new user chicken-and-egg problem

### Backend known technical debt (do not fix during frontend development)

- `requireAuth()` is deprecated by Clerk — functional but will break on next major Clerk version
- No global error handler — unhandled errors crash the server
- No Zod input validation — Prisma rejects type mismatches but not business rule violations
- resumeText stored as raw extracted text with spacing artifacts
- ApplicationSource enum misspellings in migration history
- pdf2json text extraction uses manual traversal workaround

### Backend fixes applied

- `user.controller.ts` line ~80 — wrapped `decodeURIComponent` in try/catch to handle malformed URI characters in PDF text extraction:
  ```ts
  try { text += decodeURIComponent(r.T) + " " } catch { text += r.T + " " }
  ```

Full details in `docs/architecture.md`.

---

## Frontend Status — In Progress

### Tech Stack

```
Framework:    Next.js 16 (App Router)
Language:     TypeScript
Styling:      Tailwind CSS 4
Auth:         Clerk (@clerk/nextjs)
HTTP Client:  fetch (native) — no Axios
State:        React useState + useEffect — no Redux, no Zustand, no React Query
```

Do not add new packages without explicit discussion. Everything needed is already installed.

### How Auth Works

```ts
"use client"
import { useAuth } from "@clerk/nextjs"

const { getToken } = useAuth()
const token = await getToken()  // Always call fresh before each request
```

Send on every request:
```ts
headers: {
  "Authorization": `Bearer ${token}`,
  "Content-Type": "application/json"
}
```

Token expires every 60 seconds. Clerk caches it internally — calling `getToken()` fresh is not expensive.

### Completed Frontend Pages

**Protected layout** (`app/(protected)/layout.tsx`)
Shared layout wrapping all protected pages. Calls `syncUser` on mount. Contains the Sidebar component. Clerk auth guards redirect unauthenticated users to sign-in.

**Sidebar** (`components/Sidebar.tsx`)
Linear-inspired design. Seamless dark background. User avatar and name at top. Nav links: Dashboard, Applications, Profile. Sign out at bottom.

**Dashboard** (`app/(protected)/dashboard/page.tsx`)
Morning briefing design. Five sections: greeting with user's first name from Clerk, motivational quote with left-border accent, horizontal divider, morning brief sentence, pipeline strip, and two-column bottom with needs attention and recent activity.

Data architecture: two parallel API calls on mount via `Promise.all` — `getDashboardStats` and `getApplications`. Pipeline strip counts derived client-side by filtering by status. Recent activity derived by flattening statusHistory across all applications, sorting by createdAt desc, slicing first 5. Stale applications derived client-side (status APPLIED + dateApplied 14+ days ago). See `docs/modules/dashboard.md` for full detail.

**Applications list** (`app/(protected)/applications/page.tsx`)
All applications as rows in a single bordered container. Each row: company name, job title, source label, date applied, status badge. Clicking a row navigates to `/applications/[id]`. "New Application" button top right navigates to `/applications/new`. Empty state with second call to action when no applications exist.

**Create application** (`app/(protected)/applications/new/page.tsx`)
Form with companyName (required), jobTitle (required), source dropdown (required, defaults to LINKED_IN), dateApplied (defaults to today), jobDescription (optional textarea), notes (optional textarea). On success redirects to `/applications/[id]` of the newly created application.

**Application detail** (`app/(protected)/applications/[id]/page.tsx`)
Full detail view. Back button navigating to `/applications`. Header with company name, job title, delete button. Meta row with source and date applied. Status section — all six status pills, clicking one updates immediately. History section — statusHistory sorted most recent first. Notes section — inline editable textarea with save button that only enables on unsaved changes. Job description section — only shown if not empty.

Delete is a two-step flow — click Delete → confirm with "Yes, delete" or cancel.

AI features section — fully wired:
- **Resume Analysis** — calls `POST /api/ai/analyze-resume`, displays match score, missing keywords as pills, suggestions as a list. Client-side pre-check: if no jobDescription, shows inline warning without hitting the API. If no resume uploaded, surfaces backend 400 error with message directing user to profile page.
- **Interview Prep** — calls `POST /api/ai/interview-prep`, displays questions with answer textareas. On mount calls `GET /api/ai/answers/:appId` to pre-populate existing saved answers. Save Answers button calls `POST /api/ai/save-answers`. Button label switches to "Regenerate" when questions already exist.

### What Is Not Built Yet

```
Reminders on detail page            ← next to build
app/(protected)/profile/page.tsx    ← after reminders
```

---

## Agreed Build Order

This order is locked. Do not skip ahead.

1. ✅ Dashboard shell
2. ✅ Applications list page
3. ✅ Create application page
4. ✅ Application detail page
5. ✅ Return to dashboard — wire real data (pipeline counts, activity feed)
6. ✅ AI features on application detail page — resume analysis + interview prep
7. ❌ Reminders on application detail page
8. ❌ Profile page
9. ❌ Polish phase — colors, density, mobile, sidebar collapse, animations

---

## Next Session — Reminders

The next thing to build is the reminders section on the application detail page (`app/(protected)/applications/[id]/page.tsx`).

### Reminders

- A date picker and optional notes field at the bottom of the detail page
- Submit calls `POST /api/reminders` with `{ applicationId, reminderDate, notes }`
- If a reminder already exists for this application, show it with an option to update or delete
- Update calls `PUT /api/reminders/:id` with `{ reminderDate, notes }`
- Delete calls `DELETE /api/reminders/:id`
- The backend cron job handles sending the email — the frontend only manages CRUD

Note: The current `GET /api/applications/:id` response does not include reminders. The reminders endpoint is separate. Decide at build time whether to fetch the reminder on mount via a separate call or derive it another way.

---

## Design Decisions Locked

**Dashboard design** — morning briefing, not analytics dashboard. Five sections in order. No rejection rate shown (psychologically harmful as a morning metric). No charts — pipeline strip replaces bar chart. Side-by-side layout for needs attention and recent activity.

**Color palette** — not locked yet. Purple `#7C3AED` and blue `#2563EB` are the brand colors but exact usage across the UI is a polish-phase decision.

**Density and styling** — functional first. All polish deferred to after the full product is working end to end.

**No global state** — plain useState and useEffect. No Redux, Zustand, or React Query. Each page fetches its own data fresh on mount.

**No caching** — dashboard fetches fresh on every mount. At 50-100 applications per user the payload is trivial and caching adds complexity without user-facing benefit.

---

## Key Files Reference

| File | Purpose |
|---|---|
| `docs/architecture.md` | Full backend architecture, all tech decisions and trade-offs |
| `docs/context.md` | This file — current state and session handoff |
| `docs/modules/dashboard.md` | Dashboard sections, data sources, derivation logic |
| `docs/modules/applications.md` | List, create, detail — what each page does and why |
| `backend-api.md` | Complete API contract — source of truth for all field names, endpoints, request and response shapes |
| `frontend/lib/api.ts` | All API calls — the only file that makes fetch requests |
| `frontend/types/index.ts` | All TypeScript types mirroring backend API shapes |

---

## Development Rules (Non-Negotiable)

- **Design before code** — lock structure and data thinking before writing any implementation
- **One page at a time** — build, test, commit before moving to the next
- **Commit when something works** — not when everything works
- **Never touch the backend** — it is complete and locked
- **Never guess field names** — always refer to `backend-api.md`
- **Never hardcode the API URL** — always use `process.env.NEXT_PUBLIC_API_URL`
- **Always call `getToken()` fresh** before each API call
- **Never add packages** without explicit discussion

---

## Environment Variables

### Backend (`backend/.env`)
```
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

### Frontend (`frontend/.env.local`)
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Running the Project

```bash
# Backend
cd backend && npm run dev
# Runs on http://localhost:5000

# Frontend
cd frontend && npm run dev
# Runs on http://localhost:3000
```
