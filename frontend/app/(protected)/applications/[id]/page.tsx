"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"
import {
  getApplication,
  updateApplication,
  deleteApplication,
  analyzeResume,
  generateInterviewPrep,
  getAnswers,
  saveAnswers,
  createReminder
} from "../../../lib/api"
import type {
  Application,
  ApplicationStatus,
  AiInterview,
  AiInterviewQuestion,
} from "../../../types"



// ─── Types ────────────────────────────────────────────────────────────────────

interface ResumeAnalysis {
  matchScore: number
  missingKeywords: string[]
  suggestions: string[]
}

// ─── Label Maps ───────────────────────────────────────────────────────────────

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  ASSIGNMENT: "Assignment",
  OFFER: "Offer",
  REJECTED: "Rejected",
}

const STATUS_COLORS: Record<ApplicationStatus, string> = {
  APPLIED: "bg-blue-100 text-blue-700 border-blue-200",
  SCREENING: "bg-yellow-100 text-yellow-700 border-yellow-200",
  INTERVIEW: "bg-purple-100 text-purple-700 border-purple-200",
  ASSIGNMENT: "bg-orange-100 text-orange-700 border-orange-200",
  OFFER: "bg-green-100 text-green-700 border-green-200",
  REJECTED: "bg-red-100 text-red-700 border-red-200",
}

const SOURCE_LABELS: Record<string, string> = {
  LINKED_IN: "LinkedIn",
  NAUKARI: "Naukri",
  REFERAL: "Referral",
  COLDEMAIL: "Cold Email",
  SOCIAL_MEDIA: "Social Media",
  OTHER_JOB_APPS: "Other",
}

const ALL_STATUSES: ApplicationStatus[] = [
  "APPLIED",
  "SCREENING",
  "INTERVIEW",
  "ASSIGNMENT",
  "OFFER",
  "REJECTED",
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ApplicationDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { getToken } = useAuth()

  // ── Core application state ──
  const [application, setApplication] = useState<Application | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // ── Notes state ──
  const [notes, setNotes] = useState("")
  const [savingNotes, setSavingNotes] = useState(false)

  // ── Status state ──
  const [updatingStatus, setUpdatingStatus] = useState(false)

  // ── Delete state ──
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleting, setDeleting] = useState(false)

  // ── Resume analysis state ──
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null)
  const [analyzingResume, setAnalyzingResume] = useState(false)
  const [analysisError, setAnalysisError] = useState<string | null>(null)

  // ── Interview prep state ──
  const [interviews, setInterviews] = useState<AiInterview[]>([])
  const [generatingPrep, setGeneratingPrep] = useState(false)
  const [prepError, setPrepError] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [savingAnswers, setSavingAnswers] = useState(false)
  const [answersSaved, setAnswersSaved] = useState(false)

  // ── Reminder state ──
  const [reminderDate, setReminderDate] = useState("")
  const [reminderNotes, setReminderNotes] = useState("")
  const [savingReminder, setSavingReminder] = useState(false)
  const [reminderSaved, setReminderSaved] = useState(false)
  const [reminderError, setReminderError] = useState<string | null>(null)

  // ─── Mount: load application + existing interview answers ─────────────────

  useEffect(() => {
    if (!id) return

    const load = async () => {
      try {
        const token = await getToken()
        if (!token) return

        // Parallel fetch — application data and any existing interview answers
        const [appData, answersData] = await Promise.all([
          getApplication(token, id),
          getAnswers(token, id).catch(() => ({ interviews: [] })),
          // getAnswers can 404 if no interviews exist yet — treat that as empty
        ])

        const app: Application = appData.application
        setApplication(app)
        setNotes(app.notes ?? "")

        // If interview questions already exist, populate them
        if (answersData.interviews && answersData.interviews.length > 0) {
          setInterviews(answersData.interviews)

          // Pre-populate answers map from saved answers
          const savedAnswers: Record<string, string> = {}
          answersData.interviews.forEach((interview: AiInterview) => {
            interview.questions.forEach((q: AiInterviewQuestion) => {
              savedAnswers[q.id] = q.userAnswer ?? ""
            })
          })
          setAnswers(savedAnswers)
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to load application")
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [id, getToken])

  // ─── Status update ────────────────────────────────────────────────────────

  const handleStatusChange = async (newStatus: ApplicationStatus) => {
    if (!application || updatingStatus || newStatus === application.status) return

    setUpdatingStatus(true)
    try {
      const token = await getToken()
      if (!token) return
      const data = await updateApplication(token, id, { status: newStatus })
      setApplication(data.application)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update status")
    } finally {
      setUpdatingStatus(false)
    }
  }

  // ─── Notes save ───────────────────────────────────────────────────────────

  const handleSaveNotes = async () => {
    if (!application || savingNotes) return

    setSavingNotes(true)
    try {
      const token = await getToken()
      if (!token) return
      const data = await updateApplication(token, id, { notes })
      setApplication(data.application)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to save notes")
    } finally {
      setSavingNotes(false)
    }
  }

  // ─── Delete ───────────────────────────────────────────────────────────────

  const handleDelete = async () => {
    setDeleting(true)
    try {
      const token = await getToken()
      if (!token) return
      await deleteApplication(token, id)
      router.push("/applications")
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to delete application")
      setDeleting(false)
      setConfirmDelete(false)
    }
  }

  // ─── Resume Analysis ──────────────────────────────────────────────────────

  const handleAnalyzeResume = async () => {
    if (!application) return

    // Client-side pre-check — no point calling the API without a JD
    if (!application.jobDescription) {
      setAnalysisError("Add a job description to this application first.")
      return
    }

    setAnalyzingResume(true)
    setAnalysis(null)
    setAnalysisError(null)

    try {
      const token = await getToken()
      if (!token) return
      const data = await analyzeResume(token, id)
      setAnalysis(data.analysis)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Analysis failed"
      // Surface the backend's specific error messages clearly
      if (message.toLowerCase().includes("resume")) {
        setAnalysisError("No resume uploaded. Upload one from your profile page.")
      } else {
        setAnalysisError(message)
      }
    } finally {
      setAnalyzingResume(false)
    }
  }

  // ─── Interview Prep ───────────────────────────────────────────────────────

  const handleGenerateInterviewPrep = async () => {
    setGeneratingPrep(true)
    setPrepError(null)

    try {
      const token = await getToken()
      if (!token) return
      const data = await generateInterviewPrep(token, id)

      // Backend returns { interviewPrep: { interviewId, questions } }
      // We need to shape this into AiInterview format for our state
      const newInterview: AiInterview = {
        id: data.interviewPrep.interviewId,
        applicationId: id,
        overallScore: null,
        overallFeedback: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        questions: data.interviewPrep.questions,
      }

      setInterviews([newInterview])

      // Initialize answers map for the new questions
      const freshAnswers: Record<string, string> = {}
      data.interviewPrep.questions.forEach((q: AiInterviewQuestion) => {
        freshAnswers[q.id] = q.userAnswer ?? ""
      })
      setAnswers(freshAnswers)
      setAnswersSaved(false)
    } catch (err: unknown) {
      setPrepError(err instanceof Error ? err.message : "Failed to generate questions")
    } finally {
      setGeneratingPrep(false)
    }
  }

  // ─── Save Answers ─────────────────────────────────────────────────────────

  const handleSaveAnswers = async () => {
    if (interviews.length === 0) return

    setSavingAnswers(true)
    setAnswersSaved(false)

    try {
      const token = await getToken()
      if (!token) return

      // Build the payload — one entry per question that has an answer
      const answersPayload = Object.entries(answers)
        .filter(([, answer]) => answer.trim() !== "")
        .map(([questionId, answer]) => ({ questionId, answer }))

      await saveAnswers(token, answersPayload)
      setAnswersSaved(true)
    } catch (err: unknown) {
      setPrepError(err instanceof Error ? err.message : "Failed to save answers")
    } finally {
      setSavingAnswers(false)
    }
  }

  // ─── Create Reminder ──────────────────────────────────────────────────────

  const handleCreateReminder = async () => {
    if (!reminderDate) {
      setReminderError("Please select a reminder date.")
      return
    }
  
    setSavingReminder(true)
    setReminderError(null)
    setReminderSaved(false)
  
    try {
      const token = await getToken()
      if (!token) return
      await createReminder(token, {
        applicationId: id,
        reminderDate,
        notes: reminderNotes.trim() || undefined,
      })
      setReminderSaved(true)
      setReminderDate("")
      setReminderNotes("")
    } catch (err: unknown) {
      setReminderError(err instanceof Error ? err.message : "Failed to set reminder")
    } finally {
      setSavingReminder(false)
    }
  }

  // ─── Render: loading / error ──────────────────────────────────────────────

  if (loading) {
    return (
      <div className="p-8 text-gray-500">Loading...</div>
    )
  }

  if (error && !application) {
    return (
      <div className="p-8 text-red-500">{error}</div>
    )
  }

  if (!application) {
    return (
      <div className="p-8 text-gray-500">Application not found.</div>
    )
  }

  const notesChanged = notes !== (application.notes ?? "")
  const currentQuestions = interviews.flatMap((i) => i.questions).sort(
    (a, b) => a.questionNumber - b.questionNumber
  )

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">

      {/* Back */}
      <Link
        href="/applications"
        className="text-sm text-gray-500 hover:text-gray-700"
      >
        ← Back to applications
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{application.companyName}</h1>
          <p className="text-gray-500 mt-1">{application.jobTitle}</p>
          <p className="text-sm text-gray-400 mt-1">
            {SOURCE_LABELS[application.source]} · {formatDate(application.dateApplied)}
          </p>
        </div>

        {/* Delete */}
        <div>
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Are you sure?</span>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="text-sm text-red-600 font-medium hover:text-red-800 disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Yes, delete"}
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Inline error (for status/notes/delete errors that don't kill the page) */}
      {error && application && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      {/* Status */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Status</h2>
        <div className="flex flex-wrap gap-2">
          {ALL_STATUSES.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              disabled={updatingStatus}
              className={`px-3 py-1.5 rounded-full text-sm border font-medium transition-opacity disabled:opacity-50 ${
                application.status === status
                  ? STATUS_COLORS[status]
                  : "bg-gray-50 text-gray-400 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {STATUS_LABELS[status]}
            </button>
          ))}
        </div>
      </div>

      {/* History */}
      {application.statusHistory && application.statusHistory.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">History</h2>
          <div className="space-y-2">
            {[...application.statusHistory]
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((entry) => (
                <div key={entry.id} className="flex items-center justify-between text-sm">
                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${STATUS_COLORS[entry.status]}`}
                  >
                    {STATUS_LABELS[entry.status]}
                  </span>
                  <span className="text-gray-400">{formatDate(entry.createdAt)}</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Notes */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Add notes about this application..."
          className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleSaveNotes}
            disabled={!notesChanged || savingNotes}
            className="text-sm px-4 py-1.5 bg-gray-900 text-white rounded-lg disabled:opacity-40 hover:bg-gray-700"
          >
            {savingNotes ? "Saving..." : "Save notes"}
          </button>
        </div>
      </div>

      {/* Job Description */}
      {application.jobDescription && (
        <div>
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Job Description</h2>
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans bg-gray-50 rounded-lg p-4 border border-gray-100">
            {application.jobDescription}
          </pre>
        </div>
      )}

      {/* ── AI Features ────────────────────────────────────────────────────── */}
      <div>
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">AI Features</h2>

        {/* Resume Analysis */}
        <div className="border border-gray-100 rounded-xl p-5 mb-4">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Resume Analysis</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Compares your resume against the job description
              </p>
            </div>
            <button
              onClick={handleAnalyzeResume}
              disabled={analyzingResume}
              className="text-sm px-4 py-1.5 bg-gray-900 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700 whitespace-nowrap"
            >
              {analyzingResume ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>

          {/* Analysis error */}
          {analysisError && (
            <p className="mt-3 text-sm text-red-500">{analysisError}</p>
          )}

          {/* Analysis results */}
          {analysis && (
            <div className="mt-4 space-y-4">
              {/* Match Score */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">{analysis.matchScore}%</span>
                <span className="text-sm text-gray-500">match with this job description</span>
              </div>

              {/* Missing Keywords */}
              {analysis.missingKeywords.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Missing Keywords
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {analysis.missingKeywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2.5 py-0.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {analysis.suggestions.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Suggestions
                  </p>
                  <ul className="space-y-1.5">
                    {analysis.suggestions.map((suggestion, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-gray-300 mt-0.5">→</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Interview Prep */}
        <div className="border border-gray-100 rounded-xl p-5">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Interview Prep</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                AI-generated questions based on the job description
              </p>
            </div>
            <button
              onClick={handleGenerateInterviewPrep}
              disabled={generatingPrep}
              className="text-sm px-4 py-1.5 bg-gray-900 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700 whitespace-nowrap"
            >
              {generatingPrep
                ? "Generating..."
                : currentQuestions.length > 0
                ? "Regenerate"
                : "Generate Questions"}
            </button>
          </div>

          {/* Prep error */}
          {prepError && (
            <p className="mt-3 text-sm text-red-500">{prepError}</p>
          )}

          {/* Questions + Answer textareas */}
          {currentQuestions.length > 0 && (
            <div className="mt-4 space-y-5">
              {currentQuestions.map((q, index) => (
                <div key={q.id}>
                  <p className="text-sm font-medium text-gray-800 mb-1.5">
                    {index + 1}. {q.question}
                  </p>
                  <textarea
                    value={answers[q.id] ?? ""}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    rows={3}
                    placeholder="Write your answer..."
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
              ))}

              {/* Save answers */}
              <div className="flex items-center justify-between pt-1">
                {answersSaved && (
                  <span className="text-sm text-green-600">Answers saved.</span>
                )}
                <div className="ml-auto">
                  <button
                    onClick={handleSaveAnswers}
                    disabled={savingAnswers}
                    className="text-sm px-4 py-1.5 bg-gray-900 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700"
                  >
                    {savingAnswers ? "Saving..." : "Save Answers"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reminder */}
<div>
  <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Set Reminder</h2>
  <div className="border border-gray-100 rounded-xl p-5 space-y-3">
    <div>
      <label className="text-xs text-gray-500 mb-1 block">Reminder Date</label>
      <input
        type="date"
        value={reminderDate}
        onChange={(e) => {
          setReminderDate(e.target.value)
          setReminderSaved(false)
          setReminderError(null)
        }}
        min={new Date().toISOString().split("T")[0]}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
    </div>

    <div>
      <label className="text-xs text-gray-500 mb-1 block">Notes (optional)</label>
      <input
        type="text"
        value={reminderNotes}
        onChange={(e) => setReminderNotes(e.target.value)}
        placeholder="e.g. Follow up on application status"
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
    </div>

    <div className="flex items-center gap-3 pt-1">
      <button
        onClick={handleCreateReminder}
        disabled={savingReminder}
        className="text-sm px-4 py-1.5 bg-gray-900 text-white rounded-lg disabled:opacity-50 hover:bg-gray-700"
      >
        {savingReminder ? "Saving..." : "Set Reminder"}
      </button>
      {reminderSaved && (
        <span className="text-sm text-green-600">Reminder set.</span>
      )}
      {reminderError && (
        <span className="text-sm text-red-500">{reminderError}</span>
      )}
    </div>
  </div>
</div>
    </div>
  )
}
