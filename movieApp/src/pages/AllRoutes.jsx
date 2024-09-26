import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
import { AllMovie } from "./AllMovie";
import { SingleMovie } from "./SingleMovie";

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
    ],
  },
]);

export const Allroutes = () => {
  return <RouterProvider router={route}></RouterProvider>;
};
