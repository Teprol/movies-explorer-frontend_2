import React from "react";
import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { ErrorContext } from "../../context/ErrorContext";

import { apiMovi } from "../../utils/MoviesApi";

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const { error, setError } = React.useContext(ErrorContext);

  React.useEffect(() => {
    apiMovi
      .getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        apiMovi.getInfoError("Регестрация не прошла", err);
        setError(true);
      });
  }, []);

  console.log(movies);

  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  );
}

export default Movies;
