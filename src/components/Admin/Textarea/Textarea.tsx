import React, {FC, useEffect, useRef, useState} from 'react';
import styles from "./Textarea.module.scss";

interface TextareaProps {
  title: string,
}

const Textarea: FC<TextareaProps> = ({title}) => {

  const [currentValue, setCurrentValue ] = useState("");

  // useEffect(() => {
  //     textareaRef.current.style.height = "0px";
  //     const scrollHeight = textareaRef.current.scrollHeight;
  //     textareaRef.current.style.height = scrollHeight + "px";
  // }, [currentValue]);

  function handleHeight(e: any) {
    e.target.style.height = "0px";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = scrollHeight + "px";
  }

  return (
    <div className={styles.textareaWrapper}>
      <h2 className={styles.textareaTitle}>{title}</h2>
      <textarea 
      // onChange={(e) => handleCols(e.target.value.length)} 
      // onChange={(e) => console.log(e.target.value.length)}
      className={styles.textarea}
      value={currentValue}
      onChange={e=>{
        setCurrentValue(e.target.value);
        handleHeight(e);
      }}
      />
    </div>
  );
};

export default Textarea;