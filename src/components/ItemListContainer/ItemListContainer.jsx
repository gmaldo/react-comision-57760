import {useState,useEffect, useContext} from 'react'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { getDocs,collection,getFirestore ,query,where} from 'firebase/firestore'
const ItemListContainer = () => {
  
  const [products, setProducts] = useState([])
  const {categoryid}  = useParams()

  const fetchData = async (categoryid) => {
    try{
      const db = getFirestore()
      const docsRef = collection(db,"products")
      let querySnapshot =null
      let data = null
      if(categoryid == undefined){
        querySnapshot = await getDocs(docsRef)
        data = querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
      }else{
        const q = query(docsRef,where("category","==",categoryid))
        querySnapshot = await getDocs(q)
        data = querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
      }
      setProducts(data)

    }catch(error){
      console.log("Error al obtener los productos", error)
    }
  }

  useEffect(() => {
   
    fetchData(categoryid)

  }, [categoryid])

  return (
    <div className='itemListContainer'>
        {products.length == 0 ? 

          <Loader/>

          :

          <ItemList productos={products}/>

        }
    </div>
  )
}
export default ItemListContainer