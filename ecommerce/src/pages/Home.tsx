import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { bannerApiresponse } from "../types/apiRespose";
import { Carousel } from "../components/Carousel";

const Home = () => {
  const data = useLoaderData() as bannerApiresponse[];

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Popular Products
        </h2>
        <Carousel />
        {/* Horizontal Scrollable Product Cards with Hidden Scrollbar */}
        <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
          {data.map((el) => (
            <div className="min-w-[200px]">
              <ProductCard key={el.id} {...el} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
