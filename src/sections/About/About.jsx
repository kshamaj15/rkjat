import React from "react";

import { EXAMS } from "../../constants";
import classes from './About.module.scss';

const About = () => {
    return (
        <section className={classes.container} id='about'>
            <div>
                <h2>About Me</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>esetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lor</p>
                <p>Qualified in</p>
                <div className={classes.grid}>
                    {EXAMS?.map(((exam, index) => (<div key={index} className={classes.exams}>
                        <div className={classes.number}>{exam.number}</div>
                        <div className={classes.examContent}>
                            {exam.content}
                        </div>
                    </div>)))}
                </div>
            </div>
        </section>
    )
}

export default About;