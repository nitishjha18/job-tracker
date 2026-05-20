"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

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
      const token = await getToken();
      console.log("Clerk token:", token);
    };
    fetchToken();
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-2xl font-bold">Welcome, {user?.firstName}!</h1>
        <p>Check your console and Supabase to verify sync.</p>
        <UserButton />
      </div>
    </div>
  );
}
