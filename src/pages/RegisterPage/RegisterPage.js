import React, { useContext } from 'react';
import { ScreenWidthContext } from "../../context/ScreenWidthContext";

import NavBar from "../../components/NavBar/NavBar";
import NavBarResp from "../../components/NavBarResp/NavBarResp";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
    const { screenWidth } = useContext(ScreenWidthContext);

    return (
        <>
            {screenWidth < 950 ? <NavBarResp /> : <NavBar/>}

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