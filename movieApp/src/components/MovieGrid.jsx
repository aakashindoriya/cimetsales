import { Image, SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";

export const MovieGrid = ({data}) => {

    return (
      <>
      <SimpleGrid w="85%" margin="auto" columns={[1, 2, 3, 4, 5]} spacing="6" p="4">
        { 
        data.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
          />
        ))}
      </SimpleGrid>
      {
        data.length==0&&<Image  src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-486.jpg?w=996" />
      }
      </>

    );
  };
  
