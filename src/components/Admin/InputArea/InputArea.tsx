import React, {FC} from 'react';
import PublishBtn from '../PublishBtn/PublishBtn';
import ViewsSlider from '../ViewsSlider/ViewsSlider';
import styles from "./InputArea.module.scss";
import TextInput from './TextInput/TextInput';

interface InputAreaProps {
  institutionName: string,
  partyName: string,
  job: string,
  date: string,
}

const InputArea: FC<InputAreaProps>= ({institutionName, partyName, job, date}) => {

  return (
    <div className={styles.content_textInputs}>
      <TextInput title={institutionName} />
      <TextInput title={partyName} />
      <TextInput title={job} />
      <TextInput title={date} />
      <ViewsSlider />
      <PublishBtn />
    </div>
  );
};

export default InputArea;