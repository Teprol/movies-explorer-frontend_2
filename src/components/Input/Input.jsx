import React from "react";
import "./Input.css";

function Input({ className, type, title, name, value, placeholder, maxlength, minLength }) {
    return (
        <div className={`input ${className ? className : ""}`}>
            <label className="input__label">
                <span className="input__title">{title}</span>
                <input className="input__input hover" type={type} name={name} required value={value} placeholder={placeholder} maxlength={maxlength} minLength={minLength} />
            </label>
            <p className="input__eror"></p>
        </div>
    );
};

export default Input;