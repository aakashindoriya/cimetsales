import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
import { AllMovie } from "./AllMovie";
import { SingleMovie } from "./SingleMovie";
import { SearchedMovies } from "./SearchedMovies";
import { useContext } from "react";
import { movieContext } from "../context/MovieContext";
import { getAllMovies } from "../actions/appAction";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "/movie",
        
        children: [
          {
            index:true,
            element: <AllMovie />,
          },
          {
            path: ":id",
            element: <SingleMovie />,
          },
        ],
      },
      {
        path: "/tv",
        element: <AllMovie />,
      },
      {
        path:"/search",
        element:<SearchedMovies />

      }
    ],
  },
]);

export const Allroutes = () => {
  return <RouterProvider router={route}></RouterProvider>;
};
