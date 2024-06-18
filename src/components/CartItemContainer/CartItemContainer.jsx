import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import cartIcon from '../../assets/cartIcon.svg';
import './CartItemContainer.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CartItemContainer = () => {
    const {cartItems, removeFromCart} = useContext(CartContext)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate()

     
    
    const handleRemove = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Estás a punto de eliminar un producto del carrito.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado del carrito.',
                    'success'
                )
                removeFromCart(id)
            }
        })
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
                    <CartItem key={item.id} item={item} onRemove={() => handleRemove(item.id)} />
                ))}
            </div>
            <div className="total-price">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <button onClick={()=>navigate('/checkout')} className="checkout-button">Proceder a la Compra</button>
            </div>
        </div>
    );
}

export default CartItemContainer