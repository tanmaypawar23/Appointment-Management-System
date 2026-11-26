"use client";

import { useSession } from "next-auth/react";
import DashboardLayout from "@/components/DashboardLayout";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const username = session?.user?.name || "User";

  return (
    <DashboardLayout>
      <h1>Hello {status === "loading" ? "..." : username}!</h1>
      <h1>Welcome to Dashboard!!</h1>
    </DashboardLayout>
  );
}
