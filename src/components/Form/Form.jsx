import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Form.css";

import Button from "../Button/Button";


function Form({ name, children, className }) {
    const [isProfileEdit, setProfileEdit] = React.useState(false);

    React.useEffect(() => {
        setProfileEdit(false);
    }, []);

    function profileEdit() {
        setProfileEdit(true);
    };

    return (
        <form className={`form ${className}`} action="#" noValidate method="POST" name={name} >
            <fieldset className="form__fieldset">
                {children}
            </fieldset>
            <div className="form__container-button">
                {name === "profile"
                    ?
                    <>
                        {isProfileEdit
                            ?
                            <>
                                <p className="form__submit-error"></p>
                                <Button className="button_submit form__button" type="button" onClick={profileEdit}>Сохранить</Button>
                            </>
                            :
                            <>
                                <Button className="form__button button_profile-edit" type="button" onClick={profileEdit}>Редактировать</Button>
                                <Link className="form__link form__link_profile link hover" to="/">Выйти из аккаунта</Link>
                            </>
                        }
                    </>
                    :
                    ""
                }
                {name === "registration"
                    ?
                    <>
                        <p className="form__submit-error"></p>
                        <Button className="form__button button_submit" type="submit">Зарегистрироваться</Button>
                        <p className="form__text">Уже зарегистрированы? <Link className="form__link link hover" to="/signin">Войти</Link></p>
                    </>
                    :
                    ""
                }
                {name === "login"
                    ?
                    <>
                        <p className="form__submit-error"></p>
                        <Button className="form__button button_submit" type="submit">Войти</Button>
                        <p className="form__text">Ещё не зарегистрированы? <Link className="form__link link hover" to="/signup">Регистрация</Link></p>
                    </>
                    :
                    ""
                }
            </div>
        </form >
    );
};

export default Form;