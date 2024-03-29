import React, { useContext, useState } from 'react';
import axios from "axios";
import { ScreenWidthContext } from "../../context/ScreenWidthContext";

import NavBar from "../../components/NavBar/NavBar";
import RandomRecipeInformation from "../../components/RandomRecipeInformation/RandomRecipeInformation";
import RandomRecipeIngredients from "../../components/RandomRecipeIngredients/RandomRecipeIngredients";
import RandomRecipeInstructions from "../../components/RandomRecipeInstructions/RandomRecipeInstructions";
import GetRandomRecipe from "../../components/GetRandomRecipe/GetRandomRecipe";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/Quote/Quote";
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";
import ErrorText from "../../components/ErrorText/ErrorText";
import NavBarResp from "../../components/NavBarResp/NavBarResp";

import styles from './RandomPage.module.scss';

const RandomPage = () => {
    const [randomRecipe, setRandomRecipe] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    const { screenWidth } = useContext(ScreenWidthContext);

    const fetchRandomRecipe = async () => {
        toggleLoading(true);
        toggleError(false);

        try {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&limitLicense=true`);
            setRandomRecipe(result.data.recipes[0]);
        } catch (e) {
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <div className={styles['random-page']}>
            {screenWidth < 950 ? <NavBarResp /> : <NavBar />}

            {
                Object.keys(randomRecipe).length > 0 ?
                    <main>
                        <RandomRecipeInformation
                            recipe={randomRecipe}
                        />

                        <RandomRecipeIngredients
                            recipe={randomRecipe}
                        />

                        <RandomRecipeInstructions
                            recipe={randomRecipe}
                        />

                        <GetRandomRecipe
                            text='Get a new recipe?'
                            bgColor='#F1EEE9'
                            btnClickHandler={fetchRandomRecipe}
                        />
                    </main>
                    :
                    <main>
                        <GetRandomRecipe
                            text="Don't know what to cook? Generate a random recipe!"
                            btnClickHandler={fetchRandomRecipe}
                        />

                        {loading ? <LoadingRoller /> : <Quote />}
                        {error && <ErrorText />}

                    </main>
            }

            <Footer
                bgColor={Object.keys(randomRecipe).length > 0 ? '#fff' : '#F1EEE9'}
            />
        </div>
    );
};

export default RandomPage;