import React from 'react';
import NutrientContainer from "../NutrientContainer/NutrientContainer";

import { IconContext } from "react-icons";
import { FaBurn, FaDrumstickBite, FaFish, FaBreadSlice } from 'react-icons/fa';
import styles from './MealplanNutrition.module.scss';

function MealplanNutrition({ nutrients }) {
    return (
        <section className={styles.section}>
            <div className={styles['nutrition-container']}>
                <IconContext.Provider value={{ size: '4em'}}>
                    <NutrientContainer
                        nutrient={nutrients.calories}
                        icon={<FaBurn />}
                        name='Calories'
                    />

                    <NutrientContainer
                        nutrient={nutrients.protein}
                        icon={<FaDrumstickBite />}
                        name='Protein'
                    />

                    <NutrientContainer
                        nutrient={nutrients.fat}
                        icon={<FaFish />}
                        name='Fats'
                    />

                    <NutrientContainer
                        nutrient={nutrients.carbohydrates}
                        icon={<FaBreadSlice />}
                        name='Carbs'
                    />
                </IconContext.Provider>
            </div>
        </section>
    );
}


export default MealplanNutrition;