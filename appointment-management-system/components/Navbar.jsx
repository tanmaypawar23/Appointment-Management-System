"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../style/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

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

      <div className={styles.navbarMenu}>
        <Link href="/" className={styles.navbarMenulink}>
          Home
        </Link>

        <Link href="/" className={styles.navbarMenulink}>
          Appointment
        </Link>

        <Link href="/" className={styles.navbarMenulink}>
          About Us
        </Link>

        <Link href="/" className={styles.navbarMenulink}>
          Support
        </Link>
      </div>

      <div className={styles.navbar_button}>
        <button
          className={styles.login_buttton}
          onClick={() => router.push("/")}
        >
          Login
        </button>

        <button
          className={styles.signup_buttton}
          onClick={() => router.push("/")}
        >
          SignUp
        </button>
      </div>
    </nav>
  );
}
