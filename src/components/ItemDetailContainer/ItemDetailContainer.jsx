import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

  const [product, setProducto] = useState(null)
  const {id}  = useParams()
  
  useEffect(() => {

    const fetchData = async () => {
      try{
       const response = await fetch (`https://fakestoreapi.com/products/${id}`)
       const data = await response.json()
       setProducto(data)
      }catch(error){
        console.log("Error al obtener los productos", error)
      }
    } 
    fetchData()

  }, [id])

  return (
    <div>
        {product == null ? 
         <Loader/>
         :
         <ItemDetail product={product}/>
         }
    </div>
  )
}

export default ItemDetailContainer