import { useContext, useEffect, useState } from "react"
import { cartContext } from "../context/cartContext"
import ProductCard from "../components/ProductCard"

const Cart = () => {
    const context =useContext(cartContext)
    let [total,setTotal]=useState(0)
    const cart=context?.cart
    useEffect(()=>{
        let calculate=Number(cart?.reduce((ac,el)=>{return ac+(el.product.price*el.quantity)},0).toFixed(2))
        setTotal(calculate||0)
    },[cart])
  return (
    <div>
    <div>
      <h1>Cart</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {
      cart?.map((el)=><ProductCard key={el.product.id} {...el.product}  />)
    }
    </div>
    <div>
        <h3>cart total :{total}</h3>

    </div>
  </div>
  )
}

export default Cart