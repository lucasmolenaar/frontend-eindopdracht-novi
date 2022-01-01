import React from 'react';

import Button from "../Button/Button";

import styles from './MealplanRecipeCard.module.scss';
import { FaClock } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

function MealplanRecipeCard({ title, prepTime, servings, urlLink }) {
    return (
        <div className={styles['meal-card']}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.info}>
                <p>
                    <FaClock /> &nbsp;
                    Preparation time: {prepTime}
                </p>

                <p>
                    <FaUsers /> &nbsp;
                    Servings: {servings}
                </p>
            </div>

            <a href={urlLink}>
                <Button buttonClass='recipe-link-button' buttonType='button'>
                    Go to recipe
                </Button>
            </a>
        </div>
    );
}

export default MealplanRecipeCard;