import { Box, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { movieContext } from '../context/MovieContext'
import { getSearchedMovies } from '../actions/appAction'

export const SearchedMovies = () => { 
  const{state,dispatch}=useContext(movieContext)
  useEffect(()=>{
   getSearchedMovies(dispatch)
  })
  return (
    <Box>
        <Heading>Search results of :</Heading>
        
    </Box>
  )
}
