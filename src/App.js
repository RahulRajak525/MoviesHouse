import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import { useDispatch } from "react-redux";
import { getMoviesAction } from "./reducer/asyncMovieReducer";
import MoviesList from "./component/MoviesList";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesAction());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />}></Route>
        <Route path="/movieDetails" element={<MovieDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
