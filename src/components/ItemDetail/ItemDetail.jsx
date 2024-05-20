import React from 'react'

const ItemDetail = ({product}) => {
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
                <button className="btn btn-primary">Añadir al carrito</button>
            </div>
        </div>
    </div>
);
}

export default ItemDetail