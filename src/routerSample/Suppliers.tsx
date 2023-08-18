import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Supplier } from './Supplier';
import { Link, useNavigate } from 'react-router-dom';

function Suppliers() {

    const [suppliers, setsuppliers] = useState<Supplier[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data);
            })

        var interval = setInterval(() => {
            console.log('Merhaba!');
        }, 1000);

        return () => {
            clearInterval(interval);
          }

    }, [])





    const goToDetail = (id?: number, item?: Supplier) => {

        navigate(`/suppliers/${id}`);
    }


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item: Supplier) => {
                        return <tr key={item.id}>
                            <Link to={'/suppliers/' + item.id}> <td>{item.id}</td></Link>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td><button onClick={() => goToDetail(item.id, item)}>Go to detail</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default Suppliers
