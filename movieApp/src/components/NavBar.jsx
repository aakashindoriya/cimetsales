import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = ({pathname}) => {
  return (
    <Flex
      w="100%"
      p="2"
      alignItems="center"
      justifyContent="space-around"
      borderBottom={"2px solid teal"}
      h="70"
      bg="teal.100"
      position="sticky"
      top="0%"
      zIndex="20"
    >
      <Box
      width="20%"
      
      ><NavLink to="/">LOGO</NavLink></Box>
      <Box
      w="40%"
      border={"1px solid teal"}
      borderRadius={"10"}
      >
        <Input bg="teal.50" />
      </Box>
      <Box w="17%" display="flex" justifyContent="space-between">
        <Button colorScheme={pathname=="/movie"?"pink":'teal'} variant='outline' >
        <NavLink  to="/movie" >Movies</NavLink>
        </Button>
        <Button colorScheme={pathname=="/tv"?"pink":'teal'} variant='outline'>

        <NavLink to="/tv">Tv Shows</NavLink>
        </Button>
      </Box>
    </Flex>
  );
};
