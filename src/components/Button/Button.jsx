import React from "react";

import classes from './Button.module.scss';

const Button = ({ text, icon, varient, onClick }) => {
    return (
        <div className={classes.gradientBg}>
            <button onClick={onClick}>
                <img height='16px' src={icon} />
                <span>{text}</span>
            </button>
        </div>
    )
}

export default Button;