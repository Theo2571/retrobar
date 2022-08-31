import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminContactsPage.module.scss";
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import FileInput from '../../components/Admin/FileInput/FileInput';
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';
import TextInput from '../../components/Admin/InputArea/TextInput/TextInput';
import Textarea from '../../components/Admin/Textarea/Textarea';
import ContactsInputLink from '../../components/Admin/ContactsInputLink/ContactsInputLink';
import SocialsInput from '../../components/Admin/SocialsInput/SocialsInput';
import telegramIcon from "../../assets/Admin/ContactsPage/telegramIcon.svg";
import instagramIcon from "../../assets/Admin/ContactsPage/instagramIcon.svg";
import youtubeIcon from "../../assets/Admin/ContactsPage/youtubeIcon.svg";
import PublishBtn from '../../components/Admin/PublishBtn/PublishBtn';

const AdminContactsPage = () => {

  const title = "Контакты";
  const addFileTitle = "Добавить картинки";
  const textareaTitle = "О нас";
  const inputTitle = "Номер";
  const socialsTitle = "Социальные сети";
  const telegram = "Telegram";
  const instagram = "Instagram";
  const youtube = "YouTube";

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.contacts_content}>
        <div className={styles.content_fileInput}>
          <div className={styles.fileInputTitleWrapper}>
            <h2 className={styles.fileInputTitle}>{title}</h2>
          </div>
          <FileInput title={title} fileIcon={fileIcon} addFileTitle={addFileTitle} />
          <FileInputLink />
        </div>
        <div className={styles.content_textInputs}>
          <Textarea title={textareaTitle} />
          <TextInput title={inputTitle} />
          <TextInput title={inputTitle} />
          <ContactsInputLink />
        </div>
      </div>
      <div className={styles.contactsSocials}>
        <div className={styles.socialsTitleWrapper}>
          <h2 className={styles.socialsTitle}>{socialsTitle}</h2>
        </div>
        <div className={styles.socialsInputsWrapper}>
          <SocialsInput title={telegram} socialsIcon={telegramIcon} />
          <SocialsInput title={youtube} socialsIcon={youtubeIcon} />
          <SocialsInput title={instagram} socialsIcon={instagramIcon} />
          <PublishBtn />
        </div>
      </div>
    </div>
  );
};

export default AdminContactsPage;