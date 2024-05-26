import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
    //la api no tiene stock asi lo simulo
    const stock = Math.random() * (100 - 10) + 10;
    //Consigna:
    const [quantity, setQuantity] = useState(1)
    const [showCounter, setShowCounter] = useState(true)
    
    //Cuando ItemCount emita un evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount
    //en mi caso el estado interno del ItemDetail es quatity (un hook), por el momento onAdd solo muestra ese valor
    //para hacer desaparecer el ItemCount uso otro hook showCounter
    const onAdd = () => {
        alert(`Producto agregado ${quantity} al carrito`);
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
                        <ItemCount max={stock} onAdd={onAdd} updateQuantity={setQuantity}/>
                        :
                        <Link to='/cart'><button className="btn btn-primary">Comprar</button></Link>
                        //El botón de terminar mi compra debe poder navegar a un componente vacío por el momento en la ruta ‘/cart
                    }
                </div>
            </div>
    </div>
);
}

export default ItemDetail