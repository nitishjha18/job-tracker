# Dashboard Module

## Purpose

The dashboard is the first page a user sees after signing in. It is designed as a morning briefing — not a data dump. The goal is to give the user progress and clarity in under 5 seconds. Every design and data decision on this page is made with that constraint in mind.

Target users range from freshers tracking 50-100+ applications who need a war-room style overview, to professionals tracking 10-20 applications who want a calmer progress view. The dashboard serves both without compromising either.

---

## Location

```
app/(protected)/dashboard/page.tsx
```

---

## Sections

The dashboard has five sections rendered in this exact order. The order is intentional — it moves from personal to analytical, from emotional to actionable.

### 1. Greeting

A personalized welcome using the user's first name pulled from Clerk's `useUser` hook. Followed by a static subline: "Here's your job search status for today."

The name comes from `user?.firstName` with a fallback to the first word of `user?.fullName` and a final fallback to "there" if neither is available.

This section exists because landing on a dashboard that immediately shows numbers feels clinical. The greeting creates a moment of acknowledgment before the data hits.

### 2. Motivational Quote

A single hardcoded quote with a left border accent. Currently static — one quote shown every time.

```
"Success is the sum of small efforts, repeated day in and day out."
— Robert Collier
```

Intentionally kept simple. The quote is not fetched from an API, not randomized per session, and not user-configurable. It exists to set a positive tone for the morning briefing. Rotating quotes or user-selected quotes are a polish-phase decision, not a functional requirement.

### 3. Morning Brief Sentence

A single dynamically generated sentence summarizing the user's current state. Rendered below a horizontal divider that separates the personal top section from the data section.

Format:
```
You have {totalApplications} applications tracked — {staleCount} has/have had no update in 14+ days.
```

`totalApplications` comes from the stats endpoint. `staleCount` is derived client-side from the applications list. See Data Sources section for details.

### 4. Pipeline Strip

A horizontal strip showing application counts per active status stage. Stages shown left to right:

```
Applied → Screening → Interview → Assignment → Offer
```

REJECTED is intentionally excluded from the pipeline strip. Rejected applications are a terminal state and showing them in the pipeline creates a demoralizing read. They are not hidden from the product — they appear in the applications list and detail page — but they have no place in a morning briefing.

Counts are derived entirely client-side by filtering the applications array by status. Stages with zero applications render the count in a lighter gray to reduce visual noise. Stages with applications render in full dark.

### 5. Bottom Two Columns

Two equal-width cards sitting side by side.

**Left — Needs Attention**

Shows applications that have been in APPLIED status for 14 or more days with no status change. Each row shows company name, job title, and the number of days since application.

This is computed client-side by filtering applications where `status === "APPLIED"` and `dateApplied` is 14+ days ago. The backend stats endpoint returns a `staleApplications` count but not the actual application records — so the client computes this itself from the full applications list.

The "14 days" threshold matches the backend's definition of stale used in `GET /api/dashboard/stats`.

**Right — Recent Activity**

Shows the last 5 status changes across all applications, sorted by most recent first.

Computed client-side by flattening all `statusHistory` arrays from every application into a single array, sorting by `createdAt` descending, and slicing the first 5 entries. Each entry shows company name, the status it moved to, and a human-readable time ago string (Today, Yesterday, or N days ago).

---

## Data Sources

The dashboard makes two API calls in parallel on mount using `Promise.all`. Neither call waits for the other.

```ts
const [statsData, appsData] = await Promise.all([
  getDashboardStats(token),
  getApplications(token),
])
```

### GET /api/dashboard/stats

Returns pre-computed server-side aggregations:

| Field | Type | Used on dashboard |
|---|---|---|
| totalApplications | number | Morning brief sentence |
| responseRate | number | Not shown on dashboard |
| rejectionRate | number | Not shown on dashboard |
| bestSource | string or null | Not shown on dashboard |
| staleApplications | number | Not shown directly — client recomputes from apps list |

Note: `responseRate`, `rejectionRate`, and `bestSource` are fetched but not displayed on the dashboard. They are reserved for a future Analytics page. The stats endpoint is called anyway because `totalApplications` is needed and the cost of the call is the same regardless.

### GET /api/applications

Returns the full application list with `statusHistory` embedded in each application object. This is the heavier of the two calls but necessary because:

- Pipeline strip counts require filtering by status across all applications
- Recent activity requires access to `statusHistory` on every application
- Needs attention requires filtering by `dateApplied` and `status`

All three of these derivations are done client-side in 3-4 lines of JavaScript each. At 50-100 applications per user this is negligible processing cost.

---

## Client-Side Derivations

All three of the following are computed inside the component after both API calls resolve.

### Pipeline Counts

```ts
const pipelineCounts = PIPELINE_STAGES.reduce((acc, stage) => {
  acc[stage] = applications.filter((a) => a.status === stage).length
  return acc
}, {} as Record<string, number>)
```

### Stale Applications

```ts
const staleApps = applications.filter((app) => {
  if (app.status !== "APPLIED") return false
  const days = Math.floor(
    (Date.now() - new Date(app.dateApplied).getTime()) / (1000 * 60 * 60 * 24)
  )
  return days >= 14
})
```

### Recent Activity Feed

```ts
const recentActivity = applications
  .flatMap((app) =>
    (app.statusHistory ?? []).map((entry) => ({
      ...entry,
      companyName: app.companyName,
      appId: app.id,
    }))
  )
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  .slice(0, 5)
```

---

## State Management

No global state. No caching layer. Plain React.

```ts
const [stats, setStats] = useState<DashboardStats | null>(null)
const [applications, setApplications] = useState<Application[]>([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
```

The dashboard fetches its own fresh copy of applications on every mount. It does not share state with the applications list page. This is intentional — the dashboard is a read-only snapshot, not a live synchronized view.

---

## Auth Flow

1. `useAuth` provides `getToken` for bearer token
2. `useUser` provides user name for the greeting
3. `syncUser` is called before the parallel data fetch to ensure the user exists in the local database
4. If token is unavailable the fetch returns early silently — Clerk middleware handles the redirect to sign-in

---

## Loading and Error States

- While loading: pipeline counts show "—", brief sentence shows "Loading your status..."
- On error: error message from the API is shown in the brief sentence area in red
- Empty states: "All applications are active" in needs attention, "No activity yet" in recent activity

---

## What Is Deliberately Not On This Page

These items were considered and explicitly excluded:

| Item | Reason excluded |
|---|---|
| Rejection rate | Psychologically harmful as a morning metric for a job seeker |
| Best source | Analytical insight, not actionable morning information — reserved for Analytics page |
| Bar chart of applications by status | Pipeline strip communicates the same information more cleanly |
| Response rate % | Not immediately actionable — reserved for Analytics page |
| Kanban board | Too much information for a morning brief, belongs on Applications page |

---

## Known Limitations

- Recent activity "Today" label applies to all entries from the current calendar day regardless of time — a status changed at 11pm and one at 1am both show "Today"
- Stale threshold is hardcoded to 14 days on the client to match the backend definition — if the backend threshold changes the client must be updated manually
- Motivational quote is static — rotating quotes is a polish-phase feature
- Pipeline strip does not include REJECTED — users cannot see rejection count from the dashboard

---

## Future Considerations (Polish Phase)

- Rotating motivational quotes from a curated list
- Clicking a pipeline stage navigates to applications list filtered by that status
- Clicking a stale application row navigates to its detail page
- Clicking a recent activity row navigates to its detail page
- Response rate shown as a secondary metric below the brief sentence
- Animation on pipeline count numbers on first load
