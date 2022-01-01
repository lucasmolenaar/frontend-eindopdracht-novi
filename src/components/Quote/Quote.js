import React, {useEffect, useState} from 'react';

import styles from './Quote.module.scss';
import axios from "axios";

const Quote = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const result = await axios.get(`https://api.spoonacular.com/food/jokes/random?apiKey=${process.env.REACT_APP_API_KEY}`);
                console.log(result.data.text);

                if (result.data.text.length < 120) {
                    setJoke(result.data.text);
                } else {
                    setJoke('What’s better than a good friend? A good friend with chocolate.')
                }
            } catch (e) {
                console.error(e);
            }
        }

        fetchJoke();
    }, [])

    return (
        <div className={styles['blockquote-wrapper']}>
            <div className={styles['blockquote']}>
                <h1>
                    {joke}
                </h1>
                <h4>&mdash;Let's Cook</h4>
            </div>
        </div>
    );
}

export default Quote;