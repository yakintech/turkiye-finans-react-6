import React, { useState } from 'react'

function StateArraySample2() {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const [users, setusers] = useState<any[]>([]);


    const add = () => {
        let newUser = {
            firstName: firstName,
            lastName: lastName
        }

        //eğer kullanıcı listede varsa alert göster

        var user = users.find(q => q.firstName == firstName && q.lastName == lastName);

        if (!user)
            setusers([...users, newUser])
        else
            alert("Böyle bir kullanıcı mevcut!")
    }

    const deleteUser = (firstName: String, lastName: String) => {

        var filteredUsers = users.filter(q => q.firstName != firstName && q.lastName != lastName);
        setusers(filteredUsers)

    }

    const deleteUser2 = (indexNo: number) => {
        //fruits.splice(2, 1);

        users.splice(indexNo, 1); 
        setusers([...users])

    }

    return (<>
        <div>
            <label htmlFor="">First Name</label>
            <input type='text' onChange={(e) => setfirstName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Last Name</label>
            <input type='text' onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
            <button onClick={() => setusers([])}>Clear</button>

        </div>

        <div>
            <h1>Length: {users.length}</h1>
            <ul>
                {/* {
                    users && users.map((item: any) => <li onClick={() => deleteUser(item.firstName, item.lastName)} style={{ cursor: 'pointer' }}>{item.firstName} {item.lastName}</li>)
                } */}
                        {
                    users && users.map((item: any, index: number) => <li onClick={() => deleteUser2(index)} style={{ cursor: 'pointer' }}>{item.firstName} {item.lastName}</li>)
                }
            </ul>
        </div>

    </>
    )
}

export default StateArraySample2