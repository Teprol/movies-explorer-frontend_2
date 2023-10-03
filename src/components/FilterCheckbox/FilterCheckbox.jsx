import React from "react";
import "./FilterCheckbox.css"

function FilterCheckbox() {
    return (
        <label className="filter-Checkbox">
            <input type="checkbox" className="filter-Checkbox__input"></input>
            <div className="filter-Checkbox__slider"></div>
        </label>
    );
};

export default FilterCheckbox;