import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path: '/',
    element: <div>
      <h1>Home</h1>
      <Outlet/>
    </div>,
    children: [
      { path: 'about', element: <div>
        <h2>About</h2>
        <p>This is the about page</p>
        <Outlet />
      </div>,
       
       },
      { 
        path: 'contact',
         
         children: [
          {
            index:true,
            element: <div>
              <h2>Contact</h2>
              <p>This is the contact page</p>
              <Outlet />
            </div> ,
          },
           { 
            path: ':id',
             
            children:[
              {
                index:true,
                element: <h3>Address</h3> ,
              },
              {
                path: ':number',
                
                
                children:[
                  {
                    element: <h3>Number</h3>  ,
                    index:true
                  },
                  { path: 'extension/:extension', element: <h4>Extension</h4> }
                ]
              }
            ]
            },
           { path: 'phone', element: <h3>Phone</h3> },
         ],
      },
    ],
  }
])
function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
