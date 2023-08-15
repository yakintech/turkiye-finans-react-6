import React, { useState } from 'react'

function StateArraySample() {

    //state içerisinde string, number, array, obje barındırabilir
    const [numbers, setnumbers] = useState([3, -2, 11]);

    const addRandom = () => {
        var randomNumber = Math.floor(Math.random() * 90000);

        if (!numbers.includes(randomNumber))
            setnumbers([...numbers, randomNumber]);
    }

    return (<>
        <button onClick={addRandom}>Add Random Number</button>
        <h1>{numbers.length}</h1>
        <button onClick={() => setnumbers([])}>Clear</button>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default StateArraySample