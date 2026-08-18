"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const [token, setToken] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      fetch("http://localhost:5000/api/user/sync", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => console.log("User synced:", data))
        .catch((err) => console.error("Sync failed:", err));
    }
  }, [isLoaded, user]);

  useEffect(() => {
    const fetchToken = async () => {
      const t = await getToken();
      if (t) setToken(t);
    };

    fetchToken();
    const interval = setInterval(fetchToken, 50000);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <div className="flex items-center gap-4">
        <UserButton />
        <h1 className="text-2xl font-bold">Welcome, {user?.firstName}!</h1>
      </div>

      {token && (
        <div className="w-full max-w-2xl bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Bearer Token (Dev Only)</span>
            <button
              onClick={handleCopy}
              className="text-sm px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-green-400 text-xs break-all font-mono">
            {token}
          </p>
        </div>
      )}
    </div>
  );
}