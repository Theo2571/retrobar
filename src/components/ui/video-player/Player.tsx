import React from 'react';
import ReactPlayer from "react-player";

const Player = ({urlVideo}: {urlVideo: string}) => {
    return (
            <ReactPlayer
                controls={true}
                width="100%"
                height="100%"
                url={urlVideo} />
    );
};

export default Player;