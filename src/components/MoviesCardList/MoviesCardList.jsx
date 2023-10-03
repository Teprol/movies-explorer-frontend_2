import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./MoviesCardList.css"

import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button"
import Preloader from "../Preloader/Preloader"; //прелодер

function MoviesCardList() {
    const isLoading = false;
    const { pathname } = useLocation(); //отселдить урл

    return (
        <section className="movies-cardList">
            <ul className="movies-cardList__list list">
                {isLoading && <Preloader></Preloader>}
                <MoviesCard className="movies-cardList__item"></MoviesCard>
                <MoviesCard className="movies-cardList__item"></MoviesCard>
                <MoviesCard className="movies-cardList__item"></MoviesCard>
                <MoviesCard className="movies-cardList__item"></MoviesCard>
                <MoviesCard className="movies-cardList__item"></MoviesCard>
            </ul>
            {pathname === '/saved-movies'
                ?
                <div className="movies-cardList__download-more_movie-save ">
                </div>
                :
                <div className="movies-cardList__download-more">
                    <Button className="button_more">Ещё</Button>
                </div>
            }

        </section>
    );
};

export default MoviesCardList;