import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
function App() {

  const message = "Este eshop te hace feliz, Bienvenido"

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
           <Route path="/" element={<ItemListContainer messaje={message}/>}/>
           <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
           <Route path="/item/:id" element={<ItemDetailContainer/>}/>
           <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
