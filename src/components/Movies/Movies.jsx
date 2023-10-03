import React from "react";
import './Movies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return (
        <main className="movies">
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
        </main>
    );
};

export default Movies;