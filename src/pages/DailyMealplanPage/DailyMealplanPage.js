import React, { useState } from 'react';
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import MealplanForm from "../../components/MealplanForm/MealplanForm";
import MealplanNutrition from "../../components/MealplanNutrition/MealplanNutrition";
import MealplanRecipeCard from "../../components/MealplanRecipeCard/MealplanRecipeCard";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/Quote/Quote";

import styles from './DailyMealplanPage.module.scss';
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";

const DailyMealplanPage = () => {

    const [meals, setMeals] = useState([]);
    const [nutrients, setNutrients] = useState({});
    const [calories, setCalories] = useState('');
    const [diet, setDiet] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [calorieError, toggleCalorieError] = useState(false);

    const fetchMeals = async (e) => {
        e.preventDefault();
        try {
            toggleLoading(true);
            if (calories >= 250) {
                toggleCalorieError(false);

                const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}`);
                setMeals(result.data.meals);
                setNutrients(result.data.nutrients)
            } else {
                toggleCalorieError(true);
            }
        } catch (e) {
            console.error(e);
        }

        toggleLoading(false);
    }

    return (
        <main className={styles.main}>
            <NavBar />

            <header>
                <h1>Create a mealplan for today!</h1>

                <MealplanForm
                    submitHandler={fetchMeals}
                    calories={calories}
                    diet={diet}
                    setCalories={setCalories}
                    setDiet={setDiet}

                />

                {calorieError && <p className={styles['calorie-error-text']}>Minimum amount of calories is 250, please try again.</p>}
            </header>

            {
                Object.keys(nutrients).length > 0 ?
                    <div className={styles.container}>
                        <MealplanNutrition
                            nutrients={nutrients}
                        />

                        <section className={styles['meal-cards-container']}>
                            <ul className={styles['meal-cards']}>
                                {
                                    meals.map((meal) => {
                                        return (
                                            <li key={meal.sourceUrl}>
                                                <MealplanRecipeCard
                                                    title={meal.title}
                                                    prepTime={meal.readyInMinutes}
                                                    servings={meal.servings}
                                                    urlLink={meal.sourceUrl}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                    </div>
                    :
                    loading ? <LoadingRoller /> : <Quote />

            }

            <Footer bgColor='#F1EEE9'/>
        </main>
    );
};

export default DailyMealplanPage;