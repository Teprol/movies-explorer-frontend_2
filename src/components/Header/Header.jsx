import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.svg';
import HeaderNav from "../HeaderNav/HeaderNav";

function Header({ loggedIn }) {
    const { pathname } = useLocation(); //отселдить урл

    return (
        <header className={`header ${pathname === '/' ? 'header_promo' : 'header_project'} ${!loggedIn ? 'header_noAuth' : ""}`}>
            <Link to="/" className="hover">
                <img src={logo} alt="Логотип" className="image" />
            </Link>
            <HeaderNav loggedIn={loggedIn}></HeaderNav>
        </header>
    )
}

export default Header;