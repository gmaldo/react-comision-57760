import React, { useContext } from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import './CartWidget.css';  // Importa los estilos específicos para este widget
import { CartContext } from '../../context/cartContext';


function CartWidget() {
    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div className="cart-widget">
            <div className="position-relative">
                <img src={cartIcon} alt="Carrito" />  
                <span className="cart-count">{cart.length}</span>  
            </div>
        </div>
    );
}


export default CartWidget;