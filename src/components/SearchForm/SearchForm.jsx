import React from "react";
import "./SearchForm.css";

import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="search-form">
            <form action="#" method="get" className="search-form__form" name="get-movie">
                <fieldset className="search-form__fieldset-search">
                    <div className="search-form__container-search">
                        <input type="search" className="search-form__search hover" placeholder="Фильм" name="key-word"></input>
                        <Button className="search-form__submit button_search" type="submit">Поиск</Button>
                    </div>
                    <p className="search-form__errors"></p>
                    <div className="search-form__container-checkbox">
                        <FilterCheckbox></FilterCheckbox>
                        <p className="search-form__checkbox-text">Короткометражки</p>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default SearchForm;