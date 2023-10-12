import React from "react";
import { ErrorContext } from "../context/ErrorContext";

function useFormsValidation() {
  //стейты для отслеживания значений
  const [values, setValue] = React.useState({name: '', email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [valids, setValids] = React.useState({});
  const [formValid, setFormValid] = React.useState(false);

  const { error, setError } = React.useContext(ErrorContext);

  //функция записывающая стейты
  function handleChange(e) {
    const element = e.target;
    const value = element.value;
    const name = element.name;
    const valid = element.validity.valid;
    const form = e.target.form;
    setValue({ ...values, [name]: value });
    setErrors({ ...errors, [name]: element.validationMessage });
    setValids({ ...valids, [name]: valid });
    setFormValid(form.checkValidity());
    // скидывать ошибку при вводе новых данных
    setError(false);
  }

  function resetError() {
    setError(false);
  }

  return { values, errors, valids, handleChange, formValid, resetError, setValue };
}

export default useFormsValidation;
