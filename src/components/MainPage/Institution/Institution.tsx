import React from 'react';
import NewsBlock from "../NewsBlock/NewsBlock";
import styles from './Institution.module.scss'

const Institution = () => {
    return (
        <div className={styles.institution}>
            <NewsBlock />

        </div>
    );
};

export default Institution;