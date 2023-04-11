import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Css/MovieDetails.module.css";
const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.data;
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <img src={movie.poster} />
      </div>
      <div className={styles.details}>
        <Link className={styles.backButton} to="/">
          <img src={"https://cdn-icons-png.flaticon.com/512/93/93634.png"} />
        </Link>
        {movie.genre.map((gr) => (
          <span className={styles.genre}>{gr}</span>
        ))}
        <div className={styles.movieDate}>
          <div className={styles.movie_name}>{movie.movie_name}</div>
          <div className={styles.date}>{movie.release_date}</div>
        </div>
        <hr />
        <div className={styles.ratingRun}>
          <div className={styles.rating}>
            <span className={styles.ratingNumber}>{movie.ratings}</span>
            <span>/10</span>
          </div>
          <div className={styles.runtime}>{movie.runtime}&nbsp; min</div>
        </div>
        <hr />
        <div>{movie.description}</div>
        <hr />
        <div>
          <strong>Director :</strong> {movie.director}
        </div>
        <hr />
        <div>
          <strong>Producers :</strong>
          {movie.producer}
        </div>
        <hr />
        <strong>Cast : </strong>
        {movie.cast.map((ct) => (
          <span>{ct},</span>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
