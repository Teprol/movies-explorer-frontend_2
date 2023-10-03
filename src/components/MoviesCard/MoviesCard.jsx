import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./MoviesCard.css"

import image from "../../images/pic__COLOR_pic.jpg";
import Button from "../Button/Button"

function MoviesCard({ className }) {

    const [isMovieSave, setMovieSave] = React.useState(false);
    const { pathname } = useLocation(); //отселдить урл

    function handleMovieSave() {
        setMovieSave(!isMovieSave);
    };

    return (
        <li className={className}>
            <article className="movies-card">
                <div className="movies-card__header">
                    <h2 className="movies-card__title">В погоне за Бенкси</h2>
                    <p className="movies-card__date">0ч 42м</p>
                </div>
                <a href="#" className="link movies-card__link hover">
                    <img className="movies-card__image image" src={image} alt="" />
                </a>
                {pathname === '/saved-movies' ?
                    <Button className="movies-card__button button hover button_card-delete" type="button"></Button>
                    :
                    <Button className={`movies-card__button button hover ${isMovieSave ? "button_card-save" : "button_card"}`} type="button" onClick={handleMovieSave}>{isMovieSave ? "" : "Сохранить"}</Button>
                }
            </article>
        </li>
    );
};

export default MoviesCard;