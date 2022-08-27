import React from 'react';
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import Player from "../../components/ui/video-player/Player";
import styles from "./VideoPage.module.scss"
import {PlaceData} from "../../types/types";
import image1 from "../../assets/PhotoPage/photo1.png";
import image2 from "../../assets/PhotoPage/photo2.png";
import image3 from "../../assets/PhotoPage/photo3.png";
import image from "../../assets/PhotoPage/modalPhoto.png";
import CarouselVideos from "../../components/ui/carousel-videos/CarouselVideos";




const VideoPage = () => {

    const data: PlaceData = {
        placeName: 'ZEPPELIN BAR',
        eventName: 'STREET CREDIBILITY',
        eventDate: '14 мая 2022',
        views: 6545,
        photographName: 'Фотостудия "Оригами"',
        photos: [image1, image2, image3, image, image, image,]
    }

    return (
        <div className={styles.container}>
            <div className={styles.player_wrapper}>
                <Player/>
            </div>
            <div className={styles.video_reports}>
                <CarouselVideos/>
            </div>
            <LowerBlock/>
        </div>
    );
};

export default VideoPage;