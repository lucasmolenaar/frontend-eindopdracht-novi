import React, { useState } from 'react';
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import MealplanForm from "../../components/MealplanForm/MealplanForm";
import MealplanNutrition from "../../components/MealplanNutrition/MealplanNutrition";

import styles from './DailyMealplan.module.scss';
import RecipeCard from "../../components/RecipeCard/RecipeCard";



const DailyMealplanPage = () => {

    const [meals, setMeals] = useState([]);
    const [nutrients, setNutrients] = useState({});
    // const [calories, setCalories] = useState(0);

    const fetchMeals = async (e) => {
        try {
            e.preventDefault();
            const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=3000`);
            console.log(result.data);
            setMeals(result.data.meals);
            setNutrients(result.data.nutrients)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main className={styles.main}>
            <NavBar />

            <header>
                <h1>Create a mealplan for today!</h1>

                <MealplanForm
                    submitHandler={fetchMeals}
                />
            </header>

            {
                Object.keys(nutrients).length > 0 &&
                    <main className={styles.main}>
                        <MealplanNutrition
                            nutrients={nutrients}
                        />

                    </main>
            }
        </main>
    );
};

export default DailyMealplanPage;