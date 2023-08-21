import React from 'react'
import useFetch from './UseFetch'

function CustomHookSample() {

    const [data, loading] = useFetch("https://northwind.vercel.app/api/products")

    console.log('DATA ', data);
    
    return (<>
    <h1>Products</h1>
    {
        loading == true ? <h1>loading...</h1> :   <ul>
        {
            data && data.map((item:any) => <li>{item.name}</li>)
        }
    </ul>
    }
  
    </>)
}

export default CustomHookSample