import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carosal from './components/Carosal'
import { fetchApi } from './actions/action'
import { Form } from './components/Form'

function App() {
  const [images, setImages] = useState([
    "https://plus.unsplash.com/premium_photo-1664302857771-25cec5473cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1550326897-59b13e651fcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1550787266-ae062be8a346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D"
  ])

  async function fetchResults(){
    let data=await fetchApi({query:"krishna",page:4})
    
    setImages(data.data.map(item=>item.urls.regular))
  }

  useEffect(()=>{
  fetchResults()
  },[])
  
  return (
    <div style={{width:"100vw"}}>
      <Form />
      <Carosal images={images} />
    </div>
  )
}

export default App
