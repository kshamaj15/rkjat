import React from "react";
import Button from "../Button/Button";

import classes from './Content.module.scss';

const Content = () => {
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
            <aside>
                <img src="/Assets/main.png" alt="main" />
            </aside>
        </section>
    )
}

export default Content;