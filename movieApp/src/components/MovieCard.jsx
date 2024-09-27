import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({
  id,
  name,
  title,
  poster_path,
  release_date,
  vote_average,
  first_air_date,
}) => {
  const navigate = useNavigate();
  let imageUrl=poster_path.includes("originalundefined")||poster_path.includes("null")?"https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?t=st=1727419685~exp=1727423285~hmac=4e368b4c0d94e2b76cad755cccf1de44f985f1b849d7c4be6be3ccf17e769c84&w=1380":poster_path

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
      _hover={{ cursor: "pointer" }}
      onClick={() =>
        navigate(`/movie/${id}-${first_air_date ? "tv" : "movie"}`)
      }
    >
      <Image
        src={imageUrl }
        alt={`${name} poster`}
        minW={"100%"}
        h="300"
      />

      <Box p="4">
        <Flex align="center" justify="space-between" mb="2">
          <Box>
            <CircularProgress
              value={vote_average * 10}
              size="50px"
              color={vote_average > 7 ? "green.400" : "orange.400"}
            >
              <CircularProgressLabel>{vote_average}</CircularProgressLabel>
            </CircularProgress>
          </Box>
        </Flex>

        <Text mt="2" fontWeight="bold" fontSize="lg" isTruncated>
          {name || title}
        </Text>

        <Text fontSize="sm" color="gray.400">
          {first_air_date || release_date}
        </Text>
      </Box>
    </Box>
  );
};
