import React from 'react';
import './Videoc.css';
import ReactPlayer from 'react-player';

const VideoC = () => {

    const videocUrl = 'https://vimeo.com/868982316?share=copy';


  return (
    <div className="videoc-player-container-c">
      <div className="video-container-c">
      <ReactPlayer
          width="1000px"
          height="500px"

          className='video-player-video-c'
          controls={true} // Deshabilita todos los controles predeterminados
          url={videocUrl}
        />

        </div>
    </div>
  );
};

export default VideoC;