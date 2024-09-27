import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { PopularMovies } from '../components/PopularMovies'
import { TrandingMovies } from '../components/TrendingMovie'
import { TopRatedMovies } from '../components/TopRated'
import  WelCome  from '../components/WelCome'
import { movieContext } from '../context/MovieContext'
import { GetAllHomePageMovies } from '../actions/appAction'

export const Home = () => {
  const {dispatch}=useContext(movieContext)
  useEffect(()=>{
    GetAllHomePageMovies(dispatch)
  },[])
  return (
    <Box>
      <WelCome />
      <PopularMovies />
      <TrandingMovies />
      <TopRatedMovies />
    </Box>
  )
}
