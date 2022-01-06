import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import MealplanForm from "../../components/MealplanForm/MealplanForm";

import styles from './WeeklyMealplanPage.module.scss';
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import MealsPerDay from "../../components/MealsPerDay/MealsPerDay";
import Quote from "../../components/Quote/Quote";

const WeeklyMealplanPage = () => {
    const [week, setWeek] = useState({});
    const [calories, setCalories] = useState('');
    const [diet, setDiet] = useState('');
    const [calorieError, toggleCalorieError] = useState(false);

    console.log(week);
    const fetchMeals = async (e) => {
        e.preventDefault();
        try {
            if (calories >= 250) {
                toggleCalorieError(false);

                const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=week&targetCalories=${calories}&diet=${diet}`);
                console.log(result.data);
                setWeek(result.data.week);
            } else {
                toggleCalorieError(true);
            }
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className={styles['weekly-page']}>
            <NavBar />

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
                        <Quote />
                }
            </main>

            <Footer bgColor='#F1EEE9'/>
        </div>
    );
};

export default WeeklyMealplanPage;