import React from 'react';
import styles from './style.module.css'
import telegram from '../../assets/telegram.svg'
import viber from '../../assets/viber.svg'
import whatsup from '../../assets/whatsapp.svg'

const linkList = [
    'Расчёт стоимости','Благодарственные письма', 'Услуги',  'Кейсы',
    'Виджеты', 'Сертификаты', 'Интеграции', 'Блог на Youtube',
    'Наши клиенты', 'Вопрос / Ответ'
]
const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.about_blok}>
                <h3 className={ styles.title}>О компании</h3>
                <ul className={ styles.list}>
                    <li>Партнёрская программа</li>
                    <li>Вакансии</li>
                </ul>
            </div>
            <div className={styles.menu}>
                <h3 className={ styles.title}>Меню</h3>
                <ul className={ `${styles.list} ${styles.grid}`}>
                    {
                        linkList.map(el => <li key={el}>{ el }</li>)
                    }
                </ul>
            </div>
            <div className={styles.contacts}>
                <h3 className={styles.title}>Контакты</h3>
                <div className={ styles.links}>
                    <a className={ styles.tel } href="tel:+75555555555">+7 555 555-55-55</a>
                    <div className={ styles.soc_media}>
                        <img src={telegram } alt="telegram_icon" />
                        <img src={viber } alt="viber_icon" />
                        <img src={whatsup } alt="whatsup_icon" />
                    </div>
                    <p>Москва, Путевой проезд 3c1, к 902</p>
                </div>
                <div className={ styles.rights}>
                    <p>©WELBEX 2022. Все права защищены.</p>
                    <a href="/">Политика конфиденциальности</a>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;