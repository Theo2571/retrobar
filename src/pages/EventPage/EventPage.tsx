import React from 'react';
import RecommendationBlock from "../../components/Event/RecommendationBlock/RecommendationBlock";
import styles from './EventPage.module.scss';


const EventPage = () => {
    return (
        <div className={styles.container}>
            <RecommendationBlock/>
        </div>
    );
};

export default EventPage;