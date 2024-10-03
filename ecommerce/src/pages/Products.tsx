import { useLoaderData } from "react-router-dom";
import { bannerApiresponse } from "../types/apiRespose";
import ProductCard from "../components/ProductCard";

export const Products = () => {
  const data = useLoaderData() as bannerApiresponse[];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Heading */}
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};
