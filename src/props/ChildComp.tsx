import React from 'react'
import TitleBox from './TitleBox'

function ChildComp(props: any) {

    return (<>
        <h1>Name: {props.name}</h1>
        <h1>Surname: {props.surname}</h1>
        <h1>Age: {props.age}</h1>
        <ul>
            {
                props.countries.map((item: any) => <li>{item}</li>)
            }
        </ul>
        <TitleBox title={props.title}/>
    </>
    )
}

export default ChildComp