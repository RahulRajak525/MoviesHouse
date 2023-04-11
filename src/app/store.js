import { configureStore } from "@reduxjs/toolkit";
import Movieslice from "../reducer/Movieslice";

export const store = configureStore({
  reducer: {
    movies: Movieslice,
  },
});
