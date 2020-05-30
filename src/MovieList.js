import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  // We created the context in MovieContext
  // Now we want to USE the context
  const [movie, setMovie] = useContext(MovieContext);

  return (
    <div>
      {movie.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          image={movie.image}
          affLink={movie.affLink}
        />
      ))}
    </div>
  );
};

export default MovieList;
