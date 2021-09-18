import React, {ChangeEvent} from "react";
import {Button} from "./components/Button/Button";
import {InputRowCounter} from "./components/InputForRowCounter/InputRowCounter";

type RawCounterDataPropsType = {
    startvalue: number
    maxvalue: number
    error:string
    setstartvalue: (startvalue: number) => void
    setmaxvalue: (maxvalue: number) => void
    setmessage:(message:string)=>void
    setvalues:()=>void
    seterror:(error:string)=>void
}

export function RawCounterData(props: RawCounterDataPropsType) {

    const entermaxvalue = (e: ChangeEvent<HTMLInputElement>) => {
        if(props.startvalue<props.maxvalue)
        {props.seterror("")
            props.setmessage("Введите значения и нажмите Set")
            props.setmaxvalue(parseInt(e.currentTarget.value))
        } else if (props.startvalue>=props.maxvalue) {props.seterror("Неверные данные")
            props.setmaxvalue(parseInt(e.currentTarget.value))}
        }
    const enterstartvalue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setmessage("Введите значения и нажмите Set")
        if(props.startvalue<props.maxvalue) {
            props.seterror("")
            props.setmessage("Введите значения и нажмите Set")
            props.setstartvalue(parseInt(e.currentTarget.value))
        } else if (props.startvalue>=props.maxvalue) {props.seterror("Неверные данные")
            props.setstartvalue(parseInt(e.currentTarget.value))}
    }



    return (
        <div className={"CounterArea"}>
            <div className={"inputarea"}>
                <InputRowCounter title={"Start value"} changeEv={enterstartvalue} setvalue={props.startvalue} error={props.error}/>
                <InputRowCounter title={"Max value"} changeEv={entermaxvalue} setvalue={props.maxvalue} error={props.error}/>
            </div>
            <div className={"buttonarea"}>
                <Button title={"Set"} callback={props.setvalues} startvalue={props.startvalue} maxvalue={props.maxvalue}/>
            </div>
        </div>
    )
}