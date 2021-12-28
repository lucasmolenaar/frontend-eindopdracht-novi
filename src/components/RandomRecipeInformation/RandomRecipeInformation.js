import React from 'react';
import { FaClock } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import Taco from '../../assets/taco.png';

import styles from './RandomRecipeInformation.module.scss';

const RandomRecipeInformation = ({ recipe }) => {
    return (
        <section className={styles.section}>
            <div className={styles['recipe-information']}>
                <h1 className={styles['recipe-title']}>{recipe.title}</h1>

                {
                    recipe.image ?
                        <img src={recipe.image} alt="recipe"/>
                        :
                        <img src={Taco} alt="taco"/>
                }

                <div className={styles['extra-information']}>
                    <p>
                        <FaClock /> &nbsp;
                        Preparation time: {recipe.readyInMinutes} minutes
                    </p>
                    <p>
                        <FaUsers /> &nbsp;
                        Servings: {recipe.servings}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RandomRecipeInformation;