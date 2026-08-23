"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUser, useClerk } from "@clerk/nextjs"
import { LayoutDashboard, BriefcaseBusiness, User, LogOut } from "lucide-react"

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Applications",
    href: "/applications",
    icon: BriefcaseBusiness
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()
  const { signOut } = useClerk()

  return (
    <aside className="w-[220px] min-h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* App Name */}
      <div className="px-5 py-6 border-b border-gray-200">
        <span className="text-lg font-bold text-violet-700 tracking-tight">
          ApplynTrack
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
        {navLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-violet-100 text-violet-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon size={18} />
              {link.label}
            </Link>
          )
        })}
      </nav>

      {/* User + Sign Out */}
      <div className="px-3 py-4 border-t border-gray-200 flex flex-col gap-2">
        {/* User Info */}
        <div className="flex items-center gap-3 px-3 py-2">
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.firstName || "User"}
              className="w-7 h-7 rounded-full object-cover"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-violet-200 flex items-center justify-center text-violet-700 text-xs font-bold">
              {user?.firstName?.[0] ?? "U"}
            </div>
          )}
          <span className="text-sm text-gray-700 font-medium truncate">
            {user?.firstName} {user?.lastName}
          </span>
        </div>

        {/* Sign Out */}
        <button
          onClick={() => signOut({ redirectUrl: "/sign-in" })}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors w-full"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>

    </aside>
  )
}