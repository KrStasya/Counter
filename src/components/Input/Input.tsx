import React  from "react";
import classes from './Input.module.css'

type InputPropsType = {
    value: number
    maxvalue: number
}

export function Input(props: InputPropsType) {
    return (
        <input
               value={props.value}
               className={props.value === props.maxvalue ? classes.stopcounter : classes.inputstyle}/>
    )
}