import React from "react";
import classes from './Button.module.css'




type ButtonPropsType = {
    title: string
    value: number
    startvalue?: number
    maxvalue?: number
    callback: () => void
}

export function Button(props: ButtonPropsType) {

    const disabled = props.value === props.startvalue || props.maxvalue === props.value
    return (
        <button className={disabled?classes.disablet:classes.clickbutton} disabled={disabled}
                onClick={props.callback}>{props.title}</button>
    )
}