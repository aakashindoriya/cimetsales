import { useContext, useEffect, useState } from "react";
import { bannerApiresponse, CartItem } from "../types/apiRespose";
import { cartContext } from "../context/cartContext";

const ProductCard = ({ image, title, price,id }: bannerApiresponse) => {
  const context =useContext(cartContext)
  let [isInCart,setIsInCart]=useState<CartItem|undefined>(undefined)
  const cart = context?.cart || [];
 
  useEffect(()=>{
    let item=cart.find((el)=>el.product.id===id)
    if(item){
      setIsInCart(item)
    }else{
      setIsInCart(undefined)
    }
  },[cart])
  return (
    <div className="max-w-xs h-64 rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
      <img className="w-full h-32 object-contain" src={image} alt={title} />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-gray-600 mt-2">${price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
