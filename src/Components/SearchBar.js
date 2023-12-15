import React, { useRef, useState } from 'react';
import { keys } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieSuggestions } from '../Utils/GptSlice';
import searchResult from '../hooks/searchResult';

const SearchBar = () => {
    const dispatch = useDispatch()
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearch =  async() => {
   const {gptMovies,suggestionsResult} = await searchResult(searchText)
   console.log(gptMovies, suggestionsResult)
   dispatch(addMovieSuggestions({moviesList: gptMovies , suggestionList :suggestionsResult }));
  };
  
  return (
    <div className='pt-[15%] flex justify-center'>
      <form
        className='bg-black rounded-lg p-8 w-1/2 grid grid-cols-12 '
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className='bg-white  p-2 rounded-lg col-span-10'
          placeholder={keys[language]?.placeholder}
        />
        <button
          className='p-2 rounded-lg bg-red-700 text-white col-span-2 w-24 mx-4'
          onClick={handleGptSearch}
        >
          {keys[language]?.search}
        </button>
      </form>
      {/* {errorMessage && (
        <>
          <div className='text-red-700'>Something went wrong</div>
        </>
      )} */}
    </div>
  );
};

export default SearchBar;
