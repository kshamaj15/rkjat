import React from "react";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

import classes from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={classes.container}>
            <h2>Get In Touch</h2>
            <div className={classes.formContainer}>
                <form>
                    <TextInput label='Phone Number' />
                    <TextInput label='Email' />
                    <TextInput label='Message' />
                    <Button text='Send' />
                </form>
            </div>
        </section>
    )
}

export default Contact;