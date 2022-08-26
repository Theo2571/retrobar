import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminPhotoPage.module.scss";
import FileInput from '../../components/Admin/FileInput/FileInput';
import InputArea from '../../components/Admin/InputArea/InputArea';
import fileIcon from "../../assets/Admin/Photo/addImage.svg";
import FileInputLink from '../../components/Admin/FileInputLink/FileInputLink';

const AdminPhotoPage = () => {

  const title = "Фото";
  const addFileTitle = "Добавить картинки";
  const institutionName = "Название заведения";
  const partyName = "Название вечеринки";
  const job = "Фотограф";
  const date = "Дата";

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.photo_content}>
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

export default AdminPhotoPage;