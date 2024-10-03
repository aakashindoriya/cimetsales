import { useLoaderData } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { bannerApiresponse } from "../types/apiRespose"

const Home = () => {
  const data=useLoaderData() as bannerApiresponse[]

  return (
    <>
    <section >
      <h2>popular products</h2>
      <div className="flex gap-2 p-2">
      {
        data.map((el)=><ProductCard key={el.id} {...el} />)
      }
      </div>
    </section>
    </>
  )
}

export default Home