import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

import styles from "./layout.module.css";

export const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
