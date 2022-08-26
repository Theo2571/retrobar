import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import FileInput from '../../components/Admin/FileInput/FileInput';
import styles from "./AdminAdvertisingPage.module.scss";
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import TextInput from '../../components/Admin/InputArea/TextInput/TextInput';
import Textarea from '../../components/Admin/Textarea/Textarea';
import PhoneInput from '../../components/Admin/PhoneInput/PhoneInput';
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';
import { Link } from 'react-router-dom';
import { ADMIN_ADVERTISING_PAGE, ADMIN_POSTER_PAGE } from '../../consts/consts';

const AdminAdvertisinPage = () => {

  const title = "Реклама/";
  const addFileTitle = "Добавить картинку";
  const inputTitle = "Название";
  const textareaTitle= "Описание";
  const phoneInputTitle= "Привязать номер";

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.advertising_content}>
        <div className={styles.content_fileInput}>
          <div className={styles.fileInputTitleWrapper}>
            <Link to={ADMIN_ADVERTISING_PAGE} className={styles.fileInputTitle}>{title}<Link to={ADMIN_POSTER_PAGE} className={styles.fileInputTitle2}> Афиша</Link></Link>
          </div>
          <FileInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
        </div>
        <div className={styles.content_textInputs}>
          <TextInput title={inputTitle} />
          <Textarea title={textareaTitle} />
          <PhoneInput title={phoneInputTitle} />
          <PublishBtn />
        </div>
      </div>
    </div>
  );
};

export default AdminAdvertisinPage;