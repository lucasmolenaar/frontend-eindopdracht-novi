import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
    return (
        <>
            <NavBar />

            <div className={styles['register-page']}>
                <section className={styles['img-container']}>
                </section>

                <section className={styles['form-container']}>
                    <RegisterForm />
                </section>
            </div>
        </>

    );
}

export default RegisterPage;