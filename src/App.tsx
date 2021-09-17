import React, {useState} from 'react';
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
        setmessage('Введите данные')
    }

    const setvalues = () => {
        if (maxvalue >startvalue) {
            seterror("")
            setmessage("")
            setvalue(startvalue)
        }
    }

    return (
        <div className="App">
           <RawCounterData
               startvalue={startvalue}
               maxvalue={maxvalue}
               setstartvalue={setstartvalue}
               setmaxvalue={setmaxvalue}
               setmessage={setmessage}
               setvalues={setvalues}/>
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
