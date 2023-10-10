import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader"; //прелодер

function MoviesCardList({ movies }) {
  const isLoading = false;
  const { pathname } = useLocation(); //отселдить урл
  // console.log(movies);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list list">
      </ul>
      {pathname === "/saved-movies" ? (
        <div className="movies-card-list__download-more movies-card-list__download-more_movie-save "></div>
      ) : (
        <div className="movies-card-list__download-more">
          <Button className="button_more">Ещё</Button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
