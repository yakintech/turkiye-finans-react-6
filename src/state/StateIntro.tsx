import React, { useState } from 'react'

function StateIntro() {

    //counter state içerisindeki DEĞER, değişkenimiz.
    //setcounter bu değişkeni değiştirecek TEK ARKADAŞ. setcounter aracılığıyla bu değişken değiştirilir ve bu sayede ekran yenilenir!
    //useState hook içerisindeki 0 ise default değeri ifade eder.
    const [counter, setcounter] = useState(0);


    console.log('State Intro component renedered!!');
    

    const increase = () => {
        setcounter(counter + 1);
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={increase}>Increase</button>
    </>
    )
}

export default StateIntro