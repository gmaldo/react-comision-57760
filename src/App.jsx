import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  const message = "Este eshop te hace feliz"

  return (
    <>
      <NavBar/>
      <ItemListContainer messaje={message}/>
    </>
  )
}

export default App
