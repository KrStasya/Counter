import React, {ChangeEvent} from "react";
import classes from './InputRowCounter.module.css'

type InputRowCounter = {
    value: string
    changeEv: (e: ChangeEvent<HTMLInputElement>) => void
}

export function InputRowCounter(props: InputRowCounter) {
    return (
        <div className={classes.inputRowCounter}>
            <span>{props.value}</span><input type="number"
                                             onChange={props.changeEv}
                                             className={classes.inputnumbertype}/>
        </div>
    )
}