import { createSlice } from "@reduxjs/toolkit";
import {
  getMoviesAction,
  searchMoviesAction,
  sortMoviesAction,
} from "./asyncMovieReducer";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.loading = false;
      state.moviesList = response;
    });
    builder.addCase(getMoviesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchMoviesAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.loading = false;
      state.moviesList = response;
    });
    builder.addCase(sortMoviesAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.moviesList = response;
    });
  },
});

export default movieSlice.reducer;
export const moviesAction = movieSlice.actions;
