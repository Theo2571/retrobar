import React from 'react';
import styles from "./ContactsInputLink.module.scss"
import linkIcon from "../../../assets/Admin/Photo/link.svg";

const ContactsInputLink = () => {
  return (
    <div className={styles.contactsInputLinkWrapper} >
      <h4 className={styles.contactsInputLinkTitle}>Вставить ссылку<img className={styles.contactsInputLinkIcon} src={linkIcon} /></h4>
      <input type="text" className={styles.contactsInputLink} />
    </div>
  );
};

export default ContactsInputLink;