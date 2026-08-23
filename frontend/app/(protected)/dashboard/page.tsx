"use client"

import { useAuth, useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { syncUser, getDashboardStats } from "../../lib/api"
import { DashboardStats } from "../../types"

const QUOTE = {
  text: "Success is the sum of small efforts, repeated day in and day out.",
  author: "Robert Collier",
}

const PIPELINE_STAGES = [
  "APPLIED",
  "SCREENING",
  "INTERVIEW",
  "ASSIGNMENT",
  "OFFER",
] as const

const STAGE_LABELS: Record<string, string> = {
  APPLIED: "Applied",
  SCREENING: "Screening",
  INTERVIEW: "Interview",
  ASSIGNMENT: "Assignment",
  OFFER: "Offer",
}

const ACTIVE_STAGES = ["SCREENING", "INTERVIEW"]

export default function DashboardPage() {
  const { getToken } = useAuth()
  const { user } = useUser()
  const [stats, setStats] = useState<DashboardStats | null>(null)
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
        const data = await getDashboardStats(token)
        setStats(data.stats)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

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
              {stats?.staleApplications ?? 0} applications
            </span>{" "}
            with no update in 14+ days.
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
              <div
                className={`text-2xl font-medium mb-1 ${
                  ACTIVE_STAGES.includes(stage) ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {loading ? "—" : "0"}
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
          ) : stats?.staleApplications === 0 ? (
            <div className="px-4 py-6 text-sm text-gray-400">All applications are active.</div>
          ) : (
            <div className="px-4 py-4 text-sm text-gray-500">
              {stats?.staleApplications} stale application{stats?.staleApplications !== 1 ? "s" : ""}.{" "}
              <span className="text-gray-400">Full list coming with applications page.</span>
            </div>
          )}
        </div>

        {/* Recent activity */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-baseline justify-between px-4 py-3 border-b border-gray-200">
            <span className="text-sm font-medium text-gray-900">Recent activity</span>
            <span className="text-xs text-gray-400">Last 5 status changes</span>
          </div>
          <div className="px-4 py-4 text-sm text-gray-400">
            Activity feed coming once applications are loaded.
          </div>
        </div>

      </div>
    </div>
  )
}