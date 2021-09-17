import React, {ChangeEvent} from "react";
import {Button} from "./components/Button";
import {InputRowCounter} from "./components/InputRowCounter";

type RawCounterDataPropsType = {
    startvalue: number
    maxvalue: number
    setstartvalue: (startvalue: number) => void
    setmaxvalue: (maxvalue: number) => void
    setmessage:(message:string)=>void
    setvalues:()=>void
}

export function RawCounterData(props: RawCounterDataPropsType) {

    const entermaxvalue = (e: ChangeEvent<HTMLInputElement>) => {
            props.setmaxvalue(parseInt(e.currentTarget.value))
        }
    const enterstartvalue = (e: ChangeEvent<HTMLInputElement>) => {
            props.setstartvalue(parseInt(e.currentTarget.value))
    }

    return (
        <div className={"CounterArea"}>
            <div className={"inputarea"}>
                <InputRowCounter value={"Start value"} changeEv={enterstartvalue}/>
                <InputRowCounter value={"Max value"} changeEv={entermaxvalue}/>
            </div>
            <div className={"buttonarea"}>
                <Button title={"Set"} callback={props.setvalues} startvalue={props.startvalue} maxvalue={props.maxvalue}/>
            </div>
        </div>
    )
}