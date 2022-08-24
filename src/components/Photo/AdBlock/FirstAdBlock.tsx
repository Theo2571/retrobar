import React from 'react';
import styles from './AdBlocks.module.scss'
import {AdData} from "../../../types/types";

const FirstAdBlock = ({data}: {data: AdData}) => {
    return (
        <div className={styles.ad_block}>
            <div className={styles.first_ad_block}>
                <h3 className={styles.first_ad_block__title}>{data.title}</h3>
                <p className={styles.first_ad_block__description}>{data.description}</p>
            </div>
        </div>
    );
};

export default FirstAdBlock;