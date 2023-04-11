import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiMoviesService } from "../apiServices/apiMovieServices";

export const getMoviesAction = createAsyncThunk(
  "getMoviesAction",
  async (data) => {
    const response = await apiMoviesService.getMoviesList(data);
    return response;
  }
);
export const searchMoviesAction = createAsyncThunk(
  "searchMoviesAction",
  async (data) => {
    const response = await apiMoviesService.searchMoviesList(data);
    return response;
  }
);
export const sortMoviesAction = createAsyncThunk(
  "sortMoviesAction",
  async (data) => {
    const response = await apiMoviesService.sortMoviesList(data);
    return response;
  }
);
