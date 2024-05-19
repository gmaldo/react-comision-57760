import React from 'react'
import './Item.css'
const Item = ({producto}) => {
  return (
    <div className="card h-100">
            <img src={producto.image} className="card-img-top" alt={producto.name} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text"><small className="text-muted">Precio: ${producto.price}</small></p>
                <a href="#" className="btn btn-primary mt-auto">Ver más</a>
            </div>
    </div>
  )
}

export default Item