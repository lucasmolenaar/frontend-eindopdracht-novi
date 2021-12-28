import React from 'react';

import styles from './RandomRecipeIngredients.module.scss';

const RandomRecipeIngredients = ({ recipe }) => {
    return (
        <section className={styles.section}>
            <div className={styles['recipe-ingredients']}>
                <h1 className={styles.title}>Ingredients</h1>

                <ul className={styles['ingredients-list']}>
                    {
                        recipe.extendedIngredients.map(( { original }) => {
                            return (
                                <li
                                    className={styles.ingredient}
                                    key={original}
                                >
                                    {original}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default RandomRecipeIngredients;