"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { getProfile, updateProfile, uploadResume } from "../../lib/api"
import { User } from "../../types"

export default function ProfilePage() {
  const { getToken } = useAuth()

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

  useEffect(() => {
    const load = async () => {
      try {
        const token = await getToken()
        const data = await getProfile(token!)
        setProfile(data.user)
        setName(data.user.name ?? "")
        setTargetRole(data.user.targetRole ?? "")
        setExperienceLevel(data.user.experienceLevel ?? "")
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [getToken])

  const handleSaveProfile = async () => {
    setProfileError(null)
    setProfileSaved(false)
    setSavingProfile(true)
    try {
      const token = await getToken()
      const data = await updateProfile(token!, { name, targetRole, experienceLevel })
      setProfile(data.user)
      setProfileSaved(true)
    } catch (err: any) {
      setProfileError(err.message)
    } finally {
      setSavingProfile(false)
    }
  }

  const handleUploadResume = async () => {
    setUploadError(null)
    setUploadSuccess(false)

    if (!selectedFile) {
      setUploadError("Please select a PDF file.")
      return
    }
    if (selectedFile.type !== "application/pdf") {
      setUploadError("Only PDF files are allowed.")
      return
    }

    setUploadingResume(true)
    try {
      const token = await getToken()
      const data = await uploadResume(token!, selectedFile)
      setProfile((prev) =>
        prev ? { ...prev, resumeUrl: data.resumeUrl, resumeText: data.resumeText } : prev
      )
      setSelectedFile(null)
      setUploadSuccess(true)
    } catch (err: any) {
      setUploadError(err.message)
    } finally {
      setUploadingResume(false)
    }
  }

  if (loading) {
    return (
      <div className="p-8 text-gray-500 text-sm">Loading profile...</div>
    )
  }

  if (error) {
    return (
      <div className="p-8 text-red-500 text-sm">{error}</div>
    )
  }

  if (!profile) {
    return (
      <div className="p-8 text-gray-500 text-sm">Profile not found.</div>
    )
  }

  return (
    <div className="p-8 max-w-2xl space-y-10">

      {/* Profile Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Profile</h2>
        <p className="text-sm text-gray-500 mb-6">
          Your name and job search preferences.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Role
            </label>
            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Backend Engineer"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <input
              type="text"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              placeholder="e.g. Fresher"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="pt-2">
            <button
              onClick={handleSaveProfile}
              disabled={savingProfile}
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 disabled:opacity-50"
            >
              {savingProfile ? "Saving..." : "Save Profile"}
            </button>
            {profileSaved && (
              <p className="mt-2 text-sm text-green-600">Profile saved.</p>
            )}
            {profileError && (
              <p className="mt-2 text-sm text-red-500">{profileError}</p>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100" />

      {/* Resume Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Resume</h2>
        <p className="text-sm text-gray-500 mb-6">
          Upload your resume once. It will be used for AI resume analysis on any application.
        </p>

        {/* Current resume state */}
        {profile.resumeUrl ? (
  <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
    <span className="text-green-600 text-lg">✓</span>
    <div>
      <p className="text-sm font-medium text-green-800">Resume uploaded</p>
      <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-green-700 underline">
        View current resume
      </a>
    </div>
  </div>
) : (
  <div className="mb-6 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
    <p className="text-sm text-gray-500">No resume uploaded yet.</p>
    <p className="text-xs text-gray-400 mt-1">
      Upload a resume to unlock AI resume analysis on your applications.
    </p>
  </div>
)}

        {/* Upload controls */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {profile.resumeUrl ? "Replace resume" : "Upload resume"}
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                setUploadError(null)
                setUploadSuccess(false)
                setSelectedFile(e.target.files?.[0] ?? null)
              }}
              className="block text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>

          <button
            onClick={handleUploadResume}
            disabled={uploadingResume}
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 disabled:opacity-50"
          >
            {uploadingResume ? "Uploading..." : "Upload"}
          </button>

          {uploadSuccess && (
            <p className="text-sm text-green-600">Resume uploaded successfully.</p>
          )}
          {uploadError && (
            <p className="text-sm text-red-500">{uploadError}</p>
          )}
        </div>
      </div>

    </div>
  )
}