"use client"

import { useAuth, useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { syncUser, getDashboardStats, getApplications } from "../../lib/api"
import { DashboardStats, Application, ApplicationStatus } from "../../types"

const QUOTE = {
  text: "Success is the sum of small efforts, repeated day in and day out.",
  author: "Robert Collier",
}

const PIPELINE_STAGES: ApplicationStatus[] = [
  "APPLIED",
  "SCREENING",
  "INTERVIEW",
  "ASSIGNMENT",
  "OFFER",
]

const STAGE_LABELS: Record<string, string> = {
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  ASSIGNMENT: "Assignment",
  OFFER: "Offer",
}

const STATUS_LABELS: Record<string, string> = {
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  ASSIGNMENT: "Assignment",
  OFFER: "Offer",
  REJECTED: "Rejected",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return "Today"
  if (days === 1) return "Yesterday"
  return `${days} days ago`
}

export default function DashboardPage() {
  const { getToken } = useAuth()
  const { user } = useUser()

  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const firstName = user?.firstName || user?.fullName?.split(" ")[0] || "there"

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  useEffect(() => {
    const init = async () => {
      try {
        const token = await getToken()
        if (!token) return
        await syncUser(token)
        const [statsData, appsData] = await Promise.all([
          getDashboardStats(token),
          getApplications(token),
        ])
        setStats(statsData.stats)
        setApplications(appsData.applications)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  // Pipeline counts — derived client-side
  const pipelineCounts = PIPELINE_STAGES.reduce((acc, stage) => {
    acc[stage] = applications.filter((a) => a.status === stage).length
    return acc
  }, {} as Record<string, number>)

  // Recent activity — flatten statusHistory, sort by date, take 5
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

  // Stale applications — Applied for 14+ days
  const staleApps = applications.filter((app) => {
    if (app.status !== "APPLIED") return false
    const days = Math.floor(
      (Date.now() - new Date(app.dateApplied).getTime()) / (1000 * 60 * 60 * 24)
    )
    return days >= 14
  })

  return (
    <div className="p-8 max-w-4xl">

      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-xl font-medium text-gray-900">Hello, {firstName}</h1>
        <p className="text-sm text-gray-500 mt-1">Here's your job search status for today.</p>
      </div>

      {/* Quote */}
      <div className="border-l-2 border-gray-200 pl-4 mb-8">
        <p className="text-sm text-gray-500 italic">"{QUOTE.text}"</p>
        <p className="text-xs text-gray-400 mt-1">— {QUOTE.author}</p>
      </div>

      <hr className="border-gray-100 mb-8" />

      {/* Brief */}
      <div className="mb-8">
        <p className="text-xs text-gray-400 mb-2">{today}</p>
        {loading ? (
          <p className="text-sm text-gray-400">Loading your status...</p>
        ) : error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          <p className="text-sm text-gray-500">
            You have{" "}
            <span className="font-medium text-gray-900">
              {stats?.totalApplications ?? 0} applications
            </span>{" "}
            tracked —{" "}
            <span className="font-medium text-gray-900">
              {staleApps.length} {staleApps.length === 1 ? "has" : "have"}
            </span>{" "}
            had no update in 14+ days.
          </p>
        )}
      </div>

      {/* Pipeline strip */}
      <div className="mb-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Pipeline</p>
        <div className="flex border border-gray-200 rounded-xl overflow-hidden">
          {PIPELINE_STAGES.map((stage, i) => (
            <div
              key={stage}
              className={`flex-1 px-4 py-4 ${i < PIPELINE_STAGES.length - 1 ? "border-r border-gray-200" : ""}`}
            >
              <div className={`text-2xl font-medium mb-1 ${loading ? "text-gray-300" : pipelineCounts[stage] > 0 ? "text-gray-900" : "text-gray-300"}`}>
                {loading ? "—" : pipelineCounts[stage]}
              </div>
              <div className="text-xs text-gray-400">{STAGE_LABELS[stage]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom two columns */}
      <div className="grid grid-cols-2 gap-4">

        {/* Needs attention */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-baseline justify-between px-4 py-3 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-900">Needs attention</span>
            <span className="text-xs text-gray-400">No update in 14+ days</span>
          </div>
          {loading ? (
            <div className="px-4 py-6 text-sm text-gray-400">Loading...</div>
          ) : staleApps.length === 0 ? (
            <div className="px-4 py-6 text-sm text-gray-400 text-center">All applications are active.</div>
          ) : (
            staleApps.map((app, i) => (
              <div
                key={app.id}
                className={`flex items-center justify-between px-4 py-3 ${i < staleApps.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-gray-900">{app.companyName}</span>
                  <span className="text-xs text-gray-400">{app.jobTitle}</span>
                </div>
                <span className="text-xs text-orange-500 shrink-0 ml-4">
                  {Math.floor((Date.now() - new Date(app.dateApplied).getTime()) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
            ))
          )}
        </div>

        {/* Recent activity */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-baseline justify-between px-4 py-3 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-900">Recent activity</span>
            <span className="text-xs text-gray-400">Last 5 status changes</span>
          </div>
          {loading ? (
            <div className="px-4 py-6 text-sm text-gray-400">Loading...</div>
          ) : recentActivity.length === 0 ? (
            <div className="px-4 py-6 text-sm text-gray-400 text-center">No activity yet.</div>
          ) : (
            recentActivity.map((entry, i) => (
              <div
                key={entry.id}
                className={`flex items-start gap-3 px-4 py-3 ${i < recentActivity.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    {entry.companyName}{" "}
                    <span className="text-gray-400">moved to</span>{" "}
                    {STATUS_LABELS[entry.status]}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{timeAgo(entry.createdAt)}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}