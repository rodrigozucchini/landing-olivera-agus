import React from 'react';
import './VideoPlayer.css';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const videoUrl = 'https://vimeo.com/868543913?share=copy';

  return (
    <div className="container-position">
    <div className="video-container">
    <ReactPlayer
          width="1000px"
          height="500px"
          className='video-player-video'
          controls={true} // Deshabilita todos los controles predeterminados
          url={videoUrl}
        />

    </div>
    </div>
  );
};

export default VideoPlayer;
