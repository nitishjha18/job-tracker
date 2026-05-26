## AI Feature — Complete Flow

### What it does
Two separate AI-powered tools, both using Google Gemini API:

**Tool 1 — Resume Analyzer**
User pastes a job description → Gemini compares it against their stored resume → returns a match score, missing keywords, and specific suggestions to improve the resume for that role.

**Tool 2 — Interview Prep**
User selects a job application → Gemini reads the job description → generates 5-10 likely interview questions for that role → user can write and save their answers.

---

### The Flow Step by Step

```
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

---

### Database Tables Involved

- `User.resumeUrl` — stores the Supabase Storage URL of the resume
- `AiInterview` — one record per interview prep session, linked to an application
- `AiInterviewQuestion` — one record per question, linked to AiInterview, stores the question and the user's answer

---

### API Endpoints

```
POST /api/user/resume          → upload resume, save URL to user profile
POST /api/ai/analyze-resume    → resume vs JD analysis
POST /api/ai/interview-prep    → generate interview questions
POST /api/ai/save-answers      → save user's answers
GET  /api/ai/answers/:appId    → fetch saved answers for an application
```

---

### What Gemini Actually Does

You send Gemini a carefully written prompt like:

```
You are a technical recruiter. Given this resume and job description, 
return a JSON with:
- matchScore (0-100)
- missingKeywords (array of strings)
- suggestions (array of specific improvements)

Resume: {resume text}
Job Description: {job description}
```

Gemini reads both and returns structured data that your frontend displays.

---

### Build Order

1. Resume upload → stores PDF, saves URL
2. Resume analyzer → uses stored resume + JD
3. Interview prep → generates and saves questions
4. Save/fetch answers → lets user prepare

---

Save this. When we start building, this is the map we follow.