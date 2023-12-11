import { useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { addNowPlaying } from "../Utils/movieSlice";
import { options, url } from '../Utils/constants';

const useMovieApi = ()=>{
const dispatch = useDispatch();
const movieApi = async() =>{
const data = await fetch(url, options)
const json = await data.json();
dispatch(addNowPlaying(json?.results));

}
useEffect(()=>{
  movieApi();
},[])
}
export default useMovieApi;