import React from 'react';
import styles from './style.module.css'

const Present = ({ title, info}) => {
    return (
        <div className={ styles.item }>
            <h3 className={ styles.title }>{ title}</h3>
            <p className={styles.info}>{ info}</p>
        </div>
    );
};

export default Present; 