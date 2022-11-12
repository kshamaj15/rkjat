import React from "react";

import classes from './Button.module.scss';

const Button = ({ text, icon, onClick }) => {
    return (
        <div className={classes.gradientBg}>
            <button onClick={onClick}>
                {icon && <img height='16px' src={icon} alt='i' />}
                <span>{text}</span>
            </button>
        </div>
    )
}

export default Button;