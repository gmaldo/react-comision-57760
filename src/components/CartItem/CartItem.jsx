import React from 'react'
import './CartItem.css'; 


const CartItem = ({ item, onRemove }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={item.image} className="card-img" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text"><small className="text-muted">Precio: ${item.price}</small></p>
                        <p className='card-text'>Cantidad: {item.quantity}</p>
                        <button onClick={onRemove} className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CartItem