import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SubContainer = () => {
  const movies = useSelector(store =>store.movie?.nowPlaying);
  const popular = useSelector(store =>store.movie?.popular);
  const topRated = useSelector(store =>store.movie?.topRated);
  const upcoming = useSelector(store =>store.movie?.upcoming);
  console.log(movies);
  return (
    <div className='w-screen bg-black'>
    <div className=' -mt-32  text-white z-20 relative '>
      <MovieList movies={movies} title='Latest'/>
      <MovieList movies={popular} title='Popular'/>
      <MovieList movies={topRated} title='Top Rated'/>
      <MovieList movies={upcoming} title='Upcoming'/>
      {/* <MovieList movies={movies} title='Sports'/> */}
    </div>
    </div>
  )
}

export default SubContainer