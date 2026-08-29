# ApplynTrack — Profile Module

## Purpose

The profile page gives the user two things:

1. Control over their account information.
2. The ability to upload the resume that powers AI features across the product.

It is a utility page — not visited daily, but critical to visit at least once before AI resume analysis will work.

---

## Location

```text
app/(protected)/profile/page.tsx
```

---

## Sections

The page has two sections rendered top to bottom, separated by a horizontal divider.

### 1. Profile Section

Displays and allows editing of three fields:

| Field | Type | Placeholder |
|---|---|---|
| `name` | Text input | — |
| `targetRole` | Text input | e.g. Backend Engineer |
| `experienceLevel` | Text input | e.g. Fresher |

All three fields pre-fill from `GET /api/user/profile` on mount.

The `name` field will always have a value since it comes from Clerk on user creation. `targetRole` and `experienceLevel` may be `null` for new users — they default to an empty string via `?? ""`.

The **Save** button calls `PUT /api/user/profile` with the current field values.

- On success, the profile state updates in place.
- A **"Profile saved."** confirmation appears below the button.
- On error, the error message from the API appears in red.

### 2. Resume Section

The resume section is the most critical section on this page.

The resume stored here is the input for AI resume analysis on every application. If no resume is uploaded, the **Analyze Resume** feature on the application detail page will return a `400` error.

There are two distinct visual states.

#### No Resume Uploaded

Display:

- A dashed bordered card with muted text:
  - **"No resume uploaded yet."**
- Secondary line:
  - **"Upload a resume to unlock AI resume analysis on your applications."**
- File picker and **Upload** button below.

#### Resume Uploaded

Display:

- A green bordered card with a checkmark:
  - **"Resume uploaded"**
- **"View current resume"** link opening the Supabase URL in a new tab.
- File picker labeled **"Replace resume"**.
- **Upload** button below.

The replace flow is identical to the initial upload — the backend overwrites the existing file and returns the new URL.

---

## API Calls

| Action | Endpoint | When |
|---|---|---|
| Load profile | `GET /api/user/profile` | On mount |
| Save profile | `PUT /api/user/profile` | On save button click |
| Upload resume | `POST /api/user/resume` | On upload button click |

---

## Resume Upload Flow

Resume upload is handled differently from all other API calls on this page.

It uses `FormData` instead of JSON and bypasses `apiFetch` entirely — calling `uploadResume` from `lib/api.ts`, which uses raw `fetch` without a manually set `Content-Type` header.

The browser sets the `Content-Type` header automatically with the correct multipart boundary.

### Client-Side Validation

Validation runs before the API call:

1. If no file is selected:
   - Show **"Please select a PDF file."**
   - Return early.
2. If the selected file's `type !== "application/pdf"`:
   - Show **"Only PDF files are allowed."**
   - Return early.

### Successful Upload

On success, the response includes:

- `resumeUrl`
- `resumeText`

The component:

1. Updates `profile.resumeUrl` in state immediately.
2. Does not perform a full re-fetch.
3. Resets `selectedFile` to `null`.
4. Shows **"Resume uploaded successfully."**

---

## State Variables

```ts
const [profile, setProfile] = useState<User | null>(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)

const [name, setName] = useState("")
const [targetRole, setTargetRole] = useState("")
const [experienceLevel, setExperienceLevel] = useState("")
const [savingProfile, setSavingProfile] = useState(false)
const [profileSaved, setProfileSaved] = useState(false)
const [profileError, setProfileError] = useState<string | null>(null)

const [selectedFile, setSelectedFile] = useState<File | null>(null)
const [uploadingResume, setUploadingResume] = useState(false)
const [uploadError, setUploadError] = useState<string | null>(null)
const [uploadSuccess, setUploadSuccess] = useState(false)
```

Each async operation has its own loading boolean and error string.

Profile save and resume upload can fail or succeed independently without state bleeding between them.

---

## Loading and Error States

| State | What to show |
|---|---|
| Initial load in flight | **"Loading profile..."** full page |
| Load error | Error message in red, full page |
| Profile not found | **"Profile not found."** — should not happen if `syncUser` ran on layout mount |
| Saving profile | Save button shows **"Saving..."**, disabled |
| Profile saved | **"Profile saved."** in green below the button |
| Profile save error | Error message in red below the button |
| No file selected on upload | **"Please select a PDF file."** in red |
| Non-PDF file selected | **"Only PDF files are allowed."** in red |
| Upload in progress | Upload button shows **"Uploading..."**, disabled |
| Upload success | **"Resume uploaded successfully."** in green; `resumeUrl` updates in place |
| Upload error | Error message in red below the upload button |

---

## Known Fix

`getToken` is added to the `useEffect` dependency array with a null guard.

Without this, `targetRole` and `experienceLevel` fields were appearing empty on mount even when values existed in the database — Clerk was not fully initialized when the effect first fired.

```ts
useEffect(() => {
  const load = async () => {
    const token = await getToken()
    if (!token) return
    // ...
  }

  load()
}, [getToken])
```

---

## What Is Deliberately Not On This Page

| Item | Reason excluded |
|---|---|
| Email field | Email is managed by Clerk — not editable from the app |
| Profile picture upload | Managed by Clerk — not in scope |
| Password change | Clerk handles auth — no passwords in the system |
| Resume delete without replace | No use case — a user always wants a resume present |
| Zod validation | Deferred — client-side type check on file is sufficient for now |

---

## Future Considerations (Polish Phase)

- Show resume filename after upload instead of just the generic link text.
- Show upload date of the current resume.
- Add a drag-and-drop file upload zone instead of the native file picker.
- Change `experienceLevel` to a dropdown:
  - Fresher
  - 0–1 years
  - 1–3 years
  instead of free text.
