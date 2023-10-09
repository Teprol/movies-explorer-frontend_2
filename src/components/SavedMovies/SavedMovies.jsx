import React from "react";
import { Navigate } from "react-router-dom";
import "./SavedMovies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ loggedIn }) {
  return !loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  );
}

export default SavedMovies;
