"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../style/Navbar.module.css";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { useSession } from "next-auth/react";

export default function NavbarDashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const username = session?.user?.name || "User";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/" className={styles.logoLink}>
          <img src="/logo.png" alt="logo" className={styles.logo} />

          <img
            src="/logoName.png"
            alt="Logo Name"
            className={styles.logoName}
          />
        </Link>
      </div>

      <div className={styles.navbar_button}>
        <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
        <div>
          <h1>{status === "loading" ? "Loading..." : username}</h1>
        </div>
        <Tooltip title="LogOut">
          <button
            className={styles.signup_buttton}
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogoutIcon fontSize="medium" />
          </button>
        </Tooltip>
      </div>
    </nav>
  );
}
