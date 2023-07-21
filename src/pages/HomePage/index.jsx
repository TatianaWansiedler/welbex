import React from 'react';
import styles from './style.module.css'
import Present from '../../components/Present';
import DecorMob from '../../components/DecorMob';

const HomePage = () => {
    const presents = [
        {id:1, title: 'Виджеты', info: '30 готовых решений'},
        {id:2, title: 'Dashboard', info: 'c показателями вашего бизнеса'},
        {id:3, title: 'Skype Аудит', info: 'отдела продаж и CRM системы'},
        {id:4, title: '35 дней', info: 'использования CRM'},
    ]
    const presents_mob = ['Skype аудит', '30 виджетов','Dashboard', 'Месяц AMOCRM']

    return (
        <div className={styles.page}>
            <div className={ styles.titles_blok}>
                <h1 className={ styles.title}>
                    Зарабатывайте <br /> больше <br />
                    <span>c WELBEX</span>
                </h1>
                <p className={ styles.info_text}>Развиваем и контролируем <br /> продажи за вас</p>
            </div>
            <div className={ styles.services}>
                <h2 className={styles.subtitle}>
                    Вместе c <span> бесплатной <br /> консультацией </span> мы дарим:
                </h2>
                <div className={ styles.presents}>
                    {
                        presents.map((elem) => <Present key={elem.id} {...elem}/>)
                    }
                </div>
                <div className={ styles.presents_mob}>
                    {
                        presents_mob.map((elem) =>
                            <div key={elem} className={ styles.pres_item}>
                                <span className={styles.decor }></span>
                                <p className={ styles.pres_text}>{ elem }</p>
                            </div>
                        )
                    }
                </div>
                <button className={ styles.btn}>Получить консультацию</button>
            </div>
            <DecorMob/>
        </div>
    );
};

export default HomePage;