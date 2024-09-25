import { useEffect, useState } from 'react'

import { GetPopularMovies } from '../actions/appAction'

function App() {

  useEffect(()=>{
    GetPopularMovies()
  },[])

  return (
    <div>
      this is home
      
    </div>
  )
}

export default App
