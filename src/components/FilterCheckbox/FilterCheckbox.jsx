import React from "react";
import "./FilterCheckbox.css"

function FilterCheckbox() {
    return (
        <label className="filter-Checkbox">
            <input type="checkbox" className="filter-Checkbox__input"></input>
            <span className="filter-Checkbox__slider"></span>
        </label>
    );
};

export default FilterCheckbox;