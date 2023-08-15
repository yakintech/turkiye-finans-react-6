import React, { useState } from 'react'
import { products } from '../data/products'



function StateArraySample3() {

    const [productsData, setproductsData] = useState<any[]>(products);
    const [isSorted, setisSorted] = useState(false)


    const searchByName = (data: string) => {

        var filteredProducts = products.filter(q => q.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
        setproductsData(filteredProducts);
    }

    const sortByPrice = () => {

        if (!isSorted) {
            var sortedProducts = productsData.sort((a, b) => a.unitPrice - b.unitPrice);
            setproductsData([...sortedProducts])
            setisSorted(true);
        }
        else {
            var sortedProducts = productsData.sort((a, b) => b.unitPrice - a.unitPrice);
            setproductsData([...sortedProducts])
            setisSorted(false);
        }

    }

    const deleteProduct = (id: number) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            var filteredProducts = productsData.filter(q => q.id != id);
            setproductsData(filteredProducts);
        }
      

    }

    return (<>
        <div>
            <label htmlFor="">Search: </label>
            <input type='text' onChange={(e) => searchByName(e.target.value)} />
        </div>
        <div>
            <h1>Length: {productsData.length}</h1>
        </div>
        <table className='w3-table w3-striped'>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Stock</th>
                <th style={{ cursor: 'pointer' }} onClick={sortByPrice}>Price</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {
                    productsData && productsData.map((item: any) => {
                        //eğer stock sıfır ise o satır kırmızı olsun! 
                        var color = "";
                        if (item.unitsInStock == 0)
                            color = 'red'
                        return <tr style={{ backgroundColor: color }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td><button onClick={() => deleteProduct(item.id)} className='w3-button w3-red'>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default StateArraySample3