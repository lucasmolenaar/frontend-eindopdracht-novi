import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import styles from './LoginForm.module.scss';
import axios from "axios";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = async (data) => {
        console.log(data);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                'username': data.username,
                'password': data.password,
            });

            console.log(result);
        } catch (e) {
            console.error(e.response);
        }
    }

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit(handleFormSubmit)}>
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

            <p>Don't have an account yet? <Link to='/register' className={styles['signup-link']}>Sign up</Link></p>
        </form>
    );
};

export default LoginForm;