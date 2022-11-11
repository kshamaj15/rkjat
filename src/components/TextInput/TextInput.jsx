import React from "react";

import classes from './TextInput.module.scss';

const TextInput = ({ label, placeholder }) => {
    return (
        <div >
            <label>
                {label}
                <div className={classes.gradientBg}>
                    <input placeholder={label} />
                </div>

            </label>
        </div>
    )

}

export default TextInput;