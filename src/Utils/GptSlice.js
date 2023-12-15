import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
       showGptSearch : false,
       movies : null,
       movieSuggestions: null
    },
    reducers: {
        toogleGptSearch :(state,action) =>{
            state.showGptSearch = !state.showGptSearch
        },
        addMovieSuggestions :(state, action) =>{
            const {moviesList , suggestionList} = action.payload
            state.movieSuggestions = suggestionList
            state.movies = moviesList
        }
    }
})
export const { toogleGptSearch, addMovieSuggestions } = gptSlice.actions
export default gptSlice.reducer