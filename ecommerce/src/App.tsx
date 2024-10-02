
import './App.css'
import CartProvider from './context/cartContext'
import AllRoute from './pages/AllRoute'

function App() {


  return (
    <>
    <CartProvider>
    <AllRoute />
    </CartProvider>
    </>
  )
}

export default App
