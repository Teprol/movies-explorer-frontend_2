import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// @ ипорт компоненов
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js"

import { api } from "../../utils/MainApi";

function App() {
  // стейт авторизации
  // todo вынести это в контекст чтобы можно было получить в любой части приложение
  const [loggedIn, setLoggedIn] = React.useState(false);
  // хук навигации
  const navigate = useNavigate();

  function handleRegisterUser(userData) {
    api
      .regist(userData)
      .then((res) => {
        navigate("/signin");
      })
      .catch((err) => {
        api.getInfoError("Регестрация не прошла", err);
      });
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={loggedIn}></Header>
              <Main></Main>
              <Footer></Footer>
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              {/* <Header loggedIn={loggedIn}></Header> */}
              <ProtectedRoute element={Movies} loggedIn={loggedIn}></ProtectedRoute>
              {/* <Movies loggedIn={loggedIn}></Movies> */}
              {/* <Footer></Footer> */}
            </>
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <>
              {/* <Header loggedIn={loggedIn}></Header> */}
              <ProtectedRoute element={SavedMovies} loggedIn={loggedIn}></ProtectedRoute>
              {/* <SavedMovies loggedIn={loggedIn}></SavedMovies> */}
              {/* <Footer></Footer> */}
            </>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <>
              {/* <Header loggedIn={loggedIn}></Header> */}
              <ProtectedRoute element={Profile} loggedIn={loggedIn}></ProtectedRoute>
              {/* <Profile loggedIn={loggedIn}></Profile> */}
            </>
          }
        ></Route>

        <Route
          path="/signin"
          element={<Login loggedIn={loggedIn}></Login>}
        ></Route>

        <Route
          path="/signup"
          element={
            <Register
              loggedIn={loggedIn}
              onRegist={handleRegisterUser}
            ></Register>
          }
        ></Route>

        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
