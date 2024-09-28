import { Image, SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

export const MovieGrid = ({ data, isLoading }) => {
  const skeletonArray = Array(10).fill(0);

  return (
    <>
      <SimpleGrid w="85%" margin="auto" columns={[1, 2, 3, 4, 5]} spacing="6" p="4">
        {
          data?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        }
      </SimpleGrid>
      <SimpleGrid w="85%" margin="auto" columns={[1, 2, 3, 4, 5]} spacing="6" p="4">
        {
          isLoading && skeletonArray.map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))
        }
      </SimpleGrid>
      {
        !isLoading && data.length === 0 && (
          <Image
            src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-486.jpg?w=996"
            alt="No data"
          />
        )
      }
    </>
  );
};
