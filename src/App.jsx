import './App.css'
import AppRouter from './router/AppRouter'
import CartProvider from './context/CartProvider'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
    </>
  )
}

export default App
