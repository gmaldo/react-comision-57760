import React, { useContext } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../context/cartContext';
import './Checkout.css'; // Asegúrate de que la ruta es correcta
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cartItems,clearCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate()
    
    async function handleCheckout(formData) {
        const order = {
            buyer:formData,
            items:cartItems,
            total:totalPrice
        }

        const db = getFirestore()
        const docRef = collection(db,"orders")
        const number =await addDoc(docRef,order)
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con exito',
            text: `El numero de orden es ${number.id}`
        })
        clearCart()
        navigate("/")
    }
    return (
        <div className="checkout-container">
            <h3>Resumen del Carrito:</h3>
            <ul className="cart-summary-container">
                {cartItems.map(item => (
                    <li key={item.id} className="cart-summary">
                        <strong>{item.title}</strong> - Cantidad: {item.quantity} - Subtotal: ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <div className="total-price">
                <h3>Precio Total del Carrito:</h3>
                <p> ${totalPrice.toFixed(2)}</p>
            </div>

            <h3>Formulario de Pago:</h3>
            <CheckoutForm handleCheckout={handleCheckout}/>
        </div>
    );
}

export default Checkout;
