import React, {useContext, useState} from 'react';
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {AuthContext} from "../../context/AuthContext";
import {toast} from "react-toastify";

import styles from './NavBarResp.module.scss';

function NavBarResp() {
    const { logout, authState: { isAuth} } = useContext(AuthContext);
    const [showMenu, toggleShowMenu] = useState(false);

    const toggleNav = () => toggleShowMenu(!showMenu);

    const notify = () => toast.error('You have to be logged in to visit this page.');

    return (
        <nav className={styles.nav}>
            <NavLink className={styles['logo-link']} exact to='/'>
                <h1 className={styles.logo}>Let's Cook</h1>
            </NavLink>

            {
                showMenu &&
                (!isAuth ?
                        <ul className={styles['nav-items']}>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/">Search</NavLink></li>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/random">Random</NavLink></li>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/daily">Daily Mealplan</NavLink></li>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/weekly">Weekly Mealplan</NavLink></li>
                            <li onClick={notify} className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/register">Register</NavLink></li>
                            <li onClick={notify} className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/login">Login</NavLink></li>
                        </ul>
                    :
                        <ul className={styles['nav-items']}>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/">Search</NavLink></li>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/random">Random</NavLink></li>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/daily">Daily Mealplan</NavLink></li>
                            <li className={styles['nav-item']}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/weekly">Weekly Mealplan</NavLink></li>
                            <li className={styles['nav-item']} onClick={logout}><NavLink className={styles['nav-link']} activeClassName={styles['active-nav-item']} exact to="/login">Log Out</NavLink></li>
                        </ul>)
            }


            <div
                className={styles.hamburger}
                onClick={toggleNav}
            >
                <HiOutlineMenuAlt4 size={25}/>
            </div>
        </nav>
    );
}

export default NavBarResp;