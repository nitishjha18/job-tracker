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

  const sync = async () => {
  try {
    const token = await getToken()
    console.log("Token:", token) // add this
    if (token) await syncUser(token)
  } catch (err) {
    console.error("User sync failed:", err)
  }
}

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}