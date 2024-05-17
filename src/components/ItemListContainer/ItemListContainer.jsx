import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({messaje}) => {
  
  const [productos, setProductos] = useState([])
  
  useEffect(() => {

    const fetchData = async () => {
      
      try{
       // const response = await fetch ("./data/productos.json")
       const response = await fetch ("https://fakestoreapi.com/products")
       const data = await response.json()
       setProductos(data)
      }catch(error){
        console.log("Error al obtener los productos", error)
      }

    } 

    fetchData()

  }, [])

  return (
    <div className='itemListContainer'>
        <h2>Contenedor Lista de Items</h2>
        <p>{messaje}</p>
        {productos.length == 0 ? 

          <Loader/>

          :

          <ItemList productos={productos}/>

        }
    </div>
  )
}
export default ItemListContainer