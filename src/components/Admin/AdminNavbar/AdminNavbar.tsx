import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./AdminNavbar.module.scss";
import { ADMIN_ADVERTISING_PAGE, ADMIN_CONTACTS_PAGE, ADMIN_EDIT_PAGE, ADMIN_INSTITUTION_PAGE, ADMIN_PHOTO_PAGE, ADMIN_VIDEO_PAGE } from '../../../consts/consts';
import photoIcon from "../../../assets/Admin/Navbar/pic.svg";
import videoIcon from "../../../assets/Admin/Navbar/video.svg";
import institutionIcon from "../../../assets/Admin/Navbar/Institution.svg";
import contactIcon from "../../../assets/Admin/Navbar/contact.svg";
import advertisingIcon from "../../../assets/Admin/Navbar/advertising.svg";
import editIcon from "../../../assets/Admin/Navbar/Vector.svg";


const AdminNavbar = () => {

  const pages = [
    {
      path: ADMIN_PHOTO_PAGE,
      title: 'Фото',
      svg: photoIcon,
      id: 1,
    },
    {
      path: ADMIN_VIDEO_PAGE,
      title: 'Видео',
      svg: videoIcon,
      id: 2,
    },
    {
      path: ADMIN_ADVERTISING_PAGE,
      title: 'Реклама',
      svg: advertisingIcon,
      id: 3,
    },
    {
      path: ADMIN_INSTITUTION_PAGE,
      title: 'Заведение',
      svg: institutionIcon,
      id: 4,
    },
    {
      path: ADMIN_CONTACTS_PAGE,
      title: 'Контакты',
      svg: contactIcon,
      id: 5,
    },
    {
      path: ADMIN_EDIT_PAGE,
      title: 'Изменить',
      svg: editIcon,
      id: 6,
    },
  ]

  return (
    <div className={styles.adminNavbar}>
      <nav className={styles.adminNavbarList}>
        {pages.map((item) => (
          <NavLink 
          to={item.path} 
          key={item.id}
          className={({ isActive }) => (isActive ? styles.adminNavbarItemActive : styles.adminNavbarItem)}
          >
            <img src={item.svg} style={{marginRight: "10px"}} />
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default AdminNavbar;