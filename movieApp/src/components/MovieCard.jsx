import {
    Box,
    Image,
    Badge,
    Text,
    Flex,
    CircularProgress,
    CircularProgressLabel,
  } from '@chakra-ui/react';
  
  export const MovieCard = ({ name, poster_path, release_date, vote_average,first_air_date }) => {
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
      >
        <Image src={poster_path} alt={`${name} poster`} minW={"100%"} h="300px"/>
  
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
  
            <Flex gap="2" wrap="wrap">
              {/* {genres.map((genre, idx) => (
                <Badge key={idx} borderRadius="full" px="2" colorScheme="red">
                  {genre}
                </Badge>
              ))} */}
            </Flex>
          </Flex>
  
          <Text mt="2" fontWeight="bold" fontSize="lg" isTruncated>
            {name}
          </Text>
  
          <Text fontSize="sm" color="gray.400">
            {first_air_date||release_date}
          </Text>
        </Box>
      </Box>
    );
  };
  