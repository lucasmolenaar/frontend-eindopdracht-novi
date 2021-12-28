import React, {useState} from 'react';

import Button from "../Button/Button";
import SelectCuisine from "../SelectCuisine/SelectCuisine";

import styles from './SearchForm.module.scss';

const SearchForm = ({ setSearchQueryHandler, setCuisineHandler, searchedRecipes }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cuisineValue, setCuisineValue] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setSearchQueryHandler(searchQuery);
        setCuisineHandler(cuisineValue);
        console.log(searchQuery, searchedRecipes);
    }

    return (
        <form className={styles['search-form']} onSubmit={formSubmitHandler}>
            <input
                type="text"
                className={styles['search-input']}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <SelectCuisine
                cuisineValue={cuisineValue}
                setCuisineValue={setCuisineValue}
            />

            <Button buttonType="submit" buttonClass="search-button">
                Search
            </Button>
        </form>
    );
};

export default SearchForm;