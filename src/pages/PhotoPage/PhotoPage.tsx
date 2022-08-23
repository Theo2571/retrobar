import React from 'react';
import styles from "./PhotoPage.module.scss"
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import TitleForPages from "../../components/ui/title-for-pages/titleForPages";


const PhotoPage = () => {
    return (
        <div className={styles.container}>
            <TitleForPages title={'Актуальные фотоотчеты'}/>
            <LowerBlock/>
        </div>
    );
};

export default PhotoPage;