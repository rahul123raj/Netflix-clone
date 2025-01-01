import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    moviename: null,
    searchedMovies: null,
  },
  reducers: {
    //?actions
    setSearchedMovieDetails: (state, action) => {
      const { searchMovie, searchedmovies } = action.payload;
      (state.moviename = searchMovie), (state.searchedMovies = searchedmovies);
    },
  },
});

export const { setSearchedMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
