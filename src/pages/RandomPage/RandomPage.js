import React, {useState} from 'react';
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import RandomRecipeInformation from "../../components/RandomRecipeInformation/RandomRecipeInformation";
import RandomRecipeIngredients from "../../components/RandomRecipeIngredients/RandomRecipeIngredients";
import RandomRecipeInstructions from "../../components/RandomRecipeInstructions/RandomRecipeInstructions";
import GetRandomRecipe from "../../components/GetRandomRecipe/GetRandomRecipe";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/Quote/Quote";

import styles from './RandomPage.module.scss';
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";

const RandomPage = () => {
    const [randomRecipe, setRandomRecipe] = useState({});
    const [loading, toggleLoading] = useState(false);

    const fetchRandomRecipe = async () => {
        toggleLoading(true);
        try {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&limitLicense=true`);
            console.log(result.data.recipes[0]);
            setRandomRecipe(result.data.recipes[0]);
        } catch (e) {
            console.error(e);
        }

        toggleLoading(false);
    }

    return (
        <div className={styles['random-page']}>
            <NavBar />

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

                    </main>
            }

            <Footer
                bgColor={Object.keys(randomRecipe).length > 0 ? '#fff' : '#F1EEE9'}
            />
        </div>
    );
};

export default RandomPage;