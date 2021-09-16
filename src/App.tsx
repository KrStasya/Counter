import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
    let [value, setvalue] = useState<number>(0)
    const maxvalue = 5
    const startvalue = 0
    const addValue = () => {
        if (value < maxvalue) setvalue(value + 1)
    }
    const resetValue = () => {
        setvalue(startvalue)
    }
    return (
        <div className="App">

            <Counter value={value}
                     startvalue={startvalue}
                     maxvalue={maxvalue}
                     resetValue={resetValue}
                     addValue={addValue}/>
        </div>
    );
}

export default App;

