import { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { conversionProvider } from "../context/ConversionContext";

const Cart = () => {
  const context = useContext(cartContext);
  const { currentCurrency } = useContext(conversionProvider);
  let [total, setTotal] = useState(0);
  const cart = context?.cart;

  useEffect(() => {
    let calculate = Number(cart?.reduce((ac, el) => {
      return ac + (el.product.price * el.quantity);
    }, 0).toFixed(2));
    setTotal(calculate || 0);
  }, [cart]);

  function setPrice() {
    let key = Object.keys(currentCurrency)[0];
    if (key) {
      return (total * currentCurrency[key]).toFixed(2);
    } else {
      return total.toFixed();
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Cart Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          cart?.map((el) => (
            <div className="flex justify-center">
              <ProductCard key={el.product.id} {...el.product} />
            </div>
          ))
        }
      </div>

      {/* Total Price */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">
          Cart Total: <span className="text-blue-500">{setPrice()} {Object.keys(currentCurrency)[0] || "$"}</span>
        </h3>
      </div>
    </div>
  );
}

export default Cart;
