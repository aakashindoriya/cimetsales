import { useContext, useEffect, useState } from 'react'

import { GetPopularMovies, getTopRatedMovies, getTrandingMovies } from '../actions/appAction'
import { movieContext } from '../context/MovieContext'
import { MovieCard }from '../components/MovieCard'
import {MovieGrid }from '../components/MovieGrid'
import { PopularMovies } from '../components/PopularMovies'

function App() {
  const {state,dispatch}=useContext(movieContext)
  useEffect(()=>{
    
    getTrandingMovies(dispatch,"week")
    getTopRatedMovies(dispatch)
  },[])
  console.log(state)
  return (
    <div>
      <PopularMovies/>
      
    </div>
  )
}

export default App
