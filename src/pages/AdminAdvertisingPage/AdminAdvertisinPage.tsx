import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminAdvertisingPage.module.scss";

const AdminAdvertisinPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
    </div>
  );
};

export default AdminAdvertisinPage;