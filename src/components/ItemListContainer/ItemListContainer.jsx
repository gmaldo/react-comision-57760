import {useState,useEffect, useContext} from 'react'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { getDocs,collection,getFirestore } from 'firebase/firestore'
const ItemListContainer = ({messaje}) => {
  
  const [products, setProducts] = useState([])
  const {categoryid}  = useParams()

  const fetchData = async (categoryid) => {
    try{
      const db = getFirestore()
      const docsRef = collection(db,"products")
      const querySnapshop = await getDocs(docsRef)
      const data = querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()}))
      categoryid === undefined ?
            setProducts(data) :
            setProducts(data.filter(product => product.category === categoryid));
    }catch(error){
      console.log("Error al obtener los productos", error)
    }
  }

  useEffect(() => {
   
    fetchData(categoryid)

  }, [categoryid])

  return (
    <div className='itemListContainer'>
        <p>{messaje}</p>
        {products.length == 0 ? 

          <Loader/>

          :

          <ItemList productos={products}/>

        }
    </div>
  )
}
export default ItemListContainer