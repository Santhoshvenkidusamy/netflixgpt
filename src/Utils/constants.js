

export const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN';
export const popular_url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=IN';
export const top_rated_url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN';
export const upcoming_url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc2MDkwYTYyYWIwMTQ1ODAyYzY4YTlmYmEyYWIxOCIsInN1YiI6IjY1NWUzNDllZTRiNTc2MDBjNmExZTZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.brw4_jr6RTx1KJbolOboAY1aMNWaaPyC2xDEhJyQYbg'
  }
};

export const Image_url = 'https://image.tmdb.org/t/p/w200'