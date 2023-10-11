import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader"; //прелодер

function MoviesCardList({ movieArr, error, isSearchEmpty }) {
  const isLoading = false;
  const { pathname } = useLocation(); //отселдить урл

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list list">
        {movieArr && movieArr.length !== 0 ? (
          movieArr.map((movie) => {
            return (
              <MoviesCard
                className="movies-card-list__item"
                dataMovie={movie}
                key={movie.id}
              ></MoviesCard>
            );
          })
        ) : error ? (
          <p>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        ) : !isSearchEmpty ? (
          <p>Ничего не найдено</p>
        ) : (
          ""
        )}
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

// {movieArr ? <h1>Карточки</h1> : error ? <h1>Ошибка</h1> : <h1>Пусто</h1>}
