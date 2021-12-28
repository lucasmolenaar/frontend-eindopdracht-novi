import React from 'react';
import { useForm } from "react-hook-form";

import InputField from "../InputField/InputField";
import Button from "../Button/Button";

import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const onFormSubmit = data => console.log(data);

    return (
            <form className={styles['register-form']} onSubmit={handleSubmit(onFormSubmit)}>
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

                <p>Already have an account? <a href='/' className={styles['signin-link']}>Sign in</a></p>
            </form>
    );
}

export default RegisterForm;