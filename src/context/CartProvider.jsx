import { useState } from "react";
import { CartContext } from "./cartContext";

/*
    1) Crear el contexto
    2) Crear el provider
    3) Posicionar/colocar provider
    4) Utilizar useContext(contexto)
*/
function CartProvider({ children }){

    const [cartItems, setCartItems] = useState([]) //--> Es un custom provider
    
    const addToCart = (product,quantity) => {
        const productExists = cartItems.find(item => item.id === product.id);
        if (productExists) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: quantity  } : item
            ))
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity }]);
        }    
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };


    return(
        <CartContext.Provider value={{cartItems,setCartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider