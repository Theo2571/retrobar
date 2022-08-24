import React from 'react';
import styles from "./PhotoPage.module.scss"
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import TitleForPages from "../../components/ui/title-for-pages/titleForPages";
import PhotoGrid from "../../components/Photo/PhotoGrid/PhotoGrid";



const PhotoPage = () => {

    return (
        <div className={styles.container}>
            <TitleForPages title={'Актуальные фотоотчеты'}/>
            <PhotoGrid/>
            <LowerBlock/>
        </div>
    );
};

export default PhotoPage;