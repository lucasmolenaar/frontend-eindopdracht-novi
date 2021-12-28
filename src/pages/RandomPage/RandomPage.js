import React, {useState} from 'react';

import NavBar from "../../components/NavBar/NavBar";

import axios from "axios";
import RandomRecipeInformation from "../../components/RandomRecipeInformation/RandomRecipeInformation";
import RandomRecipeIngredients from "../../components/RandomRecipeIngredients/RandomRecipeIngredients";
import RandomRecipeInstructions from "../../components/RandomRecipeInstructions/RandomRecipeInstructions";
import GetRandomRecipe from "../../components/GetRandomRecipe/GetRandomRecipe";
import Footer from "../../components/Footer/Footer";

import styles from './RandomPage.module.scss';

const RandomPage = () => {
    const [randomRecipe, setRandomRecipe] = useState({});

    const fetchRandomRecipe = async () => {
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
    }

    return (
        <div>
            <NavBar />

            {
                Object.keys(randomRecipe).length > 0 ?
                    <main className={styles.main}>
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

                        <Footer
                            bgColor='#FFF'
                        />
                    </main>
                    :
                    <main>
                        <GetRandomRecipe
                            text="Don't know what to cook? Generate a random recipe!"
                            btnClickHandler={fetchRandomRecipe}
                        />

                        <Footer
                            bgColor='#F1EEE9'
                        />
                    </main>



            }
        </div>
    );
};

export default RandomPage;