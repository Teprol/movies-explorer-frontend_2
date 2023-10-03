import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Register.css"

import Form from "../Form/Form";
import Input from "../Input/Input";

import logo from "../../images/logo.svg"

function Register() {
    return (
        <main className="register">
            <div className="register__container">
                <Link to="/" className="hover register__logo">
                    <img src={logo} alt="Логотип" className="image" />
                </Link>
                <h2 className="register__title">Добро пожаловать!</h2>
                <Form className="register__form" name="registration">
                    <Input className="input_label-top" type="text" title="Имя" placeholder="Имя" name="name"></Input>
                    <Input className="input_label-top" type="email" title="E-mail" placeholder="Почта" name="email"></Input>
                    <Input className="input_label-top" type="password" title="Пароль" placeholder="Пароль" name="password"></Input>
                </Form>
            </div>
        </main>
    );
};

export default Register;