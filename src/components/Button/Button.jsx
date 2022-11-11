import React from "react";

import classes from './Button.module.scss';

const Button = ({ text, icon, varient }) => {
    return (
        <div className={classes.gradientBg}>
            <button>
                <span>{text}</span>
            </button>
        </div>
    )
}

export default Button;