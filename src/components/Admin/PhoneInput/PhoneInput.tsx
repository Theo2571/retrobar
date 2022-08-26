import React, {FC} from 'react';
import styles from "./PhoneInput.module.scss";

interface PhoneInputProps{
  title: string;
}

const PhoneInput: FC<PhoneInputProps> = ({title}) => {
  return (
    <div className={styles.phoneInputs}>
      <h2 className={styles.phoneInputsTitle}>{title}</h2>
      <input type="tel" className={styles.phoneInput} />
  </div>
  );
};

export default PhoneInput;