
import './App.css'
import CartProvider from './context/CartContext'
import { ConversionContext } from './context/ConversionContext'
import AllRoute from './pages/AllRoute'

function App() {


  return (
    <>
    <ConversionContext>
    <CartProvider>
    <AllRoute />
    </CartProvider>
    </ConversionContext>
    </>
  )
}

export default App
