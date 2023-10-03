import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Login.css"

import Form from "../Form/Form";
import Input from "../Input/Input";

import logo from "../../images/logo.svg"

function Login() {
    return (
        <main className="login">
            <div className="login__container">
                <Link to="/" className="hover login__logo">
                    <img src={logo} alt="Логотип" className="image" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <Form className="login__form" name="login">
                    <Input className="input_label-top" type="email" title="E-mail" placeholder="Почта" name="email"></Input>
                    <Input className="input_label-top" type="password" title="Пароль" placeholder="Пароль" name="password"></Input>
                </Form>
            </div>
        </main>
    );
};

export default Login;