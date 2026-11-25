"use client";
import NavbarDashboard from "@/components/NavbarDashboard";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const username = session?.user?.name || "User";
  return (
    <>
      <NavbarDashboard />
      <h1>Welcome {username}!</h1>
    </>
  );
}
