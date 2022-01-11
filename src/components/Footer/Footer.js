import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ bgColor }) => {
    return (
        <footer style={{backgroundColor: bgColor}} className={styles.footer}>
            <p>© 2022 - Let’s Cook</p>
        </footer>
    );
};

export default Footer;