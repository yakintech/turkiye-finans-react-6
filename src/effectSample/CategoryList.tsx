import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CategoryList() {

    const [categories, setcategories] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        //axios kütüphanesindeki get fonksiyonu ile uzak sunucudan json data çekiyorum.
        // axios.get("https://northwind.vercel.app/api/categories")
        //     .then(res => {
        //         setcategories(res.data);
        //         setloading(false)
        //     })

        fetch('https://northwind.vercel.app/api/categories')
            .then(res => res.json())
            .then(data => {
                setcategories(data);
                setloading(false)
            })
    }, [])


    return (<>
        {
            loading ? <h1>loading...</h1> : <><ul>
                {
                    categories && categories.map((item: any) => <li>{item.name}</li>)
                }
            </ul></>
        }
    </>
    )
}

export default CategoryList