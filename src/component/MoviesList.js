import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Css/MoviesList.module.css";
import { useNavigate } from "react-router-dom";
import { sortMoviesAction } from "../reducer/asyncMovieReducer";
const MoviesList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movies.moviesList);
  const loading = useSelector((state) => state.movies.loading);
  const [sortValue, setSortValue] = useState("");
  const goToMovieDetails = (movie) => {
    navigate("/movieDetails", { state: { data: movie } });
  };
  const sortOptions = ["movie_name", "ratings", "release_date", "genre"];
  const handleSort = (e) => {
    const value = e.target.value;
    setSortValue(value);
    dispatch(sortMoviesAction(value));
  };
  return (
    <>
      {loading ? (
        <div className={styles.spinner}></div>
      ) : (
        <>
          <div style={{ margin: "2rem" }}>
            <label htmlFor="sort-by">Sort By:</label>
            <select
              style={{
                width: "50%",
                borderRadius: "5px",
                height: "35px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onChange={handleSort}
              value={sortValue}
            >
              <option>Please Select Value</option>
              {sortOptions.map((item, index) => (
                <option value={item} key={index} style={{ cursor: "pointer" }}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.container}>
            {moviesList.length === 0 ? (
              <h3>No Movie Found</h3>
            ) : (
              moviesList.map((movie) => (
                <div
                  className={styles.card}
                  onClick={() => goToMovieDetails(movie)}
                  key={movie.id}
                >
                  <img
                    className={styles.poster}
                    src={movie.poster}
                    alt={movie.movie_name}
                  />
                  <div className={styles.details}>
                    <h4 className={styles.title}>{movie.movie_name}</h4>
                    <div className={styles.rating}>
                      <div className={styles.ratingnumber}>
                        <span className={styles.ratingNumber}>
                          {movie.ratings}
                        </span>
                        <span className={styles.ratingLabel}>/10</span>
                      </div>
                      <div className={styles.runTime}>
                        {movie.runtime}&nbsp;min
                      </div>
                    </div>
                    <div>{movie.release_date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MoviesList;
