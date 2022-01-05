import React, { useState } from 'react';
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import MealplanForm from "../../components/MealplanForm/MealplanForm";
import MealplanNutrition from "../../components/MealplanNutrition/MealplanNutrition";
import MealplanRecipeCard from "../../components/MealplanRecipeCard/MealplanRecipeCard";
import Footer from "../../components/Footer/Footer";
import Quote from "../../components/Quote/Quote";

import styles from './DailyMealplanPage.module.scss';

const DailyMealplanPage = () => {

    const [meals, setMeals] = useState([]);
    const [nutrients, setNutrients] = useState({});
    const [calories, setCalories] = useState('');
    const [diet, setDiet] = useState('');

    const fetchMeals = async (e) => {
        try {
            e.preventDefault();
            const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}`);
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
                    calories={calories}
                    diet={diet}
                    setCalories={setCalories}
                    setDiet={setDiet}

                />
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
                    <Quote />
            }

            <Footer bgColor='#F1EEE9'/>
        </main>
    );
};

export default DailyMealplanPage;