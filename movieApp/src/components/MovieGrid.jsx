import { SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";

export const MovieGrid = ({data}) => {

    return (
      <SimpleGrid w="85%" margin="auto" columns={[1, 2, 3, 4, 5]} spacing="6" p="4">
        {data.map((movie, index) => (
          <MovieCard
            key={movie.id}
            {...movie}
          />
        ))}
      </SimpleGrid>
    );
  };
  
