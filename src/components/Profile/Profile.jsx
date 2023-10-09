import React from "react";
import { Navigate } from "react-router-dom";
import "./Profile.css";

import Form from "../Form/Form";
import Input from "../Input/Input";

import useFormsValidation from "../../hoocks/useFormsValidation.js";
import { paternEmail, paternName } from "../../utils/constants";

function Profile({ loggedIn }) {
  const { handleChange, errors, valids, formValid, values } =
    useFormsValidation();

  return !loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <Form
        className="form_profile profile__form"
        name="profile"
        valid={formValid}
      >
        <Input
          type="text"
          name="name"
          title="Имя"
          // value="Виталий"
          placeholder="введите имя"
          minLength="2"
          maxLength="20"
          onChange={handleChange}
          errors={errors.name}
          valids={valids.name}
          pattern={paternName}
        ></Input>
        <Input
          className="input_no-border"
          type="email"
          name="email"
          title="E-mail"
          // value="pochta@yandex.ru"
          placeholder="введите почту"
          minLength="5"
          onChange={handleChange}
          errors={errors.email}
          valids={valids.email}
          pattern={paternEmail}
        ></Input>
      </Form>
    </main>
  );
}

export default Profile;
