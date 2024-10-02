import { Box, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { movieContext } from '../context/MovieContext'
import { getSearchedMovies } from '../actions/appAction'
import { MovieGrid } from '../components/MovieGrid'
import { useLocation} from "react-router-dom";
export const SearchedMovies = () => { 
  let check=useLocation()
  check=check.search.split("=")[1]
  
  const{state,dispatch}=useContext(movieContext)
  useEffect(()=>{
   getSearchedMovies(dispatch,decodeURI(check))
  },[])
  console.log(state)
  
  return (
    <Box>
        <Heading>Search results of : {decodeURI(check)}</Heading>
        <MovieGrid {...state.searchedMovie} />
    </Box>
  )
}
