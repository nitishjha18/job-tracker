# AI Module

## Purpose

The AI module adds two features to the application detail page:

1. Resume analysis
2. Interview preparation

Both features are powered by Google Gemini on the backend and surface their results directly inside the application detail view.

This module is not a standalone page — it lives entirely within `/applications/[id]`.

---

## Location

```text
app/(protected)/applications/[id]/page.tsx
```

AI features are rendered as a section at the bottom of the application detail page, below the job description.

---

## Features Overview

| Feature | Purpose |
|---|---|
| **Resume Analysis** | Compares the user's resume against the job description |
| **Interview Prep** | Generates interview questions based on the job description |

---

# Resume Analysis

## Purpose

Compares the user's stored resume text against the application's job description using Gemini.

It returns:

- A match score
- A list of missing keywords
- Actionable suggestions for improving the resume for that specific role

---

## Trigger

The user clicks the **"Analyze Resume"** button.

---

## Client-Side Pre-Check

Before making any API call, the client checks whether `application.jobDescription` is empty.

If it is empty:

- An inline warning is shown.
- The API is never called.

Message:

> **"Add a job description to this application first."**

This saves a round trip and gives a cleaner error than what the backend would return.

---

## API Call

```http
POST /api/ai/analyze-resume
```

### Request Body

```json
{
  "applicationId": "..."
}
```

### Response

```json
{
  "analysis": {
    "matchScore": 72,
    "missingKeywords": [
      "Docker",
      "Kubernetes",
      "Redis"
    ],
    "suggestions": [
      "Highlight your Node.js experience in the summary",
      "Add a projects section showing distributed systems work"
    ]
  }
}
```

---

## Error Handling

| Scenario | What the UI shows |
|---|---|
| No job description on application | **"Add a job description to this application first."** — shown without an API call |
| No resume uploaded (backend `400`) | **"No resume uploaded. Upload one from your profile page."** |
| Any other error | Error message from the API response |

---

## Display

### Match Score

Display the match score as:

- A large, bold number
- Label: **"% match with this job description"**

### Missing Keywords

Display missing keywords as:

- Red pills
- One pill per keyword

### Suggestions

Display suggestions as:

- Arrow list
- One suggestion per line

---

## Persistence

Resume analysis results are **not saved to the database**.

Every click recomputes the analysis fresh via Gemini.

This is intentional because the resume or job description may have changed since the last analysis.

---

## State Variables

```ts
const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null)
const [analyzingResume, setAnalyzingResume] = useState(false)
const [analysisError, setAnalysisError] = useState<string | null>(null)
```

---

## ResumeAnalysis Type

Defined inline in the detail page, rather than in `types/index.ts`:

```ts
interface ResumeAnalysis {
  matchScore: number
  missingKeywords: string[]
  suggestions: string[]
}
```

---

# Interview Prep

## Purpose

Generates a set of interview questions based on the application's job description using Gemini.

Questions are saved to the database on the backend.

The user can write and save their answers directly in the UI.

---

## Trigger

The user clicks the **"Generate Questions"** button.

If questions already exist for this application, the button label changes to **"Regenerate"**.

Clicking **"Regenerate"** replaces the existing question set.

---

## On Mount Behaviour

On page load:

```text
GET /api/ai/answers/:appId
```

is called in parallel with:

```text
GET /api/applications/:id
```

via `Promise.all`.

If interview questions already exist, they are pre-populated with any saved answers immediately.

The user does not need to click **Generate** again.

### Handling No Existing Interviews

The answers call is wrapped in:

```ts
.catch(() => ({ interviews: [] }))
```

The backend returns `404` if no interviews exist yet.

This is treated as an empty state, not an error.

---

## API Calls

| Action | Endpoint | When |
|---|---|---|
| Load existing questions + answers | `GET /api/ai/answers/:appId` | On mount |
| Generate new questions | `POST /api/ai/interview-prep` | On button click |
| Save answers | `POST /api/ai/save-answers` | On save button click |

---

## Generate Questions

### Request Body

```json
{
  "applicationId": "..."
}
```

### Response

```json
{
  "interviewPrep": {
    "interviewId": "...",
    "questions": [
      {
        "id": "...",
        "question": "What is the difference between horizontal and vertical scaling?",
        "userAnswer": null,
        "questionNumber": 1,
        "createdAt": "...",
        "updatedAt": "..."
      }
    ]
  }
}
```

Questions are saved to the database by the backend.

Fetching answers on mount returns the same questions.

---

## Save Answers

### Request Body

```json
{
  "answers": [
    {
      "questionId": "...",
      "answer": "Horizontal scaling adds more machines..."
    },
    {
      "questionId": "...",
      "answer": "Database indexing creates a data structure..."
    }
  ]
}
```

Only non-empty answers are included in the payload.

Blank textareas are filtered out before sending.

### Response

```json
{
  "saved": 2
}
```

---

## Display

- Questions are rendered as a numbered list.
- Each question has a textarea below it for the user's answer.
- A single **"Save Answers"** button appears at the bottom of all questions.
- **"Answers saved."** confirmation text appears next to the button after a successful save.
- The confirmation resets to hidden when questions are regenerated.

---

## Error Handling

| Scenario | What the UI shows |
|---|---|
| Generation fails | Error message from API in red below the button |
| Save fails | Error message from API in red below the save button |

---

## State Variables

```ts
const [interviews, setInterviews] = useState<AiInterview[]>([])
const [generatingPrep, setGeneratingPrep] = useState(false)
const [prepError, setPrepError] = useState<string | null>(null)
const [answers, setAnswers] = useState<Record<string, string>>({})
const [savingAnswers, setSavingAnswers] = useState(false)
const [answersSaved, setAnswersSaved] = useState(false)
```

`answers` is a `Record<string, string>` keyed by `questionId`.

It is:

- Populated from saved answers on mount.
- Updated as the user types.

---

# Prerequisites

Both features require the user to have uploaded a resume.

The resume is uploaded once on the Profile page and stored in Supabase.

The backend reads `resumeText` from the user record when either AI endpoint is called.

### If No Resume Is Uploaded

| Feature | Behaviour |
|---|---|
| Resume analysis | Backend returns `400`; frontend surfaces the error message |
| Interview prep | Backend may still work since it only uses the job description, not the resume |

---

# What Is Deliberately Not Here

| Item | Reason excluded |
|---|---|
| Persisted resume analysis results | Recomputed on demand — inputs are already stored, and Gemini is fast enough |
| Overall score and feedback on interview | `overallScore` and `overallFeedback` fields exist on `AiInterview` in the DB but Gemini does not currently populate them |
| Separate AI page | At current scale, keeping AI features inside the detail page is simpler and avoids an extra navigation step |
| Streaming Gemini responses | Not needed at this stage — response times are acceptable without streaming |

---

# Known Limitations

- `ResumeAnalysis` type is defined inline in the detail page rather than in `types/index.ts`.
- Resume analysis results are lost on page refresh — by design, but worth noting.
- If the user regenerates interview questions, previous answers saved in the DB are orphaned — the old `AiInterview` record still exists but is no longer shown in the UI.
- `getAnswers` `404` on no interviews is silently swallowed — correct behaviour, but worth knowing.

---

# Future Considerations (Polish Phase)

- Move `ResumeAnalysis` type to `types/index.ts`.
- Show a visual match score meter or progress bar instead of a plain number.
- Colour-code match score:
  - Green above 70
  - Yellow from 40–70
  - Red below 40
- Allow the user to re-analyse after editing notes or the job description without leaving the page.
- Surface `overallScore` and `overallFeedback` if Gemini is updated to return them.
- Add a dedicated AI history view showing all past interview sessions for an application.
