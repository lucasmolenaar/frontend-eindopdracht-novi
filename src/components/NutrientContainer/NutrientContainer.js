import React from 'react';

import styles from './NutrientContainer.module.scss';

function NutrientContainer({ nutrient, icon, name }) {
    return (
        <div className={styles['nutrient-container']}>
            {icon}
            <h1 className={styles.name}>Total {name}</h1>
            <h1 className={styles.amount}>{Math.round(nutrient)}</h1>
        </div>
    );
}

export default NutrientContainer;