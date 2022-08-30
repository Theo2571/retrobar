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
            urlVideo: ['http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                        'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                ]
        },
        {
            date: '24 мая 2022',
            urlVideo: ['http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5'
            ]
        },
        {
            date: '15 марта 2018',
            urlVideo: ['http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
                'http://download.files.namba.kg/files/5c1a231e76ba6fd8736b29e1d4531ff2/630c7934/186814222/file.mp4?oLsFueBr8gq+8fYkW1UA+vmuvYSTRjRTrvFPh/EodNMPBjMuwrL5',
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