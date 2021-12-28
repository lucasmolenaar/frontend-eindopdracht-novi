import React from 'react';
import styles from './GetRandomRecipe.module.scss';
import Button from "../Button/Button";



const GetRandomRecipe = ({ text, bgColor, btnClickHandler }) => {
    return (
        <section style={{backgroundColor: bgColor}} className={styles['generate-recipe-container']}>
            <h1>{text}</h1>

            <Button
                buttonClass='generate-button'
                buttonType='button'
                onClickHandler={btnClickHandler}
            >
                Generate
            </Button>
        </section>
    );
}

export default GetRandomRecipe;