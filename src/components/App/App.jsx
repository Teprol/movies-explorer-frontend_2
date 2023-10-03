import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// @ ипорт компоненов
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  // стейт авторизации
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={
          <>
            <Header loggedIn={loggedIn}></Header>
            <Main></Main>
            <Footer></Footer>
          </>
        }></Route>

        <Route path='/movies' element={
          <>
            <Header loggedIn={loggedIn}></Header>
            <Movies></Movies>
            <Footer></Footer>
          </>
        }></Route>

        <Route path='/saved-movies' element={
          <>
            <Header loggedIn={loggedIn}></Header>
            <SavedMovies></SavedMovies>
            <Footer></Footer>
          </>
        }></Route>

        <Route path='/profile' element={
          <>
            <Header loggedIn={loggedIn}></Header>
            <Profile></Profile>
          </>
        }></Route>

        <Route path='/signin' element={
          <Login></Login>
        }></Route>

        <Route path='/signup' element={
          <Register></Register>
        }></Route>

        <Route path='/*' element={
          <ErrorPage></ErrorPage>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
