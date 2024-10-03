import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeWrapper from "./HomeWrapper.tsx";
import Home from "./Home.tsx";
import { GetBannerData, GetBlogs } from "../actions/loaderFunctions.ts";
import { Products } from "./Products.tsx";
import Cart from "./Cart.tsx";
import Blogs from "./Blogs.tsx";
import SingleBlog from "./SingleBlog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          let data = await GetBannerData(
            "https://fakestoreapi.com/products?limit=5"
          );
          if (!data) {
            throw new Error("Failed to fetch data");
          }
          return data;
        },
      },
      {
        path: "/products",
        element: <Products />,
        loader: async () => {
          let data = await GetBannerData("https://fakestoreapi.com/products");
          if (!data) {
            throw new Error("Failed to fetch data");
          }
          return data;
        },
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blogs",
        children: [
          {
            index: true,
            element: <Blogs />,
            loader: async () => {
              let data = await GetBlogs(
                "https://jsonplaceholder.typicode.com/posts"
              );
              if (!data) {
                throw new Error("Failed to fetch data");
              }
              return data;
            },
          },
          {
            path: ":id",
            element: <SingleBlog/>,
            loader:async({params})=>{
              let data = await GetBlogs(
                `https://jsonplaceholder.typicode.com/posts/${params.id}`
              );
              if (!data) {
                throw new Error("Failed to fetch data");
              }
              return data;
            }
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
]);

export default function AllRoute() {
  return <RouterProvider router={router}></RouterProvider>;
}
