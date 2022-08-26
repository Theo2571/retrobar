import React from 'react';
import styles from "./FileInputLink.module.scss"
import linkIcon from "../../../assets/Admin/Photo/link.svg";

const FileInputLink = () => {
  return (
    <div className={styles.fileInputLinkWrapper} >
      <h4 className={styles.fileInputLinkTitle}>Вставить ссылку<img className={styles.fileInputLinkIcon} src={linkIcon} /></h4>
      <input type="text" className={styles.fileInputLink} />
    </div>
  );
};

export default FileInputLink;