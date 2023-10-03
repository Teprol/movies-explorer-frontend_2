import React from "react";
import "./Profile.css"

import Form from "../Form/Form";
import Input from "../Input/Input";

function Profile() {
    return (
        <main className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <Form className="form_profile" name="profile">
                <Input type="text" name="name" title="Имя" value="Виталий" placeholder="введите имя"></Input>
                <Input className="input_no-border" type="email" name="email" title="E-mail" value="pochta@yandex.ru" placeholder="введите почту"></Input>
            </Form>
        </main>
    );
};

export default Profile;