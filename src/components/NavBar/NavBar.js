import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <nav className={styles.navbar}>
                <div className={styles['logo-container']}>
                    <h1 className={styles.logo}>
                        Let's Cook
                    </h1>
                </div>

                <ul className={styles['nav-items']}>
                    <li><NavLink exact activeClassName={styles['active-nav-item']} className={styles['nav-item']} to="/">Search</NavLink></li>
                    <li><NavLink exact activeClassName={styles['active-nav-item']} className={styles['nav-item']} to="/random">Random</NavLink></li>
                    <li><NavLink exact activeClassName={styles['active-nav-item']} className={styles['nav-item']} to="/daily">Daily Mealplan</NavLink></li>
                    <li><NavLink exact activeClassName={styles['active-nav-item']} className={styles['nav-item']} to="/weekly">Weekly Mealplan</NavLink></li>
                </ul>

                <div className={styles['login-register']}>
                    <ul>
                        <li><NavLink exact activeClassName={styles['active-nav-item']} className={styles['register-nav-item']} to="/register">Register</NavLink></li>
                        <li className={styles['login-nav-item']}><NavLink exact activeClassName={styles['active-nav-item']} to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;