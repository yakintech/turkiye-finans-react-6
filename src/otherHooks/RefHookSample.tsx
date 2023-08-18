import React, { useRef, useState } from 'react'

function RefHookSample() {

    let h1Ref = useRef<HTMLHeadingElement>(null);

    const change = () => {
        h1Ref.current!.style.color = "blue"
    }


    return (<>
        <h1 ref={h1Ref}>İstanbul</h1>
        <button onClick={change}>Change Color</button>
    </>)
}

export default RefHookSample