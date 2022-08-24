import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../assets/icons/logo.svg'
import search from '../../assets/icons/search.svg'
import telegram from '../../assets/icons/telegram.svg'
import youtube from '../../assets/icons/youtube.svg'
import instagram from '../../assets/icons/instagram.svg'
import SearchInput from "../SearchInput/SearchInput";
import {NavLink} from "react-router-dom";





const data = [
    {
        path: '/',
        label: 'Фото'
    },
    {
        path: '/videos',
        label: 'Видео'
    },
    {
        path: '/institution',
        label: 'Заведение'
    },
    {
        path: '/events',
        label: 'События'
    },
]

let dataul = [
    {
        path: '/news',
        label: 'Новости'
    },
    {
        path: '/contacts',
        label: 'Контакты'
    },
    {
        path: '/staff',
        label: 'Сотрудники'
    },
    {
        path: '/copyright',
        label: 'Копирайт'
    },
]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__inner}>
                    <div className={styles.footer__retro}>
                        <img className={styles.footer__logo} src={logo} alt="logo"/>
                        <div className={styles.footer__descr}>
                            <p>Политика конфиденциальности</p>
                            <p>
                                Copyright © 2021 <br/>
                                Digital-агентство «Active Trust»
                            </p>
                        </div>
                    </div>
                    <nav className={styles.footer__navbar}>
                        <ul className={styles.footer__list}>
                            {data.map((item) => (
                                <li className={styles.list__item} key={item.label}>
                                    <NavLink to={item.path} className={styles.list__link}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className={styles.footer__navbar}>
                        <ul className={styles.footer__list}>
                            {dataul.map((item) => (
                                <li className={styles.list__item} key={item.label}>
                                    <NavLink to={item.path} className={styles.list__link}>{item.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.footer__social}>
                        <div className={styles.footer__search_form}>
                            <SearchInput width={'223px'} placeholder={'Геолокация'} open={true}/>
                        </div>
                        <h4 className={styles.social__title}>
                            Мы в социальных сетях:
                        </h4>
                        <div className={styles.social__images}>
                            <img src={telegram} alt=""/>
                            <img src={instagram} alt=""/>
                            <img src={youtube} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;