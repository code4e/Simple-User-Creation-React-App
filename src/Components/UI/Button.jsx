import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const {btnClasses, btnType, btnClickHandler} = props;
    const handleBtnClick = e => btnClickHandler !== undefined && btnClickHandler();
    return (
        <button type={`${btnType}`} className={classes[btnClasses]} onClick={handleBtnClick}>
            {props.children}
        </button>
    )
}

export default Button