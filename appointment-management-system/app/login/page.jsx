import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) {
    if (session.user.role === "admin") {
      redirect("/admin-dashboard");
    } else {
      redirect("/dashboard");
    }
  }
  return <LoginForm />;
}
