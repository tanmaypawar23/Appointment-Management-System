import NavbarDashboard from "@/components/NavbarDashboard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import styles from "../style/DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboardPage}>
      <NavbarDashboard />

      <div className={styles.dashboardBody}>
        <Sidebar />

        <main className={styles.dashboardContent}>{children}</main>
      </div>
    </div>
  );
}
