import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminVideoPage.module.scss";

const AdminVideoPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
    </div>
  );
};

export default AdminVideoPage;