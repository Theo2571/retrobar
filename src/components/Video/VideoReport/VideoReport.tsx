import React from 'react';
import styles from './VideoReport.module.scss';
import image from '../../../assets/PhotoPage/photo2.png'

const VideoReport = () => {

    const data =
        {
            views: 500,
            id: 1,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
                "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
            ],
            preview: [
                image
            ],
            "pubId": 1,
            "photographerId": 1
        }

    return (
        <div className={styles.container_videoReport}>
            <img className={styles.container_videoReport__prevImage} src={data.preview[0]} alt={data.eventName}/>
            <div className={styles.container_videoReport__information}>
                <span>{data.views}</span>
                <h5>{data.eventName.toUpperCase()}</h5>
            </div>
        </div>
    );
};

export default VideoReport;