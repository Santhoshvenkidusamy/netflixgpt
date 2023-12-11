
import  { useEffect, useState } from 'react'
import { options } from '../Utils/constants';
const useVideo = (id) =>{
    const [trailer, setTrailer] = useState(null);

const Video = async() =>{
const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
const json = await data.json();
console.log(id);
console.log(json);
const filterData = json?.results?.filter((data)=> data?.type === 'Teaser' || data?.type === 'Trailer');
setTrailer(filterData?.length  ?  filterData?.[0] : data?.[0] )
}
useEffect(()=>{
    Video();
},[])
return trailer;
}


export default useVideo;