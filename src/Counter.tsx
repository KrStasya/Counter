import React from "react";
import {Button} from './components/Button';
import {Input} from './components/Input';
;


type CounterPropsType = {
    value: number
    error:string
    message:string
    startvalue: number
    maxvalue: number
    addValue: (value: number) => void
    resetValue: (startvalue: number) => void
}

export function Counter(props: CounterPropsType) {
    const addValue = () => props.addValue(props.value)
    const resetValue = () => props.resetValue(props.startvalue)

    return (
        <div className={"CounterArea"}>
            <div className={"inputarea"}>
                {props.error?<div className={"error"}>{props.error}</div>
                :props.message?<div className={"message"}>{props.message}</div>
                        :<Input value={props.value} maxvalue={props.maxvalue}/>}
            </div>
            <div className={"buttonarea"}>
                <Button title={"Add"} value={props.value} maxvalue={props.maxvalue} callback={addValue}/>
                <Button title={"Reset"} value={props.value} startvalue={props.startvalue} callback={resetValue}/>
            </div>
        </div>
    )
}

