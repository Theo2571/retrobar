import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import styles from "./AdminPhotoPage.module.scss";
import imageIcon from "../../assets/Admin/Photo/addImage.svg";
import linkIcon from "../../assets/Admin/Photo/link.svg";

const AdminPhotoPage = () => {

  const marks = [
    {
      value: 0,
      label: 'x1',
    },
    {
      value: 50,
      label: 'x2',
    },
    {
      value: 100,
      label: 'x3',
    },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <div className={styles.main_container}>
      <AdminNavbar />
      <div className={styles.photo_content}>
        <div className={styles.content_imgInput}>
          <div className={styles.imgInputTitleWrapper}>
            <h2 className={styles.imgInputTitle}>Фото</h2>
          </div>
          <div className={styles.imgInputWrapper}>
          <input 
            name='file' 
            type="file" 
            id="input_img" 
            className={styles.imgInput} 
            multiple/>
          <label htmlFor="input_img" className={styles.imgInputBtn}>
            <span className={styles.imgInputIconWrapper}>
              <img className={styles.imgInputIcon} 
              src={imageIcon}
              alt='Выбрать файл' 
              width={100} 
              />
            </span>
            <span className={styles.imgInputBtnText}>
              Добавить картнки
            </span>
          </label>
          </div>
          <div className={styles.imgInputLinkWrapper} >
            <h4 className={styles.imgInputLinkTitle}>Вставить ссылку<img className={styles.imgInputLinkIcon} src={linkIcon} /></h4>
            <input type="text" className={styles.imgInputLink} />
          </div>
        </div>
        <div className={styles.content_textInputs}>
          <div className={styles.textInputs}>
            <h2 className={styles.textInputsTitleFirst}>Название заведения</h2>
            <input type="text" className={styles.textInput} />
          </div>
          <div className={styles.textInputs}>
            <h2 className={styles.textInputsTitle}>Название вечеринки</h2>
            <input type="text" className={styles.textInput} />
          </div>
          <div className={styles.textInputs}>
            <h2 className={styles.textInputsTitle}>Фотограф</h2>
            <input type="text" className={styles.textInput} />
          </div>
          <div className={styles.textInputs}>
            <h2 className={styles.textInputsTitle}>Дата</h2>
            <input type="text" className={styles.textInput} />
          </div>
          <div className={styles.viewsInputWrapper}>
            <h2 className={styles.viewsInputTitle}>Просмотры</h2>
            <input className={styles.viewsInput} type="range" min={1} max={3}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPhotoPage;