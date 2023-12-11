import React from 'react';
import { Image_url } from '../Utils/constants';

const MovieCard = ({ movie }) => {
  console.log(movie?.poster_path);
  return (
    <div className='pr-4 w-[140px]'>
      <img className='w-full' src={Image_url + movie?.poster_path} alt='movie' />
    </div>
  );
};

export default MovieCard;
