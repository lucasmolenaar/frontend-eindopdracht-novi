import React from 'react';

import styles from './InputField.module.scss';

const InputField = ({ labelText, inputType = 'text', inputId, inputName, placeholder, register, errors, validationRules }) => {
    return (
        <>
            <label htmlFor={inputId}>
                {labelText}
            </label>

            <input
                className={errors[inputName] ? styles['input-error'] : styles.input}
                type={inputType}
                id={inputId}
                {...register(inputName, validationRules)}
                placeholder={errors[inputName] ? errors[inputName].message : placeholder}
            />
        </>
    );
};

export default InputField;