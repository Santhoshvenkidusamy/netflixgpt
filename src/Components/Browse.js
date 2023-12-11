
import Header from './Header'
import useMovieApi from '../hooks/useMovieApi'
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
import { useSelector } from 'react-redux';
import usePopularApi from '../hooks/usepopularApi';
import useTopRatedApi from '../hooks/useTopRatedApi';
import useUpcomingApi from '../hooks/useUpcomingApi';
import GPTSearch from './GPTSearch';



const Browse = () => {
    useMovieApi();
    usePopularApi();
    useTopRatedApi();
    useUpcomingApi();
    const movies = useSelector(store =>store.movie?.nowPlaying);
    const showGptSearch = useSelector(store =>store.gpt.showGptSearch);
    if (!movies) {
      return null;
    }
  return (
    <div className='' style={{backgroundColor:'141414'}}>
        <Header />
        {showGptSearch ?(
        <GPTSearch />
        ):
        (
          <>
        <MainContainer  movies={movies}/>
        <SubContainer />
        </>
        )
}
    </div>
  )
}

export default Browse