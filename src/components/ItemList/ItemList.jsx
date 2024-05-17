import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div className="container mt-4">
            <div className="row">
                {productos.map(producto => (
                    <div className="col-md-4 mb-4" key={producto.id}>
                        <Item producto={producto} />
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ItemList