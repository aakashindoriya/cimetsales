import { useContext, useEffect, useState } from "react";
import { bannerApiresponse, CartItem } from "../types/apiRespose";
import { cartContext } from "../context/CartContext";
import QuantityButtons from "./QuantityButtons";
import {  conversionProvider } from "../context/ConversionContext";

const ProductCard = ({ image, title, price, id, description, category }: bannerApiresponse) => {
  const context = useContext(cartContext);
  const [isInCart, setIsInCart] = useState<CartItem | undefined>(undefined);
  const {currentCurrency} =useContext(conversionProvider)
  
  const cart = context?.cart || [];
  const addToCart = context?.addToCart;
  const handleQuantity=context?.handleQuantity
  const removeFromCart=context?.removeFromCart

  useEffect(() => {
    const item = cart.find((el) => el.product.id === id);
    setIsInCart(item || undefined);
  }, [cart, id]);

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({ image, title, price, id, description, category });
    } else {
      console.error("Add to cart function is not available.");
    }
  };
  const handleQuantityChange = (id:number,type:("inc"|"dec")):void => {
    if (handleQuantity&&removeFromCart) {
      if(type==="dec"&&isInCart?.quantity===1){
        removeFromCart(id)
      }else{

        handleQuantity(id,type)
      }
    } else {
      console.error("Add to cart function is not available.");
    }
  };
  function setPrice(){
    let key=Object.keys(currentCurrency)

    if(key.length>0){
      return (price*currentCurrency[key[0]]).toFixed(2)
    }else{
      return price.toFixed()
    }
  }
  return (
    <div className="max-w-xs h-64 rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
      <img className="w-full h-32 object-contain" src={image} alt={title} />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-gray-600 mt-2">{Object.keys(currentCurrency)[0]||"$"} {setPrice()}</p>
        {isInCart ? (
          <QuantityButtons id={id} quantity={isInCart.quantity} handleQuantityChange={handleQuantityChange} />
        ) : (
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
