import React from 'react';

import styles from "./PublishBtn.module.scss";

const PublishBtn = () => {
  return (
    <div className={styles.publishBtnWrapper}>
      <button className={styles.publishBtn}>Опубликовать</button>
    </div>
  );
};

export default PublishBtn;