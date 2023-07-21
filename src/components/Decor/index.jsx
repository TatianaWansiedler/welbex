import React from 'react';
import styles from './style.module.css'
const Decor = () => {
    return (
        <div>
            <div className={ styles.shadow_red }></div>
            <div className={ styles.shadow_purple}></div>
            <div className={ styles.circle_middle}></div>
            <div className={ styles.circle_big}></div>
            <div className={ styles.circle_small}></div>
        </div>
    );
};

export default Decor;