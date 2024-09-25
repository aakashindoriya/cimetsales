import { SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";

export const MovieGrid = () => {
    const movies = [
      {
        title: 'The Crow',
        image: 'https://image.tmdb.org/t/p/original/rj3jBAZwPiOgkwAy1205MAgLahj.jpg',
        releaseDate: 'Aug 21, 2024',
        rating: 5.4,
        genres: ['Action', 'Fantasy'],
      },
      {
        title: 'Deadpool & Wolverine',
        image: 'https://example.com/deadpool-wolverine-poster.jpg',
        releaseDate: 'Jul 24, 2024',
        rating: 7.7,
        genres: ['Action', 'Comedy'],
      },
      // Add more movie objects here
    ];
  
    return (
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="6" p="4">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            image={movie.image}
            releaseDate={movie.releaseDate}
            rating={movie.rating}
            genres={movie.genres}
          />
        ))}
      </SimpleGrid>
    );
  };
  
