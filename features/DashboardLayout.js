"use client"
import React, { useEffect,useState } from "react";
import Sidebar from "./Sidebar";
import styles from "./dashboard.module.css";
import { useRouter, usePathname } from "next/navigation";
const DashboardLayout = ({ children }) => {
  const [header, setHeader] = useState("Home");
  const router = useRouter();
  const pathname = usePathname()
  useEffect(() => {
    switch (pathname) {
      case "/":
        setHeader("Home");
        break;
      case "/linkedlist":
        setHeader("LinkedList");
        break;

      default:
        break;
    }
  }, [pathname]);
  return (
    <div className={styles.dashboardWrapper}>
      <Sidebar />
      <header>{header}</header>
      <div className={styles.pageContainer}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
