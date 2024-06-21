import React, { useContext } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../context/cartContext';
import './Checkout.css'; 
import { useNavigate } from 'react-router-dom';
import { doc, getDoc,addDoc,updateDoc, getFirestore, Timestamp, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cartItems,clearCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate()

    async function discountStock(){
        if(cartItems.lenght == 0){
            return false
        }

        const db = getFirestore()
        for (const item of cartItems) {
            const itemRef = doc(db, "products", item.id)
            const docSnap = await getDoc(itemRef)
            if (docSnap.exists()) {
                let foundItem = {id:docSnap.id,...docSnap.data()}
                if (foundItem.stock >= item.quantity) {
                    await updateDoc(itemRef, {
                        stock: foundItem.stock - item.quantity
                    })
                    return true
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `No hay suficiente stock de ${foundItem.title}`,
                    })
                    return false
                }
            }
        }
    }

    
    async function handleCheckout(formData) {
        
        const order = {
            buyer:formData,
            items:cartItems,
            total:totalPrice,
            date: Timestamp.fromDate(new Date())
        }
        let discounted = await discountStock()
        if(!discounted){
            navigate("/")
            return
        }

        const db = getFirestore()
        const docRef = collection(db,"orders")
        const number = await addDoc(docRef,order)
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
