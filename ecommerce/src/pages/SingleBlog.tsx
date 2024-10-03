import { useLoaderData } from "react-router-dom"
import { BlogsApiResponse } from "../types/apiRespose"

const SingleBlog = () => {
  const data=useLoaderData() as BlogsApiResponse
  console.log(data)
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}

export default SingleBlog