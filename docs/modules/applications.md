# Applications Module

## Purpose

The applications module is the core of ApplynTrack. Every other feature — AI analysis, reminders, dashboard metrics, interview prep — depends on an application existing first. This module covers three pages: the list view, the create form, and the detail view.

---

## Pages Overview

```
/applications           → List of all applications
/applications/new       → Create a new application
/applications/[id]      → Detail view for a single application
```

---

## Applications List Page

### Location

```
app/(protected)/applications/page.tsx
```

### Purpose

Gives the user a bird's eye view of every application they are tracking. Designed for quick scanning — the user should be able to find any application and understand its current state without clicking into it.

### What It Shows

Each application renders as a row inside a single bordered container. Every row shows:

- Company name — primary label, bold
- Job title — secondary label, lighter
- Source — where the application came from (LinkedIn, Naukri, Referral etc.)
- Date applied — formatted as day month year in Indian locale
- Status badge — color coded pill showing current status

Rows are ordered by `dateApplied` descending — most recent applications appear first. This ordering comes from the backend, not the frontend.

### Status Badge Colors

| Status | Color |
|---|---|
| APPLIED | Blue |
| SCREENING | Yellow |
| INTERVIEW | Purple |
| ASSIGNMENT | Orange |
| OFFER | Green |
| REJECTED | Red |

### Navigation

- Clicking any row navigates to `/applications/[id]`
- "New Application" button in the top right navigates to `/applications/new`

### States

**Loading** — "Loading your applications..." text shown while the API call is in flight.

**Error** — Error message from the API shown in red.

**Empty** — A centered empty state card with a message and a second "New Application" button. The empty state exists because a list with no rows and no explanation is confusing — the user needs to know the list is working correctly and they simply have not added anything yet.

**Populated** — The full list rendered as rows inside a single rounded bordered container. Rows are separated by a bottom border except the last one.

### API Call

```ts
GET /api/applications
```

Called once on mount. Returns the full application list with `statusHistory` embedded. The list page only uses the top-level fields — `statusHistory` is ignored here and used only on the dashboard and detail page.

```ts
useEffect(() => {
  const fetch = async () => {
    const token = await getToken()
    const data = await getApplications(token)
    setApplications(data.applications)
  }
  fetch()
}, [])
```

### Source Label Formatting

The backend stores source as enum values. The list page maps them to readable labels before display:

| Enum value | Display label |
|---|---|
| LINKED_IN | LinkedIn |
| NAUKARI | Naukri |
| REFERAL | Referral |
| COLDEMAIL | Cold Email |
| SOCIAL_MEDIA | Social Media |
| OTHER_JOB_APPS | Other |

Note: NAUKARI, REFERAL, and COLDEMAIL are intentional legacy spellings in the backend schema. Do not correct them — they are consistent throughout the codebase and changing them would require a database migration.

---

## Create Application Page

### Location

```
app/(protected)/applications/new/page.tsx
```

### Purpose

A focused form for adding a new job application to the tracker. Designed to be fast — the user should be able to log an application in under a minute.

### Form Fields

| Field | Type | Required | Default |
|---|---|---|---|
| companyName | Text input | Yes | — |
| jobTitle | Text input | Yes | — |
| source | Select dropdown | Yes | LINKED_IN |
| dateApplied | Date input | No | Today's date |
| jobDescription | Textarea | No | — |
| notes | Textarea | No | — |

`dateApplied` defaults to today's date using:
```ts
new Date().toISOString().split("T")[0]
```

### Validation

Client-side only. If `companyName`, `jobTitle`, or `source` are empty on submit, an error message is shown and the API call is not made. No Zod or schema validation — this is intentional at this stage of the product.

### Submit Behavior

On successful submission:
1. `createApplication` is called with the form data
2. The backend creates the application and auto-creates the first StatusHistory entry with status APPLIED
3. The response includes the new application object with its generated `id`
4. The user is redirected to `/applications/[id]` — the detail page of the application they just created

Redirecting to the detail page rather than the list is intentional. The user just filled out a form — their immediate next thought is to verify what they submitted looks correct, or to add more information. The detail page serves both needs. The list page does not.

### API Call

```ts
POST /api/applications
```

Request body:
```json
{
  "companyName": "Google",
  "jobTitle": "Backend Engineer",
  "jobDescription": "...",
  "source": "LINKED_IN",
  "notes": "...",
  "dateApplied": "2026-08-27"
}
```

Response includes the created application object. The `id` from this response is used for the redirect.

### States

**Submitting** — Button text changes to "Saving..." and is disabled to prevent double submission.

**Error** — Error message from the API or client validation shown in red above the action buttons.

---

## Application Detail Page

### Location

```
app/(protected)/applications/[id]/page.tsx
```

### Purpose

The single source of truth for one application. Everything about that application lives here — current status, full history, notes, job description, and eventually AI features and reminders. This is the most information-dense page in the app.

### What It Shows

**Header** — Company name as the page title, job title as subtitle. Delete button in the top right. Back button above the header to return to the applications list.

**Meta row** — Source label and date applied shown as a subtle secondary line below the header.

**Status section** — All six statuses rendered as pills. The current status is highlighted in its color. Clicking any other status updates the application immediately.

**History section** — Every status change this application has gone through, sorted most recent first. Each entry shows the status badge and the date it was recorded. This gives the user a clear timeline of how the application has progressed.

**Notes section** — A textarea pre-filled with existing notes. Edited inline. A "Save notes" button appears — it is disabled when the textarea content matches the saved value, enabled only when there is an unsaved change. This prevents accidental empty saves.

**Job Description section** — Rendered as pre-wrapped text. Only shown if `jobDescription` is not empty. Hidden entirely if the application was created without a job description.

**AI Features section** — Placeholder section with "Resume Analysis" and "Interview Prep" rows. Both show "Coming soon" buttons in a disabled state. This section exists in the UI now so the layout is established before the AI features are built.

### Back Button

A text button above the header: "← Back to applications". Navigates to `/applications`. Added because landing on the detail page after creation left the user with no obvious exit path except the sidebar.

### Delete Flow

Delete is a two-step process. Never a single click.

1. User clicks "Delete" — a confirmation row replaces the button inline: "Are you sure?" with "Yes, delete" and "Cancel"
2. User clicks "Yes, delete" — `deleteApplication` is called, on success the user is redirected to `/applications`
3. User clicks "Cancel" — the confirmation row disappears, the "Delete" button returns

This two-step pattern exists because deletion is irreversible. A single-click delete with no confirmation is a user experience failure — someone will always fat-finger it.

### Status Update Flow

Clicking a status pill:
1. Calls `updateApplication` with the new status
2. Backend auto-creates a new StatusHistory entry
3. Response returns the full updated application with the new statusHistory
4. Component state is updated — the new status is highlighted, the new history entry appears

The status update is not optimistic. The UI waits for the API response before reflecting the change. This is correct because an optimistic update that then fails would show the wrong status to the user.

### Notes Save Flow

Notes are edited in a textarea. The save button is only enabled when the current textarea value differs from `application.notes`. On save:
1. Calls `updateApplication` with the new notes value
2. Response returns the full updated application
3. Component state is updated

### API Calls

| Action | Endpoint | When |
|---|---|---|
| Load application | GET /api/applications/:id | On mount |
| Change status | PUT /api/applications/:id | On status pill click |
| Save notes | PUT /api/applications/:id | On save notes button click |
| Delete | DELETE /api/applications/:id | On confirmed delete |

### State Variables

```ts
const [application, setApplication] = useState<Application | null>(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
const [notes, setNotes] = useState("")
const [savingNotes, setSavingNotes] = useState(false)
const [updatingStatus, setUpdatingStatus] = useState(false)
const [confirmDelete, setConfirmDelete] = useState(false)
const [deleting, setDeleting] = useState(false)
```

Each async operation has its own loading boolean rather than a single shared one. This allows the UI to disable only the relevant element during an operation — changing status disables the status pills but not the notes save button.

### Loading and Error States

- **Loading** — Full page "Loading..." text while the initial fetch is in flight
- **Error** — Full page error message in red
- **Not found** — "Application not found." if the API returns 404

---

## Shared Utilities

Both the list page and detail page use the same label maps and formatting functions. These are currently duplicated across files. In a future refactor they should be extracted to a shared utility file such as `lib/applicationUtils.ts`.

### formatDate

```ts
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}
```

### Status and Source Label Maps

```ts
const STATUS_LABELS: Record<ApplicationStatus, string> = {
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  ASSIGNMENT: "Assignment",
  OFFER: "Offer",
  REJECTED: "Rejected",
}

const SOURCE_LABELS: Record<ApplicationSource, string> = {
  LINKED_IN: "LinkedIn",
  NAUKARI: "Naukri",
  REFERAL: "Referral",
  COLDEMAIL: "Cold Email",
  SOCIAL_MEDIA: "Social Media",
  OTHER_JOB_APPS: "Other",
}
```

---

## What Is Deliberately Not On These Pages

| Item | Reason excluded |
|---|---|
| Pagination on the list | Premature at current scale — a fresher will not hit performance issues at 50-100 applications |
| Search and filter on the list | Polish phase feature — functional list comes first |
| Optimistic status updates on detail | Correctness over speed — wrong status display is worse than a brief delay |
| Zod validation on create form | Deferred — client-side required field check is sufficient for now |
| Drag and drop Kanban | Polish phase — list view is functional equivalent |
| Inline edit for company name and job title | Not needed yet — delete and recreate is acceptable at this stage |

---

## Known Limitations

- `STATUS_LABELS` and `SOURCE_LABELS` maps are duplicated across list and detail pages — should be extracted to a shared utility
- No pagination — will become relevant if a user tracks 200+ applications
- No filter or search on the list page
- AI features section on detail page is a non-functional stub — buttons are disabled
- Notes save button compares against `application.notes ?? ""` — if notes is null and textarea is empty the button stays correctly disabled

---

## Future Considerations (Polish Phase)

- Extract shared label maps and formatDate to `lib/applicationUtils.ts`
- Filter applications list by status
- Search applications by company name
- Clicking pipeline strip on dashboard navigates to filtered applications list
- Inline edit for company name and job title on detail page
- AI features wired up on detail page — resume analysis and interview prep
- Reminder creation section on detail page
