//@ Первый файл будет содержать описание запросов к нашему Api
class MainApi {
  constructor() {
    this._baseUrl = "http://localhost:3000";
    // this._authorization = "";
    // this._headers = {
    //   authorization: `Bearer ${localStorage.getItem("token")}`,
    //   "Content-Type": "application/json",
    // };
  }

  //при ошибке выводит в консоль посвеченную надпись об ошибке
  getInfoError = (err, errInf) => {
    console.log(
      `%c${err}`,
      `color: red; font-size: 24px; background-color: black; padding: 3px; text-align: center;`
    );
    console.error(errInf);
  };

  // вывод ошибок в качестве пример api.infoError('текст ошибки', err);
  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      const lol = res.json();
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
  };

  // регистрация пользователя
  regist = ({ email, password, name }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email, name }),
    }).then(this._checkResponse);
  };

  // авторизация пользователя
  authorization = ({ email, password }) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  };

  // проверка токена
  getToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    }).then(this._checkResponse);
  };
}

export const api = new MainApi();
