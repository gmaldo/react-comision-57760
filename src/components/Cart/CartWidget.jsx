import React from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import './CartWidget.css';  // Importa los estilos específicos para este widget


function CartWidget() {
    return (
        <div className="cart-widget">
            <div className="position-relative">
                <img src={cartIcon} alt="Carrito" />  
                <span className="cart-count">3</span>  
            </div>
        </div>
    );
}


export default CartWidget;