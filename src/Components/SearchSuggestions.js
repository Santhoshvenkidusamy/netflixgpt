import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SearchSuggestions = () => {
  const {movies, movieSuggestions} = useSelector(store => store.gpt)
  // console.log(movieSuggestions[0]);
  if(!movies) return null
  return (
    <div className='mt-10 text-white bg-black p-2'>
      {movies?.map((movie,index)=>{
        // console.log(movieSuggestions[index])
         return <MovieList key={index} title={movie} movies={movieSuggestions[index]}/>
      })}
    </div>
  )
}

export default SearchSuggestions