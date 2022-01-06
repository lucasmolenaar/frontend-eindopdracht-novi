import React, {useEffect, useState} from 'react';
import facts from "../../assets/facts";
import getRandomNumber from "../../helpers/getRandomNumber";
import styles from './Quote.module.scss';

const Quote = () => {
    const [fact, setFact] = useState({});

    useEffect(() => setFact(facts[getRandomNumber(facts)]), [])

    return (
        Object.keys(fact).length > 0 &&
        <div className={styles.quote}>
            <blockquote>
                <h1 className={styles['did-you-know']}>Did you know...</h1>
                <p>{fact.content}</p>
            </blockquote>
        </div>
    );
}

export default Quote;