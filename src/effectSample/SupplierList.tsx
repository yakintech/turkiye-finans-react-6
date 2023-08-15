import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SupplierList() {
    const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {
        getAllSuppliers();
    }, []);


    const getAllSuppliers = () => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setsuppliers(res.data);
            })
    }

    const deleteSupplier = (id: number) => {

        var result = window.confirm("Want to delete?");
        if (result) {
            axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
                .then(res => {
                    getAllSuppliers();
                })
        }



    }


    return (<>
        <table className='w3-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item: any) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => deleteSupplier(item.id)} className='w3-button w3-red'>Delete</button></td>

                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default SupplierList