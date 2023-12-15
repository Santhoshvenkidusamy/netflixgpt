

export const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN';
export const popular_url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=IN';
export const top_rated_url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN';
export const upcoming_url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN';
export const search_url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:'Bearer '+ process.env.REACT_APP_AUTH_KEY
  }
};

export const Image_url = 'https://image.tmdb.org/t/p/w200'

export const LANG = [
  'English','Hindi','Tamil'
]

export const keys = {
  English:{
       search:'Search',
       placeholder: 'Choose Your Movie Genre eg: Horror Movies'
  },
  Tamil:{
    search:'தேடு',
    placeholder: 'உங்கள் திரைப்பட வகையைத் தேர்ந்தெடுங்கள் எ.கா: திகில் திரைப்படங்கள்'
  },
  Hindi:{
  search:'खोज',
  placeholder: 'अपनी मूवी शैली चुनें जैसे: डरावनी फिल्में'
  },
}

export const openai_api = process.env.REACT_APP_OPENAI_KEY;