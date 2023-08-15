import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setcounter] = useState(0);
    // const [refresh, setrefresh] = useState(false);


    //[] işareti dependency anlamına gelir. Yani useEffect hiçbirşeye bağlı değil ( boş bir array) UseEffect içerisindeki kod sadece bir kere çalışır.

    useEffect(() => {
        var randomNumber = Math.floor(Math.random() * 100);
        setcounter(randomNumber);
    }, [])


    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
    )
}

export default EffectSample