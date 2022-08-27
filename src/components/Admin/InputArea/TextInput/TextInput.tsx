import React, {FC} from 'react';
import styles from "./TextInput.module.scss";

interface TextInputProps{
  title: string;
}

const TextInput: FC<TextInputProps> = ({title}) => {
  return (
    <div className={styles.textInputs}>
      <h2 className={styles.textInputsTitle}>{title}</h2>
      <input type="text" className={styles.textInput} />
  </div>
  );
};

export default TextInput;