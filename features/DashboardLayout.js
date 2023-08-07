import React from 'react';
import Sidebar from './Sidebar';
import styles from "./dashboard.module.css"
const DashboardLayout = ({children}) => {
    return (
      <div className={styles.dashboardWrapper}>
        <Sidebar />
        <header>Home</header>
        <div className={styles.pageContainer}>{children}</div>
      </div>
    );
};

export default DashboardLayout;