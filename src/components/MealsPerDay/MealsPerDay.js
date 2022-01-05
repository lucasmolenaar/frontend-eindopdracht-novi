import React from 'react';
import styles from './MealsPerDay.module.scss';
import MealplanRecipeCard from "../MealplanRecipeCard/MealplanRecipeCard";

function MealsPerDay({ day, info }) {

    console.log(info)

    return (
        <div>
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

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aut blanditiis cupiditate dignissimos distinctio dolorum, eos est expedita harum laboriosam magnam minus molestiae molestias mollitia nemo neque non, nostrum odio officia quaerat quia recusandae repellendus similique tempora temporibus veniam vitae? Architecto laborum magni nam nobis repellendus suscipit tempora vel veniam.
        </div>
    );
}

export default MealsPerDay;