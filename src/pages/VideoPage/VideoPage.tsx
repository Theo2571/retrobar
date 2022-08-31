import React from 'react';
import LowerBlock from "../../components/ui/lower-block/lowerBlock";
import Player from "../../components/ui/video-player/Player";
import styles from "./VideoPage.module.scss"
import {ReportVideo} from "../../types/types";
import CarouselVideos from "../../components/ui/carousel-videos/CarouselVideos";

const VideoPage = () => {


    const videoReports: ReportVideo[] = [
        {
            date: '1 мая 2018',
            views: 500,
            urlVideo: ['https://www.ts.kg/ololo/2de0b9ba175abc038c639b5f1d7abc94c060ed09.mp4',
                ]
        },
        {
            date: '24 мая 2022',
            views: 500,
            urlVideo: ['https://www.ts.kg/ololo/2de0b9ba175abc038c639b5f1d7abc94c060ed09.mp4'
            ]
        },
        {
            date: '15 марта 2018',
            views: 500,
            urlVideo: ['https://www.ts.kg/ololo/2de0b9ba175abc038c639b5f1d7abc94c060ed09.mp4',
            ]
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.player_wrapper}>
                <Player urlVideo="https://www.youtube.com/watch?v=H5v3kku4y6Q&list=PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU"/>
            </div>
            <div className={styles.video_reports}>
                <CarouselVideos videoReports={videoReports}/>
            </div>
            <LowerBlock/>
          </div>
    );
};

export default VideoPage;