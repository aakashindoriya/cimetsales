import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import ToggleButtons from './ToggleButtons';
import { GetPopularMovies } from '../actions/appAction';
import { MovieCard } from './MovieCard';
import { movieContext } from '../context/MovieContext';

export const PopularMovies = () => {
  const { state, dispatch } = useContext(movieContext);
  const [selected, setSelected] = useState('movie');
  useEffect(() => {
    console.log(selected)
    GetPopularMovies(dispatch, selected);
  }, [dispatch,selected]);

  return (
    <Box w="100%">
      {/* Heading and Toggle Buttons */}
      <Flex m="auto" justifyContent="space-between" maxW="85%" mb="5" mt="5">
        <Heading>What's Popular</Heading>
        <ToggleButtons selected={selected} setSelected={setSelected} />
      </Flex>

      {/* Movie Cards Container */}
      <Box
        m="auto"
        maxW="85%"
        overflowX="auto" // Allow horizontal scroll
        css={{
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Webkit browsers
          },
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
        }}
      >
        <Flex
          justifyContent="space-between"
          gap="2"
          w="max-content" // Allows flex items to grow beyond the container width
        >
          {
            state.popular?.data?.map((ele) => (
              <MovieCard {...ele} key={ele.id} />
            ))
          }
        </Flex>
      </Box>
    </Box>
  );
};

