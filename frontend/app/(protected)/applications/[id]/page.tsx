"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { getApplication, updateApplication, deleteApplication } from "../../../lib/api"
import { ApplicationSource } from "../../../types"

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  APPLIED: "bg-blue-50 text-blue-700",
  SCREENING: "bg-yellow-50 text-yellow-700",
  INTERVIEW: "bg-purple-50 text-purple-700",
  ASSIGNMENT: "bg-orange-50 text-orange-700",
  OFFER: "bg-green-50 text-green-700",
  REJECTED: "bg-red-50 text-red-700",
}

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

const ALL_STATUSES: ApplicationStatus[] = [
  "APPLIED",
  "SCREENING",
  "INTERVIEW",
  "ASSIGNMENT",
  "OFFER",
  "REJECTED",
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function ApplicationDetailPage() {
  const { getToken } = useAuth()
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [application, setApplication] = useState<Application | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notes, setNotes] = useState("")
  const [savingNotes, setSavingNotes] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = await getToken()
        if (!token) return
        const data = await getApplication(token, id)
        setApplication(data.application)
        setNotes(data.application.notes ?? "")
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  const handleStatusChange = async (newStatus: ApplicationStatus) => {
    if (!application) return
    try {
      setUpdatingStatus(true)
      const token = await getToken()
      if (!token) return
      const data = await updateApplication(token, id, { status: newStatus })
      setApplication(data.application)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setUpdatingStatus(false)
    }
  }

  const handleSaveNotes = async () => {
    try {
      setSavingNotes(true)
      const token = await getToken()
      if (!token) return
      const data = await updateApplication(token, id, { notes })
      setApplication(data.application)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSavingNotes(false)
    }
  }

  const handleDelete = async () => {
    try {
      setDeleting(true)
      const token = await getToken()
      if (!token) return
      await deleteApplication(token, id)
      router.push("/applications")
    } catch (err: any) {
      setError(err.message)
      setDeleting(false)
    }
  }

  if (loading) return <div className="p-8 text-sm text-gray-400">Loading...</div>
  if (error) return <div className="p-8 text-sm text-red-500">{error}</div>
  if (!application) return <div className="p-8 text-sm text-gray-400">Application not found.</div>

  return (
    <div className="p-8 max-w-3xl">

      <button
        onClick={() => router.push("/applications")}
        className="text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6 flex items-center gap-1"
        >
          ← Back to applications
        
      </button>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-xl font-medium text-gray-900">{application.companyName}</h1>
          <p className="text-sm text-gray-500 mt-1">{application.jobTitle}</p>
        </div>
        <div className="flex items-center gap-3">
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="text-sm text-red-400 hover:text-red-600 transition-colors"
            >
              Delete
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Are you sure?</span>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Yes, delete"}
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs text-gray-400">
          {SOURCE_LABELS[application.source]}
        </span>
        <span className="text-xs text-gray-300">·</span>
        <span className="text-xs text-gray-400">
          Applied {formatDate(application.dateApplied)}
        </span>
      </div>

      {/* Status */}
      <div className="border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Status</p>
        <div className="flex flex-wrap gap-2">
          {ALL_STATUSES.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              disabled={updatingStatus}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors disabled:opacity-50 ${
                application.status === status
                  ? STATUS_STYLES[status]
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              {STATUS_LABELS[status]}
            </button>
          ))}
        </div>
      </div>

      {/* Status history */}
      <div className="border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">History</p>
        <div className="flex flex-col gap-3">
          {application.statusHistory && application.statusHistory.length > 0 ? (
            [...application.statusHistory]
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .map((entry) => (
                <div key={entry.id} className="flex items-center justify-between">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_STYLES[entry.status]}`}>
                    {STATUS_LABELS[entry.status]}
                  </span>
                  <span className="text-xs text-gray-400">{formatDate(entry.createdAt)}</span>
                </div>
              ))
          ) : (
            <p className="text-sm text-gray-400">No history yet.</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div className="border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Notes</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Add notes about this application..."
          className="w-full text-sm text-gray-900 outline-none resize-none placeholder:text-gray-300"
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={handleSaveNotes}
            disabled={savingNotes || notes === (application.notes ?? "")}
            className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {savingNotes ? "Saving..." : "Save notes"}
          </button>
        </div>
      </div>

      {/* Job description */}
      {application.jobDescription && (
        <div className="border border-gray-200 rounded-xl p-5 mb-5">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Job Description</p>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
            {application.jobDescription}
          </p>
        </div>
      )}

      {/* AI features — stubs */}
      <div className="border border-gray-200 rounded-xl p-5">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">AI Features</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Resume Analysis</p>
              <p className="text-xs text-gray-400 mt-0.5">Compare your resume against this job description</p>
            </div>
            <button disabled className="text-xs bg-gray-100 text-gray-400 px-3 py-1.5 rounded-lg cursor-not-allowed">
              Coming soon
            </button>
          </div>
          <hr className="border-gray-100" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Interview Prep</p>
              <p className="text-xs text-gray-400 mt-0.5">Generate likely interview questions for this role</p>
            </div>
            <button disabled className="text-xs bg-gray-100 text-gray-400 px-3 py-1.5 rounded-lg cursor-not-allowed">
              Coming soon
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}