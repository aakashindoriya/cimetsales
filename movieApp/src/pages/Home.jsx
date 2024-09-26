import { Box } from '@chakra-ui/react'
import React from 'react'
import { PopularMovies } from '../components/PopularMovies'
import { TrandingMovies } from '../components/TrendingMovie'
import { TopRatedMovies } from '../components/TopRated'
import  WelCome  from '../components/WelCome'

export const Home = () => {
  return (
    <Box>
      <WelCome />
      <PopularMovies />
      <TrandingMovies />
      <TopRatedMovies />
    </Box>
  )
}
