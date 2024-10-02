import { createContext, useState, ReactNode } from "react";
import { bannerApiresponse } from "../types/apiRespose";
type CartItem={
    product:bannerApiresponse;
    quantity:number
}
type CartContextType = {
  cart: CartItem[];
  addToCart: (product:bannerApiresponse) => void;
  removeFromCart: (id: number) => void;
  handleQuantity: (id: number, type: "inc" | "dec") => void;
};

export const cartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: ReactNode }) {
  let [cart, setCart] = useState<CartItem[]>([]);
   function addToCart (product:bannerApiresponse){
    setCart([...cart,{product,quantity:1}])
   }
   function handleQuantity(id:number,type:("inc"|"dec")){
    setCart(cart.map((el)=>el.product.id===id?{...el,quantity:type=="inc"?el.quantity+1:el.quantity-1}:el))
   }
   function removeFromCart(id:number){
    setCart(cart.filter((el)=>el.product.id!==id))
   }
  return (
    <cartContext.Provider value={{ cart ,addToCart,handleQuantity,removeFromCart}}>
      {children}
    </cartContext.Provider>
  );
}
