import React, { useContext } from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import './CartWidget.css';  // Importa los estilos específicos para este widget
import { CartContext } from '../../context/cartContext';


function CartWidget() {
    const {cartItems} = useContext(CartContext)
    return (
        <div className="cart-widget">
            <div className="position-relative">
                <img src={cartIcon} alt="Carrito" />  
                <span className="cart-count">{cartItems.reduce((accumulator, currentItem) => {
                    return accumulator + currentItem.quantity;
                }, 0)}
                </span>  
            </div>
        </div>
    );
}


export default CartWidget;