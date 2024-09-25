import { createBrowserRouter, RouterProvider } from "react-router-dom"


const route=createBrowserRouter([
  {
    path:"/",
    element:<h1></h1>
  }
])


export const Allroutes=()=>{
    return (
        <RouterProvider router={route}></RouterProvider>
    )
}
