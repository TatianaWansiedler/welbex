import React from 'react';
import styles from './style.module.css'
const DecorMob = () => {
    return (
        <>
            <div className={ styles.shadow_red }></div>
            <div className={ styles.shadow_purple}></div>
            <div className={ styles.circle_red}></div>
            <div className={ styles.circle_purple}></div>
        </>
    );
};

export default DecorMob;