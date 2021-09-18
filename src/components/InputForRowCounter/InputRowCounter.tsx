import React, {ChangeEvent} from "react";
import classes from './InputRowCounter.module.css'

type InputRowCounter = {
    title: string
    setvalue:number
    error:string
    changeEv: (e: ChangeEvent<HTMLInputElement>) => void
}

export function InputRowCounter(props: InputRowCounter) {
    return (
        <div className={classes.inputRowCounter}>
            <span className={classes.title}>{props.title}</span><input type="number"
                                             value={props.setvalue}
                                             onChange={props.changeEv}
                                             className={props.error?classes.errorinput:classes.inputnumbertype}/>
        </div>
    )
}