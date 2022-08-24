import React from 'react';
import styles from './titleForPages.module.scss'

const TitleForPages = ({title}: {title: string}) => {
    return (
        <div>
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
};

export default TitleForPages;