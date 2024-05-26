import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {id}  = useParams()
  
  useEffect(() => {

    const fetchData = async () => {
      try{
        //primera version busca el producto usando la api, pero no lo uso porque deberia ser equivalente a tener json local o en firebase
        //const response = await fetch (`https://fakestoreapi.com/products/${id}`)

        //segunda version busca el producto en el lado cliente asi simulo el json local, para despues usar en firebase:
        const response = await fetch (`https://fakestoreapi.com/products`)

        //en caso de usar un archivo local usar esto (que deberia estar usar en firebase):
        //const response = await fetch ("/data/products.json")

        const data = await response.json()
        const product = data.find(prod => prod.id === Number(id))
        setProduct(product)
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