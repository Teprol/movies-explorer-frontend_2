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
        <section className="movies-card-list">
            <ul className="movies-card-list__list list">
                {isLoading && <Preloader></Preloader>}
                <MoviesCard className="movies-card-list__item"></MoviesCard>
                <MoviesCard className="movies-card-list__item"></MoviesCard>
                <MoviesCard className="movies-card-list__item"></MoviesCard>
                <MoviesCard className="movies-card-list__item"></MoviesCard>
                <MoviesCard className="movies-card-list__item"></MoviesCard>
            </ul>
            {pathname === '/saved-movies'
                ?
                <div className="movies-card-list__download-more movies-card-list__download-more_movie-save ">
                </div>
                :
                <div className="movies-card-list__download-more">
                    <Button className="button_more">Ещё</Button>
                </div>
            }

        </section>
    );
};

export default MoviesCardList;