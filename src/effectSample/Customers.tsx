import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Customers() {
    
    const [customers, setcustomers] = useState<CustomerModel[]>([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data)
            })

    }, [])

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Titile</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map((item: CustomerModel) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>

        </table>
    </>
    )
}

export default Customers


interface CustomerModel {
    id: string;
    companyName: string;
    contactName: string;
    contactTitle: string;
}