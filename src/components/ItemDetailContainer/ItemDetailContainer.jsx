import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { getDoc,getFirestore, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null)
  const {id}  = useParams()

  const fetchData = async(id) => {
    try{
      const db = getFirestore()
      const docRef = doc(db,"products",id)
      const docSnap = await getDoc(docRef)
      setProduct({id:docSnap.id,...docSnap.data()})
    }catch(error){
      console.log("Error al obtener los productos", error)
    }
  }
  
  useEffect(() => {

    fetchData(id)

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