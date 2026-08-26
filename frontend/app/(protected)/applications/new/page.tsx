"use client"

import { useAuth } from "@clerk/nextjs"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createApplication } from "../../../lib/api"
import { ApplicationSource } from "../../../types"

const SOURCES: { value: ApplicationSource; label: string }[] = [
  { value: "LINKED_IN", label: "LinkedIn" },
  { value: "NAUKARI", label: "Naukri" },
  { value: "REFERAL", label: "Referral" },
  { value: "COLDEMAIL", label: "Cold Email" },
  { value: "SOCIAL_MEDIA", label: "Social Media" },
  { value: "OTHER_JOB_APPS", label: "Other" },
]

export default function NewApplicationPage() {
  const { getToken } = useAuth()
  const router = useRouter()

  const [form, setForm] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    source: "LINKED_IN" as ApplicationSource,
    notes: "",
    dateApplied: new Date().toISOString().split("T")[0],
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.companyName || !form.jobTitle || !form.source) {
      setError("Company name, job title, and source are required.")
      return
    }
    try {
      setSubmitting(true)
      setError(null)
      const token = await getToken()
      if (!token) return
      const data = await createApplication(token, form)
      router.push(`/applications/${data.application.id}`)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-8 max-w-2xl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-medium text-gray-900">New Application</h1>
        <p className="text-sm text-gray-500 mt-1">Track a job you've applied to.</p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-5">

        {/* Company name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500">Company name <span className="text-red-400">*</span></label>
          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="e.g. Google"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Job title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500">Job title <span className="text-red-400">*</span></label>
          <input
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Backend Engineer"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Source */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500">Source <span className="text-red-400">*</span></label>
          <select
            name="source"
            value={form.source}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors bg-white"
          >
            {SOURCES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Date applied */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500">Date applied</label>
          <input
            type="date"
            name="dateApplied"
            value={form.dateApplied}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Job description */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500">Job description</label>
          <textarea
            name="jobDescription"
            value={form.jobDescription}
            onChange={handleChange}
            placeholder="Paste the job description here..."
            rows={5}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors resize-none"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-gray-500">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Any notes about this application..."
            rows={3}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 transition-colors resize-none"
          />
        </div>

        {/* Error */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="text-sm bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {submitting ? "Saving..." : "Save Application"}
          </button>
          <button
            onClick={() => router.back()}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}