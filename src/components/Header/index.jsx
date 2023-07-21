import React from 'react';
import styles from './style.module.css'
import logo from '../../assets/logo_welbex.svg'
import telegram from '../../assets/telegram.svg'
import viber from '../../assets/viber.svg'
import whatsup from '../../assets/whatsapp.svg'


const Header = () => {
    return (
        <header className={styles.header}>

            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img className={styles.logo_img} src={logo} alt="logo_webex" />
                    <p className={styles.logo_text}>
                        крупный интегратор CRM <br /> в Росcии и ещё 8 странах
                    </p>
                </div>
                <ul className={ styles.nav_links}>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li>
                    <li className={ styles.hiden}>Сертификаты</li>
                </ul>
            </nav> 
            <div className={styles.links}>
                <a className={ styles.tel } href="tel:+75555555555">+7 555 555-55-55</a>
                <div className={ styles.soc_media}>
                    <img src={telegram } alt="telegram_icon" />
                    <img src={viber } alt="viber_icon" />
                    <img src={whatsup } alt="whatsup_icon" />
                </div>
            </div>
        </header>
    );
};

export default Header;