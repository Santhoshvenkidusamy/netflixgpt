import React, { useState } from 'react';
import useVideo from '../hooks/useVideo';
import VideoOverlay from './VideoOverlay';
import VideoBackground from './VideoBackground';
const MainContainer = ({ movies }) => {
  const { id, title, overview } = movies?.[0];
  const trailer = useVideo(id);
  const [isMuted, setIsMuted] = useState(true);

 

  return (
    <div className=''>
            <VideoOverlay />
            <VideoBackground />
     
    </div>
  );
};


export default MainContainer;


// return (
//     <>
//         <div className=' absolute text-white pl-10 bg-gradient-to-r from-black aspect-video w-[100vw]'>
//           <div className='mt-40 text-xl font-bold'>{title}</div>
//           <div className='w-1/2'>{overview}</div>
//           <button
//             className='mt-2 p-2 bg-slate-500 rounded w-20 text-white'
            
//           >
//             Play
//           </button>
//         </div>
//         <div className='w-screen'>
//           <iframe
//             id='youtube-player'
//             className='w-[100vw] aspect-video'
//             src={`https://www.youtube.com/embed/` + trailer?.key + '?&autoplay=1&mute=1&controls=0&modestbranding=0&showinfo=0'}
//             title="YouTube video player"
//           />

//         </div>
     
//     </>
//   );
