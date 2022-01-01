import React from 'react';

import Button from "../Button/Button";

import styles from './MealplanForm.module.scss';

const MealplanForm = ({ submitHandler, calories, diet, setCalories, setDiet}) => {
    // const [calories, setCalories] = useState('');
    // const [diet, setDiet] = useState('');

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <input
                type='number'
                className={styles['calories-input']}
                name='calories'
                placeholder='Calories'
                min='0'
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
            />

            <select
                name="diet"
                className={styles['select-diet']}
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
            >
                <option value="">Diet</option>
                <option value="glutenfree">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescetarian">Pescetarian</option>
            </select>

            <Button
                buttonClass='search-button'
                buttonType='submit'
            >
                Create
            </Button>
        </form>
    );
}

export default MealplanForm;