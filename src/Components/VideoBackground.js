import React from 'react';
import Interstellar from '../Images/Interstellar.mp4';
import movie from '../Images/movie.jpg';

const VideoBackground = () => {
  return (
    <>
      <video
        src={Interstellar}
        autoPlay
        muted
        type="video/mp4"
        poster={movie}
        className=''
      />
    </>
  );
}

export default VideoBackground;
