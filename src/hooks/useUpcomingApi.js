import { useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import { addNowPlaying, addUpcoming } from "../Utils/movieSlice";
import { options, upcoming_url } from '../Utils/constants';

const useUpcomingApi = ()=>{
const dispatch = useDispatch();
const movieApi = async() =>{
const data = await fetch(upcoming_url, options)
const json = await data.json();
dispatch(addUpcoming(json?.results));

}
useEffect(()=>{
  movieApi();
},[])
}
export default useUpcomingApi;