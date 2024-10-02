import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  HomeWrapper  from "./HomeWrapper.tsx"
import  Home  from "./Home.tsx"
import { GetBannerData } from "../actions/loaderFunctions.ts"
import { Products } from "./Products.tsx"

const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeWrapper />,
        children:[
            {
             index:true, 
             element:<Home />,
             loader:async()=>{
                let data =await GetBannerData("https://fakestoreapi.com/products?limit=5")
                if(!data){
                    throw new Error("Failed to fetch data")
                }
                return data
             }
            },
            {
                path:"/products",
                element:<Products />,
                loader:async()=>{
                    let data =await GetBannerData("https://fakestoreapi.com/products")
                    if(!data){
                        throw new Error("Failed to fetch data")
                    }
                    return data
                 }
            }
        ]
    }
])

export default function AllRoute(){
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}