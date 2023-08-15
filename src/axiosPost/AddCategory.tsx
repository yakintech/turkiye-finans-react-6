import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddCategory() {
    const [name, setname] = useState('');
    const [description, setdescription] = useState('');

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        getAllCategories();
    }, [])

    const add = () => {

        var newCategory = {
            name: name,
            description: description
        }
        axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => {
                alert('Success');
                getAllCategories();
            })
            .catch(err => {
                console.log('Error', err);
                alert('Error!!')
            })
    }


    const getAllCategories = () => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setcategories(res.data);
            })

    }

    const deleteProduct = (id: number) => {

        axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
            .then(res => {
                getAllCategories();
            })

    }

    return (<>
        <div>
            <label htmlFor="">Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description: </label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <ul>
            {
                categories && categories.map((item: any) => <li onClick={() => deleteProduct(item.id)} key={item.id}>{item.name}</li>)
            }
        </ul>
    </>)
}

export default AddCategory