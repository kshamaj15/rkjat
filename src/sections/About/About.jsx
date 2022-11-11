import React from "react";
import Button from "../../components/Button/Button";

import classes from './About.module.scss';

const About = () => {
    return (
        <section className={classes.container}>
            <header>
                <h1>
                    Hello, Welcome to my page
                </h1>
                <p>You can subscribe to my YouTube channel and join my Telegram channel for insights on UPSC prep</p>
                <Button text='Subscibe my YouTube' />
                <Button text='Join Telegram' />
            </header>
            <aside className={classes.imgContainer}>
                <img src="/Assets/hero.png" alt="main" />
            </aside>
        </section>
    )
}

export default About;