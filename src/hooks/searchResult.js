import React from 'react'
import { useRef, useState } from 'react';
import { keys, search_url } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { openai } from '../Utils/openai';
import { options, popular_url } from '../Utils/constants';
import { addMovieSuggestions } from '../Utils/GptSlice';


const searchApi = async(value) =>{
   
    const data = await fetch(search_url + value, options)
    const json = await data.json();
    return json?.results
  }


const searchResult = async(searchText) => {
      
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText?.current?.value + ".  give me names of  movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const gptResults = await openai?.chat?.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
    
      const  gptMovies = gptResults?.choices[0]?.message?.content.split(',');
    
    
      // Use the search hook here
      const promiseArray =  gptMovies.map((movie)=> searchApi(movie))
      const suggestionsResult = await Promise.all(promiseArray);

      return {gptMovies,suggestionsResult}
    }
    


export default searchResult;