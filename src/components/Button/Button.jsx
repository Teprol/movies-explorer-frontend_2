import React from "react";
import "./Button.css"

function Button({ type, className, children, onClick }) {
    return (
        <button type={type} className={`${className} hover button button-component`} onClick={onClick}>{children}</button>
    );
};

export default Button;