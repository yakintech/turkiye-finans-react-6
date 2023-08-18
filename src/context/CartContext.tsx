import { createContext, useState } from "react";


export var CartContext = createContext<CartContextType | null>(null)


export const CartProvider = ({children}:any) => {

    console.log('Context run!');
    
    const [cart, setcart] = useState<CartModel[]>([]);

    const values = {
        cart,
        setcart
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}

export interface CartModel{
    quantity:number;
    unitPrice:number;
    id:number;
    name:string
}

export type CartContextType = {
    cart:CartModel[];
    setcart: (value:CartModel[]) => void 
} 