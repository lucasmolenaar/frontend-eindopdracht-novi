import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { animated, useSpring } from "react-spring";
import { ScreenWidthContext } from "../../context/ScreenWidthContext";

import NavBar from "../../components/NavBar/NavBar";
import NavBarResp from "../../components/NavBarResp/NavBarResp";
import SearchForm from "../../components/SearchForm/SearchForm";
import Footer from "../../components/Footer/Footer";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";
import ErrorText from "../../components/ErrorText/ErrorText";

import styles from './SearchPage.module.scss';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const { screenWidth } = useContext(ScreenWidthContext);

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: {
            duration: 1000
        }
    })

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchRecipes = async () => {
            toggleLoading(true);
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&number=12&addRecipeNutrition=true`, {
                    cancelToken: source.token,
                });
                setSearchedRecipes(result.data.results);

                return function cleanup() { source.cancel(); }
            } catch (e) {
                toggleError(true);
            }

            toggleLoading(false);
        }

            fetchRecipes();

    }, [])

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchRecipes = async () => {
            toggleLoading(true);
            toggleError(false);

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&cuisine=${cuisine}&number=12&addRecipeNutrition=true`, {
                    cancelToken: source.token,
                });
                setSearchedRecipes(result.data.results);

                return function cleanup() { source.cancel(); }
            } catch (e) {
                toggleError(true);
                console.error(e);
            }

            toggleLoading(false);
        }

        fetchRecipes();

    }, [searchQuery, cuisine])

    return (
        <div className={styles['search-page']}>
            {screenWidth < 950 ? <NavBarResp /> : <NavBar />}

            <header className={styles.header}>
                <h1>What recipe are you looking for?</h1>

                <SearchForm
                    setSearchQueryHandler={setSearchQuery}
                    setCuisineHandler={setCuisine}
                    searchedRecipes={searchedRecipes}
                />
            </header>

            {loading && <LoadingRoller />}
            {error && <ErrorText />}

            {
                searchedRecipes ?
                    <animated.div style={props}>
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
                    </animated.div>
                    :
                    <div>

                    </div>
            }

            <Footer bgColor='#FFF'/>
        </div>
    );
};

export default SearchPage;