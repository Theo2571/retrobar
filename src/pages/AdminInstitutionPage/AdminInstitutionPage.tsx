import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminInstitutionPage.module.scss";

const AdminInstitutionPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
    </div>
  );
};

export default AdminInstitutionPage;