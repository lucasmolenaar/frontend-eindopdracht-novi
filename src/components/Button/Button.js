import React from 'react';
import styles from './Button.module.scss';

const Button = ({ buttonType, buttonClass, children, onClickHandler }) => {
    return (
        <button
            className={styles[buttonClass]}
            type={buttonType}
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default Button;