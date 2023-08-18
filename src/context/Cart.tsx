import React, { useContext } from 'react'
import { CartContext, CartContextType, CartModel } from './CartContext'

function Cart() {

    console.log('Cart component rendered');


    const { cart, setcart } = useContext(CartContext) as CartContextType;

    var totalPrice: number = 0;

    cart.forEach(element => {
        totalPrice = totalPrice + (element.quantity * element.unitPrice);
    });


    const removeItem = (id: number) => {
        var filteredCart = cart.filter(q => q.id != id);
        setcart(filteredCart)
    }

    return (<>
        <button onClick={() => setcart([])}>Empty Cart</button>
        <h1>Total: {totalPrice.toFixed(2)}</h1>
        <ul>
            {
                cart && cart.map((item: CartModel) => {
                    return <>
                        <li>
                            <span style={{ marginRight: 20 }}>{item.name} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeItem(item.id)} className='w3-btn w3-red'>Remove</button>
                        </li>
                        <hr></hr>

                    </>
                })
            }
        </ul>
    </>)
}

export default Cart