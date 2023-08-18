import React, { useContext } from 'react'
import { counterContext, CounterContextType } from '../context/CounterContext';

function Home() {
  const {counter, setcounter} = useContext(counterContext) as CounterContextType;

  return (<>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(counter - 1)}>Decrease</button>
  </>
  )
}

export default Home