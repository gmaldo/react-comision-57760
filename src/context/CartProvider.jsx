import { useState } from "react";
import { CartContext } from "./cartContext";

/*
    1) Crear el contexto
    2) Crear el provider
    3) Posicionar/colocar provider
    4) Utilizar useContext(contexto)
*/
function CartProvider({ children }){

    const [cart, setCart] = useState(['1','2']) //--> Es un custom provider
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider