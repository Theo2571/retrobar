import React, {FC} from 'react';
import search from '../../../../assets/icons/search.svg'
import styles from './Search.module.scss'

interface searchProps {
    open: boolean;
}

const SearchInput = ({open}: searchProps) => {


    return (
        <div className={open ? styles.search : styles.search__none}>
            <input className={styles.search__form_text} type="text" placeholder="поиск"/>
                <button className={styles.search__form_btn}>
                    <img src={search} alt=""/>
                </button>
        </div>
    );
};

export default SearchInput;