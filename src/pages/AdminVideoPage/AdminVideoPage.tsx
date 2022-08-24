import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import FileInput from '../../components/Admin/FileInput/FileInput';
import InputArea from '../../components/Admin/InputArea/InputArea';
import styles from "./AdminVideoPage.module.scss";
import fileIcon from "../../assets/Admin/VideoPage/addVideo.svg";
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';

const AdminVideoPage = () => {

  const title = "Видео";
  const addFileTitle = "Добавить видео";
  const institutionName = "Название заведения";
  const partyName = "Название вечеринки";
  const job = "Видеограф";
  const date = "Дата";

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.video_content}>
        <div className={styles.content_fileInput}>
          <div className={styles.fileInputTitleWrapper}>
            <h2 className={styles.fileInputTitle}>{title}</h2>
          </div>
          <FileInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
          <FileInputLink />
        </div>
        <InputArea institutionName={institutionName} partyName={partyName} job={job} date={date} />
      </div>
    </div>
  );
};

export default AdminVideoPage;