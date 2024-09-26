import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../actions/appAction";
import { movieContext } from "../context/MovieContext";

export const SingleMovie = () => {
    const {state,dispatch}=useContext(movieContext)

    const {id}=useParams()
useEffect(()=>{
    let [mid,type]=id.split("-")
getSingleMovie(dispatch,type,mid)
},[])
  let {tagline,poster_path,title,overview,vote_average,status,release_date,original_name,last_air_date}=state.singleMovie.data
  return (
    <Box display="grid" w="100%" minH="80vh" >

      <Flex w="80%" m="auto" gap="10"  justify={"center"} >
        <Box w="400px"
        borderWidth="1px"
        borderRadius="20"
        overflow="hidden"
        bg="gray.900"
        color="white"
        shadow="lg">
          <Image maxW="100%" src={poster_path}/>
        </Box>
        <Box w="600px" display="flex" flexDirection="column" gap={"3"} p="4" pt="8">
          <Heading fontSize={"larger"}>{title || original_name}</Heading>
          <Text fontSize={"large"}>{tagline}</Text>
          <Flex gap="2" p="1" alignItems={"center"}>
            <CircularProgress
              value={vote_average * 10}
              size="50px"
              color={vote_average > 7 ? "green.400" : "orange.400"}
            >
              <CircularProgressLabel>{vote_average}</CircularProgressLabel>
            </CircularProgress>
            <Button colorScheme="teal" variant="outline">Watch Trailer</Button>
          </Flex>
          <Text fontSize={"larger"}>Overview</Text>
          <Text fontSize={"large"}>
            {overview}
          </Text>
          <Flex gap="2">
            <Flex gap="2">
            <Heading fontSize={"larger"}>Status: </Heading><Text fontSize={"large"} opacity={"80%"}>{status}</Text>
            <Divider h="1px" w="100%" orientation='horizontal' />
            </Flex>
            <Flex gap="2">
            <Heading fontSize={"larger"}>Release Date : </Heading><Text fontSize={"large"} opacity={"80%"}>{release_date||last_air_date}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
