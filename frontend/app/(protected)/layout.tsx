// app/(protected)/layout.tsx
"use client"

import { useEffect } from "react"
import { useAuth } from "@clerk/nextjs"
import Sidebar from "../components/Sidebar"
import { syncUser } from "../lib/api"

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { getToken, isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return

    const sync = async () => {
      try {
        const token = await getToken()
        if (token) await syncUser(token)
      } catch (err) {
        console.error("User sync failed:", err)
      }
    }

    sync()
  }, [isLoaded, isSignedIn])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 pt-3 pr-3 pb-3">
        <main className="min-h-full bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}