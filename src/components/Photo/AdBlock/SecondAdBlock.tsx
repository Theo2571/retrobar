import React from 'react';
import styles from './AdBlocks.module.scss'
import {AdData} from "../../../types/types";

const SecondAdBlock = ({data}: {data: AdData}) => {
    return (
        <div className={styles.ad_block}>
            <div className={styles.second_ad_block}>
                <h3 className={styles.second_ad_block__title}>{data.title}</h3>
                <p className={styles.second_ad_block__description}>{data.description}</p>
                <button className={styles.btn_call}>Позвонить</button>
            </div>
        </div>
    );
};

export default SecondAdBlock;