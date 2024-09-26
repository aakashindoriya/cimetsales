import {
    Box,
    Image,
    Badge,
    Text,
    Flex,
    CircularProgress,
    CircularProgressLabel,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  
  export const MovieCard = ({id, name,title, poster_path, release_date, vote_average,first_air_date }) => {
    const navigate=useNavigate()
    return (
      <Box
        w="250px"
        borderWidth="1px"
        borderRadius="20"
        overflow="hidden"
        bg="gray.900"
        color="white"
        shadow="lg"
        position="relative"
        _hover={{cursor:"pointer"}}
        onClick={()=>navigate(`/movie/${id}-${first_air_date?"tv":"movie"}`)}
      >
        <Image src={poster_path} alt={`${name} poster`} minW={"100%"} h="300"/>
  
        <Box p="4">
          <Flex align="center" justify="space-between" mb="2">
            <Box>
              <CircularProgress
                value={vote_average * 10}
                size="50px"
                color={vote_average > 7 ? 'green.400' : 'orange.400'}
              >
                <CircularProgressLabel>{vote_average}</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
  
          <Text mt="2" fontWeight="bold" fontSize="lg" isTruncated>
            {name||title}
          </Text>
  
          <Text fontSize="sm" color="gray.400">
            {first_air_date||release_date}
          </Text>
        </Box>
      </Box>
    );
  };
  