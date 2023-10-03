import React from "react";
import "./SearchForm.css";

import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
        <section className="searchForm">
            <form action="#" method="get" className="searchForm__form" name="get-movie">
                <fieldset className="searchForm__fieldset-search">
                    <div className="searchForm__container-search">
                        <input type="search" className="searchForm__search hover" placeholder="Фильм" name="key-word"></input>
                        <Button className="searchForm__submit button_search" type="submit">Поиск</Button>
                    </div>
                    <p className="searchForm__errors"></p>
                    <div className="searchForm__container-checkbox">
                        <FilterCheckbox></FilterCheckbox>
                        <p className="searchForm__checkbox-text">Короткометражки</p>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default SearchForm;