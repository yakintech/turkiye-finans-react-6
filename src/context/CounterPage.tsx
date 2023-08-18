import React, { useContext } from 'react'
import { counterContext, CounterContextType } from './CounterContext'

function CounterPage() {

    const {counter, setcounter} = useContext(counterContext) as CounterContextType;

    
    const increase = () => {
        setcounter(counter + 1)
    }
    return (<>

        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default CounterPage