import React from 'react'
import { IoPlay } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
const VideoOverlay = () => {
  return (
    <div className=' absolute text-white pl-20 bg-gradient-to-r from-black w-screen aspect-video'>
    <div className=' pt-[30%] text-4xl font-bold'>Interstellar</div>
    <div className='w-1/2 sm:w-full lg:w-1/2 md:w-1/2 sm:line-clamp-2 lg:line-clamp-none md: line-clamp-none  mt-4'>
    With our time on Earth coming to an end, a team of explorers undertakes the most important mission in human history: traveling beyond this galaxy to discover whether mankind has a future among the stars.
    </div>
    <div className='flex flex-wrap'>
    <button
      className='mt-4 p-2  rounded  text-black bg-white font-semibold text-lg flex px-8 hover:bg-blue-400'
    >
      
      < IoPlay  className='mt-1 mr-1'/>
      <span className=''>Play</span>
      
    </button>
    <button
      className='mt-4 p-2 mx-2 rounded  text-white bg-gray-500 font-semibold text-lg flex px-8'
      
    >
      
      < AiOutlineInfoCircle  className='mt-1 mr-1'/>
      <span>More Info</span>
      
    </button>
    </div>

  </div>
  )
}

export default VideoOverlay