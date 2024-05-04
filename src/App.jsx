import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  const message = "Este eshop te hace feliz, Bienvenido"

  return (
    <>
      <NavBar/>
      <ItemListContainer messaje={message}/>
    </>
  )
}

export default App
