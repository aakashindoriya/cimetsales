import { NavLink, useLoaderData, useSearchParams } from "react-router-dom"
import { BlogsApiResponse } from "../types/apiRespose"
import {  useEffect, useState } from "react"
import Pagination from "../components/Pagination"

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialStartFrom = (parseInt(searchParams.get('page') || '0'))
  if(initialStartFrom){
    initialStartFrom=(initialStartFrom-1)*10
  }

  let [startFrom,setStartFrom]=useState(initialStartFrom)
  let data=useLoaderData() as BlogsApiResponse[]
  useEffect(() => {
    setSearchParams({ page: ((startFrom/10)+1).toString() });
  }, [startFrom, setSearchParams]);

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