import { NavLink, useLoaderData } from "react-router-dom"
import { BlogsApiResponse } from "../types/apiRespose"
import {  useState } from "react"
import Pagination from "../components/Pagination"

const Blogs = () => {
  let [startFrom,setStartFrom]=useState(0)
  let data=useLoaderData() as BlogsApiResponse[]
  return (
    <div className="w-full p-1">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold ">Blogs</h1>
      </div>
      <ol className="p-2 shadow-md  w-[90%]  m-auto">
        {
          data.slice(startFrom,startFrom+10).map(({id,title,body})=>(
            <li key={id} className="m-1 p-1 shadow-sm border-b-gray-200">
            <NavLink to={`${id}`} >
            <h3 className="text-lg font-bold">{title}</h3>
            <p>{body.split(" ").splice(0,9).join(" ")}...</p>
            </NavLink>
          </li>
          ))
        }
      </ol>
      <div>
        <Pagination startFrom={startFrom} setStartForm={setStartFrom}/>
      </div>
    </div>
  )
}

export default Blogs