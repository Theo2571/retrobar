import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminEditPage.module.scss";

const AdminEditPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
    </div>
  );
};

export default AdminEditPage;