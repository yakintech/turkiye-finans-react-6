import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext, CartContextType, CartModel } from './CartContext';

function ProductPage() {

    console.log('ProductPage component rendered');

    const [products, setproducts] = useState<ProductModel[]>([]);

    const {cart, setcart} = useContext(CartContext) as CartContextType;

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })

    }, [])

    const addToCart = (item: ProductModel) => {

        //öncelikle sepette bu ürün var mı? varsa miktarını bir arttır yoksa sepete sıfırdan ekle

        var cartItem = cart.find(q => q.id == item.id);

        if(cartItem){

            cartItem.quantity = cartItem.quantity + 1;
            setcart([...cart])
        }
        else{
            var newCartItem : CartModel = {
                id: item.id,
                unitPrice: item.unitPrice,
                quantity : 1,
                name: item.name
            }
            setcart([...cart, newCartItem]);
        }

    }


    return (<>
        <table className='w3-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Add To Cart</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item:ProductModel) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => addToCart(item)}>Add to cart</button></td>
                        </tr>
                    })
                }
            </tbody>

        </table>
    </>
    )
}

export default ProductPage



export interface ProductModel{
    id:number;
    name:string;
    unitPrice:number;
    unitsInStock:number
}