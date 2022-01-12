import React, { useContext } from 'react';
import { ScreenWidthContext } from "../../context/ScreenWidthContext";

import NavBar from "../../components/NavBar/NavBar";
import LoginForm from "../../components/LoginForm/LoginForm";
import NavBarResp from "../../components/NavBarResp/NavBarResp";

import styles from './LoginPage.module.css';

const LoginPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <>
            { screenWidth < 950 ? <NavBarResp /> : <NavBar /> }

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