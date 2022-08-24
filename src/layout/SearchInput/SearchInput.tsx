import React, {FC} from 'react';
import search from '../../assets/icons/search.svg'
import styles from './Search.module.scss'

interface searchProps {
    open: boolean;
    placeholder: string;
    width: string;
}

const SearchInput = ({open, width, placeholder}: searchProps) => {


    return (
        <div style={{width: width}} className={open ? styles.search : styles.search__none}>
            <input className={styles.search__form_text} type="text" placeholder={placeholder} />
                <button className={styles.search__form_btn}>
                    <img src={search} alt=""/>
                </button>
        </div>
    );
};

export default SearchInput;