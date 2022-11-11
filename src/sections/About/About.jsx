import React from "react";
import Button from "../../components/Button/Button";

import classes from './About.module.scss';

const EXAMS = [{
    content: 'times cleared the MPPSC civil service prelims exam and been qualified for MPPSC civil mains',
    number: '3',
},
{
    content: 'times cleared the MPPSC forest service exam and been qualified for MPPSC forset mains',
    number: '2',
}, {
    content: 'times cleared the UPSC civil service exam and written UPSC mains',
    number: '2',
}, {
    content: 'times cleared the UPSC forest service exam and been qualified for UPSC forest mains',
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
                <div className={classes.grid}>
                    {EXAMS?.map((exam => (<div className={classes.exams}>
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