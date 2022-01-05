import React, { useEffect, useState } from 'react';
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";

import styles from './SearchPage.module.scss';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&number=12&addRecipeNutrition=true`);
                setSearchedRecipes(result.data.results);
            } catch (e) {
                console.error(e);
            }

            setLoading(false);
        }

            fetchRecipes();

    }, [])

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&cuisine=${cuisine}&number=12&addRecipeNutrition=true`);
                setSearchedRecipes(result.data.results);
            } catch (e) {
                console.error(e);
            }

            setLoading(false);
        }

        fetchRecipes();

    }, [searchQuery, cuisine])

    return (
        <div className={styles['search-page']}>
            <NavBar />

            <header className={styles.header}>
                <h1>What recipe are you looking for?</h1>

                <SearchForm
                    setSearchQueryHandler={setSearchQuery}
                    setCuisineHandler={setCuisine}
                    searchedRecipes={searchedRecipes}
                />
            </header>

            {loading && <LoadingRoller />}

            {
                searchedRecipes ?
                    <section className={styles['recipes-container']}>
                        <ul className={styles['recipe-list']}>
                            {searchedRecipes.map(recipe => {
                                return (
                                    <RecipeCard
                                        key={recipe.id}
                                        title={recipe.title}
                                        imgUrl={recipe.image}
                                        calories={recipe.nutrition.nutrients[0].amount}
                                        prepTime={recipe.readyInMinutes}
                                        linkUrl={recipe.sourceUrl}
                                    />
                                );
                            })}
                        </ul>
                    </section>
                    :
                    <div>

                    </div>
            }

            <Footer bgColor='#FFF'/>
        </div>
    );
};

export default SearchPage;