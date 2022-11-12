import React from "react";
import Button from "../../components/Button/Button";

import hero from '../../Assets/hero.png';
import telegram from '../../Assets/tg.webp';
import youtube from '../../Assets/yt.png';

import classes from './Hero.module.scss';

const Hero = () => {

    const gotoYoutubePage = () => {
        window.open('https://www.youtube.com/rkjat65', '_blank');
    }

    const gotoTelegram = () => {
        window.open('https://www.youtube.com/rkjat65', '_blank');
    }

    return (
        <section className={classes.container}>
            <header>
                <h1>
                    <span>Hi</span>
                    <span className={classes.comma}>,</span>
                    <br />
                    I am
                    &nbsp;
                    <span className={classes.name}>Radhakishan</span>
                </h1>
                <p>You can subscribe to my YouTube channel and join my Telegram channel for insights on UPSC prep</p>
                <Button text='Subscibe my YouTube' icon={youtube} onClick={gotoYoutubePage} />
                <Button text='Join Telegram' icon={telegram} onClick={gotoTelegram} />
            </header>
            <aside className={classes.imgContainer}>
                <img src={hero} alt="main" />
            </aside>
        </section>
    )
}

export default Hero;