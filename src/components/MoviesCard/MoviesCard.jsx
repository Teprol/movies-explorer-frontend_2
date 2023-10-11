import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";

import image from "../../images/pic__COLOR_pic.jpg";
import Button from "../Button/Button";

function MoviesCard({ className, dataMovie }) {
  const [isMovieSave, setMovieSave] = React.useState(false);
  const { pathname } = useLocation(); //отселдить урл

  function handleMovieSave() {
    setMovieSave(!isMovieSave);
  }

  function convertsTime(time) {
    const hours = Math.floor(parseInt(time) / 60);
    const minutes = Math.floor(parseInt(time) % 60);
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className={className}>
      <article className="movies-card">
        <div className="movies-card__header">
          <h2 className="movies-card__title">{dataMovie.nameRU}</h2>
          <p className="movies-card__date">
            {convertsTime(dataMovie.duration)}
          </p>
        </div>
        <a
          href={dataMovie.trailerLink}
          className="link movies-card__link hover"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__image image"
            src={`https://api.nomoreparties.co/${dataMovie.image.url}`}
            alt={dataMovie.nameRU}
          />
        </a>
        {pathname === "/saved-movies" ? (
          <Button
            className="movies-card__button button hover button_card-delete"
            type="button"
          ></Button>
        ) : (
          <Button
            className={`movies-card__button button hover ${
              isMovieSave ? "button_card-save" : "button_card"
            }`}
            type="button"
            onClick={handleMovieSave}
          >
            {isMovieSave ? "" : "Сохранить"}
          </Button>
        )}
      </article>
    </li>
  );
}

export default MoviesCard;
