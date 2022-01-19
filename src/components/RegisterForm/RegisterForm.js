import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import styles from './RegisterForm.module.scss';
import axios from "axios";

const RegisterForm = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = async (data) => {
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                'username': data.username,
                'email': data.email,
                'password': data.password,
            })

            console.log(result);

            history.push('/login');
        } catch (e) {
            console.error(e.response);
        }
    }

    return (
            <form className={styles['register-form']} onSubmit={handleSubmit(handleFormSubmit)}>
                <h1>Register</h1>

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
                    labelText='Email'
                    inputType='email'
                    inputId='email-input'
                    inputName='email'
                    placeholder="Email"
                    register={register}
                    errors={errors}
                    validationRules={{required: 'Email is required'}}
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
                    Register
                </Button>

                <p>Already have an account? <Link to='/login' className={styles['signin-link']}>Sign in</Link></p>
            </form>
    );
}

export default RegisterForm;