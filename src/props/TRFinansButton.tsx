import React from 'react'

function TRFinansButton(props: any) {

    const { title, width, height, hello } = props

    return (<>
        <button onClick={hello}>Parent Func</button>
        <button style={{ backgroundColor: '#00baaa', width: width, height: height, border: 'none' }}>{title}</button>
    </>
    )
}

export default TRFinansButton


TRFinansButton.defaultProps = {
    width: 200,
    height: 100
}