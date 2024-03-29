import React from 'react';

import MealplanRecipeCard from "../MealplanRecipeCard/MealplanRecipeCard";

import styles from './MealsPerDay.module.scss';

function MealsPerDay({ day, info }) {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>{day}</h1>

            <ul className={styles['meals-per-day']}>
                {info.meals.map(meal => {
                    return (
                        <MealplanRecipeCard
                            title={meal.title}
                            prepTime={meal.readyInMinutes}
                            servings={meal.servings}
                            urlLink={meal.sourceUrl}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default MealsPerDay;