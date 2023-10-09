import React from "react";

function useFormsValidation() {
  //стейты для отслеживания значений
  const [values, setValue] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [valids, setValids] = React.useState({});
  const [formValid, setFormValid] = React.useState(false);

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
  }

  return { values, errors, valids, handleChange, formValid };
}

export default useFormsValidation;
