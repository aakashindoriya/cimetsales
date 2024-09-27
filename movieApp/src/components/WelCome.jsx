import { Box, Heading, Input, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  let [text,setText]=useState("")
  let navigate=useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    const encodedURL = encodeURI(text)
    navigate(`/search?query=${encodedURL}`)
              setText("")
  }
  return (
    <Box
      bgImage="url('https://image.tmdb.org/t/p/original/wWba3TaojhK7NdycRhoQpsG0FaH.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      backdropBlur={"2"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.8)"
      >

      </Box>
      <VStack spacing={6} zIndex="1" textAlign="center" color="white" >
        <Heading as="h1" fontSize="5xl" fontWeight="bold">
          Welcome.
        </Heading>
        <Text fontSize="lg">
          Millions of movies, TV shows, and people to discover. Explore now.
        </Text>
        <form onSubmit={handleSubmit}>
        <Box display="flex" maxW="600px" w="100%">
          <Input
            placeholder="Search for a movie or TV show..."
            size="lg"
            borderRightRadius="0"
            bg="white"
            color="black"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
          <Button
            size="lg"
            borderLeftRadius="0"
            bgGradient="linear(to-r, orange.400, pink.400)"
            _hover={{ bgGradient: "linear(to-r, orange.500, pink.500)" }}
            type="submit"
          >
            Search
          </Button>
        </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default Welcome;
