import React from 'react';
import RecommendationBlock from "../../components/Event/RecommendationBlock/RecommendationBlock";
import styles from './EventPage.module.scss';
import bannerImg from '../../../src/assets/EventPage/ph banner.png';
import BannerBlock from "../../components/Event/BannerBlock/BannerBlock";

const EventPage = () => {
    return (
        <div className={styles.container}>
            <RecommendationBlock/>
            <BannerBlock image={bannerImg}/>
        </div>
    );
};

export default EventPage;