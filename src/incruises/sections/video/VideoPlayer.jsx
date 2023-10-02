import React, { useState} from 'react';
import './VideoPlayer.css';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const videoUrl = 'https://vimeo.com/868543913?share=copy';
  const [isPlayingg, setIsPlayingg] = useState(false);

  const handlePlayPause = () => {
    setIsPlayingg(!isPlayingg);
  };

  return (
    <div className="container-position">
    <div className="video-container">
    <ReactPlayer
          width="1000px"
          height="500px"
          playing={isPlayingg}
          className='video-player-video'
          controls={false} // Deshabilita todos los controles predeterminados
          url={videoUrl}
        />
        {isPlayingg ? 
        (        
        <button className="button-play-no" onClick={handlePlayPause}>
        Pausa
        </button>
        ) 
        : 
        (        
        <button className="button-play-yes" onClick={handlePlayPause}>
        Reproducir
        </button>)
        }
    </div>
    </div>
  );
};

export default VideoPlayer;
