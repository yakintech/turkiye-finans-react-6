import React from 'react'

function ObjectSample() {

    var user = {
        name: "Çağatay",
        surname: "Yıldız",
        age: 18
    }

    return (<>
        <h1>{user.name}</h1>
        <h1>{user.surname}</h1>
        <h1>{user.age}</h1>

    </>
    )
}

export default ObjectSample