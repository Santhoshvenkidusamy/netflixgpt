import { useDispatch } from "react-redux";
import React, { useEffect } from 'react'
import {  addTopRated } from "../Utils/movieSlice";
import { options, top_rated_url } from '../Utils/constants';

const useTopRatedApi = ()=>{
const dispatch = useDispatch();
const movieApi = async() =>{
const data = await fetch(top_rated_url, options)
const json = await data.json();
dispatch(addTopRated(json?.results));

}
useEffect(()=>{
  movieApi();
},[])
}
export default useTopRatedApi;