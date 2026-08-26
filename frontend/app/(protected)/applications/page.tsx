"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getApplications } from "../../lib/api"
import { Application, ApplicationStatus, ApplicationSource } from "../../types"

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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function ApplicationsPage() {
  const { getToken } = useAuth()
  const router = useRouter()
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = await getToken()
        if (!token) return
        const data = await getApplications(token)
        setApplications(data.applications)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [])

  return (
    <div className="p-8 max-w-4xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-medium text-gray-900">Applications</h1>
          <p className="text-sm text-gray-500 mt-1">
            {loading ? "Loading..." : `${applications.length} total`}
          </p>
        </div>
        <button
          onClick={() => router.push("/applications/new")}
          className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          + New Application
        </button>
      </div>

      {/* States */}
      {loading && (
        <div className="text-sm text-gray-400">Loading your applications...</div>
      )}

      {error && (
        <div className="text-sm text-red-500">{error}</div>
      )}

      {!loading && !error && applications.length === 0 && (
        <div className="border border-gray-200 rounded-xl px-6 py-16 text-center">
          <p className="text-sm font-medium text-gray-900 mb-1">No applications yet</p>
          <p className="text-sm text-gray-400 mb-4">
            Start tracking by adding your first application.
          </p>
          <button
            onClick={() => router.push("/applications/new")}
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            + New Application
          </button>
        </div>
      )}

      {/* Applications list */}
      {!loading && !error && applications.length > 0 && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {applications.map((app, i) => (
            <div
              key={app.id}
              onClick={() => router.push(`/applications/${app.id}`)}
              className={`flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                i < applications.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              {/* Left — company + role */}
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-sm font-medium text-gray-900 truncate">
                  {app.companyName}
                </span>
                <span className="text-xs text-gray-500 truncate">{app.jobTitle}</span>
              </div>

              {/* Right — status, source, date */}
              <div className="flex items-center gap-4 shrink-0 ml-4">
                <span className="text-xs text-gray-400">
                  {SOURCE_LABELS[app.source]}
                </span>
                <span className="text-xs text-gray-400">
                  {formatDate(app.dateApplied)}
                </span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_STYLES[app.status]}`}
                >
                  {STATUS_LABELS[app.status]}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}