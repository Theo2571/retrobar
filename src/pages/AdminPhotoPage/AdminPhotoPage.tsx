import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminPhotoPage.module.scss";

const AdminPhotoPage = () => {
  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div>
        Content
      </div>
    </div>
  );
};

export default AdminPhotoPage;