import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = data => console.log(data);

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit(onFormSubmit)}>
            <h1>Login</h1>

            <InputField
                labelText='Username'
                inputId='username-input'
                inputName='username'
                placeholder="Username"
                register={register}
                errors={errors}
                validationRules={{required: 'Username is required'}}
            />

            <InputField
                labelText='Password'
                inputType='password'
                inputId='password-input'
                inputName='password'
                placeholder="Password"
                register={register}
                errors={errors}
                validationRules={{required: 'Password is required'}}
            />

            <Button
                buttonClass='register-button'
            >
                Login
            </Button>

            <p>Don't have an account yet? <a href='/register' className={styles['signup-link']}>Sign up</a></p>
        </form>
    );
};

export default LoginForm;