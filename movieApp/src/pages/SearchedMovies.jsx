import { Box, Heading } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { movieContext } from '../context/MovieContext'
import { getSearchedMovies } from '../actions/appAction'
import { MovieGrid } from '../components/MovieGrid'
import { useSearchParams } from "react-router-dom";
export const SearchedMovies = () => { 
  const [params,setParams]=useSearchParams()
  const{state,dispatch}=useContext(movieContext)
  useEffect(()=>{
   getSearchedMovies(dispatch,params.get("query"))
  },[])
  console.log(state)
  
  return (
    <Box>
        <Heading>Search results of : {params.get("query")}</Heading>
        <MovieGrid {...state.searchedMovie} />
    </Box>
  )
}
