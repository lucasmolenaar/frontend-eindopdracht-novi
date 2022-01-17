import React, {useEffect, useState} from 'react';
import { animated, useSpring } from "react-spring";
import facts from "../../assets/facts";
import getRandomNumber from "../../helpers/getRandomNumber";
import styles from './Quote.module.scss';

const Quote = () => {
    const [fact, setFact] = useState({});

    const props = useSpring({
        to: {
            opacity: 1,
            marginTop: 0
        },
        from: {
            opacity: -1,
            marginTop: 100
        },
        config: {
            duration: 500
        }
    })

    useEffect(() => setFact(facts[getRandomNumber(facts)]), [])

    return (
        Object.keys(fact).length > 0 &&
        <animated.div style={props}>
            <div className={styles.quote}>
                <blockquote>
                    <h1 className={styles['did-you-know']}>Did you know...</h1>
                    <p>{fact.content}</p>
                </blockquote>
            </div>
        </animated.div>


    );
}

export default Quote;