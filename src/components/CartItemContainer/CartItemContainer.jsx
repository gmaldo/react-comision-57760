import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import cartIcon from '../../assets/cartIcon.svg';
import './CartItemContainer.css'


const CartItemContainer = () => {
    const {cartItems, removeFromCart} = useContext(CartContext)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
     
    const handleCheckout = () => {
        console.log("Procediendo al checkout...");
    }

    if(cartItems.length === 0 ){
        return (
            <div className="empty-cart text-center">
                <img className='cart-icon' src={cartIcon} alt="Carrito" />  
                <h1>Carrito Vacío</h1>
                <p>No tienes ningun producto en el carrito.</p>
            </div>
        )
    }
    return (
        <div>
            <div className="cart-items-container">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
                ))}
            </div>
            <div className="total-price">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <button onClick={handleCheckout} className="checkout-button">Proceder a la Compra</button>
            </div>
        </div>
    );
}

export default CartItemContainer