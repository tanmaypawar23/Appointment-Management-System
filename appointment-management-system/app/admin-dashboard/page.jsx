import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import Footer from "@/components/Footer";
import NavbarDashboard from "@/components/NavbarDashboard";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <>
      <NavbarDashboard />

      <h1>Welcome Admin!</h1>

      <Footer />
    </>
  );
}
