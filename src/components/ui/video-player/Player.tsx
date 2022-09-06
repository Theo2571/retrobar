import React, {useState} from 'react';
import ReactPlayer from "react-player";
import styles from './Player.module.scss'
import {ReportVideo} from "../../../types/types";

const Player = ({videoReport}: {videoReport: ReportVideo}) => {

    const [play, setPlay] = useState(false);

    return (
        <>
            <ReactPlayer
                controls={true}
                width="100%"
                height="100%"
                style={{minHeight: "263px"}}
                url={videoReport.eventVideos[0]}
                playing={play}
                playIcon={<button
                    className={styles.btn_play}
                    onClick={()=> setPlay(true)}
                />}
                light={videoReport.preview[0]}
            ></ReactPlayer>
        </>

    );
};

export default Player;