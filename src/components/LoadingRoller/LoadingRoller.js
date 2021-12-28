import React from 'react';
import styles from './LoadingRoller.module.scss';

const LoadingRoller = () => {
    return (
        <div className={styles['lds-roller']}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default LoadingRoller