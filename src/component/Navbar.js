import React, { useState } from "react";
import styles from "../Css/Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getMoviesAction,
  searchMoviesAction,
} from "../reducer/asyncMovieReducer";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigateToHome = () => {
    navigate("/");
  };
  const searchClickHandler = (e) => {
    setSearch(e.target.value);
    dispatch(searchMoviesAction(search));
  };
  const buttonClickHandler = () => {
    dispatch(getMoviesAction());
    setSearch("");
  };
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbar__title} onClick={navigateToHome}>
        Movies Ghar
      </h1>
      <div className={styles.navbar__search}>
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={searchClickHandler}
        />
        <button onClick={buttonClickHandler}>Reset</button>
      </div>
    </nav>
  );
};

export default Navbar;
