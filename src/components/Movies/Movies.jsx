import React from "react";
import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { apiMovi } from "../../utils/MoviesApi";

function Movies() {
  // стейт переменная фильмов с api
  const [movies, setMovies] = React.useState([]);
  // стейт ошибок запроса
  const [error, setError] = React.useState(false);
  // стейт отфильрованных карточек
  const [movieFilter, setMovieFilter] = React.useState([]);

  function filterMovie({ searchString, isCheckbox }, movies) {
    // приведем запрос к однному виду
    // const searchLower = searchString.toLowerCase();
    setMovieFilter(
      movies.filter((movie) => {
        const searchName =
          movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchString.toLowerCase());
        console.log(searchName);
        return isCheckbox ? searchName && movie.duration <= 40 : searchName;
      })
    );
  }

  //поиск и загрузка фильмов
  function searchMovies(objectSearch) {
    //todo  тут нужна загрузка прелодера
    localStorage.setItem("searchQuery", JSON.stringify(objectSearch));
    apiMovi
      .getMovies()
      .then((res) => {
        setMovies(res);
        filterMovie(objectSearch, res);
      })
      .catch((err) => {
        apiMovi.getInfoError("Ошибка при загрузке фильмов", err);
        setError(true);
      });
  }

  return (
    <main className="movies">
      <SearchForm search={searchMovies}></SearchForm>
      <MoviesCardList movieArr={movieFilter} error={error}></MoviesCardList>
    </main>
  );
}

export default Movies;
