import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, title}) => {
  console.log(movies);
  return (
    <div className='p-2'>
      <div className='font-bold text-2xl'>{title}</div>
      <div className=' m-2 flex overflow-x-scroll overflow-y-auto overflow'>
      <div className='flex'>
  {movies?.map((movie) => {
    return movie?.poster_path ? <MovieCard key={movie.id} movie={movie} /> : null;
  })}
</div>

    </div>
    </div>
  )
}

export default MovieList