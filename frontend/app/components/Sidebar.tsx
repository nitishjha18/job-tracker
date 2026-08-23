// components/Sidebar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUser, useClerk } from "@clerk/nextjs"
import { LayoutDashboard, BriefcaseBusiness, User, LogOut, ChevronDown } from "lucide-react"

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
    <aside className="w-[220px] min-h-screen bg-gray-100 flex flex-col">

      {/* User Identity — top of sidebar like Linear */}
      <div className="px-3 py-3">
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 cursor-pointer transition-colors">
          {user?.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.firstName || "User"}
              className="w-6 h-6 rounded-full object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-violet-700 text-[11px] font-bold flex-shrink-0">
              {user?.firstName?.[0] ?? "U"}
            </div>
          )}
          <span className="text-[13px] font-medium text-gray-800 truncate flex-1">
            {user?.firstName} {user?.lastName}
          </span>
          <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-0.5 px-3 py-2 flex-1">
        {navLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <Icon
                size={16}
                className={isActive ? "text-gray-700" : "text-gray-400"}
              />
              {link.label}
            </Link>
          )
        })}
      </nav>

      {/* Sign Out — bottom, subtle */}
      <div className="px-3 py-3 border-t border-gray-100">
        <button
          onClick={() => signOut({ redirectUrl: "/sign-in" })}
          className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors w-full"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

    </aside>
  )
}