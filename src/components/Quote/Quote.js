import React from 'react';
import facts from "../../assets/facts";
import styles from './Quote.module.scss';

function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}

const Quote = () => {
    return (
        <div className={styles.quote}>
            <blockquote>
                <h1 className={styles['did-you-know']}>Did you know...</h1>
                <p>{facts[getRandomNumber(facts)].content}</p>
            </blockquote>
        </div>
    );
}

export default Quote;