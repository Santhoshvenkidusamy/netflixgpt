import { useDispatch } from "react-redux";
import  { useEffect } from 'react'
import { addPopular } from "../Utils/movieSlice";
import { options, popular_url } from '../Utils/constants';

const usePopularApi = ()=>{
const dispatch = useDispatch();
const movieApi = async() =>{
const data = await fetch(popular_url, options)
const json = await data.json();
dispatch(addPopular(json?.results));

}
useEffect(()=>{
  movieApi();
},[])
}
export default usePopularApi;