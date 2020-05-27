import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

// Within the ({}) are the Props needed
const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <nav class='navbar navbar-light bg-light'>
        <span class='navbar-brand mb-0 h1'>Bonus Pal</span>
        <p>List of Movies: {movies.length} </p>
      </nav>
    </div>
  );
};

export default Nav;
