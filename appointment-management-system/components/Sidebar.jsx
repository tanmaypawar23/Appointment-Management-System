"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../style/Sidebar.module.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`${styles.sidebar} ${
        open ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      <div className={styles.sidebarHeader}>
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close sidebar" : "Open sidebar"}
        >
          {open ? <CloseIcon /> : <DehazeIcon />}
        </button>

        {open && <h3>Menu</h3>}
      </div>

      {open && (
        <div className={styles.sidebarContent}>
          <Link href="/dashboard" className={styles.sidebarLink}>
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>

          <Link href="/dashboard" className={styles.sidebarLink}>
            <EventIcon />
            <span>Appointments</span>
          </Link>

          <Link href="/dashboard" className={styles.sidebarLink}>
            <SettingsIcon />
            <span>Settings</span>
          </Link>
        </div>
      )}
    </aside>
  );
}
