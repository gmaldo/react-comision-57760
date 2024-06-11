import { useContext, useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const [showCounter, setShowCounter] = useState(true)
    const {addToCart} = useContext(CartContext)
    
    const onAdd = () => {
        addToCart(product,quantity)
        setShowCounter(false)
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{product.title}</h2>
                    <p className="text-muted">{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    {showCounter ?
                        <ItemCount count = {quantity} max={product.stock} onAdd={onAdd} updateQuantity={setQuantity}/>
                        :
                        <Link to='/cart'><button className="btn btn-primary">Ir al carrito</button></Link>
                        //El botón de terminar mi compra debe poder navegar a un componente vacío por el momento en la ruta ‘/cart
                    }
                </div>
            </div>
    </div>
);
}

export default ItemDetail