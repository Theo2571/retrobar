import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminContactsPage.module.scss";

const AdminContactsPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
    </div>
  );
};

export default AdminContactsPage;