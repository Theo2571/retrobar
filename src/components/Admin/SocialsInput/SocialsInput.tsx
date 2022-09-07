import React, {FC} from 'react';
import styles from "./SocialsInput.module.scss";

interface SocialsInputProps{
  title: string;
  socialsIcon: string;
}

const SocialsInput:FC <SocialsInputProps> = ({title, socialsIcon}) => {
  return (
    <div className={styles.socialsInputs}>
      <h2 className={styles.socialsInputsTitle}>{title}<img className={styles.socialsIcon} src={socialsIcon} alt="socials" /></h2>
      <input type="text" className={styles.socialsInput} />
    </div>
  );
};

export default SocialsInput;