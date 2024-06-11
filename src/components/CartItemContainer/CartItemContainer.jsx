import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import './CartItemContainer.css'


const CartItemContainer = () => {
    const {cartItems, removeFromCart} = useContext(CartContext)
    return (
        <div className="cart-items-container">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} onRemove={() => removeFromCart(item.id)} />
            ))}
        </div>
    );
}

export default CartItemContainer