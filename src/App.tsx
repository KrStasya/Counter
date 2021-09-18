import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {RawCounterData} from "./RawCounterData";

function App() {
    let [startvalue,setstartvalue]=useState<number>(0)
    let [maxvalue,setmaxvalue]=useState<number>(0)
    let [value, setvalue] = useState<number>(0)
    let [error,seterror]=useState<string> ("")
    let [message, setmessage]=useState<string>("")

    const addValue = () => {
            if (value < maxvalue)
                setvalue(value + 1)
    }
    const resetValue = () => {
        setvalue(startvalue)
        seterror('')
        setmessage('')
    }
    const setvalues = () => {
        if (maxvalue >startvalue) {
            seterror("")
            setmessage("")
            setvalue(startvalue)
            setLocalstorage()
        }
    }

    useEffect(()=>{
        getLocalmaxstorage()
        getLocalstartstorage()
    },[])
    let getLocalstartstorage=()=>{
        let ValueasString=localStorage.getItem('counterstartValue')
        if (ValueasString){
            let newValue=JSON.parse(ValueasString)
            setstartvalue(newValue)}}
    let getLocalmaxstorage=()=>{
        let ValueasString=localStorage.getItem('countermaxValue')
    if (ValueasString){
        let newValue=JSON.parse(ValueasString)
        setmaxvalue(newValue)}}
let setLocalstorage=()=>{
       localStorage.setItem('counterstartValue',JSON.stringify(startvalue))
      localStorage.setItem('countermaxValue',JSON.stringify(maxvalue))
    }


/*    useEffect(() => {
        localStorage.setItem('counterstartValue', JSON.stringify(startvalue))
    }, [startvalue])
    useEffect(() => {
        localStorage.setItem('countermaxValue', JSON.stringify(maxvalue))
    }, [maxvalue])*/




    return (
        <div className="App">
           <RawCounterData
               startvalue={startvalue}
               maxvalue={maxvalue}
               setstartvalue={setstartvalue}
               setmaxvalue={setmaxvalue}
               setmessage={setmessage}
               setvalues={setvalues}
               seterror={seterror}
               error={error}/>
            <Counter value={value}
                     startvalue={startvalue}
                     maxvalue={maxvalue}
                     resetValue={resetValue}
                     addValue={addValue}
                     error={error}
                     message={message}/>
        </div>
    );
}

export default App;
