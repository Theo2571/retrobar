import React from 'react';
import ReactPlayer from "react-player";

const Player = () => {
    return (
            <ReactPlayer
                controls={true}
                width="100%"
                height="100%"

                url='https://www.youtube.com/watch?v=-7asGU6mWYI' />
    );
};

export default Player;