import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import AppRouter from './router/AppRouter'
import CartProvider from './context/CartProvider'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const message = "Este eshop te hace feliz, Bienvenido"

  return (
    <>
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
    </>
  )
}

export default App
