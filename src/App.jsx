import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Item from './components/Item/Item'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
