import React from 'react';
import Player from "../../components/ui/video-player/Player";
import preview from "../../assets/VideoPage/video-preview-lg.png";
import {useParams} from "react-router-dom";

const VideoPlayerPage = () => {

    const {id} = useParams()
    console.log(id)
    const videoReport =  {
            views: 500,
            id: 5,
            eventName: "Miygi & Endi Panda",
            date: "2022-05-05T00:00:00.000Z",
            link: "www.instagram.com/paparouz/",
            eventVideos: [
              "https://www.youtube.com/watch?v=WVGChZZfvbQ"
            ],
            preview: [
                preview
            ],
            "pubId": 1,
            "photographerId": 1
        }

    return (
        <div>
            <Player videoReport={videoReport} />
        </div>
    );
};

export default VideoPlayerPage;