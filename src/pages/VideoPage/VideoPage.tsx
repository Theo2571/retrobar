import React from 'react';
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import Player from "../../components/ui/video-player/Player";
import styles from "./VideoPage.module.scss"
import {ReportVideo} from "../../types/types";
import CarouselVideos from "../../components/ui/carousel-videos/CarouselVideos";

const VideoPage = () => {

    const videoReports: ReportVideo[] = [
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
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 2,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 3,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 4,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
        {
            views: 500,
            id: 5,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
            "./src/files/event-video/eventvideos-2022-08-30T18:16:26+06:00-Короткое видео для души.mp4"
        ],
            preview: [
            "./src/files/preview/preview-2022-08-30T18:16:26+06:00-tree-736885_1280.jpeg"
        ],
            "pubId": 1,
            "photographerId": 1
        },
    ]

    return (
        <div className={styles.container}>
                <div className={styles.player_wrapper}>
                <Player urlVideo="https://www.youtube.com/watch?v=H5v3kku4y6Q&list=PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU"/>
            </div>
                <div className={styles.video_reports}>
                    <CarouselVideos videoReports={videoReports}/>
                    <CarouselVideos videoReports={videoReports}/>
                    <CarouselVideos videoReports={videoReports}/>
                </div>
                <LowerBlock/>
          </div>
    );
};

export default VideoPage;