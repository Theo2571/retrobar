import { useState, useRef } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import HamburgerIcon from './HamburgerIcon';
import SearchInput from "../../../SearchInput/SearchInput";
import telegram from '../../../../assets/icons/telegram.svg'
import instagram from '../../../../assets/icons/instagram.svg'
import youtube from '../../../../assets/icons/youtube.svg'
import mail from '../../../../assets/icons/mail.svg'

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
    {
        path: '/news',
        label: 'Новости'
    },
    {
        path: '/contacts',
        label: 'Контакты'
    },
]

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

    return (
        <div className={styles.hamburger}>
            <HamburgerIcon isOpen={isOpen} setOpen={setOpen} />
            <div
                className={classNames(styles.menu, {
                    [styles.menuOpen]: isOpen === true
                })}
                ref={menuRef}
            >
                <div>
                    <div className={styles.search__input}>
                        <SearchInput open={true} placeholder={'поиск'} width={'271px'} />
                    </div>
                    <ul className={styles.menu__list}>
                        {data.map(item => (
                            <li className={styles.menu__item} key={item.path}>
                                <a className={styles.menu__link} href={item.path}>
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.social__text}>
                        <h4>Мы в соицальных сетях:</h4>
                    </div>
                    <ul className={styles.social__images}>
                        <li className={styles.social__items}>
                            <a href=""><img src={telegram} alt=""/></a>
                        </li>
                        <li className={styles.social__items}>
                            <a href=""><img src={instagram} alt=""/></a>
                        </li>
                        <li className={styles.social__items}>
                            <a href=""><img src={youtube} alt=""/></a>
                        </li>
                        <li className={styles.social__items}>
                            <a href=""><img src={mail} alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
