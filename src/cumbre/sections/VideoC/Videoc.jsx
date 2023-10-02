import React, { useState } from 'react';
import './Videoc.css';
import ReactPlayer from 'react-player';

const VideoC = () => {

    const videocUrl = 'https://vimeo.com/868982316?share=copy';
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

  return (
    <div className="videoc-player-container-c">
      <div className="video-container-c">
      <ReactPlayer
      width="1000px"
      height="500px"
      position="relative"
          playing={isPlaying}
          className='video-player-video-c'
          controls={false} // Deshabilita todos los controles predeterminados
          url={videocUrl}
        />
        {isPlaying ? 
        (        
        <button className="button-play-no-c" onClick={handlePlayPause}>
        Pausa
        </button>
        ) 
        : 
        (        
        <button className="button-play-yes-c" onClick={handlePlayPause}>
        Reproducir
        </button>)
        }
        </div>
    </div>
  );
};

export default VideoC;