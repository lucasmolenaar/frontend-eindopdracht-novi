import React, { useState, useContext } from 'react';
import axios from "axios";
import {ScreenWidthContext} from "../../context/ScreenWidthContext";

import NavBar from "../../components/NavBar/NavBar";
import MealplanForm from "../../components/MealplanForm/MealplanForm";
import Footer from "../../components/Footer/Footer";
import MealsPerDay from "../../components/MealsPerDay/MealsPerDay";
import Quote from "../../components/Quote/Quote";
import LoadingRoller from "../../components/LoadingRoller/LoadingRoller";
import ErrorText from "../../components/ErrorText/ErrorText";
import NavBarResp from "../../components/NavBarResp/NavBarResp";

import styles from './WeeklyMealplanPage.module.scss';

const WeeklyMealplanPage = () => {
    const [week, setWeek] = useState({});
    const [calories, setCalories] = useState('');
    const [diet, setDiet] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [calorieError, toggleCalorieError] = useState(false);

    const { screenWidth } = useContext(ScreenWidthContext);

    console.log(week);
    const fetchMeals = async (e) => {
        e.preventDefault();
        toggleLoading(true);
        toggleError(false);
        try {
            if (calories >= 250) {
                toggleCalorieError(false);

                const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=week&targetCalories=${calories}&diet=${diet}`);
                setWeek(result.data.week);
                setCalories('');
            } else {
                toggleCalorieError(true);
            }
        } catch (e) {
            toggleError(true);
        }
        toggleLoading(false);
    }


    return (
        <div className={styles['weekly-page']}>
            {screenWidth < 950 ? <NavBarResp /> : <NavBar />}

            <header>
                <h1>Create a mealplan for a week!</h1>

                <MealplanForm
                    submitHandler={fetchMeals}
                    calories={calories}
                    diet={diet}
                    setCalories={setCalories}
                    setDiet={setDiet}
                />

                {calorieError && <p className={styles['calorie-error-text']}>Minimum amount of calories is 250, please try again.</p>}
            </header>

            {error && <ErrorText />}

            <main>
                {
                    Object.keys(week).length > 0 ?
                        <div>
                            <MealsPerDay
                                info={week.monday}
                                day='Monday'
                            />

                            <MealsPerDay
                                info={week.monday}
                                day='Tuesday'
                            />

                            <MealsPerDay
                                info={week.monday}
                                day='Wednesday'
                            />

                            <MealsPerDay
                                info={week.monday}
                                day='Thursday'
                            />

                            <MealsPerDay
                                info={week.monday}
                                day='Friday'
                            />

                            <MealsPerDay
                                info={week.monday}
                                day='Saturday'
                            />

                            <MealsPerDay
                                info={week.monday}
                                day='Sunday'
                            />
                        </div>
                        :
                        loading ? <LoadingRoller /> : <Quote />
                }
            </main>

            <Footer bgColor='#F1EEE9'/>
        </div>
    );
};

export default WeeklyMealplanPage;