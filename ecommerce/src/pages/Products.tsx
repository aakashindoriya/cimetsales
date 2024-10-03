import { useLoaderData } from "react-router-dom"
import { bannerApiresponse } from "../types/apiRespose"
import ProductCard from "../components/ProductCard"

export const Products = () => {
  const data=useLoaderData() as bannerApiresponse[]
  return (
    <div>
      <div>
        <h1>Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {
        data.map((el)=><ProductCard key={el.id} {...el} />)
      }
      </div>
      <div>

      </div>
    </div>
  )
}
