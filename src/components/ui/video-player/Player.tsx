import React, {useState} from 'react';
import ReactPlayer from "react-player";
import styles from './Player.module.scss'
import preview from '../../../assets/VideoPage/video-preview-lg.png'

const Player = ({urlVideo}: {urlVideo: string}) => {

    const [play, setPlay] = useState(false);

    return (
        <>
            <ReactPlayer
                controls={true}
                width="100%"
                height="100%"
                style={{minHeight: "263px"}}
                url={urlVideo}
                playing={play}
                playIcon={<button
                    className={styles.btn_play}
                    onClick={()=> setPlay(true)}
                />}
                light={preview}
            ></ReactPlayer>
        </>

    );
};

export default Player;