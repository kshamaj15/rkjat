import React from "react";
import Button from "../Button/Button";

import classes from './About.module.scss';

const About = () => {
    return (
        <section className={classes.container}>
            <header>
                <h1>
                    Hello, Welcome to my page
                </h1>
                <p>You can subscribe to my free newsletter and join my Telegram channel for insights on UPSC prep</p>
                <Button text='Subscibe my Newsletter' />
                <Button text='Join Telegram' />
            </header>
            <aside>
                <img src="/Assets/main.png" alt="main" />
            </aside>
        </section>
    )
}

export default About;