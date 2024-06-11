import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import CartItemContainer from '../components/CartItemContainer/CartItemContainer'

const AppRouter = () => {
    const message = "Este eshop te hace feliz, Bienvenido"
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer messaje={message}/>}/>
                    <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<CartItemContainer/>}/>
                </Routes>
        </BrowserRouter> 
    )
}

export default AppRouter