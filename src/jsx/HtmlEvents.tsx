import React from 'react'

function HtmlEvents() {

    const hello = () => {
        alert('Hello Button!')
    }

    const merhaba = () => {
        alert("Merhaba!")
    }

    const change = (element : any) => {
      console.log('Element ', element);
      
    }

  return (<>
    <button onClick={hello}>Hello</button>
    <button onClick={() => merhaba()}>Merhaba</button>
    <input type='text' onChange={(e) => change(e.target.value)} />
    
  </>)
}

export default HtmlEvents