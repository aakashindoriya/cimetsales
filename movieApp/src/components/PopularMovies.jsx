import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import ToggleButtons from './ToggleButtons';
import { GetAllHomePageMovies, GetPopularMovies } from '../actions/appAction';
import { MovieCard } from './MovieCard';
import { movieContext } from '../context/MovieContext';

export const PopularMovies = () => {
  const { state } = useContext(movieContext);
  const [selected, setSelected] = useState(true);
  
  return (
    <Box w="100%" mt="2%" mb="2%">
      <Flex m="auto" justifyContent="space-between" maxW="85%" mb="5" mt="5">
        <Heading>What's Popular</Heading>
        <ToggleButtons selected={selected} setSelected={setSelected} first={"movie"} second={"tv"}/>
      </Flex>
      <Box
        m="auto"
        maxW="85%"
        overflowX="auto" 
        css={{
          '&::-webkit-scrollbar': {
            display: 'none', 
          },
          scrollbarWidth: 'none', 
        }}
      >
        <Flex
          justifyContent="space-between"
          gap="2"
          w="max-content" 
        >
          {
            selected&&state.homePageMovies.popularMovie?.map((ele) => (
              <MovieCard {...ele} key={ele.id} />
            ))
          }
          {
            !selected&&state.homePageMovies.popularTv?.map((ele) => (
              <MovieCard {...ele} key={ele.id} />
            ))
          }
        </Flex>
      </Box>
    </Box>
  );
};

