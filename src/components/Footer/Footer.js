import React from 'react';
import styles from './Footer.module.scss';

const Footer = ({ bgColor }) => {
    return (
        <footer style={{backgroundColor: bgColor}} className={styles.footer}>
            <p>© 2021 - Let’s Cook</p>
        </footer>
    );
};

export default Footer;