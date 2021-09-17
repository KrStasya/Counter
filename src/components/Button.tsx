import React from "react";
import classes from './Button.module.css'




type ButtonPropsType = {
    title: string
    value?: number
    startvalue?: number
    maxvalue?: number
    callback: () => void
}

export function Button(props: ButtonPropsType) {

    const disabled = (props.startvalue===props.value)|| (props.maxvalue === props.value) || (props.maxvalue===props.startvalue)
    return (
        <button className={disabled?classes.disablet:classes.clickbutton} disabled={disabled}
                onClick={props.callback}>{props.title}</button>
    )
}