import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"


const route=createBrowserRouter([
  {
    path:"/",
    element:<App />
  }
])


export const Allroutes=()=>{
    return (
        <RouterProvider router={route}></RouterProvider>
    )
}
