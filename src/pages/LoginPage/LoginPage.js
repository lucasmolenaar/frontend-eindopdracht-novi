import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";

import styles from './LoginPage.module.css';

const LoginPage = () => {
    return (
        <>
            <NavBar />

            <div className={styles['login-page']}>
                <section className={styles['form-container']}>
                    <LoginForm />
                </section>

                <section className={styles['img-container']}>
                </section>
            </div>
        </>

    );
}

export default LoginPage;