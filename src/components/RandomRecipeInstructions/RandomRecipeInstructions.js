import React from 'react';

import styles from './RandomRecipeInstructions.module.scss';

const RandomRecipeInstructions = ({ recipe }) => {
    return (
        <section className={styles.section}>
            <div className={styles['recipe-instructions']}>
                <h1 className={styles.title}>Instructions</h1>

                <ol className={styles['instructions-list']}>
                    {
                        recipe.analyzedInstructions.length > 0 ?
                            recipe.analyzedInstructions[0].steps.map(( { number, step }) => {
                                return (
                                    <li
                                        className={styles.instruction}
                                        key={number}
                                    >
                                        {step}
                                    </li>
                                )
                            })
                            :
                            <p>No instructions</p>
                    }
                </ol>
            </div>
        </section>
    );
}

export default RandomRecipeInstructions;