import React from "react";
import Button from "../../components/Button/Button";

import classes from './About.module.scss';

const EXAMS = [{
    examName: 'MPPSC Prelims',
    number: '3',
},
{
    examName: 'MPPSC Prelims forest',
    number: '1',
}, {
    examName: 'UPSC Prelims',
    number: '2',
}, {
    examName: 'UPSC Prelims forest',
    number: '1',
}]

const About = () => {
    return (
        <section className={classes.container}>
            <div>
                <h2>About Me</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>esetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lor</p>
                <p>Qualified in</p>
                <div>

                </div>
            </div>
        </section>
    )
}

export default About;