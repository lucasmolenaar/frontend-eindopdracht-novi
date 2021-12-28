import React from 'react';

import Button from "../Button/Button";

import styles from './RecipeCard.module.scss';

const RecipeCard = ({ title, imgUrl, calories, prepTime, linkUrl }) => {
    return (
        <li className={styles['recipe-card']}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles['recipe-img']}>
                <img src={imgUrl} alt="recipe"/>
            </div>

            <div className={styles['recipe-info']}>
                <p>Calories: {Math.round(calories)}</p>

                <p>Preparation time: {prepTime} min</p>
            </div>

            <a href={linkUrl}>
                <Button
                    buttonType='button'
                    buttonClass='recipe-link-button'
                >
                    Go to recipe
                </Button>
            </a>

        </li>
    );
}

export default RecipeCard;