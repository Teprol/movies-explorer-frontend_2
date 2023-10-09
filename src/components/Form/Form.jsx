import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Form.css";

import Button from "../Button/Button";

import { ErrorContext } from "../../context/ErrorContext";

function Form({ name, children, className, valid, onSubmit }) {
  const [isProfileEdit, setProfileEdit] = React.useState(false);
  const { error, setError } = React.useContext(ErrorContext);

  React.useEffect(() => {
    setProfileEdit(false);
    setError(false);
  }, [setError]);

  function profileEdit() {
    setProfileEdit(true);
  }

  return (
    <form
      className={`form ${className}`}
      action="#"
      noValidate
      method="POST"
      name={name}
      onSubmit={onSubmit}
    >
      <fieldset className="form__fieldset">{children}</fieldset>
      <div className="form__container-button">
        {name === "profile" ? (
          <>
            {isProfileEdit ? (
              <>
                <p className="form__submit-error"></p>
                <Button
                  className={`form__button button_submit ${
                    valid ? "" : "button_disabled"
                  }`}
                  type="button"
                  onClick={profileEdit}
                  disabled={!valid}
                >
                  Сохранить
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="form__button button_profile-edit"
                  type="button"
                  onClick={profileEdit}
                >
                  Редактировать
                </Button>
                <Link
                  className="form__link form__link_profile link hover"
                  to="/"
                >
                  Выйти из аккаунта
                </Link>
              </>
            )}
          </>
        ) : (
          ""
        )}
        {name === "registration" ? (
          <>
            <p className="form__submit-error">
              {error ? "При регистрации пользователя произошла ошибка." : ""}
            </p>
            <Button
              className={`form__button button_submit ${
                valid && !error ? "" : "button_disabled"
              }`}
              type="submit"
              disabled={!valid && error}
            >
              Зарегистрироваться
            </Button>
            <p className="form__text">
              Уже зарегистрированы?{" "}
              <Link className="form__link link hover" to="/signin">
                Войти
              </Link>
            </p>
          </>
        ) : (
          ""
        )}
        {name === "login" ? (
          <>
            <p className="form__submit-error">
              {error ? "Вы ввели неправильный логин или пароль." : ""}
            </p>
            <Button
              className={`form__button button_submit ${
                valid && !error ? "" : "button_disabled"
              }`}
              type="submit"
              disabled={!valid && error}
            >
              Войти
            </Button>
            <p className="form__text">
              Ещё не зарегистрированы?{" "}
              <Link className="form__link link hover" to="/signup">
                Регистрация
              </Link>
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default Form;
