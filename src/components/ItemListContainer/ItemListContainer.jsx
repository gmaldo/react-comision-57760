import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({messaje}) => {
  
  const [products, setProducts] = useState([])
  const {categoryid}  = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try{
        // const response = await fetch ("./data/productos.json")
        const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json()
        categoryid === undefined ?
            setProducts(data) :
            setProducts(data.filter(product => product.category === categoryid));
      }catch(error){
        console.log("Error al obtener los productos", error)
      }
    } 

    fetchData()

  }, [categoryid])

  return (
    <div className='itemListContainer'>
        <h2>Contenedor Lista de Items</h2>
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