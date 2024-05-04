import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({messaje}) => {
  return (
    <div className='itemListContainer'>
        <h2>Contenedor Lista de Items</h2>
        <p>{messaje}</p>
    </div>
  )
}
export default ItemListContainer